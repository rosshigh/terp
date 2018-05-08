import {inject} from 'aurelia-framework';
import {Files} from './resources/data/files';

@inject(Files)
export class Resources {

	constructor(filesModule){
		this.filesModule = filesModule;
	}

	async activate(){
        this.units = [];
        for(let i = 0; i < 9; i++){
            this.units.push([]);
        }
        await this.filesModule.getDocsByType('VIDEO');
        this.filesModule.filteredList.forEach(item => {
            let parts = item.name.split(":");
            item.name = parts[0];
            this.units[parseInt(parts[1]) - 1].push(item);
            // switch (parts[]) {
            //     case 'IMAGE':
            //         this.imageArray.push(item);
            //         break;
            //     case 'NOTES':
            //         this.notesArray.push(item);
            //         break;
            //     case 'REVIEW':
            //         this.reviewsArray.push(item);
            //         break;
            // }
        });
	}
}