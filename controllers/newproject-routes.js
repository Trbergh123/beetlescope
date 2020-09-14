const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('newproject')
})

module.exports = router;