const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/', (req, res) => {
     res.render("register");
});

router.post('/', async (req, res) => {
     //console.log(req.body);
     const { emailSignIn, pwSignIn, email, pw1, pw2 } = req.body ?? {};
     if (email && pw1 && pw2) {
          try {

               if (pw1 != pw2) {
                    throw new Error('Passwords don\'t match');
               }

               const result = await db('useraccount')
                    .count('email')
                    .where({ email: email });
               const mail = result[0]['count(`email`)']
               //console.log(mail === 1);
               if (mail === 1) {
                    throw new Error('I already have an email');
               }
               else {
                    await db('useraccount').insert({
                         email: email,
                         pw: pw1
                    });
               }

          } catch (error) {
               console.log(error);
               let errmass = 'มีบ่างอย่างผิกพลาด โปรดลองใหม่ในภายหลัง';
               if (error.message === 'Passwords don\'t match') {
                    errmass = 'Passwords don\'t match';
               }
               else if (error.message === 'I already have an email') {
                    errmass = 'I already have an email';
               }
               return res.render("register", { errmass, values: { email, pw1, pw2 } });
          }
          res.redirect('register');
     }
     if (emailSignIn && pwSignIn) {
          //  console.log(emailSignIn);
          //  console.log(pwSignIn);
          try {
               // ตรวจสอบข้อมูล login จากฐานข้อมูล
               const user = await db('useraccount')
                    .where({ Email: emailSignIn ,Passwords:pwSignIn})
                    .first();
                    if (user) {
                         // ถ้า login สำเร็จ, ตั้งค่า userId ใน session
                         res.cookie("session-id", user.id, {
                              maxAge: 3600000 // กำหนด timeout หน่วยเป็น millisecond
                          });
                          
                          console.log(req.cookies["session-id"]);
                          res.redirect('/');
                          res.end();  // หรือไปที่หน้าอื่น หลังจากล็อกอินสำเร็จ
                         
                    }else {
                         res.redirect('/Register');
                         res.end();  // หรือไปที่หน้าล็อกอินอีกครั้ง
                         throw new Error('is not accout');
                       }
          } catch (error) {
               console.log(error);
          }       
     }    
});

module.exports = router;