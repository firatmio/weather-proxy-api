import axios from 'axios'

export async function getWeather(city: string) {
  const apiKey = process.env.WEATHER_API_KEY
  const baseUrl = process.env.WEATHER_API_URL

  const response = await axios.get(baseUrl!, {
    params: {
      key: apiKey,
      q: city,
      lang: 'tr',
    },
  })

  const data = response.data

  return {
    city: data.location.name,
    country: data.location.country,
    localtime: data.location.localtime,
    temperature: data.current.temp_c,
    feels_like: data.current.feelslike_c,
    condition: data.current.condition.text,
    icon: data.current.condition.icon,
    wind_kph: data.current.wind_kph,
    humidity: data.current.humidity,
  }
}
