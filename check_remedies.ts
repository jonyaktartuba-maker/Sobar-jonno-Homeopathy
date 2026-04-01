import fs from 'fs';

async function main() {
  const content = fs.readFileSync('src/data/mockData.ts', 'utf-8');
  
  // Extract symptomCategories string
  const startIdx = content.indexOf('export const symptomCategories: SymptomCategory[] = [');
  const endIdx = content.indexOf('export const blogPosts: BlogPost[] = [');
  
  if (startIdx === -1 || endIdx === -1) {
    console.error('Could not find boundaries');
    return;
  }
  
  // We will import the actual object to manipulate it
  const { symptomCategories } = await import('./src/data/mockData.ts');
  
  let missing = false;
  for (const cat of symptomCategories) {
    for (const dis of cat.diseases) {
      if (dis.remedies.length < 5) {
        console.log(`Category: ${cat.name}, Disease: ${dis.name}, Remedies: ${dis.remedies.length}`);
        missing = true;
      }
    }
  }
  if (!missing) {
    console.log('All diseases have at least 5 remedies.');
  }
}

main().catch(console.error);
