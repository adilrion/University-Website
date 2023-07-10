import mongoose from 'mongoose'
import { IErrorGenericResponseInterface } from '../app/interfaces/errorGenericResponseInterface'
import { IErrorInterface } from '../app/interfaces/errorInterface'

export const validationError = (
  err: mongoose.Error.ValidationError
): IErrorGenericResponseInterface => {
  const errors: IErrorInterface[] = Object.values(err.errors).map(
    (el: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: el.path,
        message: el.message,
      }
    }
  )

  return {
    statusCode: 400,
    message: 'Validation Error!',
    errorMessage: errors,
  }
}
