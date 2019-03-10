import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LibraryPage } from './library';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
	declarations: [
		LibraryPage,
	],
	imports: [
		IonicPageModule.forChild(LibraryPage),
		IonicStorageModule.forRoot()
	],
	exports: [
		LibraryPage,
	],
	entryComponents: [
		LibraryPage
	],
	providers: [
		Camera,
		File,
		WebView,
		FilePath
	]
})
export class LibraryPageModule {}
