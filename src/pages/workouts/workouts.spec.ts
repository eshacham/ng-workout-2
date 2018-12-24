import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IonicPageModule, NavController } from 'ionic-angular';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { WorkoutsPage } from '../workouts/workouts';
import { WorkoutdaysPageModule } from '../workout-days/workout-days.module';
import { WorkoutCardModule } from '../../components/workout-card/workout-card.module';
import { IonicStorageModule } from '@ionic/storage';
import { StorageMock } from '../../../test-config/mocks-ionic';
import { DefaultWorkouts } from '../../shared/model/DefaultWorkouts';
import { deserialize } from 'json-typescript-mapper';
import { json } from '../../assets/data/defaultWorkouts';

let comp: WorkoutsPage;
let fixture: ComponentFixture<WorkoutsPage>;
let de: DebugElement;
let el: HTMLElement;

describe('Page: Workouts Page', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MyApp, WorkoutsPage],
            providers: [
                { provide: NavController },
                { provide: Storage, useClass: StorageMock}
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
        spyOn(comp.storage, 'ready')
        spyOn(comp.storage, 'get')
        spyOn(comp.storage, 'set')
        StorageMock.IsAlreadyStored = true;
    });

    afterEach(() => {
        fixture.destroy();
        comp = null;
        de = null;
        el = null;
    });

    it('should be created', () => {
        expect(comp).toBeTruthy();
    });

    it('should have a title of workouts', () => {
        de = fixture.debugElement.query(By.css('ion-title'));
        el = de.nativeElement;
        expect(el.innerText).toContain('workouts');
    });

    it('should wait for the storage service to be ready', async () => {
        await comp.initStorage();
        expect(comp.storage.ready).toHaveBeenCalled()
    });

    it('should try to get the stored workouts from storage', async () => {
        await comp.initStorage();
        expect(comp.storage.get).toHaveBeenCalledWith('workouts')
    });

    it('should try to store the default workouts in storage', async () => {
        StorageMock.IsAlreadyStored = false
        await comp.initStorage();
        let defaultWorkouts: DefaultWorkouts;
        defaultWorkouts = deserialize(DefaultWorkouts, json);
        expect(comp.storage.set).toHaveBeenCalledWith('workouts', defaultWorkouts.workouts)
    });

    it('should set the workouts props to the default 3 workouts', async () => {
        await comp.initStorage();
        expect(comp.workouts).toBeTruthy()
        expect(comp.workouts.length).toBe(3)
    });

});