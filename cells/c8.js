const express=require('express');const app=express();
function pick(x){ return ['a','b'].includes(x)?x:'a'; }
app.post('/x',(req,res)=>{ const u=pick(req.body.u); eval(u); res.end(); });
