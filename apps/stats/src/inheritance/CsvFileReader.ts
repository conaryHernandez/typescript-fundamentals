import fs from 'fs';

export abstract class CsvFileReader<T> {
  filename: string;
  data: T[] = [];

  abstract mapRow(row: string[]): T;

  constructor(filename: string) {
    this.filename = filename;
  }

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8' //  without this, it would give us a buffer with raw data
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow);
  }
}
