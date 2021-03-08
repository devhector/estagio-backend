const express = require("express");
const router = express.Router();

const NaversController = require("../controllers/NaversController");
const ProjectsController = require("../controllers/ProjectsController");


router.get('/api/navers', NaversController.index);
router.get('/api/navers/:id', NaversController.show);
router.post('/api/navers', NaversController.store);


router.get('/api/projects', ProjectsController.index);
router.get('/api/projects/:id', ProjectsController.show);
router.post('/api/projects', ProjectsController.store);


module.exports = router;