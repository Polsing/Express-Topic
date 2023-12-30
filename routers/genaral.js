const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/' , async (req,res)=>{
    let allPost = [];
    try {
        allPost = await db.select()
                          .from('student')
    } catch (error) {
        console.log(error)
    }
    //console.log(req.cookies["session-id"]);
    res.render('dashboard',{allPost});
});

module.exports = router;