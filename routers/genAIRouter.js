import express from "express";
import GenAIController from "../controllers/genAIController.js";

class GenAIRouter {
    constructor() {
        this.router = express.Router();
        this.genAIController = new GenAIController();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get("/", (req, res) => {
            this.genAIController.handleGeneration(req, res);
        });
    }

    getRouter() {
        return this.router;
    }
}

export default GenAIRouter;