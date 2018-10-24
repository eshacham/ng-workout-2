import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkoutdaysPage } from './workoutdays';

@NgModule({
  declarations: [
    WorkoutdaysPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkoutdaysPage),
  ],
})
export class WorkoutdaysPageModule {}
