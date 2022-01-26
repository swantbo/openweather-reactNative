import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { colors } from '../constants/color';


export default function WeatherCard({weatherData}) {
  // console.log(item.weather[0])
  const weather = weatherData.weather[0] // weather main params


  return (
    <View style={styles.card}>
      <View style={styles.weather}>
        <Text style={styles.main}>{weather.main}</Text>
        <Text style={styles.description}>{weather.description}</Text>
      </View>
      <View style={styles.cardCenter}>
        <Image style={styles.weatherIcon}   
            source={{
              uri: `https://openweathermap.org/img/wn/${weather.icon}@2x.png`
            }}
        />
        <Text style={styles.clouds}>Cloudy: {weatherData.clouds}%</Text>
      </View>
      <Text style={styles.temp}>{weatherData.temp.day}°</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 70,
    backgroundColor: "white",
    margin: 10,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    // shadow style
    shadowColor: "black",
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 4,
    shadowRadius: 5,
  },
  main: {
    color: colors.niceBlue,
    fontWeight: "500",
  },
  description: {
    color: "grey",
    fontSize: 10,
  },
  cardCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  weatherIcon: {
    height: 30,
    width: 30,
  },  
  clouds: {
    fontSize: 10,
    color: colors.niceBlue,
  },
  temp: {
    fontWeight: "500",
    color: colors.niceBlue,
  }
});
