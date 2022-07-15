import React, { createContext, useContext, useState, useEffect } from 'react'
const APIContext = createContext({})

export const ApiContextProvider = ({ children }) => {
  const [weather, setData] = useState(null)

  const locationRandom = [[-17.1295, 122.0437], [42.6507, -59.6582], [9.1890, -124.8345], [-67.4526, -90.7116], [0.6125, 70.1745], [38.2560, 6.1013], [-78.6079, -75.7765], [53.5687, -155.6250]]

  const getCurrentWeatherByLocation = (lat, lon) => {
    fetch(`${process.env.REACT_APP_API}onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
    .then((response) => response.json())
    .then((weather) => {
      setData(weather)
    })
    .catch((e) => console.log)
  }

  const onSuccess = (position) => {
    getCurrentWeatherByLocation(position.coords.latitude, position.coords.longitude)
  }

  const onError = (err) => {
    let country = locationRandom[Math.floor(Math.random() * locationRandom.length)]
    getCurrentWeatherByLocation(country[0], country[1])
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError)
  }, [])
  
  return (
    <APIContext.Provider value={weather}>
      {children}
    </APIContext.Provider>
  ) 
}

export const useAPI = () => {
  const context = useContext(APIContext)
  if (context === undefined) {
    throw new Error('useAPI must be used within a ApiContextProvider')
  }
  return context
}