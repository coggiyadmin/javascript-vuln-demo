const express=require('express');const app=express();
app.post('/x',(req,res)=>{ const u=req.body.u; eval(u); eval('y='+u); res.end(); });
