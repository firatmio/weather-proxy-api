import { Request, Response, Router } from 'express'
import { getWeather } from './weatherService'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  const city = req.query.city as string

  if (!city) {
    return res.status(400).json({ error: 'City is required!' })
  }

  try {
    const weatherData = await getWeather(city)
    res.json(weatherData)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data.' })
  }
})

export default router
