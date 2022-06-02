import {inject} from 'aurelia-framework';
import {QuizServices} from '../../resources/data/quiz';

@inject(QuizServices)
export class QuizTool {
	showQuestions = true;
	questionIndex = 0;

	constructor(quiz){
		this.quiz = quiz;
	}

	async activate(){
        await this.quiz.getQuizArray();
    }
    
    async selectQuiz(){
        await this.quiz.getQuestionArray(this.selectedUnit);
        this.currentFlash = this.quiz.questionArray[0].flash;
        this.currentCard = "";
    }

    previous(){
        this.questionIndex = this.questionIndex > 0 ? this.questionIndex - 1 : 0;
        this.currentFlash = this.quiz.questionArray[this.questionIndex].flash;
        this.showCard = false;
    }

    next(){
        this.questionIndex = this.questionIndex  < this.quiz.questionArray.length - 1 ? this.questionIndex + 1 : this.quiz.questionArray.length - 1;
        this.currentFlash = this.quiz.questionArray[this.questionIndex].flash;
        this.showCard = false;
    }    

    showFlashAnswer(){
        this.currentCard = this.quiz.questionArray[this.questionIndex].card;
        this.showCard = true;
    }
}