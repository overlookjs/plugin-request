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

	describe('exposes symbols', () => {
		it.each(['REQ_TYPE', 'PATH'])('%s', (name) => {
			expect(typeof requestPlugin[name]).toBe('symbol');
		});
	});
});
