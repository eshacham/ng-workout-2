import { Page } from './app.po';
import { browser, element, by } from 'protractor';

describe('App E2E Test', () => {

    let page: Page;

    beforeEach(() => {
        page = new Page();
    });

    describe('default screen', () => {
        beforeEach(() => {
            page.navigateTo('/');
        })

        it('should have a title', () => {
            element(by.css('ion-title')).getText()
            .then((title) => {
                expect(title).toBe('workouts')
            })
        })

        it('should have a nav bar', () => {
            element(by.css('ion-navbar')).isPresent()
            .then((present) => {
                expect(present).toBe(true)
            })
        })
    })


});