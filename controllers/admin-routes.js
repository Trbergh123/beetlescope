const router = require('express');

const { Project } = require('../models');
const {authUser, authRole } = require('../utils/auth');

///get all projects
///get all issues
//update user role

//delete a user ---only admins should be able to delete users
router.delete('/:id', authUser, authRole(user_role.ADMIN), (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;