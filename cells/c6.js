const express=require('express');const app=express();
app.post('/x',(req,res)=>{ const e=encodeURIComponent(req.body.u); eval(e); res.end(); });
