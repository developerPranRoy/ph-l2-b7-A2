import app from './app';
import express from "express";
import config from "./config/config";
import { initDB } from './db';
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));


const main = () => {
    initDB()
    app.listen(config.port, () => {
        console.log(`App listening on port ${config.port}`)
    })
}
main()