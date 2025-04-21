const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    areaCode: { type: String, required: true },
    contactNumber: { type: String, required: true },
    description: { type: String }
});

module.exports = mongoose.model('Service', serviceSchema);
