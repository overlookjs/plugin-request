/* --------------------
 * @overlook/plugin-request module
 * Tests
 * CJS export
 * ------------------*/

'use strict';

// Modules
const Plugin = require('@overlook/plugin'),
	requestPlugin = require('@overlook/plugin-request');

// Imports
const itExports = require('./exports.js');

// Tests

describe('CJS export', () => { // eslint-disable-line jest/lowercase-name
	it('is an instance of Plugin class', () => {
		expect(requestPlugin).toBeInstanceOf(Plugin);
	});

	describe('has properties', () => {
		itExports(requestPlugin);
	});
});
