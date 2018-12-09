import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock
} from '../../test-config/mocks-ionic';

describe('Component: Root Component', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyApp],
      imports: [
        IonicModule.forRoot(MyApp)
      ],
      providers: [
        { provide: StatusBar, useClass: StatusBarMock },
        { provide: SplashScreen, useClass: SplashScreenMock },
        { provide: Platform, useClass: PlatformMock }
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyApp);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('is created', () => {
    //expect(component instanceof MyApp).toBe(true);
    expect(fixture).toBeTruthy();
    expect(component).toBeTruthy();
  });

  it('displays the tabs page to the user', () => {
      expect(component['rootPage']).toBe(TabsPage);
  });
});