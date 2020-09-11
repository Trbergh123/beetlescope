const router = require('express').Router();
const apiRoutes = require('./api');
const dashRoutes = require('./dashboard-routes');

router.use('/api', apiRoutes);
router.use('/', dashRoutes);
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;