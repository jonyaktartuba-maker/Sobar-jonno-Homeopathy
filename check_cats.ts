import fs from 'fs';

const content = fs.readFileSync('src/data/mockData.ts', 'utf-8');
const startIdx = content.indexOf('export const symptomCategories: SymptomCategory[] = [');
const endIdx = content.indexOf('export const blogPosts: BlogPost[] = [');
const symStr = content.substring(startIdx + 'export const symptomCategories: SymptomCategory[] = '.length, endIdx).trim().replace(/;$/, '');
const symptomCategories = new Function('return ' + symStr)();

console.log(symptomCategories.map(c => ({ id: c.id, name: c.name, diseases: c.diseases.map(d => d.name) })));
