var index = require('../index.js');

describe("index", function () {
    it('should print Hello World!', function () {
        expect(index.getStringToPrint()).toBe('Hello World!');
        expect(index.getStringToPrint()).toMatch(/World/);
    });
});