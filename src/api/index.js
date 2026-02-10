import express from 'express';
import admin from './admin.api';

const app = express();

app.use('/admin', admin);

export default app;