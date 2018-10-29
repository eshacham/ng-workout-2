import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkoutdaysPage } from './workoutdays';
import { WorkoutDayComponent } from '../../components/workout-day/workout-day';

@NgModule({
  declarations: [
    WorkoutdaysPage,
    WorkoutDayComponent
  ],
  imports: [
    IonicPageModule.forChild(WorkoutdaysPage),
  ],
  entryComponents: [
    WorkoutdaysPage, 
    WorkoutDayComponent
  ]
})
export class WorkoutdaysPageModule {}
