import Ember from 'ember';

function camelizeAttrs( obj ) {
	var newObject = {};
	Object.keys( obj ).forEach( function( key ){
		var newKey = key.camelize();
		newObject[ newKey ] = obj[ key ];
	});
	return newObject;
}

export default Ember.Mixin.create({
	extract: function( store, type, payload, id, requestType ) {
		var key = type.toString().replace( /:$/, '' ).split( ':' ).pop();
		var newPayload = {};

		if ( Ember.isArray( payload ) ) {
			payload = payload.map( camelizeAttrs );
		} else {
			payload = camelizeAttrs( payload );
		}

		newPayload[ key ] = payload;
		console.log( "EXTRACT", newPayload );
		return this._super(store, type, newPayload, id, requestType);
	}
});