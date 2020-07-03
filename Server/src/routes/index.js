const { Router } = require('express');
const router = Router();

const { getCollaborators } = require('../controllers/index.controller');

router.get('/collaborators', getCollaborators);

module.exports = router;
