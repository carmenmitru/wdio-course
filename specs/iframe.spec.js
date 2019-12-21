describe("Iframe", () => {
    beforeEach(() => {
        browser.url("./#/iframe");
    })
    it("renders the text inside the iframe", () => {
        let btn = browser.$("button");
        let header = browser.$("h1");
        btn.click();
        browser.switchToFrame(0); //enters in the frame
        console.log("Header text" + header.getText());
        expect(header.getText()).to.equal("From parent to iframe");
    });
    it('should save screenshot of fullpage', () => {
        browser.saveFullPageScreen('iframe', { /* some options*/ });
    });

    it('should compare successful with a baseline', () => {
        expect(browser.checkScreen('iframe', { /* some options*/ })).to.equal(0);
    });
});