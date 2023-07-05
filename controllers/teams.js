const teamsDb = require("../database/teams");

function index(req, res, next) {
    const context = {
      teams: teamsDb.getAll()
    }
    res.render('teams/index.ejs', context);
  }

module.exports = {
    index
}