/* --------------------
 * @overlook/plugin-request module
 * Tests
 * ------------------*/

'use strict';

// Modules
const Plugin = require('@overlook/plugin'),
	requestPlugin = require('@overlook/plugin-request');

// Init
require('./support/index.js');

// Tests

describe('plugin', () => {
	it('is a Plugin', () => {
		expect(requestPlugin).toBeInstanceOf(Plugin);
	});
});
