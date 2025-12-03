import express from 'express';
import "dotenv/config";
import GenAIRouter from './routers/genAIRouter.js';

class App {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 4000;
        this.genAIRouter = new GenAIRouter();

        this.initializeMiddlewares();
        this.initializeRoutes();
    }

    initializeMiddlewares() {
        this.app.use(express.json());
    }

    initializeRoutes() {
        // Testing API
        this.app.get('/', (req, res) => {
            res.json({ message: "API is working" });
        });

        this.app.use('/genAI', this.genAIRouter.getRouter());
    }

    listen() {
        this.app.listen(this.port, (error) => {
            if (error) return console.log("Connection Error \n", error);
            console.log(`Your Server is running on http://localhost:${this.port}`);
        });
    }
}

// Start the application
const app = new App();
app.listen();
