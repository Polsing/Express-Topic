const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/:postId', async (req,res)=>{
     const {postId} = req.params;
     let userData = null;
     let g1,g2,g3,g4,s1,s2,s3,s4;
    try {
        const somePost =  await db
                  .select('userprofile.*', 'follow.*')
                  .from('userprofile')
                  .innerJoin('follow', 'userprofile.user_id', '=', 'follow.follow_id')
                  .where('user_id',+postId);
                  userData = somePost[0];  
    } catch (error) {
        console.log(error);
    }
    
    switch (userData.gender) {
        case 1: g1 = 1; 
        break;
        case 2: g2 = 1;
        break;
        case 3: g3 = 1;
        break;
        case 4: g4 = 1;
        break;
    }
    switch (userData.status) {
      case 1: s1 = 1;
      break;
      case 2: s2 = 1;
      break;
      case 3: s3 = 1;
      break;
      case 4: s4 = 1;
      break;
  }
    const customTitle = !!userData ?  `${userData.name}` : ' ไม่พบเนื้อหา';
    res.render('userOne',{userData , customTitle ,g1,g2,g3,g4,s1,s2,s3,s4});
})
module.exports = router;