const router = require('express').Router();
const { Project, User } = require('../models');
const { authUser } = require('../utils/auth.js');

router.get('/api/users', (req, res) => {
    User.findAll({
        attributes: ['username']
        
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/', (req, res) => {
    res.render('newproject')
})


module.exports = router;