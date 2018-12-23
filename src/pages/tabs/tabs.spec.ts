import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { MyApp } from '../../app/app.component';
import { TabsPage } from './tabs';
import { WorkoutsPage } from '../workouts/workouts';
import { LibraryPage } from '../library/library';
import { SettingsPage } from '../settings/settings';

describe('Pages: TabsPage', () => {
    let fixture: ComponentFixture<TabsPage>;
    let comp: TabsPage;
    let tabs: DebugElement[];

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [
                TabsPage, MyApp
            ],
            imports: [
                IonicModule.forRoot(MyApp)
            ],
            providers: []
        })
        .compileComponents();
    });

    beforeEach(async () => {
        fixture = TestBed.createComponent(TabsPage);
        comp = fixture.componentInstance;
        tabs = fixture.debugElement.queryAll(By.css('ion-tabs ion-tab'));
    });

    afterEach(() => {
        fixture.destroy();
        comp = null;
        tabs = null;
    });

    it('should be created', () => {
        expect(comp).toBeTruthy();
    });

    it('should have a WorkoutsPage tab page', () => {
        expect(comp['tabWorkoutsRoot']).toBe(WorkoutsPage);
        expect(tabs[0].attributes.tabTitle).toBe('Workouts');
        expect(tabs[0].attributes.tabIcon).toBe('body');
    });

    it('should have a LibraryPage tab page', () => {
        expect(comp['tabLibraryRoot']).toBe(LibraryPage);
        expect(tabs[1].attributes.tabTitle).toBe('Library');
        expect(tabs[1].attributes.tabIcon).toBe('folder-open');
    });

    it('should have a SettingsPage tab page', () => {
        expect(comp['tabSettingsRoot']).toBe(SettingsPage);
        expect(tabs[2].attributes.tabTitle).toBe('Settings');
        expect(tabs[2].attributes.tabIcon).toBe('settings');
    });

});