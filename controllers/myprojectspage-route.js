const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('myprojects')
})

module.exports = router;