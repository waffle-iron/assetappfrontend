import DS from 'ember-data';

export default DS.Model.extend({
    longname: DS.attr('string'),
    name: DS.attr('string'),
    country: DS.belongsTo('country', {inverse: 'offices', async: false}),
    assets: DS.hasMany('asset'),
});
