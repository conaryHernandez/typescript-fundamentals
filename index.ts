// import { Bear } from './models/bear.model';
import { Age } from './enums/age.enum';
import { Names } from './enums/name.enum';

/* const bear = new Bear(3);

if(bear instanceof Bear) {
	console.log('it is');
}

*/


// type assetions
let definetlyNotAString: any = 'I am a string';

// let strLength = (definetlyNotAString as string).length;
let strLength = (<string>definetlyNotAString).length;

function totalAge(age1: Age, age2: Age) {
  return age1 + age2;
}