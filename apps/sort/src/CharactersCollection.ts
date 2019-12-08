export class CharactersCollection {
  data: string;

  constructor(data: string) {
    this.data = data;
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, righIndex: number): boolean {
    return (
      // charCode compare
      this.data[leftIndex].toLowerCase() > this.data[righIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, righIndex: number): void {
    const charactersArray = this.data.split('');

    const leftHand = charactersArray[leftIndex];
    charactersArray[leftIndex] = charactersArray[righIndex];
    charactersArray[righIndex] = leftHand;

    this.data = charactersArray.join('');
  }
}
