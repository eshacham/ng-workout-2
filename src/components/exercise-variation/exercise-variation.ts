import { Component, Input } from '@angular/core';
import { ExerciseSet } from '../../shared/model/ExerciseSet';
import { GripType, GripWidth, WeightType } from '../../shared/enums';


@Component({
  selector: 'exercise-variation',
  templateUrl: 'exercise-variation.html'
})
export class ExerciseVariationComponent {

  @Input() exerciseSet: ExerciseSet;

  constructor() {
   
  }
  get exerciseDetails(): string {
    const details = [];

    if (this.exerciseSet.theGrip && this.exerciseSet.theGrip.typeOfGrip) {
        details.push(this.exerciseSet.theGrip.typeOfGrip);
    }
    if (this.exerciseSet.theGrip && this.exerciseSet.theGrip.width) {
        details.push(this.exerciseSet.theGrip.width);
    }
    if (this.exerciseSet.typeOfWeight) {
        details.push(this.exerciseSet.typeOfWeight);
    }
    return details.join(' | ');
}

}
