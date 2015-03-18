import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'http://wp.dev',
	namespace: 'soul/wp-json/wp'
});