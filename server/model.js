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