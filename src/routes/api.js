const express=require('express');
const router=express.Router();
router.post('/data',(req,res)=>{
  const {name, age}=req.body;
  res.json({success:true,message:'Data received',data:{name,age}});
});
module.exports=router;
