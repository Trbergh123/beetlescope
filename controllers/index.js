const router = require('express').Router();
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboard-routes.js');
const adminRoutes = require('./admin-routes.js');


router.use('/', dashboardRoutes);
router.use('/api', apiRoutes);
router.use('/admin', adminRoutes);
// router.use((req, res) => {
//     res.status(404).end();
// });

module.exports = router;