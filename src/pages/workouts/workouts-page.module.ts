import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from './../../components/components.module';
import { WorkoutsPage } from './workouts';
import { WorkoutdaysPageModule } from '../workoutdays/workoutdays.module';

@NgModule({
	declarations: [		
		WorkoutsPage,
	],
	imports: [
		IonicPageModule.forChild(WorkoutsPage),
		ComponentsModule,
		WorkoutdaysPageModule
	],
	exports: [
		WorkoutsPage,
	],
	entryComponents: [
		WorkoutsPage
	]
})
export class WorkoutsPageModule {}
