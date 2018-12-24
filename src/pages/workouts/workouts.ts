import { DefaultWorkouts } from './../../shared/model/DefaultWorkouts';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { json } from '../../assets/data/defaultWorkouts'
import { deserialize } from 'json-typescript-mapper';
import { Workout } from '../../shared/model/Workout';

@Component({
  templateUrl: 'workouts.html'
})
export class WorkoutsPage implements OnInit {

  storageKey = 'workouts';
  workouts: Workout[];

  constructor(public navCtrl: NavController, public storage: Storage) {
  }

  ngOnInit(): void {
    this.initStorage();
  }

  async initStorage() {

    await this.storage.ready()
    this.workouts = await this.storage.get(this.storageKey);
    if (!this.workouts || !this.workouts.length) {
      let defaultWorkouts: DefaultWorkouts;
      defaultWorkouts = deserialize(DefaultWorkouts, json);
      await this.storage.set(this.storageKey, defaultWorkouts.workouts);
      this.workouts = defaultWorkouts.workouts;
    }
  }
}
