import { browser, element, by } from 'protractor';

export class WorkoutPage {

  navigateTo(destination: string) {
    return browser.get(destination);
  }

  getTitle() {
    return element(by.css('ion-title')).getText();
  }

  getNavBar() {
    return element(by.css('ion-navbar'));
  }

  getWorkoutCards() {
    return element.all(by.css('workout-card'));
  }

  getTabs() {
    return element.all(by.css('ion-tabs ion-tab'));
  }

  getTabsBars() {
    return element.all(by.css('.tabbar .tab-button'));
  }

}