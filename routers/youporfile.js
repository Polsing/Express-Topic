const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/' , async (req,res)=>{
    res.render('youporfile');
});

module.exports = router;