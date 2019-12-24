const express = require("express");
const router = new express.Router();
const User = require("../models/user");
const auth = require("../middleware/auth");

router.post("/users", async (req, res) => {
    const user = new User(req.body);
    try {
        const token = await user.generateAuthToken();
        await user.save();
        res.status(201).send({
            user,
            token
        });
    } catch (e) {
        res.status(400).send(e);
    }
});

router.post("/users/login", async (req, res) => {
    try {
        const user = await User.findByCredentials(
            req.body.email,
            req.body.password
        );
        const token = await user.generateAuthToken();
        res.send({
            user,
            token
        });
    } catch (e) {
        console.log(e);
        res.status(400).send();
    }
});

router.post("/users/logout", auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(token => token != req.token)
        await req.user.save();
        res.status(200).send();
    } catch (e) {
        res.status(500).send();
    }
})

router.post("/users/logoutAll", auth, async (req, res) => {
    try {
        req.user.tokens = [];
        await req.user.save();
        res.status(200).send();
    } catch (error) {
        res.status(500).send();
    }
})


// READ 
router.get("/users/me", auth, async (req, res) => {
    res.send(req.user);
});

// READ
router.get("/users/:id", auth, async (req, res) => {
    const _id = req.params.id;
    try {
        const user = await Task.findById(_id);
        res.status(200).send(user);
    } catch (e) {
        res.status(400).send(e);
    }
});


//Update 
router.patch("/users/me", auth, async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["name", "email", "password", "age"];
    const isValidOperation = updates.every(update => {
        return allowedUpdates.includes(update);
    });
    if (!isValidOperation) {
        return res.status(400).send({
            error: "invalid updates"
        });
    }

    try {
        // // const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        //     new: true,
        //     runValidators: true,
        //     useFindAndModify: false
        // })
        // Replaces mongoose middleware, not wanted use this instead
        updates.forEach(update => (req.user[update] = req.body[update]));
        // Now the middleware will get exectued
        await req.user.save();
        res.send(req.user);
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
});
// Delete
router.delete("/users/me", auth, async (req, res) => {
    try {
        await req.user.remove();
        res.status(200).send(req.user);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});


module.exports = router;