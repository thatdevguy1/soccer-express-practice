const teamsDb = require("../database/teams");

function index(req, res, next) {
    const context = {
      teams: teamsDb.getAll()
    }
    res.render('teams/index.ejs', context);
  }

function newTeam(req, res){
  res.render('teams/newTeam.ejs')
}

function create(req, res){
  //Create the team in our "Database"
  teamsDb.addTeam(req.body)
  //redirect to the index
  res.redirect('/teams')
}

module.exports = {
    index, 
    new: newTeam,
    create
}