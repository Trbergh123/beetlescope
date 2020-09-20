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
        res.render('newproject', {users: users});
    })
    
})

router.post('/', (req, res) => {
    Project.create({
        title: req.body.title,
        project_text: req.body.project_text,
        priority: req.body.priority,
        status: req.body.status,
        user_id: req.session.user_id
    })
    .then(dbProjectData => res.json(dbProjectData))
    const newProject = dbProjectData.map(newProject=>newProject.post({plain:true}))
    res.render('myprojects', {newProject:newProject} )
});


module.exports = router;