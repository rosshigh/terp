import {inject} from 'aurelia-framework';
import {DataServices} from './data-services';

@inject(DataServices)
export class Files {

    constructor(data) {
		this.data = data;  
	}

	async getDocumentsArray(filter) {
		this.documentsArray = new Array(); 
		let url = filter ? "docs" + filter : "docs";
		try {
			let serverResponse = await this.data.get(url);
			if (!serverResponse.status) {
				this.documentsArray = serverResponse;
			} else {
				return undefined;
			}
		} catch (error) {
			console.log(error);
			return undefined;
		}
	}
	
	async getDocsByType(type){
		this.filteredList = new Array(); 
		try {
			let serverResponse = await this.data.get("docs/type/" + type);
			if (!serverResponse.status) {
				this.filteredList = serverResponse;
			} else {
				return undefined;
			}
		} catch (error) {
			console.log(error);
			return undefined;
		}
	}

	selectFile(index){
		if(index === undefined){
			this.selectedFile = this.emptyFile();
		}
	}

	setDoc(doc){
		this.selectedFile = doc;
	}

	emptyFile(){
		let obj = {};
		obj.name = "";
		obj.type = "QUIZ";
		obj.sortOrder = 0;
		obj.file = {
			fileName: "",
			originalFilename: ""
		};
		return obj;
	}

	async saveFile() {
        if (!this.selectedFile) {
            return;
        }

        if (!this.selectedFile._id) {
			let response = await this.data.saveObject(this.selectedFile, "docs", "post");
			this.selectedFile = response;
        } else {
            await this.data.saveObject(this.selectedFile, "docs/" + this.selectedFile._id, "put");
        }

    }

    uploadFile(files){
		console.log(this.selectedFile)
        let path = this.selectedFile.type + "/" + this.selectedFile._id;
       this.data.uploadFiles(files, "/docs/upload/" + path);
    }

	filterList(selectedType){
		this.filteredList = this.documentsArray.filter(item => {
			return item.type == selectedType;
		});
	}

	async deleteDoc(id){
		if(id){
			await this.data.deleteObject("docs/" + id);
			// await this.getDocumentsArray();
		}
	}

	//Quizzes
	async getQuizArray() {
		this.quizzesArray = new Array(); 
		try {
			let serverResponse = await this.data.get("quizzes");
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

	selectQuiz(index){
		if(!index){
			this.selectedQuiz = this.emptyQuiz();
		} 
	}

	setQuiz(doc){
		this.selectedQuiz = doc;
	}

	emptyQuiz(){
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

	async deleteQuiz(id){
		if(id){
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
				for(let i = 0; i < this.questionArray.length; i++){
					for(let j = 0; j < this.questionArray.length - 1; j++){
						if(this.questionArray[j].sortOrder < this.questionArray[j + 1].sortOrder){
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

	selectQuestion(index){
		if(!index && index !== 0){
			this.selectedQuestion = this.emptyQuestion();
		} else {
			this.selectedQuestion = this.questionArray[index];
		}
	}

	setQuestion(doc){
		this.selectedQuestion = doc;
	}

	emptyQuestion(){
		let obj = {};
		obj.unit = this.selectedQuiz._id;
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
			await this.getQuestionArray(this.selectedQuiz._id);
        } else {
			await this.data.saveObject(this.selectedQuestion, "questions/" + this.selectedQuestion._id, "put");
			await this.getQuestionArray(this.selectedQuiz._id);
        }

    }

	async deleteQuestion(id){
		if(id){
			await this.data.deleteObject("questions/" + id);
			await this.getQuestionArray(this.selectedQuiz._id);
			// this.emptyQuestion();
		}
	}
}