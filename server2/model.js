var Mongoose = require('mongoose'),
  Schema = Mongoose.Schema;

  var CustomerProfileSchema = new Schema({
	name: { type: String },
	loyalityPoints: { type: Number},
	creditCardNo: { type: String },
	expirationDate: { type: String }
});

module.exports = Mongoose.model('CustomerProfile', CustomerProfileSchema)

var ProductSchema = new Schema({
	name: { type: String },
	price: { type: Number},
	description: { type: String },
    photo: { type: String },
});

module.exports = Mongoose.model('Product', ProductSchema)

var RecipeSchema = new Schema({
	productId: { type: Schema.Types.ObjectId }, 
	name: { type: String },
	calories: { type: Number}
});

module.exports = Mongoose.model('Ingredients', RecipeSchema)

var ReviewSchema = new Schema({
	product: { type: Schema.Types.ObjectId },
	review: { type: String},
    customerName: { type: String },
    creationDate: { type: Date, default: Date.now}
});

module.exports = Mongoose.model('Review', ReviewSchema)

var OrderSchema = new Schema({
    customerId: { type: Schema.Types.ObjectId },
	productId: { type: Schema.Types.ObjectId },
	price: { type: Number},
	status: { type: String, default: 'New' }
});

module.exports = Mongoose.model('Orders', OrderSchema)

var FavoritesSchema = new Schema({
	customerId: { type: Schema.Types.ObjectId },
	productId: { type: Schema.Types.ObjectId }, 
});

module.exports = Mongoose.model('Favorites', FavoritesSchema)

var PromotionsSchema = new Schema({
	productId: { type: Schema.Types.ObjectId }, 
	dateEnds: { type: Date },
	price: { type: Number }
});

module.exports = Mongoose.model('Promotions', PromotionsSchema)