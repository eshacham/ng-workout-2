import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { LibraryPage } from '../pages/library/library';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';

import { WorkoutsPageModule } from '../pages/workouts/workouts-page.module'

@NgModule({
  declarations: [
    MyApp,
    LibraryPage,
    SettingsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    WorkoutsPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LibraryPage,
    SettingsPage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
