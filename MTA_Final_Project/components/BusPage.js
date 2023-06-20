import React from 'react';
import { TouchableOpacity, Text, View, Linking } from 'react-native';

const HomeScreen = () => {
  const handleButtonPress = () => {
    Linking.openURL('https://bustime.mta.info/');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={{ color: 'black', fontSize: 70, fontWeight: 'bold', textAlign: 'center'}}>
        This page is under construction! In the meantime, check out the official MTA bus page here:
      </Text>
      <TouchableOpacity onPress={handleButtonPress}>
        <Text style={{ color: 'blue', fontSize: 20 }}>Go to Bus Page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
