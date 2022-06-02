var Mongoose = require('mongoose'),
  Schema = Mongoose.Schema;

const QuizSchema = new Schema({
	name: { type: String },
	sortOrder: { type: Number }
});

module.exports = Mongoose.model('Quiz', QuizSchema);

const QuestionSchema = new Schema({
	unit: { type: Schema.Types.ObjectId },
	flash: { type: String },
	card: { type: String },
	sortOrder: { type: Number }
});

module.exports = Mongoose.model('Question', QuestionSchema);