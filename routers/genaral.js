const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/' , async (req,res)=>{
    let allUser = [];
    let allfaculty = [];
    try {
        allUser = await db.select().from('userprofile');
        allfaculty = await db.select().from('faculty');
    } catch (error) {
        console.log(error)
    } 
    res.render('dashboard',{allUser , allfaculty});
});

router.get('/select',async (req,res)=>{
    const{faculty,branch,Years,Status,Gender,searchAll} = req.query;
    let  allUser = [];
    let allfaculty = [];
    let g1,g2,g3,g4,s1,s2,s3,s4;
    if(req.query['btn-select'] === 'true'){
        try {
            const query = db.select('*').from('userprofile')
            //.leftJoin('images', 'images.image_id', '=', 'student.user_id');
            if (Gender)  query.where('gender', Gender);
            if (Status)  query.where('status', Status);
            if (faculty) query.where('faculty', faculty);
            if (branch)  query.where('branch', branch);
            if (Years)   query.where('years', Years);
            
            const result = await query;
            allUser = result;

            allfaculty = await db.select().from('faculty');
            
        } catch (error) {
            console.log(error)
        }
        
        switch (Gender) {
            case '1': g1 = 'male'; 
            break;
            case '2': g2 = 'female';
            break;
            case '3': g3 = 'neuter';
            break;
            case '4': g4 = 'trans';
            break;
        }
        switch (Status) {
          case '1': s1 = 'โสด';
          break;
          case '2': s2 = 'มีเเฟนเเล้ว';
          break;
          case '3': s3 = 'เพื่อน';
          break;
          case '4': s4 = 'พี่น้อง';
          break;
        }
        let gen,sta;
        if(g1) gen = g1;
        if(g2) gen = g2;
        if(g3) gen = g3;
        if(g4) gen = g4;
        if(s1) sta = s1;
        if(s2) sta = s2;
        if(s3) sta = s3;
        if(s4) sta = s4;
        console.log(gen + "" + sta)
        return res.render('dashboard',{allUser,allfaculty,faculty,branch,Years,gen,sta});
    }
    

    if(req.query['btn-search'] === 'true'){
        let  allUser = [];
        let allfaculty = [];
        try {
            allfaculty = await db.select().from('faculty');
            allUser = await db.select('name').from('userprofile').orWhereILike('name', '%' + searchAll + '%')
        } catch (error) {
            console.log(error)
        }
        return res.render('dashboard' ,{allUser,allfaculty,searchAll});
        
    }
   
    res.redirect('/');
  
})

module.exports = router;