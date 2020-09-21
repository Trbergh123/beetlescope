
const { Task } = require('../models');

const router = require('express').Router();


router.get('/', (req, res) => {
    Task.findAll({
        
        attributes: [
            'title',
            'task_text',
            'priority',
            'status',
            'user_id',
            'created_at',
            'type'
        ]
    })
    .then(dbProjectData => {
        const projects = dbProjectData.map((projects) => projects.get({plain: true}));
        res.render('mytasks', {projects:projects})
    })
    
})

module.exports = router;

