const hwModule = require('../');

describe('hello-world module', () => {
	describe('hello-world function', () => {
		it('should log hello world', () => {
			const hw = hwModule.helloWorld
			expect(hw()).toMatch(/Hello World! This is my first working module!!!!/);
		});
	});

	describe('greetings', () => {
		it('should log Hello nobody', () => {
			const gr = hwModule.grettings;
			expect(gr()).toMatch(/Hello nobody/);
		});

		it('should log Hello Jon Doe', () => {
			const gr = hwModule.grettings;
			expect(gr('Jon Doe')).toMatch(/Hello Jon Doe/);
		});
	});
});