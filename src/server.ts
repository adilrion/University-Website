import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function Main() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('🟢 Database Connection Successfully!')

    app.listen(config.port, () => {
      console.log('Application Listening port :', config.port)
    })
  } catch (error) {
    console.log('🔴 Error: ', error)
  }
}

Main()
