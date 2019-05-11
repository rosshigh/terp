import {inject} from 'aurelia-framework';
import {DataServices} from './data-services';

@inject(DataServices)
export class Events {

    constructor(data) {
        this.data = data;   
    }

    async getEventsArray() {
		this.eventsArray = [];
		var url = 'events?order=sortOrder';
		try {
			let serverResponse = await this.data.get(url);
			if (!serverResponse.error) {				
				this.eventsArray = serverResponse;
console.log(this.eventsArray.length)				
				for(let i = 0; i < this.eventsArray.length; i++){
					this.eventsArray[i].borderColor = "#FFFFFF";
					this.eventsArray[i].backgroundColor = "#FFFFFF";	
console.log(this.eventsArray[i].title)
				}
			} else {
				this.data.processError(serverResponse);
			}
		} catch (error) {
			console.log(error);
		}
    }
}