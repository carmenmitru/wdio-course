
describe('Modal', () => {
    beforeEach(() => {
        browser.url("http://localhost:4200/#/modal")

    })
    it('render modal on click open', () => {
        let modalHeader = "Profile update";
        let modalBody = "Modal Content";
        let openBtn = browser.$("button");
        openBtn.click();
        let modal = browser.$("ngb-modal-window");
        modal.waitForDisplayed(13500);
        expect(modal.$("div.modal-header > h4").getText()).to.equal(modalHeader);
        expect(modal.$("div.modal-body").getText()).to.equal(modalBody);
    });
});



