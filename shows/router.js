const router = require ('express').Router();

router.get('/', (req, res) =>{
    res.json({ router: "shows"});
})

module.exports = router;