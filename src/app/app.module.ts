import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FileUploadModule} from 'ng2-file-upload';
import { AppComponent } from './app.component';

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		FileUploadModule
	],
	declarations: [
		AppComponent,
	],
	bootstrap: [AppComponent],
})
export class AppModule {
}
