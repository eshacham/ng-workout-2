import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Workout } from '../src/shared/model/Workout';
import { json } from '../src/assets/data/defaultWorkouts';
import { deserialize } from 'json-typescript-mapper';
import { DefaultWorkouts } from '../src/shared/model/DefaultWorkouts';

export class PlatformMock {
  public ready(): Promise<any> {
    return Promise.resolve();
  };

  public getQueryParam() {
    return true;
  }

  public registerBackButtonAction(fn: Function, priority?: number): Function {
    return (() => true);
  }

  public hasFocus(ele: HTMLElement): boolean {
    return true;
  }

  public doc(): HTMLDocument {
    return document;
  }

  public is(): boolean {
    return true;
  }

  public getElementComputedStyle(container: any): any {
    return {
      paddingLeft: '10',
      paddingTop: '10',
      paddingRight: '10',
      paddingBottom: '10',
    };
  }

  public onResize(callback: any) {
    return callback;
  }

  public registerListener(ele: any, eventName: string, callback: any): Function {
    return (() => true);
  }

  public win(): Window {
    return window;
  }

  public raf(callback: any): number {
    return 1;
  }

  public timeout(callback: any, timer: number): any {
    return setTimeout(callback, timer);
  }

  public cancelTimeout(id: any) {
    // do nothing
  }

  public getActiveElement(): any {
    return document['activeElement'];
  }
}

export class StatusBarMock extends StatusBar {
  styleDefault() {
    return;
  }
}

export class SplashScreenMock extends SplashScreen {
  hide() {
    return;
  }
}

export class NavMock {

  public pop(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }

  public push(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }

  public getActive(): any {
    return {
      'instance': {
        'model': 'something',
      },
    };
  }

  public setRoot(): any {
    return true;
  }

  public registerChildNav(nav: any): void {
    return ;
  }

}

export class HttpClientMock {
  get () {
    return 'test'
  }
}

export class StorageMock {
  static IsAlreadyStored = true;
  async ready () {}
  async get(key: string): Promise<Workout[]> {
    if (StorageMock.IsAlreadyStored) {
      let defaultWorkouts: DefaultWorkouts;
      defaultWorkouts = deserialize(DefaultWorkouts, json);
      return defaultWorkouts.workouts;
    } else {
      return null
    }
  }
  async set(key: string, workouts: Workout[]) {}
}