import {inject} from 'aurelia-framework';
import {Files} from './resources/data/files';

@inject(Files)
export class Admin {
	files= [];
	docSelected = false;
	answer = "";
	right = false;
	toolbar = [
		['style', ['style', 'bold', 'italic', 'underline','clear']],
		['color', ['color']],
		['font', ['strikethrough', 'superscript', 'subscript']],
		['layout', ['ul', 'ol', 'paragraph']],
		['insert', [ 'link', 'table', 'hello']],
		['misc', ['undo', 'redo', 'fullscreen', 'codeview']]
	];
	tool = 'quizDiv';
	showQuestions = true;
	questionIndex = 0;

	constructor(filesModule){
		this.filesModule = filesModule;
		this.selectedType = "";
	}

	async activate(){
		this.filesModule.selectFile();
		await this.filesModule.getDocumentsArray();
		await this.filesModule.getQuizArray();
		// this.filesModule.selectQuestion();
	}

	changeFiles(){
        this.filesToUpload = new Array(); 
        this.filesToUpload.push(this.files[0]); 
        this.filesModule.selectedFile.file.fileName = this.filesToUpload[0].name;
    }

	removeFile(index){
        this.filesToUpload.splice(index,1);
	}
	
	async save(){
		if(this.filesModule.selectedFile.name){
			await this.filesModule.saveFile();
			this.docSelected = false;
			if(this.filesToUpload && this.filesToUpload.length) await this.filesModule.uploadFile(this.filesToUpload);
			this.filesToUpload = [];
			this.filesModule.selectFile();
		}
	}

	filterList(){
		// this.filesModule.filterList(this.selectedType);
		this.filesModule.getDocsByType(this.selectedType);
	}

	selectDoc(doc){
		this.filesModule.selectFile();
		this.filesModule.setDoc(doc);
		this.docSelected = true;
	}

	removeDocument(doc){
		this.filesModule.deleteDoc(this.filesModule.selectedFile._id);
		this.filterList();
	}

	async saveQuiz(){
		if(this.filesModule.selectedQuiz.name){
			await this.filesModule.saveQuiz();
		}
	}

	async selectQuiz(quiz){
		this.filesModule.setQuiz(quiz);
		this.quizSelected = true;
		await this.filesModule.getQuestionArray(this.filesModule.selectedQuiz._id);
		this.questionIndex = 0;
		this.filesModule.selectQuestion(this.questionIndex);
	}

	removeQuiz(quiz){
		this.filesModule.deleteQuiz(quiz._id);
	}

	addAnswer(){
		this.filesModule.selectedQuestion.answers.push({answer: this.answer, right: this.right});
		this.answer = "";
		this.right = false;
	}

	toggleRight(answer){
		for(let i = 0; i < this.filesModule.selectedQuestion.answers.length; i++){
			if(this.filesModule.selectedQuestion.answers[i].answer === answer.answer){
				this.filesModule.selectedQuestion.answers[i].right = !this.filesModule.selectedQuestion.answers[i].right;
				break;
			}
		}
	}

	saveQuestion(){
		if(this.filesModule.selectedQuestion.flash && this.filesModule.selectedQuestion.card){
			this.filesModule.saveQuestion();
			this.filesModule.selectQuestion();
		}
		
	}

	showFiles(){
		this.tool = 'filesDiv';
	}

	showQuiz(){
		this.tool = "quizDiv";
	}

	toggleQuestions(){
		this.filesModule.selectQuestion();
		this.showQuestions = !this.showQuestions;
		if(this.showQuestions) {
			this.questionIndex = this.previousIndex;
			this.filesModule.selectQuestion(this.questionIndex);
		} else {
			this.previousIndex = this.questionIndex;
		}
	}

	nextQuestion(increment){
		if(increment === -1){
			this.questionIndex = this.questionIndex > 0 ? this.questionIndex - 1 : 0;
		} else {
			this.questionIndex = this.questionIndex < this.filesModule.questionArray.length - 1 ? this.questionIndex + 1 : this.filesModule.questionArray.length - 1 ;
		}
		this.filesModule.selectQuestion(this.questionIndex);
	}

	async deleteQuestion(){
		this.filesModule.deleteQuestion(this.filesModule.selectedQuestion._id);
		await this.filesModule.getQuestionArray(this.filesModule.selectedQuiz._id);
		this.nextQuestion(-1);
	}
}