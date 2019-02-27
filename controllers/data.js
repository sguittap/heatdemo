const express = require('express')
const router = express.Router();


//get all 
router.get('/', async (req, res, next) => {
    console.log(req.body, 'this is get all')
        try {
            const allData = await Data.find();

            res.json({
                status: 200,
                data: allData
            });
        } catch (err){
            res.send(err)
        }
});