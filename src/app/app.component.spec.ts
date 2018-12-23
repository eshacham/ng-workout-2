import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock
} from '../../test-config/mocks-ionic';

import { TabsPage } from '../pages/tabs/tabs';
import { MyApp } from './app.component';

describe('App Component', () => {
  let fixture: ComponentFixture<MyApp>;
  let comp: MyApp;

  beforeEach(async() => {
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
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyApp);
    comp = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
    comp = null;
  });

  it('should be created', () => {
    expect(comp).toBeTruthy();
  });

  it('should set the root page to be the Tabs page', () => {
      expect(comp['rootPage']).toBe(TabsPage);
  });
});