const express=require('express');const app=express();
app.post('/x',(req,res)=>{ const ex="eval(userInput)"; res.send(ex); });
