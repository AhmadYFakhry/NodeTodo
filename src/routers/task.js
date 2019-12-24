const express = require('express');
const router = new express.Router();
const Task = require('../models/task');
const auth = require('../middleware/auth');

// CREATE
router.post('/tasks', auth, async (req, res) => {
    const task = new Task({
        ...req.body,
        author: req.user._id
    })
    try {
        await task.save();
        res.status(200).send(task);
    } catch (e) {
        res.status(400).send(e);
    }
})

// READ
router.get('/tasks', auth, async (req, res) => {
    try {
        const tasks = await Task.find({
            owner: req.user._id
        })
        // await req.user.populate('tasks').execPopulate();
        res.status(200).send(tasks);
    } catch (e) {
        res.status(400).send(e);
    }
})

// READ
router.get('/tasks/:id', auth, async (req, res) => {
    const _id = req.params.id;
    try {
        const task = await Task.findOne({
            _id,
            owner: req.user._id
        });
        res.status(200).send(task)
    } catch (e) {
        res.status(400).send(e);
    }
});

router.delete('/tasks/:id', auth, async (req, res) => {
    const _id = req.params.id;
    try {
        const task = await Task.findOneAndDelete({
            _id,
            owner: req.user._id
        });
        if (!task) return res.status(404).send();
        res.send();
    } catch (e) {
        res.status(500).send(e);
    }
});

// READ
router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['description', 'completed'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));
    if (!isValidOperation) return res.status(400).send({
        error: "Invalid update"
    })
    try {
        // const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
        //     new: true,
        //     runValidators: true,
        //     useFindAndModify: false
        // })
        const task = await Task.findById(req.params.id);
        updates.forEach(update => task[update] = req.body[update]);
        await task.save();
        if (!task) return res.status(404).send();
        res.status(200).send(task);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

module.exports = router;