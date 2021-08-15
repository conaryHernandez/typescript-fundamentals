export class Person {
  firstName: string;
  middleName: string;
  lastName: string;

  // ? means optional
  constructor(data?: any) {
    this.firstName = data.firstName || 'Dylan';
    this.lastName = data.lastName || 'Israel';
    this.middleName = data.middleName;
   }
}