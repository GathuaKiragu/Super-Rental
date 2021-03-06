import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  ratiing: DS.attr(),
  content: DS.attr(),
  rentals: DS.belongsTo('rental', {async: true})
});
