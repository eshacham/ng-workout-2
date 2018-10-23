import { NgModule } from '@angular/core';
import { WorkoutComponent } from './workout/workout';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
	declarations: [WorkoutComponent],
	imports: [IonicPageModule.forChild(WorkoutComponent)],
	exports: [WorkoutComponent]
})
export class ComponentsModule {}
