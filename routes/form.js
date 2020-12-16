const express = require('express');
const { count } = require('../models/form');
const Form = require('../models/form');
const SubmitForms = require('../models/submitedforms');

const router = express.Router();

router.post("/", async (req, res) => {

    console.log(req.body)

    const form = new Form({
        name: req.body.formName,
        questions: req.body.inputFields,
        id: req.body.id,
    })

    try {
            await form.save();
            res.status(201).send(form)
    } catch (error) {
            res.status(400).send(error);
    }
})

router.get("/forms", async (req, res) => {
    try {
         const forms = await Form.find({});
         res.json(forms);
    } catch (error) {
            console.log(error);
            res.status(400).send(error);
    }
})

router.get("/forms/:id", async (req, res) => {
    try {
         const form = await Form.findById({_id:req.params.id});
         res.json(form);
    } catch (error) {
            console.log(error);
            res.status(400).send(error);
    }
})

router.get("/forms/response", async (req, res) => {
    try {
         const count = await Form.find({name:req.body.name}).count();
         res.json(count);
    } catch (error) {
            console.log(error);
            res.status(400).send(error);
    }
})

router.post("/forms/submit", async (req, res) => {

    const submitForm = new SubmitForms({
        name: req.body.values.name,
        questions: req.body.values.questions,
        answers: req.body.answers
    });
    
    await Form.findOneAndUpdate({id: req.body.values.id}, {$inc: {count: 1 }});

    try {
        await submitForm.save();
        res.send().status(201);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
})

module.exports = router;
