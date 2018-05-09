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
            item.name = item.file.fileName.split('.')[0];
            this.units[parseInt(parts[0]) - 1].push(item); 
        });
	}
}