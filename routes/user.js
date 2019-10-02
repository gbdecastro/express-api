const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const validation = require('../validations/user')
const bcrypt = require('bcryptjs');

router.post('/register', async (req, res) => {

    //validate
    const {
        error
    } = validation.registerValidation(req.body)

    if (error) return res.status(400).send(error.details[0].message)

    //check email already exist in the database
    const emailExist = await User.findOne({
        email: req.body.email
    });
    if (emailExist) return res.status(400).send("Email já existe na base de dados!");

    //Hash Passwords
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    //create new User
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    });

    //save new User
    try {
        const savedUser = await user.save();
        res.send({
            user: user._id
        });
    } catch (err) {
        res.status(400).send(err);
    }

});

router.post('/login', async (req, res) => {

    //validate
    const {
        error
    } = validation.loginValidation(req.body)

    if (error) return res.status(400).send(error.details[0].message)

    //check email already exist in the database
    const user = await User.findOne({
        email: req.body.email
    });
    if (!user) return res.status(400).send("Email não encontrado");

    //check password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send("Senha Inválida");

    //create and assign a token
    const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60), //Token for 1 Hour
        data: {
            _id: user._id
        }
    }, process.env.TOKEN_SECRET);

    res.header('auth-token', token).send(token);

})

module.exports = router;