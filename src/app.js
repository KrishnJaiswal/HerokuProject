const express=require('express');
const path =require('path');
const hbs=require('hbs');
const app=express();
const port=process.env.PORT || 8000;
// Finding Path
const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");
// Path for static website
app.set('view engine','hbs');
app.set('views',template_path);
app.use(express.static(static_path));
hbs.registerPartials(partials_path);

app.get("/",(req,res)=>{
    res.render('index');
})
app.get("/about",(req,res)=>{
    res.render('about');
})
app.get("/weather",(req,res)=>{
    res.render('weather');
})
app.get("*",(req,res)=>{
    res.render('404err',{
        errmsg:'Page not found!'
    });
})
app.listen(port,()=>{
    console.log(`Listening on Port ${port}`);
})