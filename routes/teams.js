var express = require('express');
var router = express.Router();
const teamsCtrl = require("../controllers/teams"); 
const teams = require('../controllers/teams');

router.get('/', teamsCtrl.index);
// /teams/new
router.get('/new', teamsCtrl.new);
router.post('/', teamsCtrl.create);
// /teams/<any value>
router.get('/:id', teamsCtrl.show);

module.exports = router;
