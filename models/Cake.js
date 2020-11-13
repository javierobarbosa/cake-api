const mongoose = require('mongoose')

const cakeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true,
        unique: true 
    },
    price: {
        type: Number,
        required: true
    },
    flavors: [{
        type: String,
        required: true
    }],
    is_active: {
        type: Boolean,
        default: true
    }
})


const Cake = mongoose.model('Cake', cakeSchema);

module.exports = Cake

