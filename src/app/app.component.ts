import { Component } from '@angular/core';
import { ApiService } from './api.service';
import {FileUploader} from 'ng2-file-upload';
import { saveAs } from 'file-saver';
const uri = 'http://localhost:8080/api/items';
@Component({
	selector: 'oo-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	providers:[ApiService]
})
export class AppComponent {
	lists= [];
	uploader = new FileUploader({
		url: uri,
		maxFileSize: 1024 * 1024 * 1,
	});


	constructor(private apiService: ApiService) {

		 this.uploader.onAfterAddingFile = (file) => {
			console.log('***** onAfterAddingFile ******')
			console.log('file ', file)
		  }
		  this.uploader.onCompleteItem =  (item:any, response:any, status:any, headers:any) => {
			console.log('ImageUpload:uploaded:', item, status, response,headers);
		  };
	  
		  this.uploader.onCompleteAll = () => {
			console.log('******* onCompleteAll *********')
		  }
	  
		  this.uploader.onWhenAddingFileFailed = (item: any, filter: any, options: any) => {
			console.log('***** onWhenAddingFileFailed ********',item,filter,options)
		  }
	 }

	ngOnInit() {
		this.apiService.getList().subscribe((data: any[])=>{
		  console.log(JSON.stringify(data));
		this.lists = data['items'];
		});
	  }

	download(id : any , fileName : string){
	
		this.apiService.downloadFile(id)
        .subscribe(
            data => saveAs(data, fileName),
            error => console.error(error)
        );

	  }
	 


}
