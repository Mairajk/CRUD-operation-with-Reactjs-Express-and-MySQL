import path from 'path'
import cors from 'cors';
import express from "express";

import APIs from './Server/Routes/APIs.mjs'


const PORT = process.env.port || 5001;
const app = express()
app.use(cors())
app.use(express.json())

app.use('/', APIs)


const __dirname = path.resolve();

app.use("/", express.static(path.join(__dirname, "./web/build")));
app.use("*", express.static(path.join(__dirname, "./web/build/index.html")));


app.listen(PORT, () => {
    console.log(` Example port is running on ${PORT} `);
});