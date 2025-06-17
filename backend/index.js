import express from 'express';
import cors from 'cors';
import UserRoute from './routes/UserRoute.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});



//https://www.youtube.com/watch?v=es9_6RFR7wk menit 46:41