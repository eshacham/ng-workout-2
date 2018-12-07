import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { TabsPage } from './tabs';
import { WorkoutsPage } from '../workouts/workouts';
 
let comp: TabsPage;
let fixture: ComponentFixture<TabsPage>;
let deArray: DebugElement[]; 
 
describe('Page: Tabs Page', () => {
 
    beforeEach(async(() => { 
        TestBed.configureTestingModule({
            declarations: [MyApp, TabsPage],
            providers: [
 
            ],

            imports: [
                IonicModule.forRoot(MyApp)
            ]
        }).compileComponents();
    }));
 
    beforeEach(() => {
        fixture = TestBed.createComponent(TabsPage);
        comp    = fixture.componentInstance;
    });
 
    afterEach(() => {
        fixture.destroy();
        comp = null;
        deArray = null;
    });
 
    it('is created', () => {
        expect(fixture).toBeTruthy();
        expect(comp).toBeTruthy();
    });

    it ('should have 3 tabs', () => {
        deArray = fixture.debugElement.queryAll(By.css('ion-tabs ion-tab'));   
        expect(deArray.length).toBe(3);
      });
 
 
    //     de = fixture.debugElement.query(By.css('ion-title'));
    //     fixture.detectChanges();
});