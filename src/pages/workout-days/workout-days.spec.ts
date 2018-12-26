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

let comp: WorkoutdaysPage;
let fixture: ComponentFixture<WorkoutdaysPage>;
let de: DebugElement;
let el: HTMLElement;
let defaultWorkouts: DefaultWorkouts;


describe('Page: WorkoutdaysPage', () => {
    beforeAll(()=> {
        defaultWorkouts = deserialize(DefaultWorkouts, json);
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

});