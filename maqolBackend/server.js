import express from 'express';
import cors from 'cors';
import router from './Routes/auth.js';
import quotes from './Routes/quotes.route.js';

const app = express();
app.use(express.json());
app.use(cors());



app.use('/',router);
app.use('/user',quotes);



const port = process.env.PORT || 1233;

app.listen(port,() => console.log(`Server ishga tushdi ${port}`));
