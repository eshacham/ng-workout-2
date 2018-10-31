import { WorkoutdaysPage } from '../../pages/workout-days/workout-days';
import { Component, Input } from '@angular/core';
import { Workout } from '../../shared/model/Workout';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'workout-card',
  templateUrl: 'workout-card.html'
})
export class WorkoutCardComponent {

  @Input('workout') workout: Workout;

  constructor(public navCtrl: NavController) {
  }

  goToWorkoutDays () {
    this.navCtrl.push(WorkoutdaysPage, { workout: this.workout} );
  }

  get daysCount(): number {
    return (this.workout.days) ? this.workout.days.length : 0;
  }

}
