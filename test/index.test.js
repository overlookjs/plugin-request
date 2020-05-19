/* --------------------
 * @overlook/plugin-request module
 * Tests
 * ------------------*/

'use strict';

// Modules
const Plugin = require('@overlook/plugin'),
	Route = require('@overlook/route'),
	requestPlugin = require('@overlook/plugin-request');

// Init
require('./support/index.js');

// Tests

describe('plugin', () => {
	it('is a Plugin', () => {
		expect(requestPlugin).toBeInstanceOf(Plugin);
	});

	it('when passed to `Route.extend()`, returns Route unchanged', () => {
		const RequestRoute = Route.extend(requestPlugin);
		expect(RequestRoute).toBe(Route);
	});
});
