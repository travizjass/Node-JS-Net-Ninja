const express = require('express');
const res = require('express/lib/response');
const morgan = require('morgan');

// express app
const app = express();

// listen for requests
app.listen(3000);

// creating my middleware

// using 3rd party middleware
app.use(express.static('public'));
app.use(morgan('dev'));

// app.use((req,res)=>{
//   console.log('new request made');
//   // using next so that control goes down 
//   // and doesnt stop here
//   next();
// })

// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');

app.get('/', (req, res) => {
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});