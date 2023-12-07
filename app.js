const express = require("express");

const app = express();

const port = 3000;

app.listen(port,()=>{
    console.log(`App started on port ${port}`);
})
//TEMPLATE ENGİNE

app.set("view engine","ejs");

//MIDDLEWARES

app.use(express.static("public"));

//ROUTES
app.get('/',(req,res)=>{
    res.render('index',{
        page_name: "index"
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        page_name: "about"
    })
})


