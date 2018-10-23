import { Component, Input } from '@angular/core';
import { Workout } from '../../shared/model/Workout';

@Component({
  selector: 'workout',
  templateUrl: 'workout.html'
})
export class WorkoutComponent {

  @Input('workout') workout: Workout;

  constructor() {
    
  }

}
