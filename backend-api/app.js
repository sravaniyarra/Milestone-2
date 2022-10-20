var express = require ('express')
var app = express()
const http = require('http')

app.use('/api/posts', (req, res, next) =>{  
    const posts = [  
    {  
      id: 'snkfkjkf',   
      title: 'First server-side post',  
      content: 'This is comming from the server'   
    },  
    {  
      id: 'gyrrshjhk',   
      title: 'Second server-side post',  
      content: 'This is commiing from the server'   
    },  
    {  
      id: 'mhsetghj',   
      title: 'Third server-side post',  
      content: 'This is comming from the server'   
    }   ]  
    res.status(200).json({  
        message: 'Posts Fetched Successfully',  
        posts: posts  
      });   
});  
http.createServer((req,res)=>{
    res.end('This is my first response'); 
});


app.listen(7000,err=>{
    if(!err){
        console.log("App is Listening")
    }
    else{
        console.log("App crashed.....")
    }
})
