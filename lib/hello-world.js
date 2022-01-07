module.exports = {
	helloWorld: helloWorld,
	grettings: grettings
}

const helloWorld = () => {
	console.log('Hello World! This is my first working module!!!!');
};

const grettings = (name='nobody') => {
	console.log(`Hello ${name}`);
}