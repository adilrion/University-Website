import { User } from './users.model'

export const findLastUserId = async () => {
  const lastUser = await User.findOne({}, { userId: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()

  return lastUser?.userId
}

export const createNewUserId = async () => {
  const newUserId = (await findLastUserId()) || (0).toString().padStart(4, '0')
  return newUserId
}
