const e = require('express');
var express = require('express');
var router = express.Router()
const Memo=require('../models/memo');
const memo ={
    readAll:async(req,res)=>{
        const memos=await Memo.findAll();
        try{
            if(!memos.length){
                return res.status(404).send({
                    err:'memo not found'
                });
            }
            res.send(memos);
        }catch(err){
            res.status(500).send(err)
        }
    },
    write: async(req,res)=>{
        try{
            const result = await Memo.create(req.body);
            console.log("result : ",result);
            res.status(200).send(result);
        }catch(err){
            res.status(500).send(err);
        }
    }
}
router.get('/',memo.readAll);
router.post('/',(req,res)=>{
    const memo = new Memo(req.body);
    memo.save((err,doc)=>{
        if(err) res.status(200).send(err);
        res.status(200).send(memo);
    })
})
module.exports=router;