'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
 // API_HOST: '"https://dev-swagger.ecosaas.com/ecosaasci"'  
 API_HOST: '"https://dev-web.ecosaas.com"'
})