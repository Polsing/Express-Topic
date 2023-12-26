const express = require('express');
const router = express.Router();
const db = require('../db');

// router.get('/new',(req,res)=>{
//     res.render('postNew');
// })

// router.post('/new',(req,res)=>{
//     console.log(req.body);
//     const {data} = req.body ?? {};
//     res.send('Save From');
// })


router.get('/:postId', async (req,res)=>{
    const {postId} = req.params;
    let onePost = null;
    try {
        const somePost =  await db
                  .select('*')
                  .from('student')
                  .where('user_id',+postId);
             onePost = somePost[0];  
    } catch (error) {
        console.log(error);
    }
    const customTitle = !!onePost ?  `${onePost.name}` : ' ไม่พบเนื้อหา';
    res.render('userOne',{onePost , customTitle});
})
module.exports = router;