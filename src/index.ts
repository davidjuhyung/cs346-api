// INITIAL SET-UP
require('dotenv').config({
	path: '.env',
});

// MONGO DB
import mongoose from 'mongoose';

mongoose
	.connect(process.env.MONGO_DB_URI as string)
	.then(() => console.log('💻 MongoDB Connected'))
	.catch((err) => console.error(err));

// EXPRESS SERVER SET-UP
import express from 'express';
import contentApiRouter from './api/content';

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// API ROUTES
server.use('/api/contents', contentApiRouter);

server.listen(process.env.PORT || 3001, () => {
	console.log('listening on ', process.env.PORT || 3001);
});
