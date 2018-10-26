import { WorkoutdaysPage } from './../../pages/workoutdays/workoutdays';
import { Component, Input } from '@angular/core';
import { Workout } from '../../shared/model/Workout';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'workout-card',
  templateUrl: 'workout.html'
})
export class WorkoutComponent {

  @Input('workout') workout: Workout;

  constructor(public navCtrl: NavController) {
  }

  goToWorkoutDays () {
    this.navCtrl.push(WorkoutdaysPage, { workout: this.workout} );
  }
}
