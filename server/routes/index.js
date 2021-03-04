const express = require("express");
const router = express.Router();

const NaversController = require("../controllers/NaversController");

router.get('/api/navers', NaversController.index);
router.post('/api/navers', NaversController.store);

module.exports = router;