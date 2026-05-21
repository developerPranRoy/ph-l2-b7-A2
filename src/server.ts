import app from './app';
import express from "express";
import config from "./config/config";
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));


const main = () => {
    app.listen(config.port, () => {
        console.log(`Example app listening on port ${config.port}`)
    })
}
main()