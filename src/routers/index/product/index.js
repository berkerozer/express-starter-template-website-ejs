const product = require('express').Router()

const list = require('./list')
const single = require('./single')

product.get('/', list)
product.get('/:_id', single)

module.exports = product