/* --------------------
 * @overlook/plugin-request module
 * ESM entry point
 * Re-export CJS with named exports
 * ------------------*/

// Exports

import requestPlugin from '../lib/index.js';

export default requestPlugin;
export const {
	REQ_TYPE,
	PATH
} = requestPlugin;
