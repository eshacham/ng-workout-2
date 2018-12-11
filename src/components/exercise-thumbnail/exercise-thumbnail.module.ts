import { NgModule } from '@angular/core';
import { ExerciseThumbnailComponent } from './exercise-thumbnail';
import { ExerciseVariationModule } from '../../components/exercise-variation/exercise-variation.module';

import { IonicPageModule } from 'ionic-angular';

@NgModule({
	declarations: [
		ExerciseThumbnailComponent
	],
	imports: [
		IonicPageModule.forChild(ExerciseThumbnailComponent),
		ExerciseVariationModule
	],
	exports: [
		ExerciseThumbnailComponent
	],
	entryComponents: [
		ExerciseThumbnailComponent
	]
})
export class ExerciseThumbnailModule {}
