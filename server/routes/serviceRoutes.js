const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

router.post('/add', async (req, res) => {
    try {
        const service = new Service(req.body);
        await service.save();
        res.status(201).json(service);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/:areaCode', async (req, res) => {
    try {
        const services = await Service.find({ areaCode: req.params.areaCode });
        res.json(services);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
