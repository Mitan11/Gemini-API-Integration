class BaseController {
    
    sendSuccess(res, data, message = 'Success') {
        res.json({
            success: true,
            message,
            data
        });
    }

    sendError(res, error, statusCode = 500) {
        console.error('Controller Error:', error);
        res.status(statusCode).json({
            success: false,
            error: error.message || 'Internal Server Error'
        });
    }

}

export default BaseController;