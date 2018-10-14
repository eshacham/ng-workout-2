import { Component } from '@angular/core';

import { LibraryPage } from '../library/library';
import { SettingsPage } from '../settings/settings';
import { WorkoutsPage } from '../workouts/workouts';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabWorkoutsRoot = WorkoutsPage;
  tabLibraryRoot = LibraryPage;
  tabSettingsRoot = SettingsPage;

  constructor() {

  }
}
