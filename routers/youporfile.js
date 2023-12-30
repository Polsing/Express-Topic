const express = require('express');
const app = express();
const db = require('../db');
const router = express.Router();

const path = require('path');
app.use(express.static(path.join(__dirname,"public/")));
router.get('/', async (req,res)=>{
    res.render('youporfile');
});

router.get('/Edit' ,async (req,res)=>{
    res.render('Edityouporfile',{user: {name: ''}});
});
router.post('/Edit' , async (req,res)=>{
    console.log(req.body); 
    const{username,facebook,instagram,
          twitter, youtube, tiktok, 
          github,faculty,branch,
          years,Gender,bio
         } = req.body ?? {};

    try {
      if(username){
        //console.log(username);
        
      }
      if(facebook){
        console.log(facebook);
      }
      if(instagram){
        console.log(instagram);
      }
      if(twitter){
        console.log(twitter);
      }
      if(youtube){
        console.log(youtube);
      }
      if(tiktok){
        console.log(tiktok);
      }
      if(github){
        console.log(github);
      }
      if(faculty !== '0' && branch !== '0' && (faculty != null && branch !== null)){
        console.log(faculty + branch );
      }
      if(years !== '0' && years !== null){
        console.log(years);  
      }
      if(Gender !== '0' && Gender !== null){
        console.log(Gender);
      }
      if(bio && bio != null){
        console.log(bio);
      }
    } catch (error) {
        
    }
       
    res.send('submit เเล้วจ้า');
});
module.exports = router;

