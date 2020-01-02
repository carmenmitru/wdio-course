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
        browser.saveFullPageScreen('iframe', {});
    });

    it('should compare successful with a baseline', () => {
        expect(browser.checkScreen('iframe', {})).to.equal(0);
    });

    it('should save screenshot of navbar', () => {
        browser.saveElement(browser.$('nav'), 'navbar', {});

    });

    it('should compare navabr successful with a baseline navbar', () => {
        expect(browser.checkElement(browser.$('nav'), 'navbar', {})).to.equal(0);
    });
});
