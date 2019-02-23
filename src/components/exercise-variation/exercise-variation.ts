import { Component, Input } from '@angular/core';
import { PopoverController, NavParams } from 'ionic-angular';
import { ExerciseSet } from '../../shared/model/ExerciseSet';
import { GripType, GripWidth, WeightType, RepetitionSpeed } from '../../shared/enums';
import { Grip } from '../../shared/model/Grip';

@Component({
  templateUrl: 'exercise-variation-popover.html'
})
export class ExerciseVariationPopoverPage {
  exerciseSet: ExerciseSet;

  weightTypes: string[];
  gripTypes: string[];
  gripWidths: string[];
  repSpeeds: string[];

  constructor(private navParams: NavParams) {
  }

  ngOnInit() {
    this.exerciseSet = this.navParams.data.exerciseSet;

    this.gripTypes = Object.keys(GripType).map(key => GripType[key])
    this.weightTypes = Object.keys(WeightType).map(key => WeightType[key])
    this.gripWidths = Object.keys(GripWidth).map(key => GripWidth[key])
    this.repSpeeds = Object.keys(RepetitionSpeed).map(key => RepetitionSpeed[key])
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

  ngOnInit() {
    if (!this.exerciseSet.theGrip) {
      this.exerciseSet.theGrip = new Grip();
    }
    if (!this.exerciseSet.typeOfWeight) {
      this.exerciseSet.typeOfWeight = WeightType.NoWeight;
    }
    this.exerciseSet.theGrip.typeOfGrip = GripType[this.exerciseSet.theGrip.typeOfGrip] || GripType.NoGrip;
    this.exerciseSet.theGrip.width = GripWidth[this.exerciseSet.theGrip.width] || GripWidth.NoGrip;
    this.exerciseSet.typeOfWeight = WeightType[this.exerciseSet.typeOfWeight] || WeightType.NoWeight;
    this.exerciseSet.repSpeed = RepetitionSpeed[this.exerciseSet.repSpeed] || RepetitionSpeed.NA;
  }

  get exerciseDetails(): string {
    const details = [];

    if (this.exerciseSet.theGrip.typeOfGrip !== GripType.NoGrip) {
        details.push(this.exerciseSet.theGrip.typeOfGrip);
    }
    if (this.exerciseSet.theGrip.width !== GripWidth.NoGrip) {
        details.push(this.exerciseSet.theGrip.width);
    }
    if (this.exerciseSet.typeOfWeight !== WeightType.NoWeight) {
        details.push(this.exerciseSet.typeOfWeight);
    }
    if (this.exerciseSet.repSpeed !== RepetitionSpeed.NA) {
        details.push(this.exerciseSet.repSpeed);
    }
    return details.length ? details.join(' | ') : '...';
  }

  presentPopover(event) {
    let popover = this.popoverCtrl.create(ExerciseVariationPopoverPage, {
      exerciseSet: this.exerciseSet
    });

    popover.present({
      ev: event
    });
  }

}
