import {inject} from 'aurelia-framework';
import {Files} from './resources/data/files';

@inject(Files)
export class Exercises {

	constructor(filesModule){
		this.filesModule = filesModule;
	}

	async activate(){
        this.exercisesArray = [];
        await this.filesModule.getDocumentsArray('?order=sortOrder');
        this.filesModule.documentsArray.forEach(item => {
            switch (item.type) {
                case 'EXER':
                    this.exercisesArray.push(item);
                    break;
            }
        });
	}
}