
// dependence
const express=require('express');
const app=express();
const cors=require('cors');

const multer  = require('multer')
const upload_folder="./uploadFolder";

// port declared
const port=5000;

//middleware 
app.use(express.json());
app.use(cors());

const upload=multer({
     dest:upload_folder
})

app.post('/',upload.single(''),(req,res)=>{
     
})

app.listen(port,()=>{
     console.log('listing the port server',port);
});
