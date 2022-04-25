const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')

// express app
const app = express();

// connect to mongodb
const dbURI= 'mongodb+srv://Jasmin:Jblovemahi07@nodetuts.3ml8x.mongodb.net/node-tuts?retryWrites=true&w=majority'
// now this above code is a asynchronous func
// so it returns a promise
mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology: true})
    .then((result)=> console.log('Connected to Database'))
    .catch((err)=> console.log(err));

// listen for requests 
app.listen(3000);

// creating my middleware

//register view engine
app.set('view engine', 'ejs');

// using 3rd party middleware & static files
app.use(express.static('public'));

// this urlencoded 3rd party middleware is useful while 
// getting data from user in forms from website

// INSHORT ITS USED FOR ACCEPTING FORM DATA
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev')); 

 app.use((req,res,next)=>{
 console.log('new request made');
 // using next so that control goes down 
 // and doesnt stop here
 next();
 })
// routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog-routes
app.use( '/blogs',blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
}); 