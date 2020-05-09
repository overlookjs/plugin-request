/* --------------------
 * @overlook/plugin-request module
 * Tests
 * ESM export
 * ------------------*/

// Modules
import Plugin from '@overlook/plugin';
import requestPlugin, * as namedExports from '@overlook/plugin-request/es';

// Imports
import itExports from './exports.js';

// Tests

describe('ESM export', () => { // eslint-disable-line jest/lowercase-name
	it('is an instance of Plugin class', () => {
		expect(requestPlugin).toBeInstanceOf(Plugin);
	});

	describe('default export has properties', () => {
		itExports(requestPlugin);
	});

	describe('named exports', () => {
		itExports(namedExports);
	});
});
