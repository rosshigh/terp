import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {DataServices} from './data-services';
 
@inject(EventAggregator, DataServices)
export class Auth {

	loginUrl = '/login';
	logoutUrl = '/logout';

	constructor(eventAggregator, data){
		this.eventAggregator = eventAggregator;
		this.data = data;
	}

	async login(username, password) {
		let content = {
			'username': username,
			'password': password
		};
console.log(content)
		let response = await this.data.login(content, this.loginUrl);
		if(!response.error){
			response.user.userRole = response.user.role;
			
			sessionStorage.setItem('token', response.token);
			sessionStorage.setItem('user', JSON.stringify(response.user));
			// this.config.token = response.token;
			// this.config.user = response.user;
			
		}
		this.eventAggregator.publish('auth:login', response);
		return response;
	}

	logout(email){
		sessionStorage.removeItem('token');
		sessionStorage.removeItem('user');
		sessionStorage.removeItem('role');
	}

	isAuthenticated() {
		let token = sessionStorage.getItem('token');

		// There's no token, so user is not authenticated.
		if (!token) {
			return false;
		}

		// There is a token, but in a different format. Return true.
		if (token.split('.').length !== 3) {
			return true;
		}

		let exp;
		try {
			let base64Url = token.split('.')[1];
			let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
			exp = JSON.parse(window.atob(base64)).exp;
		} catch (error) {
			return false;
		}

		if (exp) {
			return Math.round(new Date().getTime() / 1000) <= exp;
		}

		return true;
	}

}
