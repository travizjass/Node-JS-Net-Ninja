// this is express router

const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

/*

HERE DOWN ARE ALL THE DIFFERENT GET REQUESTS WE USED
FOR DIFFERENT URLS FROM THE USER 

*/

//mongoose and mongo sandbox routes
  // in render('....HERE WE WRITE THE NAME OF THE EJS FILENAME.......',....)
  router.get('/', blogController.blog_index);
  router.post('/', blogController.blog_create_post);
  router.get('/create', blogController.blog_create_get);
  // for posting data on blogs
  router.get('/:id', blogController.blog_details);
  router.delete('/:id', blogController.blog_delete)
  // TO ADD A BLOG
  // router.get('/add-blog', (req,res)=>{
  //   const blog = new Blog({
  //     title: 'new blog 2',
  //     snippet: 'about my new blog 2',
  //     body: 'more about my new blog 2'
  //   });
  //   blog.save()
  //     .then((result)=>{
  //       res.send(result)
  //     })
  //     .catch((err)=>{
  //       console.log(err);
  //     });
  // })
//   router.get('/all-blogs', (req,res)=>{
//     Blog.find()
//     .then((result)=>{
//       res.send(result)
//     })
//     .catch((err)=>{
//       console.log(err);
//     });
//   })
  
//   router.get('single-blog', (req,res)=>{
//     Blog.findById('626539b445f62e2e12e0f657')
//      .then((result)=>{
//       res.send(result)
//     })
//      .catch((err)=>{
//       console.log(err);
//     });
//   })

module.exports = router;