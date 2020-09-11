const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Project, Issue, Comment } = require('../models');
const { authUser } = require('../utils/auth');

///get all projects for dashboard --so we have something to display for now
router.get('/', authUser, (req, res) => {
    console.log(req.session);
    console.log('==============');
    Project.findAll({
        where: {
            user_id: req.session.user_id
        },
        //double check we have attributes right
        attributes: [
            'id',
            'title',
            'user_id',
            'users_with_access',
            'created_at'
        ]

    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
