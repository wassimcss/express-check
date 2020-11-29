const express = require("express");
const app = express();
const path = require("path");
const workTime=require("./midleware")

app.set("view engine","pug");
app.set('views',"./views");
app.use(workTime);
app.use(express.static(path.join(__dirname,"public")));



app.get("/",(req,res)=>{
    res.render("Home")
})
app.get("/services",(req,res)=> {
    res.render("our_services")
})
app.get("/contact",(req,res)=> {
    res.render("contact_us")
})


app.listen(5000,(error)=> {
    if (error) throw (error);
    else 
    {
        console.log(" Server is running men ")
    }
})
