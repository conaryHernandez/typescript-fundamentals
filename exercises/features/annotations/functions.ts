/* ANNOTATIONS */

// use annotations for parameters and returned value

const add = (a: number, b: number): number => {
	return a + b;
};
// this is why we have to use annotations on returned value
// error with no notice!!!!
const substract = (a: number, b: number) => {
	a - b;
};

/* ANNOTATIONS FOR ANONYMOUS FUNCTIONS */

function divide(a: number, b: number): number {
	return a / b;
}

const multiply = function(a: number, b: number): number {
	return a * b;
}


/* Using Void and never */

const logger = (message: string): void => {
	console.log(message);

	return undefined;
};

const throwError = (message: string): string | never => {
	if (!message) {
		throw new Error(message);
	}

	return message;
};

const todaysWeather = {
	date: new Date(),
	weather: 'sunny'
};

const logWeather = (forecast: { date: Date, weather: string }): void => {
	console.log(forecast.date);
	console.log(forecast.weather);
};

logWeather(todaysWeather);