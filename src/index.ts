import dotenv from 'dotenv'
import express, { Request, Response } from 'express'
import weatherRouter from './routes'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use('/api/weather', weatherRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('🌦️ Weather Proxy API is running...')
})

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`)
})
