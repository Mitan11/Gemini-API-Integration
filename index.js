import express from 'express';
import "dotenv/config";
import GenAIRouter from './routers/genAIRouter.js';

class App {
    constructor() {
        // Initialize express app
        this.app = express();
        this.port = process.env.PORT || 4000;
        this.genAIRouter = new GenAIRouter();
    }
    
    initializeMiddlewares() {
        // Middleware to parse JSON requests
        this.app.use(express.json());
        this.initializeMiddlewares();
        this.initializeRoutes();
    }

    initializeRoutes() {
        // Testing API
        this.app.get('/', (req, res) => {
            res.json({ message: "API is working" });
        });
        // GenAI routes
        this.app.use('/genAI', this.genAIRouter.getRouter());
    }

    listen() {
        // Start the server
        this.app.listen(this.port, (error) => {
            if (error) return console.log("Connection Error \n", error);
            console.log(`Your Server is running on http://localhost:${this.port}`);
        });
    }
}

// Start the application
const app = new App();
app.listen();
