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

        it('should have a title', async () => {
            const title = await page.getTitle()
            expect(title).toBe('workouts')
        })

        it('should have a nav bar', async () => {
            const present = await page.getNavBar().isPresent()
            expect(present).toBe(true)
        })

        it('should have a list of workout card', async () => {
            const cards = await page.getWorkoutCards()
            expect(cards.length).toBe(3)
        })

        it('should have 3 tabs', async () => {
            const tabs = await page.getTabs()
            expect(tabs.length).toBe(3)
        })

        it('should have 3 tabs bars', async () => {
            const tabbars = await page.getTabsBars()
            expect(tabbars.length).toBe(3)
        })

        const tabs = ['Workouts', 'Library', 'Settings'];
        tabs.forEach((tab, index) => {
            it(`should have tabbar ${tab}`, async () => {
                const tabbars = await page.getTabsBars()
                expect(tabbars[index].getText()).toBe(tab)
            })
        })


    })
});