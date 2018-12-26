import { WorkoutPage } from './app.po';
import { element, by } from 'protractor';

describe('App E2E Test', () => {

    let page: WorkoutPage;

    beforeEach(() => {
        page = new WorkoutPage();
    });

    describe('default screen', () => {
        beforeEach(() => {
            page.navigateTo('/');
        })

        it('should have a title', () => {
            page.getTitle()
            .then((title: string) => {
                expect(title).toBe('workouts')
            })
        })

        it('should have a nav bar', () => {
            page.getNavBar().isPresent()
            .then((present) => {
                expect(present).toBe(true)
            })
        })

        it('should have a list of workout card', () => {
            page.getWorkoutCards()
            .then((cards) => {
                expect(cards.length).toBe(3)
            })
        })
    })


});