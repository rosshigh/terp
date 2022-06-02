import {inject} from 'aurelia-framework';
import {QuizServices} from '../../resources/data/quiz';

@inject(QuizServices)
export class EditQuiz {
	showQuestions = true;
	questionIndex = 0;

	constructor(quiz){
		this.quiz = quiz;
	}

	async activate(){
        await this.quiz.getQuizArray();
        this.showTable = true;
    }

    async selectQuiz(){
        await this.quiz.getQuestionArray(this.selectedUnit);
        this.currentFlash = this.quiz.questionArray[0].flash;
        this.currentCard = "";
    }

    async selectQuestion(question){
        await this.quiz.getQuestion(question._id);
        this.showTable = false;
    }

    async saveQuestion(){
        await this.quiz.saveQuestion();
        await this.selectQuiz();
        this.showTable = true;
    }

    back(){
        this.showTable = true;
    }

    newQuestion(){
        this.quiz.newQuestion(this.selectedUnit);
        this.showTable = false;
    }

    async deleteQuestion(){
        this.quiz.deleteQuestion();
        await this.selectQuiz();
        this.showTable = true;
    }

}