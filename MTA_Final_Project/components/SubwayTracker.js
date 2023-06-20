import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const HomeScreen = () => {
  const apiKey = '0VlUhA1XW871Lrm1n2Zhc7yE6bPhMdZ0apSjhILE';
  const feedUrl = `https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-realtime%2Fsubway/feed.json?key=${apiKey}`;

  const [trainData, setTrainData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(feedUrl)
      .then(response => {
        const trainData = response.data;
        processTrainData(trainData);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching subway data:', error);
        setError('An error occurred while fetching subway data.');
        setIsLoading(false);
      });
  }, []);

  const processTrainData = (trainData) => {
    try {
      const processedData = trainData.entity.map(entity => {
        const train = entity.vehicle;
        const trainId = train.vehicle.label;
        const trainStatus = train.currentStatus;
        const trainPosition = train.position;

        return {
          trainId,
          trainStatus,
          trainPosition,
        };
      });

      setTrainData(processedData);
    } catch (error) {
      console.error('Error processing train data:', error);
      setError('An error occurred while processing train data.');
    }
  };

  return (
    <View>
      <Text>Subway Train Tracker</Text>
      {isLoading ? (
        <Text>Loading train data...</Text>
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        trainData.map(train => (
          <View key={train.trainId}>
            <Text>Train {train.trainId}</Text>
            <Text>Status: {train.trainStatus}</Text>
            <Text>Position: Latitude {train.trainPosition.latitude}, Longitude {train.trainPosition.longitude}</Text>
            <Text>---------------------------------------</Text>
          </View>
        ))
      )}
    </View>
  );
};

export default HomeScreen;
