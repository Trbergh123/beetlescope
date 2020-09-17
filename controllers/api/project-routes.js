const router = require('express').Router();
const { Project, User } = require('../../models');

// get all
router.get('/', (req, res) => {
    
    Project.findAll({
        attributes: [
            'id',
            'title',
            'project_text',
            //'priority',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbProjectData => res.json(dbProjectData))
   
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Project.findOne({
        attributes: [
            'id',
            'title',
            'project_text',
            //'priority',
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

router.post('/', (req, res) => {
    Project.create({
        title: req.body.title,
        project_text: req.body.project_text,
        //priority: req.body.priority,
        users_with_access: req.body.users_with_access
    })
    .then(dbProjectData => res.json(dbProjectData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
    Project.update(req.body, {
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

router.delete('/:id', (req, res) => {
    Project.destroy({
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