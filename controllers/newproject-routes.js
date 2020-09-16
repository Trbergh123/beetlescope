const router = require('express').Router();
const { Project, User } = require('../models');
const { authUser } = require('../utils/auth.js');

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
        res.render('newproject', {users: users})
    })
    
})

router.put('/', (req, res) => {
    Project.create({
        title: req.body.title,
        project_text: req.body.project_text,
        user_id: req.params.user_id,
        users_with_access: req.body.users_with_access
        

    })
    .then(dbProjectData => res.json(dbProjectData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;