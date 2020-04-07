const route = require('express').Router()
const orderModel = require('../models/order/orderModel')

//guard
const auth = require('../guards/authorize')

route.get('/:userId', auth.verifyToken, orderModel.getOrders)

route.post('/add', auth.verifyToken, orderModel.placeOrder)

module.exports = route