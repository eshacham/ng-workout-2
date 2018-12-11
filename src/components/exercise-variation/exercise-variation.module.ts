import { NgModule } from '@angular/core';
import { ExerciseVariationComponent } from './exercise-variation';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
	declarations: [
		ExerciseVariationComponent
	],
	imports: [
		IonicPageModule.forChild(ExerciseVariationComponent),
	],
	exports: [
		ExerciseVariationComponent
	],
	entryComponents: [
		ExerciseVariationComponent
	]
})
export class ExerciseVariationModule {}
