import { Model } from 'mongoose'

export type IUser = {
  userId: string
  firstName: string
  lastName: string
  gender: string
  email: string
  password: string
  role: string
  contactNumber: string
}

export type UserModel = Model<IUser, Record<string, unknown>>
