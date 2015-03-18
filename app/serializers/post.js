import DS from 'ember-data';
import SerializerMixin from 'prom/mixins/wp-api-serializer';

export default DS.RESTSerializer.extend( SerializerMixin, {
	normalize: function( type, hash ) {
		hash.title = hash.title.rendered;
		hash.content = hash.content.rendered;
		return hash;
	}
});