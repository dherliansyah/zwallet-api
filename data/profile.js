const express = require("express");
const router = express.Router();
const db = require("../config/db.js");

// START GET DATA USER
// router.get("/", (req, res) => {
//   db.query(`SELECT * FROM user`, (err, result, field) => {
//     if (!err) {
//       res.status(200).send({
//         success : true,
//         message : 'Success get data user',
//         data: result,
//       });
//     } else {
//       res.status(500).send({
//         message : 'Failed get data user',
//         data: [],
//       });
//     }
//   });
// });

// START INSERT DATA USER
router.post("/", (req, res) => {
  const {
    firstName,
    lastName,
    userName,
    email,
    password,
    phone,
    balance,
    verified,
    photo,
    pin,
  } = req.body;
  if (
    firstName &&
    lastName &&
    userName &&
    email &&
    password &&
    phone &&
    balance &&
    verified &&
    photo &&
    pin
  ) {
    db.query(
      `INSERT INTO user (firstName,lastName,userName,email,password,phone,balance,verified,photo,pin)VALUES
        ('${firstName}','${lastName}','${userName}','${email}','${password}','${phone}','${balance}',${verified},'${photo}','${pin}')`,
      (err, result, field) => {
        if (!err) {
          res.status(201).send({
            success: true,
            message: "Success create data user",
            data: result,
          });
        } else {
          res.status(400).send({
            success: false,
            message: "Failed create data user",
            data: [],
          });
          db.end();
        }
      }
    );
  } else {
    res.status(400).send({
      success: false,
      message: "All field must be filled",
      data: [],
    });
  }
});

// START DELETE USER BY ID
router.delete('/:id_user', (req, res) => {
  const { id_user } = req.params;
  db.query(`DELETE FROM user WHERE id_user=${id_user}`, (err, result) => {
    if (!err) {
      res.status(200).send({
        success: true,
        message: "Success delete user data",
        data: result,
      });
    } else {
      res.status(400).send({
        success: false,
        message: "Failed delete user data",
        data: [],
      });
    }
  });
});

// START UPDATE USER BY ID
router.put("/:id_user", (req, res) => {
  const { id_user } = req.params;
  const {
    firstName,
    lastName,
    userName,
    email,
    password,
    phone,
    balance,
    verified,
    photo,
    pin,
  } = req.body;
  if (
    firstName &&
    lastName &&
    userName &&
    email &&
    password &&
    phone &&
    balance &&
    verified &&
    photo &&
    pin
  ) {
    db.query(
      `UPDATE user SET firstName=?, lastName=?, userName=?, email=?, password=?, phone=?, balance=?, verified=?, photo=?, pin=? WHERE id_user=${id_user}`,
      [firstName,lastName,userName,email,password,phone,balance,verified,photo,pin,id_user]
        ,(err, result, field) => {
        if (!err) {
          res.status(200).send({
            success: true,
            message: "Success create data user",
            data: result,
          });
        } else {
          res.status(400).send({
            success: false,
            message: "Failed create data user",
            data: [],
          });
          db.end();
        }
      }
    );
  } else {
    res.status(400).send({
      success: false,
      message: "All field must be filled",
      data: [],
    });
  }
});

// GET SEARCH AND SORTING

router.get('/search',(req,res)=>{
  let firstname = req.query.firstname
  if(firstname){
  db.query(`SELECT * FROM user WHERE firstName LIKE '%${firstname}%' ORDER BY firstname ASC `,(err,result,field)=>{
    if(!err){
      res.status(200).send({
        success : true,
        message : 'Success search by firstname',
        data : result,
      })
    }else{
      res.status(400).send({
        success : false,
        message : 'Failed search by firstname',
        data : [],
      })
    }
  })
}else{
  res.status(400).send({
    success : false,
    message : 'All field must be filled',
    data : [],
  })
}
})

module.exports = router;
