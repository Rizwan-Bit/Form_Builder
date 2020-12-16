const mongoose = require('mongoose');

const submitFormSchema = new mongoose.Schema({
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
    answers: [

    ],  
},{timestamps: true})

module.exports = mongoose.model('SubmitForms', submitFormSchema);