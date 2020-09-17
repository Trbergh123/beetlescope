const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Project } = require('../models');
const {authUser, authRole } = require('../utils/auth');
//get all users
router.get('/api/users', (req, res) => {
   
});

router.get('/', (req, res) => {
    User.findAll({
        attributes: ['username']
    })
    .then(dbUserData => {
       // const users = dbUserData.map(users)
       const users = dbUserData.map(user=>user.get({plain:true}))
        // dbuserdata -> [{username: "Brandon"}, {username: "sam"}]
        res.render('admin', {users: users})
    })
    
})
//get user by id ---should also be logged in
// router.get('/:id', authUser, (req, res) => {
//     User.findOne({
//         attributes: { exclude: ['password'] },
//         where: {
//             id: req.params.id
//         }
//     })
//     .then(dbUserData => {
//         if (!dbUserData) {
//             res.status(404).json({ message: 'No user found with this id' });
//             return;
//         }
//         res.json(dbUserData);
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

///get all issues
//update user role
// router.put('/:id', (req, res) => {
//     User.update(req.body, {
//         individualHooks: true,
//         where: {
//             id: req.params.id
//         }
//     })
//     .then(dbUserData => {
//         if (!dbUserData[0]) {
//             res.status(404).json({ message: 'No user found with this id' });
//             return;
//         }
//         res.json(dbUserData);
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });


//delete a user ---only admins should be able to delete other users
// router.delete('/:id', authUser, authRole(user_role.ADMIN), (req, res) => {
//     User.destroy({
//         where: {
//             id: req.params.id
//         }
//     })
//     .then(dbUserData => {
//         if (!dbUserData) {
//             res.status(404).json({ message: 'No user found with this id' });
//             return;
//         }
//         res.json(dbUserData);
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });


module.exports = router;