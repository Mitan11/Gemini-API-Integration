import GenAIService from '../services/genAI.js';
import BaseController from './baseController.js';

class GenAIController extends BaseController {
    constructor() {
        super();
        this.genAIService = new GenAIService();
    }

    async handleGeneration(req, res) {
        try {
            const { prompt, model } = req.body;
            const result = await this.genAIService.generate(prompt, model);
            this.sendSuccess(res, result, 'Content generated successfully');
        } catch (error) {
            console.error('Error in genAIController:', error);
            this.sendError(res, error);
        }
    }
}

export default GenAIController;