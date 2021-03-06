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
	// Return class unchanged - plugin is only intended to be used for its symbols
	Route => Route
);
