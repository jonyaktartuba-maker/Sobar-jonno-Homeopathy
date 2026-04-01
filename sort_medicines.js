import fs from 'fs';

function sortMedicinesInFile(filePath, startMarker, endMarker, isExport = false) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const startIdx = content.indexOf(startMarker);
    const endIdx = content.indexOf(endMarker, startIdx);
    
    if (startIdx !== -1 && endIdx !== -1) {
      const arrayStr = '[' + content.substring(startIdx + startMarker.length, endIdx).trim();
      const cleanArrayStr = arrayStr.endsWith(';') ? arrayStr.slice(0, -1) : arrayStr;
      
      let existingArray;
      try {
        existingArray = new Function('return ' + cleanArrayStr)();
      } catch (e) {
        console.error('Failed to parse array in', filePath, e);
        return;
      }
      
      // Sort the array alphabetically by id (which represents the English name, e.g., 'arnica-montana')
      existingArray.sort((a, b) => a.id.localeCompare(b.id));
      
      const newArrayStr = JSON.stringify(existingArray, null, 2);
      let replacement = '';
      if (filePath.endsWith('.ts')) {
        replacement = 'export const medicines: Medicine[] = ' + newArrayStr + ';\n';
      } else if (isExport) {
        replacement = 'export const medicines = ' + newArrayStr + ';\n';
      } else {
        replacement = 'const medicines = ' + newArrayStr + ';\n';
      }
      
      const newContent = content.substring(0, startIdx) + replacement + content.substring(endIdx);
      fs.writeFileSync(filePath, newContent, 'utf-8');
      console.log('Sorted medicines in', filePath);
    } else {
      console.error('Could not find markers in', filePath);
    }
  } catch (err) {
    console.error('Error processing', filePath, err.message);
  }
}

// Update js/script.js
sortMedicinesInFile('js/script.js', 'const medicines = [', 'const organonPrinciples = [');

// Update js/data/mockData.js
sortMedicinesInFile('js/data/mockData.js', 'export const medicines = [', 'export const organonPrinciples = [', true);

// Update src/data/mockData.ts
sortMedicinesInFile('src/data/mockData.ts', 'export const medicines: Medicine[] = [', 'export const organonPrinciples: OrganonPrinciple[] = [', true);
