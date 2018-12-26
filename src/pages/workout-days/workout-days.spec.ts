import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IonicPageModule, NavController, NavParams } from 'ionic-angular';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { MockNavParams, MockDataServiceProvider } from '../../../test-config/mocks-ionic'
import { WorkoutdaysPageModule } from '../workout-days/workout-days.module';
import { WorkoutCardModule } from '../../components/workout-card/workout-card.module';
import { DefaultWorkouts } from '../../shared/model/DefaultWorkouts';
import { deserialize } from 'json-typescript-mapper';
import { json } from '../../assets/data/defaultWorkouts';
import { WorkoutdaysPage } from './workout-days';
import { WorkoutDayComponent } from '../../components/workout-day/workout-day';
import { ExerciseThumbnailModule } from '../../components/exercise-thumbnail/exercise-thumbnail.module';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { Workout } from '../../shared/model/Workout';

let comp: WorkoutdaysPage;
let fixture: ComponentFixture<WorkoutdaysPage>;
let de: DebugElement;
let el: HTMLElement;
let defaultWorkouts: DefaultWorkouts;
let defaultFirstWorkout: Workout;

describe('Page: WorkoutdaysPage', () => {
    beforeAll(()=> {
        defaultWorkouts = deserialize(DefaultWorkouts, json);
        defaultFirstWorkout = defaultWorkouts.workouts[0]
    })

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MyApp, WorkoutdaysPage, WorkoutDayComponent],
            providers: [
                { provide: NavController },
                { provide: NavParams, useClass: MockNavParams },
                { provide: DataServiceProvider, useClass: MockDataServiceProvider }
            ],
            imports: [
                IonicModule.forRoot(MyApp),
                IonicPageModule.forChild(WorkoutdaysPage),
                ExerciseThumbnailModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WorkoutdaysPage);
        comp = fixture.componentInstance;
    });

    afterEach(() => {
        fixture.destroy();
        comp = null;
        de = null;
        el = null;
    })

    it('should be created',() => {
        expect(comp).toBeTruthy();
    })

    it('should get its workout from navParams',() => {
        let navParams = fixture.debugElement.injector.get(NavParams);
        spyOn(navParams, 'get')
        comp.ngOnInit();
        expect(navParams.get).toHaveBeenCalledWith('workout');
    })

    it('should have a title header with the workout name',() => {
        de = fixture.debugElement.query(By.css('ion-title'));
        el = de.nativeElement;
        comp.ngOnInit();
        fixture.detectChanges();
        expect(el.innerText).toContain(defaultFirstWorkout.name);
    })

    it('should have a slider with slide per workout day',() => {
        de = fixture.debugElement.query(By.css('ion-slides'));
        let slider = de.componentInstance;
        comp.ngOnInit();
        fixture.detectChanges();
        let slides = fixture.debugElement.queryAll(By.css('ion-slide'));
        expect(slides.length).toBe(defaultFirstWorkout.days.length);
    })

});