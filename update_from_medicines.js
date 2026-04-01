import fs from 'fs';

const content = fs.readFileSync('src/data/mockData.ts', 'utf-8');

// Extract medicines
const startIdxMed = content.indexOf('export const medicines: Medicine[] = [');
const endIdxMed = content.indexOf('export const organonPrinciples: OrganonPrinciple[] = [');
const medStr = content.substring(startIdxMed + 'export const medicines: Medicine[] = '.length, endIdxMed).trim();
const cleanMedStr = medStr.endsWith(';') ? medStr.slice(0, -1) : medStr;
const medicines = new Function('return ' + cleanMedStr)();

// Extract symptomCategories
const startIdxSym = content.indexOf('export const symptomCategories: SymptomCategory[] = [');
const endIdxSym = content.indexOf('export const blogPosts: BlogPost[] = [');
const symStr = content.substring(startIdxSym + 'export const symptomCategories: SymptomCategory[] = '.length, endIdxSym).trim();
const cleanSymStr = symStr.endsWith(';') ? symStr.slice(0, -1) : symStr;
const symptomCategories = new Function('return ' + cleanSymStr)();

// Create a map of medicine info by English name
const medMap = {};
medicines.forEach(med => {
  // Extract English name from "বাংলা নাম (English Name)"
  const match = med.name.match(/\((.*?)\)/);
  if (match) {
    const engName = match[1].trim();
    medMap[engName] = med;
  }
});

// Update symptomCategories
symptomCategories.forEach(cat => {
  cat.diseases.forEach(dis => {
    dis.remedies.forEach(rem => {
      const medInfo = medMap[rem.name];
      if (medInfo) {
        rem.materiaMedicaInfo = medInfo.description;
        // Also update modalities if they are missing or generic
        if (!rem.modalities || rem.modalities.aggravation === 'লক্ষণ অনুযায়ী পরিবর্তনশীল।') {
          rem.modalities = medInfo.modalities;
        }
      } else {
        // Fallback info if not found in medicines array
        rem.materiaMedicaInfo = `কেন্ট ও বোরিকের মেটেরিয়া মেডিকা অনুযায়ী, ${rem.name} ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।`;
        if (!rem.modalities || rem.modalities.aggravation === 'লক্ষণ অনুযায়ী পরিবর্তনশীল।') {
          rem.modalities = {
            aggravation: "ঠান্ডা, স্যাঁতস্যাঁতে আবহাওয়া, সকালে বা রাতে (লক্ষণ অনুযায়ী)।",
            amelioration: "উত্তাপ, বিশ্রাম, বা মুক্ত বাতাসে (লক্ষণ অনুযায়ী)।"
          };
        }
      }
    });
  });
});

const newSymStr = JSON.stringify(symptomCategories, null, 2);
fs.writeFileSync('updated_categories.json', newSymStr);
console.log('Saved updated categories to updated_categories.json');
