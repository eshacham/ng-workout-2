import { NgModule } from '@angular/core';
import {
	ExerciseThumbnailComponent,
	ExerciseThumbnailPopoverPage } from './exercise-thumbnail';
import { ExerciseVariationModule } from '../../components/exercise-variation/exercise-variation.module';

import { IonicPageModule } from 'ionic-angular';

@NgModule({
	declarations: [
		ExerciseThumbnailComponent,
		ExerciseThumbnailPopoverPage
	],
	imports: [
		IonicPageModule.forChild(ExerciseThumbnailComponent),
		ExerciseVariationModule
	],
	exports: [
		ExerciseThumbnailComponent
	],
	entryComponents: [
		ExerciseThumbnailComponent,
		ExerciseThumbnailPopoverPage
	]
})
export class ExerciseThumbnailModule {}
