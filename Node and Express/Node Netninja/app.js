const express=require('express');
const blogrouter=require('./routes/blogroutes')
//connect to mongoDB
const mongoose=require('mongoose');
const dbURI='mongodb+srv://saketh1100:test123@nodebasics.qrt8b.mongodb.net/Nodebasics?retryWrites=true&w=majority'

const app=express();

const morgon=require('morgan')

//mongoDB connect
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
    .then((result)=>{
        console.log('connected to db');
        app.listen(4200);
    })
    .catch((err)=>console.log(err))

//register view engine
app.set('view engine','ejs');

//middleware and static files
app.use(express.static('./public'));
app.use(express.urlencoded({extended:true}));
app.use(morgon('dev'));

//routes
app.get('/',(req,res)=>{
    res.redirect('/blogs');
})

app.get('/about',(req,res)=>{
    res.render('about',{title:"About"});
})
app.use('/blogs',blogrouter)


