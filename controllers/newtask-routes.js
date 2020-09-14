const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('newtask')
})

module.exports = router;