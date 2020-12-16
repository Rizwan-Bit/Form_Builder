const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    questions: [
        {
            id:{
                type: String,
            },
            question: {
                type: String,
                trim: true,
                required: true
            },
            type: {
                type: String,
                trim: true,
                required: true
            },
            OptionsFields: [
                
            ]
        }
    ],
    count: {
        type: Number,
        default: 0
    },
    id: {
        type: String,
        required: true
    },
},{timestamps: true})

module.exports = mongoose.model('Form', formSchema);