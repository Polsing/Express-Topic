const express = require('express');
const app = express();
const db = require('../db');
const router = express.Router();

const path = require('path');
app.use(express.static(path.join(__dirname,"public/")));
router.get('/', async (req,res)=>{
    const yourID = req.cookies["session-id"];
    let yourData;
    try {
      yourData = await db.select('*').from('userprofile').where({ user_id: yourID });
    } catch (error) {
      console.log(error);
    }
    const userData = yourData[0];
    let g1,g2,g3,g4,s1,s2,s3,s4;
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
    
    res.render('youporfile',{userData , g1,g2,g3,g4,s1,s2,s3,s4});
});

router.get('/Edit' ,async (req,res)=>{
    const yourID = req.cookies["session-id"];
    let yourData;
    let allfaculty = [];
    try {
      yourData = await db.select('*').from('userprofile').where({ user_id: yourID });
      allfaculty = await db.select().from('faculty');
    } catch (error) {
      console.log(error);
    }
    const userData = yourData[0];
    res.render('Edityouporfile',{userData,allfaculty});
});

router.post('/Edit' , async (req,res)=>{
    //console.log(req.body); 
    const yourID = req.cookies["session-id"];
    const{username,facebook,instagram,
          twitter, youtube, tiktok, 
          github,faculty,branch,
          years,Gender,status,bio
         } = req.body ?? {};

    try {
      if(username){
        let updateResult = await db('userprofile') .where({ user_id: yourID }).update({ name: username });
        if(!updateResult){
          throw new Error('*Something went wrong.');
        }
      }
      if(facebook){
        let updateResult = await db('follow') .where({ follow_id: yourID }).update({ facebook: facebook });
        if(!updateResult){
          throw new Error('*Something went wrong.');
        }
      }
      if(instagram){
        let updateResult = await db('follow') .where({ follow_id: yourID }).update({ instagram: instagram });
        if(!updateResult){
          throw new Error('*Something went wrong.');
        }
      }
      if(twitter){
        let updateResult = await db('follow') .where({ follow_id: yourID }).update({ twitter: twitter });
        if(!updateResult){
          throw new Error('*Something went wrong.');
        }
      }
      if(youtube){
        let updateResult = await db('follow') .where({ follow_id: yourID }).update({ youtube: youtube });
        if(!updateResult){
          throw new Error('*Something went wrong.');
        }
      }
      if(tiktok){
        let updateResult = await db('follow') .where({ follow_id: yourID }).update({ tiktok: tiktok });
        if(!updateResult){
          throw new Error('*Something went wrong.');
        }
      }
      if(github){
        let updateResult = await db('follow') .where({ follow_id: yourID }).update({ github: github });
        if(!updateResult){
          throw new Error('*Something went wrong.');
        }
      }
      if(faculty !== '0' && branch !== '0' && (faculty != null && branch != null)){
        let updateResult = await db('userprofile') .where({ user_id: yourID }).update({ faculty: faculty ,branch: branch });
        if(!updateResult){
          throw new Error('*Something went wrong.');
        }
      }
      if(years !== '0' && years != null){
        let updateResult = await db('userprofile') .where({ user_id: yourID }).update({ years: years});
        if(!updateResult){ 
          throw new Error('*Something went wrong.');
        }
      }
      if(Gender !== '0' && Gender != null){
        let updateResult = await db('userprofile') .where({ user_id: yourID }).update({ gender: Gender});
        if(!updateResult){
          throw new Error('*Something went wrong.');
        }
      }
      if(status !== '0' && status != null){
        let updateResult = await db('userprofile') .where({ user_id: yourID }).update({ status: status});
        if(!updateResult){
          throw new Error('*Something went wrong.');
        }
      }
      if(bio && bio != null){
        let updateResult = await db('userprofile') .where({ user_id: yourID }).update({ bio: bio});
        if(!updateResult){
          throw new Error('*Something went wrong.');
        }
      }
    } catch (error) {
      let editerr = error.message;
      return res.render('Edityouporfile',{editerr})
      
    }
    res.redirect('Edit');
});
module.exports = router;

