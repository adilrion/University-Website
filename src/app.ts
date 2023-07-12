import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import { globalErrorHandler } from './app/middleware/globalErrorHandler'
import { UserRoutes } from './app/modules/users/user.route'

const app: Application = express()

app.use(cors())

// Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application Route
app.use('/admin/', UserRoutes)

// testing route
app.get('/', (req: Request, res: Response) => {
  res.send('hello world')
})

// Global Error Handler
app.use(globalErrorHandler)

export default app
