var Mongoose = require('mongoose'),
  Schema = Mongoose.Schema;

var DocSchema = new Schema({
	name: { type: String },
	type: { type: String },
	file: {
		originalFilename: { type: String },
		fileName: { type: String },
		dateUploaded: { type: Date, default: Date.now }
	},
	sortOrder: { type: Number }
});

module.exports = Mongoose.model('Document', DocSchema);

var EventSchema = new Schema({
	title: { type: String },
	start: { type: String },
	allDay: { type: Boolean, default: false },
	sortOrder: { type: Number }
});

module.exports = Mongoose.model('Event', EventSchema);

var QuizSchema = new Schema({
	name: { type: String },
	sortOrder: { type: Number }
});

module.exports = Mongoose.model('Quiz', QuizSchema);

var QuestionSchema = new Schema({
	unit: { type: Schema.Types.ObjectId },
	flash: { type: String },
	card: { type: String },
	sortOrder: { type: Number }
});

module.exports = Mongoose.model('Question', QuestionSchema);

var PeopleSchema = new Schema({
	name: { type: String },
	username: { type: String },
	password: { type: String },
	role: { type: String }
});

module.exports = Mongoose.model('Person', PeopleSchema)


var CustomerProfileSchema = new Schema({
	name: { type: String },
	loyalityPoints: { type: Number},
	creditCardNo: { type: String },
	expirationDate: { type: String }
});

module.exports = Mongoose.model('CustomerProfile', CustomerProfileSchema)

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

var ReviewSchema = new Schema({
	product: { type: Schema.Types.ObjectId },
	review: { type: String},
    customerName: { type: String },
    creationDate: { type: Date, default: Date.now}
});

module.exports = Mongoose.model('Review', ReviewSchema)

var OrderSchema = new Schema({
    customer: { type: Schema.Types.ObjectId },
	price: { type: Number},
	status: { type: String }
});

module.exports = Mongoose.model('Orders', OrderSchema)