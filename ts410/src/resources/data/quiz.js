import { inject } from 'aurelia-framework';
import { DataServices } from '../data/dataServices';

@inject(DataServices)
export class QuizServices {
	QUIZ_URL = 'quiz';
	QUESTION_URL = 'question';

	constructor(data) {
		this.data = data;
	}

	//Quizzes
	async getQuizArray() {
		this.quizzesArray = new Array();
		try {
			let serverResponse = await this.data.get("quizzes?order=sortOrder");
			if (!serverResponse.status) {
				this.quizzesArray = serverResponse;
			} else {
				return undefined;
			}
		} catch (error) {
			console.log(error);
			return undefined;
		}
	}

	selectQuiz(index) {
		if (!index) {
			this.selectedQuiz = this.emptyQuiz();
		}
	}

	setQuiz(doc) {
		this.selectedQuiz = doc;
	}

	emptyQuiz() {
		let obj = {};
		obj.name = "";
		return obj;
	}

	async saveQuiz() {
		if (!this.selectedQuiz) {
			return;
		}

		if (!this.selectedQuiz._id) {
			await this.data.saveObject(this.selectedQuiz, "quizzes", "post");
			await this.getQuizArray();
		} else {
			await this.data.saveObject(this.selectedQuiz, "quizzes/" + this.selectedQuiz._id, "put");
			await this.getQuizArray();
		}

	}

	async deleteQuiz(id) {
		if (id) {
			await this.data.deleteObject("quizzes/" + id);
			await this.getQuizArray();
			this.emptyQuiz();
		}
	}

	//Questions
	async getQuestionArray(id) {
		this.questionArray = new Array();
		try {
			let serverResponse = await this.data.get("questions/quiz/" + id);
			if (!serverResponse.status) {
				this.questionArray = serverResponse;
				this.questionArray.forEach(item => {
					item.sortOrder = Math.random();
				});
				for (let i = 0; i < this.questionArray.length; i++) {
					for (let j = 0; j < this.questionArray.length - 1; j++) {
						if (this.questionArray[j].sortOrder < this.questionArray[j + 1].sortOrder) {
							let temp = this.questionArray[j];
							this.questionArray[j] = this.questionArray[j + 1];
							this.questionArray[j + 1] = temp;
						}
					}
				}
			} else {
				return undefined;
			}
		} catch (error) {
			console.log(error);
			return undefined;
		}
	}

	selectQuestion(index) {
		if (!index && index !== 0) {
			this.selectedQuestion = this.emptyQuestion();
		} else {
			this.selectedQuestion = this.questionArray[index];
		}
	}

	async getQuestion(id) {
		let response = await this.data.get("questions/" + id);
		this.selectedQuestion = response;
	}

	setQuestion(doc) {
		this.selectedQuestion = doc;
	}

	newQuestion(quizID) {
		this.selectedQuestion = this.emptyQuestion(quizID);
	}

	emptyQuestion(quizID) {
		let obj = {};
		obj.unit = quizID;
		obj.flash = "";
		obj.card = "";
		return obj;
	}

	async saveQuestion() {
		if (!this.selectedQuestion) {
			return;
		}

		if (!this.selectedQuestion._id) {
			await this.data.saveObject(this.selectedQuestion, "questions", "post");
		} else {
			await this.data.saveObject(this.selectedQuestion, "questions/" + this.selectedQuestion._id, "put");
		}

	}

	async deleteQuestion() {
		if (!this.selectedQuestion) {
			return;
		}
		await this.data.deleteObject("questions/" + this.selectedQuestion._id);
	}
}