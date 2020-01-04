describe("Iframe", () => {
    beforeEach(() => {
        browser.url("./#/iframe");
    })
    it("should screenshot iframe page", async () => {

        const viewportSize = {
            width: 1440,
            height: 900
        }
        await eyes.open(browser, "Iframe", "Iframe Fullscreen", viewportSize);
        await eyes.check("Iframe", Target.window());
        await eyes.closeAsync();
        await eyes.abortIfNotClosed();
    });

    it("should screenshot the navbar element", async () => {
        const viewportSize = {
            width: 1440,
            height: 900
        }
        await eyes.open(browser, "Navbar El", "Navbar El Screenshot", viewportSize);
        await eyes.checkElementBySelector("nav");
        await eyes.closeAsync();
        await eyes.abortIfNotClosed();
    });
});