import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IonicPageModule, NavController } from 'ionic-angular';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { WorkoutsPage } from '../workouts/workouts';
import { WorkoutdaysPageModule } from '../workout-days/workout-days.module';
import { WorkoutCardModule } from '../../components/workout-card/workout-card.module';
import { Workout } from '../../shared/model/Workout';
import { IonicStorageModule } from '@ionic/storage';
 
let comp: WorkoutsPage;
let fixture: ComponentFixture<WorkoutsPage>;
let de: DebugElement;
let el: HTMLElement;

describe('Page: Workouts Page', () => {
 
    beforeEach(async(() => { 
        TestBed.configureTestingModule({
            declarations: [MyApp, WorkoutsPage],
            providers: [
                {
                    provide: NavController
                }
            ],

            imports: [
                IonicModule.forRoot(MyApp),
                IonicPageModule.forChild(WorkoutsPage),
                WorkoutCardModule,
                WorkoutdaysPageModule,
                IonicStorageModule.forRoot()
            ]
        }).compileComponents();
    }));
 
    beforeEach(() => {
        fixture = TestBed.createComponent(WorkoutsPage);
        comp    = fixture.componentInstance;
    });
 
    afterEach(() => {
        fixture.destroy();
        comp = null;
        de = null;
        el = null;
    });
 
    it('is created', () => {
        expect(fixture).toBeTruthy();
        expect(comp).toBeTruthy();
    });

    it ('should have a title of workouts', () => {
        de = fixture.debugElement.query(By.css('ion-title'));
        el = de.nativeElement;
        expect(el.innerText).toContain('workouts');
    });
});