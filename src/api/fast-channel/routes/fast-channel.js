'use strict';

/**
 * fast-channel router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::fast-channel.fast-channel');
