import axios from 'axios'
import { useEffect, useState } from 'react'

export function useFetch(locale: string) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const name = !locale ? 'São Paulo' : locale
  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
          lat: 23.6999532,
          lon: -4657433.15,
          appid: '696740dc709f9bcf2868ca16f259ccdc',
          lang: 'pt_br',
          units: 'metric',
          q: name,
        },
      })
      .then((response) => setData(response.data))
      .catch((error) => setError(error))
  }, [setData, name])

  return { data, error }
}
