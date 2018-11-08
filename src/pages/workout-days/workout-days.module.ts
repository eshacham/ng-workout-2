import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkoutdaysPage } from './workout-days';
import { WorkoutDayComponent } from '../../components/workout-day/workout-day';
import { ExerciseThumbnailModule } from '../../components/exercise-thumbnail/exercise-thumbnail.module';

@NgModule({
  declarations: [
    WorkoutdaysPage,
    WorkoutDayComponent
  ],
  imports: [
    IonicPageModule.forChild(WorkoutdaysPage),
    ExerciseThumbnailModule
  ],
  entryComponents: [
    WorkoutdaysPage, 
    WorkoutDayComponent
  ],
})
export class WorkoutdaysPageModule {}
