const teams = [
    {id: "1", name: "Manchester United", color: ""},
    {id: "2", name: "Chelsea", color: ""},
    {id: "3", name: "Hotspurs", color: ""},
    {id: "4", name: "New Castle", color: ""},
    {id: "5", name: "AFC Richmond", color: ""},
]

function getAll(){
    return teams
};

function getOneById(id){
    //look through the array and find the matching ID
    const foundTeam = teams.find(team => team.id === id);
    return foundTeam;
}

function getOneByName(name){
    //look through the array and find the matching name
    const foundTeam = teams.find(team => team.name === name);
    return foundTeam;
}

module.exports = {
    getAll,
    getOneById,
    getOneByName
}