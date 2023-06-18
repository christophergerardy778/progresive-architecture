import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import { container } from '../container';
import { sharedTypes } from '../src/shared/infrastructure/di/SharedTypes';
import { Connection } from '../src/shared/infrastructure/Connection';
import { authRouter } from './auth/router';

const app = express();
const connection = container.get < Connection >(sharedTypes.connection);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/auth', authRouter);

app.listen(process.env.PORT, async () => {
  await connection.open();
  console.log('app is running 🚀');
});
