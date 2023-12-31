import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
const port = process.env["PORT"] ?? 3000;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

app.get('/', function (_, res) {
  res.send('Hello World!');
});