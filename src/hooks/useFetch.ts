import axios from 'axios'
import { useEffect, useState } from 'react'

export function useFetch(city: string) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const name = city
    function getWeather(lat: number, lon: number) {
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather`, {
          params: {
            lat,
            lon,
            appid: '696740dc709f9bcf2868ca16f259ccdc',
            lang: 'pt_br',
            units: 'metric',
            q: name,
          },
        })
        .then((response) => setData(response.data))
        .catch((error) => setError(error))
    }

    navigator.geolocation.getCurrentPosition((position) =>
      getWeather(position.coords.latitude, position.coords.longitude),
    )
  }, [setData, city])

  return { data, error }
}
