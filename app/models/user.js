import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	firstName: DS.attr('string'),
	lastName: DS.attr('string'),
	posts: DS.hasMany('post'),
	avatarUrl: DS.attr('string'),
	url: DS.attr('string'),
	description: DS.attr('string')
});
