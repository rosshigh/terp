import {inject} from 'aurelia-framework';
import {Files} from './resources/data/files';

@inject(Files)
export class QuizTool {
	showQuestions = true;
	questionIndex = 0;

	constructor(filesModule){
		this.filesModule = filesModule;
	}

	async activate(){
        await this.filesModule.getQuizArray();
    }
    
    async selectQuiz(){
        await this.filesModule.getQuestionArray(this.selectedUnit);
        this.currentFlash = this.filesModule.questionArray[0].flash;
        this.currentCard = "";
    }

    previous(){
        this.questionIndex = this.questionIndex > 0 ? this.questionIndex - 1 : 0;
        this.currentFlash = this.filesModule.questionArray[this.questionIndex].flash;
        this.showCard = false;
    }

    next(){
        this.questionIndex = this.questionIndex  < this.filesModule.questionArray.length - 1 ? this.questionIndex + 1 : this.filesModule.questionArray.length - 1;
        this.currentFlash = this.filesModule.questionArray[this.questionIndex].flash;
        this.showCard = false;
    }    

    showFlashAnswer(){
        this.currentCard = this.filesModule.questionArray[this.questionIndex].card;
        this.showCard = true;
    }
}