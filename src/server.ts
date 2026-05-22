import app from "./app";
import express from "express";
import { initDB } from "./db";

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

initDB().catch(console.error);

export default app;