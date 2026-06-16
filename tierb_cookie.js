const express=require('express'); const app=express();
app.get('/x',(req,res)=>{ res.cookie('session','abc'); res.end(); });  // no secure/httpOnly -> CWE-614
