
// dependence
const express=require('express');
const app=express();
const cors=require('cors');

// port declared
const port=5000;

//middleware 
app.use(express.json());
app.use(cors());

// api
app.get('/',(req,res)=>{
     res.send('hi express.js');
});

app.post('/',(req,res)=>{
     const body=req.body.toString();
     console.log(body);
     res.send('this is post check');
})

app.listen(port,()=>{
     console.log('listing the port server',port);
});
