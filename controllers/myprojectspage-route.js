const { Project } = require('../models');

const router = require('express').Router();


router.get('/', (req, res) => {
    Project.findAll({
        
        attributes: [
            'title',
            'project_text',
            'users_with_access',
            'created_at'
        ]
    })
    .then(dbProjectData => {
        const projects = dbProjectData.map((projects) => projects.get({plain: true}));
        res.render('myprojects', {projects:projects})
    })
    
})

module.exports = router;