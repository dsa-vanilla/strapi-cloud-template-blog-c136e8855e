'use strict';

/**
 * fast-channel service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fast-channel.fast-channel');
