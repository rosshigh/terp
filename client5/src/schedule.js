import {inject} from 'aurelia-framework';
import moment from 'moment';
import { Events } from './resources/data/events';

@inject(Events)
export class Schedule {
	constructor(events){
		this.events = events;
		// this.events = [
		// 	{
		// 		title: "Intro to TERP10",
		// 		start: "2018-05-14",
		// 		backgroundColor: "#FFFFFF",
		// 		borderColor: "#FFFFFF"
		// 	},
		// 	{
		// 		title: "Module 1",
		// 		start: "2018-05-14",
		// 		backgroundColor: "#FFFFFF",
		// 		borderColor: "#FFFFFF"
		// 	}
		// ]
	}

	async activate(){
		console.log('here')
		await this.events.getEventsArray();

	}
}