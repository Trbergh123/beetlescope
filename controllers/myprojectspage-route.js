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
    });
    
});

router.get('/:id', (req, res) => {
    Project.findOne({
        attributes: [
            'id',
            'title',
            'project_text',
            'priority',
            'status',
            'user_id',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: [
                    'id',
                    'user_role',
                    'username',
                    'email'
                ]
            }
        ],
        where: {
            id: req.params.id
        }
    })
    .then(dbProjectData => {
        if (!dbProjectData) {
            res.status(404).json({ message: 'No project found with this id' });
            return;
        }
        res.json(dbProjectData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;