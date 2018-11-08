import { DataServiceProvider } from './../../providers/data-service/data-service';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Workout } from '../../shared/model/Workout';

@IonicPage()
@Component({
  templateUrl: 'workout-days.html',
})
export class WorkoutdaysPage {

  @ViewChild('slider') slides: Slides;
 
  workout: Workout;

  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams,
    private dataService: DataServiceProvider) {
    this.workout = this.navParams.get('workout');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutdaysPage');
    if (this.slides) {
      const lastIndex = this.dataService.getLastSelectedWorkoutDay(this.workout.name);
      console.log('last index on view loaded', lastIndex)
      
      setTimeout(() => {
        this.slides.slideTo(lastIndex)
    }, 300); 
    }
  }

  slideChanged() {
    if (this.slides) {
    const lastIndex = this.slides.getActiveIndex();
    console.log('last index on slide changes', lastIndex)
    this.dataService.setLastSelectedWorkoutDay(this.workout.name, lastIndex);
    }
  }

}
