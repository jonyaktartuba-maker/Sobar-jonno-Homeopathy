const fs = require('fs');
const content = fs.readFileSync('src/data/mockData.ts', 'utf-8');
const startIdx = content.indexOf('export const symptomCategories: SymptomCategory[] = [');
const endIdx = content.indexOf('export const blogPosts: BlogPost[] = [');
const symStr = content.substring(startIdx + 'export const symptomCategories: SymptomCategory[] = '.length, endIdx).trim().replace(/;$/, '');
const symptomCategories = new Function('return ' + symStr)();

const remedies = new Set();
symptomCategories.forEach(cat => {
  cat.diseases.forEach(dis => {
    dis.remedies.forEach(rem => {
      remedies.add(rem.name);
    });
  });
});
console.log(Array.from(remedies).join('\n'));
