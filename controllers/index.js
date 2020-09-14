const router = require('express').Router();
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboard-routes.js');
const adminRoutes = require('./admin-routes.js');
const myprojectRoutes = require('./myprojectspage-route');
const newprojectRoutes = require('./newproject-routes');


router.use('/', dashboardRoutes);
router.use('/api', apiRoutes);
router.use('/admin', adminRoutes);
router.use('/myprojects', myprojectRoutes);
router.use('/newproject', newprojectRoutes);
// router.use((req, res) => {
//     res.status(404).end();
// });

module.exports = router;