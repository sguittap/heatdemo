const express = require('express')
const router = express.Router();
const Data = require('../models/model')

//get all 
router.get('/', async (req, res, next) => {
    console.log(req.body, 'this is get all')
        try {
            const allData = await Data.find();
            console.log('got here')
            res.json({
                status: 200,
                data: allData
            });
        } catch (err){
            res.send(err)
        }
});

module.exports = router;