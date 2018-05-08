import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class DataServices {
    isRequesting = false;

    constructor(http) {
        this.http = http;

		this.http.configure(x => {
			x.withBaseUrl('http://localhost/');
		});
    }

	activate(){
	}

  get(url){
		this.isRequesting = true;
		return this.http.createRequest(url)
		.asGet()
		.send().then(response => {
			this.isRequesting = false;
  			if (!response.isSuccess) {
             return response;
         } else {
             return JSON.parse(response.response);
         }
     }).catch(e => {
				 this.isRequesting = false;
         console.log(e);
         return  {error: true, code: e.statusCode, message: e.statusText};
     });
	}

	saveObject(content, url, method) {
        this.isRequesting = true;
		if(method === 'put'){
 			return this.http.createRequest(url)
			 .asPut()
			 .withContent(content)
			 .send().then(response => {
				 this.isRequesting = false;
				if (!response.isSuccess) {
                     return response;
                 } else {
                     return JSON.parse(response.response);
                 }
             }).catch(e => {
				 this.isRequesting = false;
                 console.log(e);
                 return  {error: true, code: e.statusCode, message: e.statusText};
             });

		} else if(method === 'post'){
			return this.http.createRequest(url)
			 .asPost()
			 .withContent(content)
			 .send().then(response => {
				 this.isRequesting = false;
				if (!response.isSuccess) {
                     return response;
                 } else {
                     return JSON.parse(response.response);
                 }
             }).catch(e => {
				 this.isRequesting = false;
                 console.log(e);
                 return  {error: true, code: e.statusCode, message: e.statusText};
             });
		}

    }

	deleteObject(url){
		this.isRequesting = true;
		return this.http.createRequest(url)
		.asDelete()
		.send().then(response => {
				this.isRequesting = false;
				if (!response.isSuccess) {
                     return response;
                 } else {
                     if(response.statusCode  === 204){
                        return response;
                     } else {
                        return JSON.parse(response.response);
                     }

                 }
             }).catch(e => {
				 this.isRequesting = false;
                 console.log(e);
                 return  {error: true, code: e.statusCode, message: e.statusText};
             });
	}

    login(content, url){
        return this.http.createRequest(url)
			 .asPost()
			 .withContent(content)
			 .send().then(response => {
				 this.isRequesting = false;
                 return JSON.parse(response.response);
             }).catch(e => {
				 this.isRequesting = false;
                 console.log(e);
                 return  {error: true, code: e.statusCode, message: e.statusText};
             });
    }

    uploadFiles(files, url){
        this.progress = 0;
		let formData = new FormData();

		files.forEach((item, index) => {
            formData.append("file" + index, item);
        })

		return this.http.createRequest(url)
			.asPost()
			.withContent(formData)
			.skipContentProcessing()
			.send().then(response => {
				this.isRequesting = false;
				if (!response.isSuccess) {
                     return response;
                 } else {
                     return JSON.parse(response.response);
                 }
             }).catch(e => {
				 this.isRequesting = false;
                 console.log(e);
                 return  {error: true, code: e.statusCode, message: e.statusText};
             });

    }

    processError(obj, message) {
        console.log(obj);
        var msg = (message ? message : "") + " ";
        switch (obj.code) {
            case 404:
                msg = undefined;
                break;
            case 422:
                msg = msg += "The request was bad.  Contact your UCC.";
                break;
            case 409:
                msg = msg += "The record already exists.";
                break;
            case 500:
                msg = msg += "An unspecified error occured on the server.  Contact your UCC.";
                break;
            default:
                msg = msg += "An unspecified error occured.  Contact your UCC."
        }
        if(msg && msg.length > 0) console.log(msg);
    }



}
