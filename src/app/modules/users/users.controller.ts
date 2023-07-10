import { Request, Response } from 'express'
import usersService from './users.service'

const createNewUser = async (req: Request, res: Response) => {
  try {
    const { user } = await req.body
    const result = await usersService.createUser(user)
    res.status(200).json({
      success: true,
      message: 'User create successfully!',
      body: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to create user!',
    })
  }
}

export default {
  createNewUser,
}
