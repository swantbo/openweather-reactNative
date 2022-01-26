import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import {API_KEY} from "@env"

const AppContext = createContext()

export const AppProider = ({children}) => {
  const [cities, setCities] = useState([
    {id:1, name:"tbilisi", data:{}},
    {id:2, name:"kutaisi", data:{}},
    {id:3, name:"batumi", data:{}},
  ])
  
  useEffect(() => {  // get data by each city
    cities.map(city => {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${API_KEY}`)
        .then(res => {
          // // console.log(res.data)
          city.data = res.data
          setCities([...cities])
        })
        .catch(err => {
          console.log(err)
        })
    })
    // console.log(cities)
  }, [])

  return (
    <AppContext.Provider value={{
      cities
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}