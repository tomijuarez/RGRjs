import dotend from 'dotenv';
import express from 'express';
import {MongoClient} from 'mongodb';
import Schema from './data/schema';
import GraphQLHTTP from 'express-graphql';

//Get environment configuration.
dotend.config();
const DB_URL = `${process.env.MONGO_URL}/${process.env.MONGO_DB}`;
const DB_NAME = `${process.env.MONGO_DB}`;

//Get express instance.
const app = express();
app.use(express.static('public'));

let database;
//Get database instance.
MongoClient.connect(DB_URL, (error, connection) => {
    if (error)
        throw error;

    database = connection.db(DB_NAME);

    //GraphQLEndpoint
    app.use('/graphql', GraphQLHTTP({
        schema: Schema(database),
        graphiql: true
    }));

    app.listen(3000, () => console.log("Listening on port 3000."));
});