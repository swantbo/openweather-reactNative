import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import CityCard from '../components/CityCard';
import { colors } from '../constants/color';
import {useGlobalContext} from "../context"


const Home = ({navigation}) => {
  const {cities} = useGlobalContext()

  const showSingleCity = (city) => {  // move on 7 days weather of city's screen
    navigation.navigate("SingleCity", {city})
  }

  return <View style={styles.homePage}>
    <Text style={styles.title}>OPENWEATHER CITIES</Text>
    <FlatList 
      data={cities}
      renderItem={({item}) => {
        // console.log(item)
        return <TouchableOpacity onPress={() => showSingleCity(item)}>
          <CityCard key={item.name} city={item} />
        </TouchableOpacity>
      }}
      // keyExtractor={(item) => item.id}
    />
  </View>;
};

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    backgroundColor: colors.bgOrange
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    margin: 10,
    marginBottom: 20,
    borderBottomColor: "white",
    borderBottomWidth: 3,
    borderRadius: 10,
  }
})


export default Home;
