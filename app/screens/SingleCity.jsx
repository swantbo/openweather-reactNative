import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import WeatherCard from '../components/WeatherCard';
import { colors } from '../constants/color';


export default function SingleCity({route}) {
  const {city} = route.params // home screen-dan migebuli params
  const coords = city.data.coord
  const [daily, setDaily] = useState([]) // daily weather

  
  useEffect(() => {
    // console.log(city.data)
    // exclude=which I do not want to use -----
    // added units=metric in api request for show temperature in celsius
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=${"minutely,hourly"}&units=metric&appid=e35f15c48e2145acd23d3d77f25181eb`)
      .then(res => {
        console.log(res.data.daily)
        setDaily(res.data.daily)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])


  return (
    <View style={styles.singleCity}>
      <Text style={styles.title}>{city.name.toUpperCase()}</Text>
      <FlatList 
        data={daily}
        renderItem={({item, index}) => {
          return <TouchableOpacity key={index}>
            <WeatherCard weatherData={item} />
          </TouchableOpacity>
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  singleCity: {
    flex: 1,
    backgroundColor: colors.bgOrange,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
    color: "white",
    margin: 10,
    marginBottom: 20,
    borderBottomColor: "white",
    borderBottomWidth: 3,
    borderRadius: 10,
  },
});
