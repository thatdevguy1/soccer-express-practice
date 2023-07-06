const Team = require("../models/team");

async function index(req, res, next) {

  const allTeams = await Team.find();

    // Team.find({}, function(err, allTeams){

    // })

    const context = {
      teams: allTeams
    }

    res.render('teams/index.ejs', context);

  }

function newTeam(req, res){
  res.render('teams/newTeam.ejs')
}

//req.body = {name: "the name", color: "the color"}
async function create(req, res){
  //Create the team in our "Database"
  await Team.create(req.body)
  //redirect to the index
  res.redirect('/teams')
}

async function show(req, res){
  const team = await Team.findById(req.params.id)
  res.render("teams/show.ejs", {team})
}

module.exports = {
    index, 
    new: newTeam,
    create,
    show
}