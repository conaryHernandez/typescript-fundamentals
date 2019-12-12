import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

export class CsvFileReader {
  filename: string;
  data: string[][] = [];

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
      });
  }
}
