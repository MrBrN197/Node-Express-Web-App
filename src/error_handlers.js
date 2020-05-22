const {Router} = require('Express');

errorRoute = Router();

// 404 Not Found
errorRoute.use((req, res, next) => {
    let error = new Error('Page Not Found');
    res.status_code = 404;
    next(error);
});


// Error Handler
errorRoute.use((error, req, res, next) => {
    console.log(`ERROR: StatusCode: [${res.status_code}]`);

    res.json({
        status_code: res.status_code,
        error: error.message,
        stack_trace: process.env.NODE_ENV !== 'dev' ? '🍏' : error.stack
    });
});

module.exports = {errorRoute};