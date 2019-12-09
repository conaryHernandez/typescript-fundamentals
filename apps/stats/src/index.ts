import fs from 'fs';

const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8' //  without this, it would give us a buffer with raw data
  })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

console.log(matches);
