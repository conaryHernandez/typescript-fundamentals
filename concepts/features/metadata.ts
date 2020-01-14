import 'reflect-metadata';

const plane = {
  color: 'red'
};

Reflect.defineMetadata('note', 'hi there', plane, 'color');
const note = Reflect.getMetadata('note', plane, 'color');

console.log('note', note);

// using decorators + metadata

@controller
class Plane {
  color: string = 'red';

  @get('/login')
  fly(): void {
    console.log('brrr');
  }
}

function get(path: string) {
  return function(target: Plane, key: string) {
    Reflect.defineMetadata('path', path, target, key);
  };
}

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key);

    console.log('secret in loop', path);
  }
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

console.log('secret', secret);
