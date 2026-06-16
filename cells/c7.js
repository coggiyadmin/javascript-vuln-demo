const express=require('express');const app=express();
function clean(x){return x;}
app.post('/x',(req,res)=>{ const u=clean(req.body.u); eval(u); res.end(); });
