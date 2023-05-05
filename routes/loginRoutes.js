const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController');

router.get('/', (req,res) => {
    res.render('login');
})

router.post('/', loginController.login);

module.exports = router;