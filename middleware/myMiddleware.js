
const myMiddleware1=(req,res,next)=>{
     console.log('my middleware 1 call');
     next();
};

module.exports=myMiddleware1;