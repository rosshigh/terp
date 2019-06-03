import {inject} from 'aurelia-framework';
import {Files} from './resources/data/files';

@inject(Files)
export class Quizzes {

	constructor(filesModule){
		this.filesModule = filesModule;
	}

	async activate(){
        this.quizArray = [];
        this.keyArray = [];
		this.filesModule.selectFile();
        await this.filesModule.getDocsByType("QUIZ");
        this.filesModule.filteredList.forEach(item => {
            this.quizArray.push(item);
        });
        await this.filesModule.getDocsByType("KEY");
        this.filesModule.filteredList.forEach(item => {
            this.keyArray.push(item);
        });
	}
}