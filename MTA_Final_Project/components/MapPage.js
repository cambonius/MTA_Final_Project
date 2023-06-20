import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        maximumZoomScale={3}
        minimumZoomScale={1}
        bouncesZoom={true}
      >
        <ScrollView
          contentContainerStyle={styles.innerScrollContainer}
          horizontal={true}
        >
          <Image
            source={{uri:'https://upload.wikimedia.org/wikipedia/commons/2/23/Official_New_York_City_Subway_Map_2013_vc.jpg'}}
            style={styles.image}
            resizeMode="contain"
          />
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  innerScrollContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 1419,
    height: 1728,
    aspectRatio: 1,
  },
});

export default HomeScreen;
