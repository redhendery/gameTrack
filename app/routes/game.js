import Ember from 'ember';

let game = [{
  home: 'Canterbury Red Devils',
  away: 'Dunedin Thunder',
  venue: 'Dunedin Ice Stadium',
  timeAndDate: 'Saturday July 3rd 4:45pm',
  homeLineup: 'Home team goes here',
  awayLineup: 'Away team goes here',
  homeCoach: 'Steve the coach',
  awayCoach: 'Dave the coach',
  officials: 'That guy Ryan from Christchurch',
  scratchPlayers: 'Aaron Bryant',
  // image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
}, {
  home: 'West Auckland Admirals',
  away: 'Botany Swarm',
  venue: 'Paradice Botany',
  timeAndDate: 'Saturday July 3rd 5pm',
  homeLineup: 'Home team goes here',
  awayLineup: 'Away team goes here',
  homeCoach: 'Mike the coach',
  awayCoach: 'Owen the coach',
  officials: 'several officials',
  scratchPlayers: 'Sammy Sasstomoinen',
  // image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
}, {
  home: 'Canterbury Red Devils',
  away: 'Dunedin Thunder',
  venue: 'Dunedin Ice Stadium',
  timeAndDate: 'Saturday July 3rd 4:45pm',
  homeLineup: 'Home team goes here',
  awayLineup: 'Away team goes here',
  homeCoach: 'Steve the coach',
  awayCoach: 'Dave the coach',
  officials: 'That guy Ryan from Christchurch',
  scratchPlayers: 'Aaron Bryant',
  // image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
}, {
  home: 'West Auckland Admirals',
  away: 'Botany Swarm',
  venue: 'Paradice Botany',
  timeAndDate: 'Saturday July 3rd 5pm',
  homeLineup: 'Home team goes here',
  awayLineup: 'Away team goes here',
  homeCoach: 'Mike the coach',
  awayCoach: 'Owen the coach',
  officials: 'several officials',
  scratchPlayers: 'Sammy Sasstomoinen',
  // image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
}];

export default Ember.Route.extend({
  model() {
    return game;
  }
});
