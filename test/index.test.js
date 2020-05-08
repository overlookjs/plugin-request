/* --------------------
 * @overlook/plugin-request module
 * Tests
 * ------------------*/

'use strict';

// Modules
const requestPlugin = require('@overlook/plugin-request');

// Init
require('./support/index.js');

// Tests

describe('tests', () => {
	it.skip('all', () => { // eslint-disable-line jest/no-disabled-tests
		expect(requestPlugin).not.toBeUndefined();
	});
});
