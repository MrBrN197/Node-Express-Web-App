const express = require('express');
var apiRouter = express.Router()

const { Entry }=  require('../models/Entry');

apiRouter.get('/', async (req, res) => {
    try {
        const entries = await Entry.find(); 
        console.log('entries');
        
        console.log(entries);
        
        res.json(entries);
    } catch ( error ) {
        next(error);
    }
});


apiRouter.post('/', async (req, res, next) => {
    try{
        let entry = new Entry(req.body);
        
        await entry.save();
        
        res.json(entry);
    } catch( error ) {
        next(error);
    }
});

module.exports = { apiRouter };