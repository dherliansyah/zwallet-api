const express = require('express');
const router = express.Router();
const db = require('../config/db.js');

// START GET DATA TOPUP
router.get('/', (req,res)=>{
    db.query(`SELECT * FROM topup`, (err, result)=>{
        if(!err){
            res.status(200).send({
                success : true,
                message : 'Success get data topup',
                data : result,
            });
        }else{
            res.status(400).send({
                success : false,
                message : 'Failed get data topup',
                data : [],
            })
        }
    })
})

// START INSERT DATA TOPUP
router.post('/',(req,res)=>{
    const {description} = req.body;
    if(description){
        db.query(`INSERT INTO topup (description)VALUES('${description}')`,(err,result)=>{
            if(!err){
                res.status(201).send({
                    success : true,
                    message : 'Success insert data topup',
                    data : result,
                });
            }else{
                res.status(400).send({
                    success : false,
                    message : 'Failed insert data topup',
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

// START DELETE TOPUP
router.delete('/:idTopup',(req,res)=>{
    const { idTopup } = req.params;
    db.query(`DELETE FROM topup WHERE idTopup=${idTopup}`,(err,result)=>{
        if(!err){
            res.status(200).send({
                success : true,
                message : 'Success delete data topup',
                data : result, 
            });
        }else{
            res.status(400).send({
                success : false,
                message : 'Failed delete data topup',
                data : [],
            });
        }
    })
})

// START UPDATE TOPUP
router.put('/:idTopup',(req,res)=>{
    const {idTopup} = req.params;
    const{
        description
    }=req.body
    if(
        description
    ){
        db.query(`UPDATE topup SET description=? WHERE idTopup=${idTopup}`,[description,idTopup],(err, result, field)=>{
            if(!err){
                res.status(200).send({
                    success : true,
                    message : 'Success update data topup',
                    data : result,
                })
            }else{
                res.status(400).send({
                    success : false,
                    message : 'Failed update data topup',
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