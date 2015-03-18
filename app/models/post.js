import DS from 'ember-data';

var posts = DS.Model.extend({
	title: DS.attr('string'),
	content: DS.attr('string'),
	author: DS.belongsTo('user', {async: true}),
	//comments: DS.hasMany('comment'),
	//format: DS.attr('string')
});

export default posts;