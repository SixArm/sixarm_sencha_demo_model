// See README.md

// Load everything
Ext.require(['*']);

Ext.onReady(function() {

    // Define a User Model
    Ext.define('User', {
	extend: 'Ext.data.Model',
	fields: [
            {name: 'name', type: 'string'},
            {name: 'email', type: 'string'}
	]
    });

    // Create an instance of the User Model
    var alice = Ext.create('User', {name: 'Alice', email: 'alice@example.com'});

    // Print some output
    console.log(alice.get('name') + ' ' + alice.get('email'));

});


