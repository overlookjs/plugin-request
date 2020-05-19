/* --------------------
 * @overlook/plugin-request module
 * Entry point
 * ------------------*/

'use strict';

// Modules
const Plugin = require('@overlook/plugin');

// Imports
const pkg = require('../package.json');

// Exports

module.exports = new Plugin(
	pkg,
	{symbols: ['REQ_TYPE', 'PATH']},
	// Add no methods - plugin is only intended to be used for its symbols
	Route => class RequestRoute extends Route {}
);
