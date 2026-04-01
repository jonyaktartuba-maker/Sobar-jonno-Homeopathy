import fs from 'fs';

function fixModalities(filePath, startMarker, endMarker, isExport = false) {
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
      
      let updated = false;
      
      for (const med of existingArray) {
        if (med.modalities && med.modalities.worse) {
          med.modalities.aggravation = Array.isArray(med.modalities.worse) ? med.modalities.worse.join(', ') + '।' : med.modalities.worse;
          delete med.modalities.worse;
          updated = true;
        }
        if (med.modalities && med.modalities.better) {
          med.modalities.amelioration = Array.isArray(med.modalities.better) ? med.modalities.better.join(', ') + '।' : med.modalities.better;
          delete med.modalities.better;
          updated = true;
        }
      }
      
      if (updated) {
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
        console.log('Fixed modalities in', filePath);
      } else {
        console.log('No modalities needed fixing in', filePath);
      }
    } else {
      console.error('Could not find markers in', filePath);
    }
  } catch (err) {
    console.error('Error processing', filePath, err.message);
  }
}

// Update js/script.js
fixModalities('js/script.js', 'const medicines = [', 'const organonPrinciples = [');

// Update js/data/mockData.js
fixModalities('js/data/mockData.js', 'export const medicines = [', 'export const organonPrinciples = [', true);

// Update src/data/mockData.ts
fixModalities('src/data/mockData.ts', 'export const medicines: Medicine[] = [', 'export const organonPrinciples: OrganonPrinciple[] = [', true);
