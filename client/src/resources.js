import {inject} from 'aurelia-framework';
import {Files} from './resources/data/files';

@inject(Files)
export class Resources {

	constructor(filesModule){
		this.filesModule = filesModule;
	}

	async activate(){
        this.imageArray = [];
        this.notesArray = [];
        this.reviewsArray = [];
        this.quizArray = [];
        this.keyArray = [];
        await this.filesModule.getDocumentsArray();
        this.filesModule.documentsArray.forEach(item => {
            switch (item.type) {
                case 'IMAGE':
                    this.imageArray.push(item);
                    break;
                case 'NOTES':
                    this.notesArray.push(item);
                    break;
                case 'REVIEW':
                    this.reviewsArray.push(item);
                    break;
                case 'QUIZ':
                    this.quizArray.push(item);
                    break;
                case 'KEY':
                    this.keyArray.push(item);
                    break;
            }
        });
	}
}