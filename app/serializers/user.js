import DS from 'ember-data';
import SerializerMixin from 'prom/mixins/wp-api-serializer';

export default DS.RESTSerializer.extend( SerializerMixin, {
	normalize: function( type, hash ) {
		return hash;
	}
});