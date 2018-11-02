import { Component, Input } from '@angular/core';
import { WorkoutDay } from './../../shared/model/WorkoutDay';
import { DisplayMode, ExerciseAction  } from '../../shared/enums';


@Component({
  selector: 'workout-day',
  templateUrl: 'workout-day.html'
})
export class WorkoutDayComponent {
  constructor() {  }

  @Input('workoutDay') workoutDay: WorkoutDay;

  //displayMode = DisplayMode;
  private _displayMode: DisplayMode = DisplayMode.Display;
  get DisplayMode(): DisplayMode {
      return this._displayMode;
  }
  set DisplayMode(val: DisplayMode) {
    if (this._displayMode !== val) {
        this._displayMode = val;
        // if (this._displayMode === DisplayMode.Workout) {
        //     if (this.runningExerciseIndex === 0) {
        //         this.runningExerciseIndex = 1;
        //     }
        // }
        // this.publishWorkoutEvent(this._displayMode, this.runningExerciseIndex);
    }
  }
  get IsEditMode () { return this._displayMode === DisplayMode.Edit; }
  get IsDisplayMode () { return this._displayMode === DisplayMode.Display; }
  get IsWorkoutMode () { return this._displayMode === DisplayMode.Workout; }
  get IsDisplayOrWorkout () { return this.IsWorkoutMode || this.IsDisplayMode; }
  get IsDisplayOrEdit () { return this.IsEditMode || this.IsDisplayMode; }

  startOrStop() {
    this.DisplayMode = (this.DisplayMode === DisplayMode.Workout) ? 
      DisplayMode.Display : DisplayMode.Workout;
    //this.emitExerciseActionEvent(ExerciseAction.Run);
  }

  editOrCancel() {
    this.DisplayMode = (this.DisplayMode === DisplayMode.Edit) ? 
      DisplayMode.Display : DisplayMode.Edit;
    //this.emitExerciseActionEvent(ExerciseAction.Run);
  }
}
