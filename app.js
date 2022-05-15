
// require
const express=require('express');
const app=express();
const cors=require('cors');
const myMiddleware1 =require('./middleware/myMiddleware');


// port declared
const port=5000;

/* middleware  */
// build in middleware 
app.use(express.json());
app.use(cors());
// custom middleware
const myMiddleware2=(req,res,next)=>{
     console.log('my middleware2 call');
     next();
}
const logger=(req,res,next)=>{
     console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl} - ${req.protocol} - ${req.ip}`);
     next();
}
app.use(myMiddleware1);
app.use(myMiddleware2);
app.use(logger);




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
