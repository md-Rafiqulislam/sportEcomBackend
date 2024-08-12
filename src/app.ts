
// all the imports here
import express, { Application } from 'express';
import router from './app/routes';
import notFound from './app/middlewares/notFound';
import cors from 'cors';

// creating the express app
const app: Application = express()


// all the parsers
app.use(express.json()) // json parser
app.use(cors()); // cross origin permission

// application routes
app.use('/api/', router);

// not found route
app.use(notFound);

// export the express application
export default app;