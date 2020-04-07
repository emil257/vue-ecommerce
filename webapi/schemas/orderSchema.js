const mongodb = require('mongoose')

const orderSchema = mongodb.Schema({
  _id: mongodb.Schema.Types.ObjectId,
  userId: { type: String, required: true },
  order: { type: Array, required: true },
  orderTotal: { type: Number, required: true },

  created: { type: Date, default: Date.now }
})

module.exports = mongodb.model("Order", orderSchema)