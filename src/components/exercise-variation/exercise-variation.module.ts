import { NgModule } from '@angular/core';
import {
	ExerciseVariationComponent,
	ExerciseVariationPopoverPage } from './exercise-variation';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
	declarations: [
		ExerciseVariationComponent,
		ExerciseVariationPopoverPage
	],
	imports: [
		IonicPageModule.forChild(ExerciseVariationComponent),
	],
	exports: [
		ExerciseVariationComponent
	],
	entryComponents: [
		ExerciseVariationComponent,
		ExerciseVariationPopoverPage
	]
})
export class ExerciseVariationModule {}
