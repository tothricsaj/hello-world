const helloWorld = () => {
	return 'Hello World! This is my first working module!!!!';
};

const grettings = (name='nobody') => {
	return `Hello ${name}`;
}

module.exports = {
	helloWorld: helloWorld,
	grettings: grettings
}