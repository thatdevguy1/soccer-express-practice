var express = require('express');
var router = express.Router();
const indexCtrl = require("../controllers/users")

/* GET users listing. */

// /users/
router.get('/', indexCtrl.index);

// /users/find
router.get('/find', function(req, res){
  res.send('found a user')
})

module.exports = router;
