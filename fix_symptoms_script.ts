import fs from 'fs';

async function main() {
  const tsContent = fs.readFileSync('src/data/mockData.ts', 'utf-8');
  const jsContent = fs.readFileSync('js/script.js', 'utf-8');

  // We need to extract the updated symptomCategories from src/data/mockData.ts
  // Since it's TS, we can import it dynamically or parse it.
  // Wait, we can just use the compiled js/data/mockData.js which we updated previously!
  const mockDataJS = fs.readFileSync('js/data/mockData.js', 'utf-8');
  
  // Find symptomCategories in js/data/mockData.js
  const startIdxMock = mockDataJS.indexOf('export const symptomCategories = [');
  const endIdxMock = mockDataJS.indexOf('export const blogPosts = [');
  
  if (startIdxMock === -1 || endIdxMock === -1) {
    console.error('Could not find symptomCategories in js/data/mockData.js');
    return;
  }
  
  const symptomCategoriesStr = mockDataJS.substring(startIdxMock + 'export '.length, endIdxMock).trim();
  
  // Now find symptomCategories in js/script.js
  const startIdxScript = jsContent.indexOf('const symptomCategories = [');
  const endIdxScript = jsContent.indexOf('const blogPosts = [');
  
  if (startIdxScript === -1 || endIdxScript === -1) {
    console.error('Could not find symptomCategories in js/script.js');
    return;
  }
  
  const newJsContent = jsContent.substring(0, startIdxScript) + symptomCategoriesStr + '\n' + jsContent.substring(endIdxScript);
  fs.writeFileSync('js/script.js', newJsContent, 'utf-8');
  console.log('Updated symptomCategories in js/script.js');
}

main().catch(console.error);
