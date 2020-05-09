/* --------------------
 * @overlook/plugin-request module
 * Tests
 * Test function to ensure all exports present
 * ------------------*/

/* eslint-disable jest/no-export */

'use strict';

// Exports

module.exports = function itExports(plugin) {
	it.each([
		'REQ_TYPE', 'PATH'
	])('%s', (key) => {
		expect(typeof plugin[key]).toBe('symbol');
	});
};
