const express = require("express");
const router = express.Router();
const db = require("../config/db.js");

// START GET DATA USER
router.get("/", (req, res) => {
  db.query(
    `select * from user join transfer on user.id_user = transfer.id_user`,
    (err, result, field) => {
      if (!err) {
        res.status(200).send({
          success: true,
          message: "Success get data transfer",
          data: result,
        });
      } else {
        res.status(500).send({
          success: false,
          message: "Failed get data transfer",
          data: [],
        });
      }
    }
  );
});

// START INSERT DATA TRANSFER
router.post("/", (req, res) => {
  const { id_user, amount, notes, pin, balanceLeft } = req.body;
  if (id_user && amount && notes && pin && balanceLeft) {
    db.query(
      `INSERT INTO transfer (id_user,amount,notes,pin,balanceLeft)VALUES
            (${id_user},'${amount}','${notes}','${pin}','${balanceLeft}')`,
      (err, result, field) => {
        if (!err) {
          res.status(201).send({
            success: true,
            message: "Success create user transfer",
            data: result,
          });
        } else {
          res.status(400).send({
            success: false,
            message: "Failed create user transfer",
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

// START DELETE TRANSFER
router.delete("/:id_transfer", (req, res) => {
  const { id_transfer } = req.params;
  db.query(
    `DELETE FROM transfer WHERE id_transfer=${id_transfer}`,(err, result) => {
      if (!err) {
        res.status(200).send({
          success: true,
          message: "Success delete data transfer",
          data: result,
        });
      } else {
        res.status(400).send({
          success: false,
          message: "Failed delete data transfer",
          data: [],
        });
      }
    });
});

// START UPDATE TRANSFER
router.put('/:id_transfer',(req,res)=>{
  const { id_transfer } = req.params;
  const{
    id_user, 
    amount, 
    notes, 
    pin, 
    balanceLeft
  }=req.body
  if(
    id_user &&
    amount &&
    notes &&
    pin &&
    balanceLeft
  ){
    db.query(`UPDATE transfer SET id_user=?, amount=?, notes=?, pin=?, balanceLeft=? WHERE id_transfer=${id_transfer}`
    ,[id_user,amount,notes,pin,balanceLeft,id_transfer],(err,result,field)=>{
      if(!err){
        res.status(200).send({
          success : true,
          message : 'Success update data trsansfer',
          data : result,
        });
      }else{
        res.status(400).send({
          success : false,
          message : 'Failed update data transfer',
          data : [],
        })
      }
    })
  }else{
    res.status(400).send({
      success: false,
      message : 'All field must be filled',
      data : [],
    })
  }  
})

// GET SEARCH AND SORTING

router.get('/:firstName',(req,res)=>{
  const{firstName}= req.params
  if(firstName){
  db.query(`SELECT * FROM user WHERE firstName LIKE '%${firstName}%' ORDER BY firstname ASC `,(err,result,field)=>{
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
