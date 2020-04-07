const mongodb = require('mongoose')
const Order = require('../../schemas/orderSchema')

exports.placeOrder = (req, res) => {
  const order = new Order({
    _id: new mongodb.Types.ObjectId,
    userId: req.body.userId,
    orderTotal: req.body.orderTotal,
    order: req.body.order
  })
  order.save()
    .then(() => {
      res.status(200).json({
        statusCode: 200,
        status: true,
        message: "Order was placed successfully"
      })
    })
    .catch(err => {
      res.status(500).json({
        statusCode: 500,
        status: false,
        message: "Order was not created, please contact admin"
      })
    })
}
exports.getOrders = (req, res) => {
  Order.find({ userId: req.params.userId }).then(orders => {
    return res.status(200).json({
      orders
    })
  }).catch(err => {
    res.status(500).json({
      statusCode: 500,
      status: false,
      message: "Could not get orders"
    })
  })
}