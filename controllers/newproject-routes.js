const router = require('express').Router();
const { Project, User } = require('../models');
const { authUser } = require('../utils/auth.js');

router.get('/api/users', (req, res) => {
    User.findAll({
        attributes: ['username']
        
    })
    .then(dbUserData => {
        const users = dbUserData.map(user.get)
        res.json('newproject', { users })
    })
     
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
        })
});

router.get('/', (req, res) => {
    res.render('newproject')
})


module.exports = router;