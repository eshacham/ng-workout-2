import { NgModule } from '@angular/core';
import { ExerciseThumbnailComponent } from './exercise-thumbnail';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
	declarations: [
		ExerciseThumbnailComponent
	],
	imports: [
		IonicPageModule.forChild(ExerciseThumbnailComponent),
	],
	exports: [
		ExerciseThumbnailComponent
	],
	entryComponents: [
		ExerciseThumbnailComponent
	]
})
export class ExerciseThumbnailModule {}
