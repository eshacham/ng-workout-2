import { DataServiceProvider } from './../../providers/data-service/data-service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Workout } from '../../shared/model/Workout';
import { ExerciseActionEvent } from '../../shared/model/ExerciseActionEvent';
import { ExerciseAction, DisplayMode } from '../../shared/enums';
import { Subject } from 'rxjs/Subject';
import { ExerciseSwitchModeEvent } from '../../shared/model/ExerciseSwitchModeEvent';

//@IonicPage()
@Component({
  templateUrl: 'workout-days.html',
})
export class WorkoutdaysPage implements OnInit{

  @ViewChild('slider') slides: Slides;

  workout: Workout;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private dataService: DataServiceProvider) { }

  workoutDaysPublisher: Subject<ExerciseSwitchModeEvent> = new Subject();

  ngOnInit () {
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

  handleExerciseActionEvent(event: ExerciseActionEvent) {
    const exerciseAction: ExerciseAction = event.action;
    switch (exerciseAction) {
      case ExerciseAction.Completed:
        console.log('workout: receieved completed event: ', event.exerciseIndex);
        // this.handleExersiceSetComletion(event.exerciseIndex);
        break;
      case ExerciseAction.Delete:
        console.log('workout: receieved delete event: ', event.exercise);
        // this.deleteExercise(event.exercise, event.workoutDayName);
        break;
      case ExerciseAction.Edit:
        console.log('workout: receieved edit event: ', event.exercise);
        break;
      case ExerciseAction.Run:
        console.log('workout: receieved run event: ', event.workoutDayName);
        this.publishWorkoutEvent(DisplayMode.Workout, event.workoutDayName);
        break;
    }
  }

  publishWorkoutEvent(displayMode: DisplayMode, runningExerciseDayName: string) {
    const workoutEvent =
      new ExerciseSwitchModeEvent(displayMode, null, runningExerciseDayName);
    this.workoutDaysPublisher.next(workoutEvent);
  }

}
