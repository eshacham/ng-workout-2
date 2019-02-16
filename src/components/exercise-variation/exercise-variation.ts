import { Component, Input } from '@angular/core';
import { PopoverController, NavParams } from 'ionic-angular';
import { ExerciseSet } from '../../shared/model/ExerciseSet';
import { GripType, GripWidth, WeightType } from '../../shared/enums';

@Component({
  templateUrl: 'exercise-variation-popover.html'
})
export class ExerciseVariationPopoverPage {
  exerciseSet: ExerciseSet;

  weightTypes = Object.keys(WeightType);
  gripTypes = Object.keys(GripType);
  gripWidths = Object.keys(GripWidth);

  constructor(private navParams: NavParams) {
  }

  ngOnInit() {
    if (this.navParams.data) {
      this.exerciseSet = this.navParams.data.exerciseSet;
    }
  }
}

@Component({
  selector: 'exercise-variation',
  templateUrl: 'exercise-variation.html'
})
export class ExerciseVariationComponent {

  @Input() exerciseSet: ExerciseSet;
  @Input() inEditMode: boolean;

  get InEditMode(): boolean {
      return this.inEditMode;
  }

  constructor(private popoverCtrl: PopoverController) {
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

  weightTypes = Object.keys(WeightType);
  gripTypes = Object.keys(GripType);
  gripWidths = Object.keys(GripWidth);

  presentPopover(event) {
    let popover = this.popoverCtrl.create(ExerciseVariationPopoverPage, {
      exerciseSet: this.exerciseSet
    });

    popover.present({
      ev: event
    });
  }

}
