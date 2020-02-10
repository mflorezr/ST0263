const express = require('express');
const router = express.Router();

const sensor= require('../models/sensor');

router.get('/', async(req, res) => {
    const sensorData= await sensor.find()
    res.json(sensorData);
});

router.get('/:id', async (req,res) =>{
    const sensor1= await sensor.findById(req.params.id);
    res.json(sensor1);
});

router.post('/', async (req,res)=>{
    const sen1= new sensor(req.body);
    await sen1.save();
    res.json({
        status: 'Data Saved'
    });
});

router.put('/:id', async (req, res) => {
   await sensor.findByIdAndUpdate(req.params.id, req.body);
   res.json({
       status: 'Data Updated'
   });
});

router.delete('/:id', async (req, res) => {
    await sensor.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Data Deleted'
    });
});

module.exports = router;