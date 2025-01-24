const express = require('express')
const IndexController = require('../controllers/IndexController')
const router = express.Router()

// Vistas de cliente
router.get('/', IndexController.home)

router.get('/all', IndexController.all)

router.get('/q', IndexController.q)

router.get('/detail/:id', IndexController.detail)



module.exports = router