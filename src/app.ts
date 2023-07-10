import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import router from './app/modules/users/users.route'
// import usersService from './app/modules/users/users.service'

const app: Application = express()

app.use(cors())

// Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application Route

app.use('/admin/', router)

app.get('/', async (req: Request, res: Response) => {
  // await usersService.createUser()
  res.send('hello world')
})

export default app
