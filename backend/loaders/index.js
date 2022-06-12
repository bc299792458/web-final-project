import express from "express";
import api from "./../api/index.js";
import config from "./../config/index.js";
import databaseLoader from "./database.js";
import { redisLoader } from "./redis.js";

export default async (app) => {
    await databaseLoader();
    console.log('connect database');
    await redisLoader();
    console.log('connect redis');
    /**
   * Health Check endpoints
   */
    app.get("/status", (req, res) => {
        res.json({'message': 'ok'});
        res.status(200).end();
    });
    app.head("/status", (req, res) => {
        res.status(200).end();
    });

    app.enable("trust proxy");

    // Load static file
    app.use(express.static('public'));
    
    // Load API routes
    app.use(api());

}