/* eslint-disable no-console */
import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './config';

let server: Server;

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
process.on('uncaughtException', error => {
  console.log('🔴 Uncaught Exception is detected');
  process.exit(1);
});

async function startServer() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('🟢 Database Connection Successful!');

    server = app.listen(config.port, () => {
      console.log(`🟢 Application Listening on Port: ${config.port}`);
    });
  } catch (error) {
    console.log('🔴 Error:', error);
    process.exit(1);
  }
}

function stopServer() {
  if (server) {
    server.close(() => {
      console.log('🔴 Server Closed');
      process.exit(0);
    });
  }
}

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
process.on('unhandledRejection', error => {
  console.log('🔴 Unhandled Rejection! Closing the server...');
  stopServer();
});

process.on('SIGTERM', () => {
  console.log('🔴 SIGTERM signal received. Closing the server...');
  stopServer();
});

startServer();
