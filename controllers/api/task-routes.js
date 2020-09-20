const router = require('express').Router();
const { Task, User, Project } = require('../../models');

router.get('/', (req, res) => {
    Task.findAll({
        attributes: [
            'id',
            'title',
            'type',
            'priority',
            'status',
            'project_id',
            'user_id'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Project,
                attributes: ['title']
            }
        ]
    })
    .then(dbTaskData => res.json(dbTaskData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Task.findOne({
        attributes: [
            'id',
            'title',
            'type',
            'priority',
            'status',
            'project_id',
            'user_id'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Project,
                attributes: ['title']
            }
        ],
        where: {
            id: req.params.id
        }
    })
    .then(dbTaskData => {
        if (!dbTaskData) {
            res.status(404).json({ message: "No task found with this id" });
            return;
        }
        res.json(dbTaskData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Task.create({
        title: req.body.title,
        type: req.body.type,
        priority: req.body.priority,
        status: req.body.status,
        project_id: req.body.project_id,
        user_id: req.body.user_id
    })
    .then(dbTaskData => {
        // session data
        res.json(dbTaskData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
    Task.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(dbTaskData => {
        if (!dbTaskData) {
            res.status(404).json({ message: 'No task found with this id' });
            return;
        }
        res.json(dbTaskData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Task.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbTaskData => {
        if (!dbTaskData) {
            res.status(404).json({ message: 'No Task found with this is' });
            return;
        }
        res.json(dbTaskData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;