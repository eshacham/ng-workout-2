import { WorkoutDay } from './../../shared/model/WorkoutDay';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'workout-day',
  templateUrl: 'workout-day.html'
})
export class WorkoutDayComponent {

  @Input('workoutDay') workoutDay: WorkoutDay;

  constructor() {
  }

}
