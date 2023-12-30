// middleware.js
const requireLogin = (req, res, next) => {
    if (req.cookies["session-id"]) {
      // ถ้ามี userId ใน session แสดงว่าผู้ใช้ล็อกอินแล้ว
      next();
    } else {
      // ถ้าไม่มี userId ใน session ให้ redirect ไปที่หน้า Login
      res.redirect('/Register');
    }
  };
  
  module.exports = { requireLogin };
  