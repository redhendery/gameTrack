import DS from 'ember-data';

export default DS.Model.extend({
  home: DS.attr(),
  away: DS.attr(),
  venue: DS.attr(),
  timeAndDate: DS.attr(),
  homeLineup: DS.attr(),
  awayLineup: DS.attr(),
  homeCoach: DS.attr(),
  awayCoach: DS.attr(),
  officials: DS.attr(),
  scratchPlayers: DS.attr()
});
