import { DataServiceProvider } from './data-service';

describe('Data Service Provider', () => {

    describe('workout data state cache', () => {
        let dataServiceProvider: DataServiceProvider;
        let workoutName: string;

        beforeEach(() => {
            dataServiceProvider = new DataServiceProvider(null);
            workoutName = '1st-workout';
        })

        it('default (new) selected workout day should be 0', () => {
            const new_selectedworkout_day =
                dataServiceProvider.getLastSelectedWorkoutDay(workoutName);
            expect(new_selectedworkout_day).toBe(0);
        })

        it('selected previous workout day should be correct', () => {
            dataServiceProvider.setLastSelectedWorkoutDay(workoutName, 5);
            const new_selectedworkout_day =
                dataServiceProvider.getLastSelectedWorkoutDay(workoutName);
            expect(new_selectedworkout_day).toBe(5);
        })

        it('should override previous workout day with last one', () => {
            dataServiceProvider.setLastSelectedWorkoutDay(workoutName, 1);
            dataServiceProvider.setLastSelectedWorkoutDay(workoutName, 2);
            dataServiceProvider.setLastSelectedWorkoutDay(workoutName, 3);

            const new_selectedworkout_day =
                dataServiceProvider.getLastSelectedWorkoutDay(workoutName);
            expect(new_selectedworkout_day).toBe(3);
        })
    })
})