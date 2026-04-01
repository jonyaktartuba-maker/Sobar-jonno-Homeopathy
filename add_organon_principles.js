import fs from 'fs';

const newPrinciples = [
  {
    id: 16,
    title: "সংস্কারমুক্ত পর্যবেক্ষক (Unprejudiced Observer)",
    content: "চিকিৎসককে হতে হবে সংস্কারমুক্ত। তিনি রোগীর লক্ষণগুলো মনোযোগ দিয়ে শুনবেন এবং নিজের কোনো পূর্বধারণা রোগীর ওপর চাপিয়ে দেবেন না।"
  },
  {
    id: 17,
    title: "রোগের কারণ (Causa Occasionalis)",
    content: "চিকিৎসককে রোগীর শারীরিক ও মানসিক রোগের পেছনের মূল কারণ (যেমন- মানসিক আঘাত, অস্বাস্থ্যকর পরিবেশ বা ভুল জীবনযাপন) খুঁজে বের করে তা দূর করতে হবে।"
  },
  {
    id: 18,
    title: "সদৃশ রোগের সংঘাত (Two Similar Diseases)",
    content: "দেহে দুটি সদৃশ রোগ একসাথে থাকলে, শক্তিশালী রোগটি দুর্বল রোগটিকে চিরতরে ধ্বংস করে দেয়। এই নীতির ওপর ভিত্তি করেই হোমিওপ্যাথি কাজ করে।"
  },
  {
    id: 19,
    title: "অসদৃশ রোগের সংঘাত (Two Dissimilar Diseases)",
    content: "দুটি অসদৃশ রোগ একসাথে হলে শক্তিশালী রোগটি দুর্বলটিকে সাময়িকভাবে দমিয়ে রাখে, কিন্তু আরোগ্য করতে পারে না।"
  },
  {
    id: 20,
    title: "মানসিক লক্ষণ (Mental Symptoms)",
    content: "ওষুধ নির্বাচনের ক্ষেত্রে রোগীর মানসিক অবস্থা ও স্বভাব সবচেয়ে বেশি গুরুত্ব বহন করে, কারণ শারীরিক রোগের সাথে মানসিক অবস্থার গভীর সম্পর্ক রয়েছে।"
  }
];

function updateFile(filePath, startMarker, endMarker, isExport = false) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const startIdx = content.indexOf(startMarker);
    const endIdx = content.indexOf(endMarker, startIdx);
    
    if (startIdx !== -1 && endIdx !== -1) {
      // Include the '[' from the start marker
      const arrayStr = '[' + content.substring(startIdx + startMarker.length, endIdx).trim();
      const cleanArrayStr = arrayStr.endsWith(';') ? arrayStr.slice(0, -1) : arrayStr;
      
      let existingArray;
      try {
        existingArray = new Function('return ' + cleanArrayStr)();
      } catch (e) {
        console.error('Failed to parse array in', filePath, e);
        return;
      }
      
      const existingIds = new Set(existingArray.map(item => item.id));
      let added = false;
      
      for (const p of newPrinciples) {
        if (!existingIds.has(p.id)) {
          existingArray.push(p);
          added = true;
        }
      }
      
      if (added) {
        const newArrayStr = JSON.stringify(existingArray, null, 2);
        let replacement = '';
        if (filePath.endsWith('.ts')) {
          replacement = 'export const organonPrinciples: OrganonPrinciple[] = ' + newArrayStr + ';\n';
        } else if (isExport) {
          replacement = 'export const organonPrinciples = ' + newArrayStr + ';\n';
        } else {
          replacement = 'const organonPrinciples = ' + newArrayStr + ';\n';
        }
        
        const newContent = content.substring(0, startIdx) + replacement + content.substring(endIdx);
        fs.writeFileSync(filePath, newContent, 'utf-8');
        console.log('Updated', filePath);
      } else {
        console.log('Principles already exist in', filePath);
      }
    } else {
      console.error('Could not find markers in', filePath);
    }
  } catch (err) {
    console.error('Error processing', filePath, err.message);
  }
}

// Update js/script.js
updateFile('js/script.js', 'const organonPrinciples = [', 'const symptomCategories = [');

// Update js/data/mockData.js
updateFile('js/data/mockData.js', 'export const organonPrinciples = [', 'export const symptomCategories = [', true);

// Update src/data/mockData.ts
updateFile('src/data/mockData.ts', 'export const organonPrinciples: OrganonPrinciple[] = [', 'export const symptomCategories: SymptomCategory[] = [', true);

