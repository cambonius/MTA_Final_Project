import React from 'react';
import { TouchableOpacity, Text, View, Linking, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  function buttonFunction(buttonColor, text, letterColor, linkUrl) {
    const handleButtonPress = () => {
      Linking.openURL(linkUrl);
    };
    return (
      <View>
        <TouchableOpacity
          style={{
            width: 100,
            height: 100,
            backgroundColor: buttonColor,
            borderRadius: 50,
            padding: 10,
            margin: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={handleButtonPress}
        >
          <Text style={{ color: letterColor, fontSize: 70, fontWeight: 'bold', marginTop: -12.5 }}>{text}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView horizontal={true}>
      <View style={{ flexDirection: 'row' }}>
        {/*First column*/}
        <View>
          {buttonFunction('rgba(17,17,125,255)', 'A', 'white', 'https://new.mta.info/maps/subway-line-maps/a-line')}
          {buttonFunction('rgba(17,17,125,255)', 'C', 'white', 'https://new.mta.info/maps/subway-line-maps/c-line')}
          {buttonFunction('rgba(17,17,125,255)', 'E', 'white', 'https://new.mta.info/maps/subway-line-maps/e-line')}
        </View>
        {/*Second column*/}
        <View>
          {buttonFunction('rgba(255,99,25,1)', 'B', 'white', 'https://new.mta.info/maps/subway-line-maps/b-line')}
          {buttonFunction('rgba(255,99,25,1)', 'D', 'white', 'https://new.mta.info/maps/subway-line-maps/d-line')}
          {buttonFunction('rgba(255,99,25,1)', 'F', 'white', 'https://new.mta.info/maps/subway-line-maps/f-line')}
          {buttonFunction('rgba(255,99,25,1)', 'M', 'white', 'https://new.mta.info/maps/subway-line-maps/m-line')}
        </View>
        {/*Third column*/}
        <View>
          {buttonFunction('rgba(108,190,69,1)', 'G', 'white', 'https://new.mta.info/maps/subway-line-maps/g-line')}
        </View>
        {/*Fourth column*/}
        <View>
          {buttonFunction('rgba(153,102,51,1)', 'J', 'white', 'https://new.mta.info/maps/subway-line-maps/j-line')}
          {buttonFunction('rgba(153,102,51,1)', 'Z', 'white', 'https://new.mta.info/maps/subway-line-maps/z-line')}
        </View>
           {/*Fifth column*/}
           <View>
          {buttonFunction('rgba(167,169,172,1)', 'L', 'white', 'https://new.mta.info/maps/subway-line-maps/l-line')}
        </View>
        {/*Sixth column*/}
        <View>
          {buttonFunction('rgba(252,204,10,1)', 'N', 'black', 'https://new.mta.info/maps/subway-line-maps/n-line')}
          {buttonFunction('rgba(252,204,10,1)', 'Q', 'black', 'https://new.mta.info/maps/subway-line-maps/q-line')}
          {buttonFunction('rgba(252,204,10,1)', 'R', 'black', 'https://new.mta.info/maps/subway-line-maps/r-line')}
          {buttonFunction('rgba(252,204,10,1)', 'W', 'black', 'https://new.mta.info/maps/subway-line-maps/w-line')}
        </View>
        {/*Seventh column*/}
        <View>
          {buttonFunction('rgba(128,129,131,1)', 'S', 'white', 'https://new.mta.info/maps/subway-line-maps/s-line')}
        </View>
        {/*Eighth column*/}
        <View>
          {buttonFunction('rgba(238,54,46,1)', '1', 'white', 'https://new.mta.info/maps/subway-line-maps/1-line')}
          {buttonFunction('rgba(238,54,46,1)', '2', 'white', 'https://new.mta.info/maps/subway-line-maps/2-line')}
          {buttonFunction('rgba(238,54,46,1)', '3', 'white', 'https://new.mta.info/maps/subway-line-maps/3-line')}
        </View>
        {/*Ninth column*/}
        <View>
          {buttonFunction('rgba(0,147,60,1)', '4', 'white', 'https://new.mta.info/maps/subway-line-maps/4-line')}
          {buttonFunction('rgba(0,147,60,1)', '5', 'white', 'https://new.mta.info/maps/subway-line-maps/5-line')}
          {buttonFunction('rgba(0,147,60,1)', '6', 'white', 'https://new.mta.info/maps/subway-line-maps/6-line')}
        </View>
         {/*Tenth column*/}
         <View>
          {buttonFunction('rgba(185,51,173,1)', '7', 'white', 'https://new.mta.info/maps/subway-line-maps/7-line')}
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
