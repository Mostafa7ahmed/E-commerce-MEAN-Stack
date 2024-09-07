import express, { Request, Response } from 'express';
const app: express.Application = express();
import dotenv from 'dotenv';
import dbConnection from './config/db';
import CategoriesRouter from './routes/CategoroesRouter';
dotenv.config()
dbConnection()
app.use(express.json())
app.use('/api/v1/categories' ,CategoriesRouter )
 
app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}/`);
})