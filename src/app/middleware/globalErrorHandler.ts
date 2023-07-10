import { ErrorRequestHandler } from 'express'
import { validationError } from '../../Error/validationError'
import config from '../../config'
import { IErrorInterface } from '../interfaces/errorInterface'

import { Error } from 'mongoose'
import { ApiError } from '../../Error/apiError'

export const globalErrorHandler: ErrorRequestHandler = (
  error,
  req,
  res,
  next
) => {
  let statusCode = 400
  let message = error?.message
  let errorMessage: IErrorInterface[] = []

  if (error?.name === 'ValidationError') {
    const responseError = validationError(error)
    statusCode = responseError.statusCode
    message = responseError.message
    errorMessage = responseError.errorMessage
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode
    message = error?.message
    errorMessage = error?.message ? [{ path: '', message: error?.message }] : []
  } else if (error instanceof Error) {
    message = error?.message
    errorMessage = error?.message ? [{ path: '', message: error?.message }] : []
  }
  res.status(statusCode).json({
    success: false,
    message,
    errorMessage,
    stack: config.env !== 'production' ? error?.stack : 'undefined',
  })
  next()
}
