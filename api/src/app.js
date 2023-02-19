import express from 'express';
import {json} from 'express';
import morgan from 'morgan';
import router from './routes/index';
import sequelize from './database/database';
import cors from 'cors'


async function syncDatabase() {
    await sequelize.sync({ alter: true });
    console.log('Database synced successfully');
}

syncDatabase();


const app = express();


// Settings
app.set('port', 4000);

// Middlewares
app.use(morgan('dev'));
app.use(json())
app.use(cors())

//Routes
app.use(router)



export default app;