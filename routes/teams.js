var express = require('express');
var router = express.Router();
const teamsCtrl = require("../controllers/teams"); 
const teams = require('../controllers/teams');

router.get('/', teamsCtrl.index);
router.get('/new', teamsCtrl.new);
router.post('/', teamsCtrl.create);

module.exports = router;
