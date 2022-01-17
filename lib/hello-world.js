const helloWorld = () => {
	return 'Hello World! This is my first working module!!!!';
};

const grettings = (name='nobody') => {
	return `Hello ${name}`;
}

const foo = () => 'FooBarBaz';

module.exports = {
	helloWorld: helloWorld,
	grettings: grettings
}