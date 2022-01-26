import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import {} from "@expo/vector-icons"
import {useGlobalContext} from "../context"
import { colors } from '../constants/color';

// for home page
const CityCard = ({city}) => {
  const {cities} = useGlobalContext()
  const [weather, setWeather] = useState({})

  useEffect(() => {
    // console.log(city)
    // current weather
    city.data.weather && setWeather(city.data.weather[0])
  }, [cities])  // rerender on every cities change
  // console.log(city, weather)

  return (
    <View style={styles.cityCard}>
      {/* {console.log(city.name, weather)} */}
      <Text style={styles.cityName}>{city.name.toUpperCase()}</Text>
      <View style={styles.weather}>
        <Text style={styles.main}>{weather.main}</Text>
        <Text style={styles.description}>{weather.description}</Text>
      </View>
      <Image style={styles.weatherIcon}   
          source={{
            uri: `https://openweathermap.org/img/wn/${weather.icon}@2x.png`
          }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cityCard: {
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
  cityName: {
    color: colors.niceBlue,
    fontSize: 18,
    fontWeight: "600"
  },  
  main: {
    fontWeight: "500",
    color: colors.niceBlue,
  },
  description: {
    color: "grey",
    fontSize: 10,
    color: "grey",
  },
  weatherIcon: {
    height: 30,
    width: 30,
  }
})


export default CityCard;
