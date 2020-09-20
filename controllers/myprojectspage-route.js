const { Project } = require('../models');

const router = require('express').Router();


router.get('/', (req, res) => {
    Project.findAll({
        
        attributes: [
            'title',
            'project_text',
            'priority',
            'status',
            'user_id',
            'created_at'
        ]
    })
    .then(dbProjectData => {
        const projects = dbProjectData.map((projects) => projects.get({plain: true}));
        res.render('myprojects', {projects:projects})
    })
    
})

module.exports = router;