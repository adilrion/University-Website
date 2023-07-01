import cors from 'cors'
import express, { Application, Request, Response } from 'express'

const app: Application = express()

app.use(cors())

// Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Respond with "hello world" when a GET request is made to the homepage
app.get('/', (req: Request, res: Response) => {
  res.send('hello world')
})

export default app
