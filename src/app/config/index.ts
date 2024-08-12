
// all the imports here
import path from 'path';
import dotenv from 'dotenv';

// join the path
dotenv.config({
    path: path.join((process.cwd()), '.env')
});

// all the exports here
export default {
    port: process.env.PORT,  
    databaseUrl: process.env.DATABASE_URL,
};