const router = require("express").Router();
const { User, Project } = require("../models/");
const {authUser} = require("../utils/auth");
const { Task } = require("../models/")


// router.get('/', (req, res) => {
//   res.render('edit-project');
// })
// router.get("/projects", authUser, (req, res) => {
//     Project.findAll({
//       where: {
//         userId: req.session.userId
//       }
//     })
//       .then(dbPostData => {
//         const projects = dbPostData.map((project) => project.get({ plain: true }));
        
//         res.render("all-posts-admin", {
//           layout: "dashboard",
//           projects
//         });
//       })
//       .catch(err => {
//         console.log(err);
//         res.redirect("login"); //if not logged in, if authUser isn't true, then boom redirect to login.
//       });
//   });

  

//   router.get("/newproject", authUser, (req, res) => {
//     res.render("newproject", {
//       layout: "main"
//     });
//   });
  
//   router.get("/edit/:id", authUser, (req, res) => {
//     Project.findByPk(req.params.id)
//       .then(dbPostData => {
//         if (dbPostData) {
//           const project = dbPostData.get({ plain: true });
          
//           res.render("edit-project", {
//             layout: "main",
//             project
//           });
//         } else {
//           res.status(404).end();
//         }
//       })
//       .catch(err => {
//         res.status(500).json(err);
//       });
//   });

//   router.get('/', (req, res) => {
//     Task.findAll({
        
//         attributes: [
//             'title',
//             'type',
//             'project_id',
//             'users_with_access',
//             'created_at'
//         ]
//     })
//     .then(dbTasksData => {
//         const tasks = dbTasksData.map((tasks) => tasks.get({plain: true}));
//         res.render('edit-project', {tasks:tasks})
//     })
    
// });

router.get('/api/users', (req, res) => {
   
});

router.get('/', (req, res) => {
    User.findAll({
        attributes: ['username']
    })
    .then(dbUserData => {
       // const users = dbUserData.map(users)
       const users = dbUserData.map(user=>user.get({plain:true}))
        // dbuserdata -> [{username: "Brandon"}, {username: "sam"}]
        res.render('edit-project', {users: users})
    })
    
})

  
module.exports = router;
