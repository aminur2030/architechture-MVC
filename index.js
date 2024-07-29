const express=require("express");
const app=express();
port=1000;
app.use(express.urlencoded({extended:true}));
const userRouter=require("./routes/users.route")
const productRouter=require("./routes/products.route")




app.use(userRouter)
app.use(productRouter)
app.use((req,res,next)=>{
  res.status(404).json({
    message:"Route not found"
  });
});
app.use((err,req,res,next)=>{
  res.status(500).json({
    message:"Something broke."
  });
});

app.listen(port,(req,res)=>{
  console.log(`Server is running from http://localhost:${port}`)
})
