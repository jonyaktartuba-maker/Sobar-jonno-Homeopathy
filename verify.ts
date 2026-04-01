import fs from 'fs';

const jsContent = fs.readFileSync('js/script.js', 'utf-8');

const startIdx = jsContent.indexOf('const medicines = [');
const endIdx = jsContent.indexOf('const organonPrinciples = [');

const medicinesStr = jsContent.substring(startIdx + 'const medicines = '.length, endIdx).trim();
const cleanMedicinesStr = medicinesStr.endsWith(';') ? medicinesStr.slice(0, -1) : medicinesStr;

const medicines = new Function('return ' + cleanMedicinesStr)();
console.log('Number of medicines:', medicines.length);

const startIdxSym = jsContent.indexOf('const symptomCategories = [');
const endIdxSym = jsContent.indexOf('const blogPosts = [');

const symStr = jsContent.substring(startIdxSym + 'const symptomCategories = '.length, endIdxSym).trim();
const cleanSymStr = symStr.endsWith(';') ? symStr.slice(0, -1) : symStr;

const symptomCategories = new Function('return ' + cleanSymStr)();

let all5 = true;
for (const cat of symptomCategories) {
  for (const dis of cat.diseases) {
    if (dis.remedies.length !== 5) {
      console.log(`Disease ${dis.name} has ${dis.remedies.length} remedies`);
      all5 = false;
    }
  }
}
if (all5) console.log('All diseases have exactly 5 remedies.');
