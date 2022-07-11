import React, { createContext, useContext, useState, useEffect } from 'react'

const APIContext = createContext({})

export const ApiContextProvider = ({ children }) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      fetch(`${process.env.REACT_APP_API}onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        .then((response) => response.json())
        .then((weather) => {
          setData(weather)
          // console.log(weather);
        })
        .catch((e) => console.log)
    })
  }, [])

  return (
    <APIContext.Provider value={data}>
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