import express from 'express';
import { quotesAll, quotesPost } from '../Controllers/quotes.controller.js';
const quotes = express.Router();



quotes.get('/quotes', quotesAll );
quotes.post('/quote', quotesPost);



export default quotes;
