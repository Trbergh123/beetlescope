const router = require('express').Router();
const { Project, User, Task } = require('../models');
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
        res.render('newtask', {users: users});
    })
    
})
router.post('/', (req, res) => {
    Task.create({
        title: req.body.title,
        task_text: req.body.project_text,
        priority: req.body.priority,
        status: req.body.status,
        user_id: req.session.user_id,
        type: req.body.type,
        project_id: req.body.project_id

    })
    .then(dbTaskData => res.json(dbTaskData))
    const newTask = dbTaskData.map(newTask=>newTask.post({plain:true}))
    //res.render('mytasks', {newTask:newTask} )
});


module.exports = router;