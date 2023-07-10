import { User } from './users.model'

export const findLastUserId = async () => {
  const lastUser = await User.findOne({}, { userId: 1, _id: 0 })
    .sort({ created_at: -1 })
    .lean()

  return lastUser?.userId
}

export const createNewUserId = async () => {
  const lastUserId = await findLastUserId()
  return (parseInt(lastUserId || '0') + 1).toString().padStart(4, '0')
}
