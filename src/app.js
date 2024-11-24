const express = require('express');

const app = express();

const port = 3000;


app.use("/profile",(req , res)=>{
     res.send('Welcome');
})


app.listen(port , ()=>{
    console.log(`Server is running at http://localhost:${port}`);
})