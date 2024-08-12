
// all the imports here
import mongoose from 'mongoose'; // for the database connect
import app from './app'; // express application
import config from './app/config'; // all the env file
import { Server } from 'http'; // server response
import { Request, Response } from 'express'; // type imports from express


// test the route for the application
app.get('/', (req: Request, res: Response) => {
    res.send('welcome to the server of sport ecom');
});

// a server variable to use it further
let server: Server;

// the main function for the running the application and connect it to the data base
const main = async () => {
    try {
        // connect the application to the database
        await mongoose.connect(config.databaseUrl as string);

        // running the application
        server = app.listen(config.port, () => {
            console.log(`Sport Ecom Backend app is listening on port ${config.port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

// call the main function to running the application
main();

