import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkoutsPage } from './workouts';
import { WorkoutdaysPageModule } from '../workoutdays/workoutdays.module';
import { WorkoutCardModule } from '../../components/workout-card/workout-card.module';

@NgModule({
	declarations: [		
		WorkoutsPage,
	],
	imports: [
		IonicPageModule.forChild(WorkoutsPage),
		WorkoutCardModule,
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
