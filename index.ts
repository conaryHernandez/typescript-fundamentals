import { Bear } from './bear.model';

const bear = new Bear(3);

if(bear instanceof Bear) {
	console.log('it is');
}


// type assetions
let definetlyNotAString: any = 'I am a string';

// let strLength = (definetlyNotAString as string).length;
let strLength = (<string>definetlyNotAString).length;
