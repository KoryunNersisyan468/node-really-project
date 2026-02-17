import express from 'express';
import admin from './admin.api';
import auth from './auth.api';

const app = express();

app.use('/admin', admin);
app.use('/auth', auth);

export default app;
