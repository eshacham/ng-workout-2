import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LibraryPage } from './library';

import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';

@NgModule({
	declarations: [
		LibraryPage,
	],
	imports: [
		IonicPageModule.forChild(LibraryPage),
	],
	exports: [
		LibraryPage,
	],
	entryComponents: [
		LibraryPage
	],
	providers: [
		// Camera,
		// File
	]
})
export class LibraryPageModule {}
