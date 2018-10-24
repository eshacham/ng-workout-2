import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Workout } from '../../shared/model/Workout';

@IonicPage()
@Component({
  selector: 'page-workoutdays',
  templateUrl: 'workoutdays.html',
})
export class WorkoutdaysPage {

  workout: Workout;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.workout = this.navParams.get('workout');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutdaysPage');
  }

}
