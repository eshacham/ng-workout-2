import { Component, Input } from '@angular/core';
import { Exercise } from '../../shared/model/Exercise';

@Component({
  selector: 'exercise-thumbnail',
  templateUrl: 'exercise-thumbnail.html'
})
export class ExerciseThumbnailComponent {

  @Input('exercise') exercise: Exercise;

  constructor() {
  
  }

}
