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
});