const express=require('express');
const app=express();
//req=>middleware=>res
app.get('/api/people',(req,res)=>{
  res.status(200).json(succes)
})

app.listen(5000,()=>{
  console.log('Server is on port 5000');
})