import { NgModule } from '@angular/core';
import { WorkoutCardComponent } from './workout-card';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
	declarations: [		
		WorkoutCardComponent,
	],
	imports: [
		IonicPageModule.forChild(WorkoutCardComponent),
	],
	exports: [
		WorkoutCardComponent,
	],
	entryComponents: [
		WorkoutCardComponent
	]
})
export class WorkoutCardModule {}
