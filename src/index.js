const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');

require('dotenv').config();

const api_routes = require('./api/api_routes');
const error_handlers = require('./error_handlers');

let app = express();

// app.enable('trust proxy'); // needed for rate limiting by Client IP


// mongoose.connect(`${process.env.DATABASE_URI}`, {
(async () => {
    await mongoose.connect(process.env.DATABASE_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('CONNECTED');
    }).catch( (err) => {
        console.log(`Error Connecting to Database ${err}`);
    });
})();
    
// app.use(helmet());
app.use(morgan('combined'));
app.use(express.json({limit: '1mb'}));
// app.use(cors)

// API ROUTE
app.use('/api/entries', api_routes.apiRouter);
// ERROR ROUTE
app.use(error_handlers.errorRoute);

const port = process.env.port || 3000
app.listen(port, () => {
    console.log(`Listening on ${port}`)
});