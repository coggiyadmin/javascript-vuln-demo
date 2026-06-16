const express=require('express');const app=express();
app.post('/x',(req,res)=>{ const items=req.body.items; for(const it of items){ eval(it); } res.end(); });
