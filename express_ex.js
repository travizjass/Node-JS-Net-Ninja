const express = require('express');

// express app
const app = express();

// register view engine

app.set('view engine', 'ejs');



// listen for requests
app.listen(3000);

 // now we dont need to write setHeader n all
// i.e don't need to manually set Content-Type
// neither .write(), .end()
app.get('/', (req,res)=>{
   // res.send('<h1>Jasmin hello app</h1>');
   // func to send html page
   // here we need to give absolute path
   res.sendFile('./views/index.html', {root: __dirname});
});
app.get('/about', (req,res)=>{
   // res.send('<h1>Jasmin about app</h1>');
   res.sendFile('./views/about.html', {root: __dirname});

});
// to do redirects
app.get('/about-me', (req,res)=>{
    res.redirect('/about');
 });

// 404 ERROR PAGE

// the logic for 404 is that, that this .use() always fires
// BUT BUT BUT only if the control reaches till this end of
// the code. hence if URL don't match any one from above 
// then ultimately it reaches this .use func and 404 page
// is loaded :)
// BUT TAKE CARE THAT WHERE U PLACE THIS
// Bcoz then it would always send 404.html page only
// and not look for other loaded pages.

app.use((req,res)=>{
    res.sendFile('./views/404.html', {root: __dirname});
})
 