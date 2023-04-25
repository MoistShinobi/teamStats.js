const team = {
  _players: [{firstName: 'Rhys', lastName: 'Dickenson', age: 28},
  {firstName: 'Amy', lastName: 'Todd', age: 27},
  {firstName: 'Blake', lastName: 'Dickenson', age: 24}],
  _games: [{opponent: 'MAQWET', teamPoints: 88, opponentPoints: 66},
  {opponent: 'landDownUnder', teamPoints: 97, opponentPoints: 54},
  {opponent: 'Tarnished Tigers', teamPoints: 63, opponentPoints: 84}],

  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge){
    const player = {
      firstName: 'Chris' ,
      lastName: 'Dickenson',
      age: 55
    }
    this._players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    const game = {
      opponent: 'Teeny Tinies',
      teamPoints: 34,
      opponentPoints: 76
    }
    this._games.push(game)
  }
};

team.addGame();
team.addPlayer();
console.log(team.players);
console.log(team.games);
