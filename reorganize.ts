import fs from 'fs';

const content = fs.readFileSync('src/data/mockData.ts', 'utf-8');
const startIdx = content.indexOf('export const symptomCategories: SymptomCategory[] = [');
const endIdx = content.indexOf('export const blogPosts: BlogPost[] = [');
const symStr = content.substring(startIdx + 'export const symptomCategories: SymptomCategory[] = '.length, endIdx).trim().replace(/;$/, '');
const oldCategories = new Function('return ' + symStr)();

// Flatten all diseases
const allDiseases = [];
oldCategories.forEach(cat => {
  cat.diseases.forEach(dis => {
    allDiseases.push({ ...dis, oldCat: cat.id });
  });
});

const getDisease = (name) => allDiseases.find(d => d.name === name);

const newCategoriesList = [
  { id: 'mind', name: 'মন (Mind)', diseases: [] },
  { id: 'head', name: 'মাথা (Head)', diseases: [] },
  { id: 'eyes', name: 'চোখ (Eyes)', diseases: [] },
  { id: 'ears', name: 'কান (Ears)', diseases: [] },
  { id: 'nose', name: 'নাক (Nose)', diseases: [] },
  { id: 'face', name: 'মুখমণ্ডল (Face)', diseases: [] },
  { id: 'mouth', name: 'মুখ (Mouth)', diseases: [] },
  { id: 'tongue', name: 'জিহ্বা (Tongue)', diseases: [] },
  { id: 'taste', name: 'স্বাদ (Taste)', diseases: [] },
  { id: 'gums', name: 'মাড়ি (Gums)', diseases: [] },
  { id: 'teeth', name: 'দাঁত (Teeth)', diseases: [] },
  { id: 'throat', name: 'গলা (Throat)', diseases: [] },
  { id: 'stomach', name: 'পাকস্থলী (Stomach)', diseases: [] },
  { id: 'abdomen', name: 'পেট (Abdomen)', diseases: [] },
  { id: 'urinary_system', name: 'মূত্রতন্ত্র (Urinary System)', diseases: [] },
  { id: 'male_sexual_system', name: 'পুরুষ প্রজননতন্ত্র (Male Sexual System)', diseases: [] },
  { id: 'female_sexual_system', name: 'মহিলা প্রজননতন্ত্র (Female Sexual System)', diseases: [] },
  { id: 'circulatory_system', name: 'রক্তসংবহনতন্ত্র (Circulatory System)', diseases: [] },
  { id: 'locomotor_system', name: 'চলনতন্ত্র (Locomotor System)', diseases: [] },
  { id: 'respiratory_system', name: 'শ্বাসতন্ত্র (Respiratory System)', diseases: [] },
  { id: 'skin', name: 'ত্বক (Skin)', diseases: [] },
  { id: 'fever', name: 'জ্বর (Fever)', diseases: [] },
  { id: 'nervous_system', name: 'স্নায়ুতন্ত্র (Nervous System)', diseases: [] },
  { id: 'generalities', name: 'সাধারণ লক্ষণ (Generalities)', diseases: [] },
  { id: 'modalities', name: 'হ্রাস-বৃদ্ধি (Modalities)', diseases: [] }
];

// Map existing diseases to new categories
const mapping = {
  'মাথাব্যথা (Headache)': 'head',
  'মাথা ঘোরা (Vertigo)': 'head',
  'মাইগ্রেন (Migraine)': 'head',
  'চুল পড়া (Hair Fall)': 'head',
  'খুশকি (Dandruff)': 'head',
  
  'গ্যাস্ট্রিক (Gastritis)': 'stomach',
  'এসিডিটি (Acidity)': 'stomach',
  'বদহজম (Indigestion)': 'stomach',
  'বমি বমি ভাব (Nausea)': 'stomach',
  'আলসার (Ulcer)': 'stomach',
  
  'কাশি (Cough)': 'respiratory_system',
  'ব্রঙ্কাইটিস (Bronchitis)': 'respiratory_system',
  'নিউমোনিয়া (Pneumonia)': 'respiratory_system',
  'টনসিল (Tonsillitis)': 'throat',
  'সাইনোসাইটিস (Sinusitis)': 'nose',
  
  'একজিমা (Eczema)': 'skin',
  'সোরিয়াসিস (Psoriasis)': 'skin',
  'দাদ (Ringworm)': 'skin',
  'ব্রণ (Acne)': 'skin', // or face? skin is fine
  'আঁচিল (Warts)': 'skin',
  
  'দুশ্চিন্তা ও ভয় (Anxiety)': 'mind',
  'বিষণ্ণতা (Depression)': 'mind',
  'অনিদ্রা (Insomnia)': 'mind',
  'রাগ (Anger)': 'mind',
  'স্মৃতিশক্তি হ্রাস (Memory Loss)': 'mind',
  
  'হাঁপানি (Asthma)': 'respiratory_system',
  'বুক ধড়ফড় (Palpitation)': 'circulatory_system',
  'বুক ব্যথা (Chest Pain)': 'respiratory_system', // or circulatory
  'প্লুরিসি (Pleurisy)': 'respiratory_system',
  'যক্ষ্মা (Tuberculosis)': 'respiratory_system',
  
  'পেট ব্যথা (Colic)': 'abdomen',
  'ডায়রিয়া (Diarrhea)': 'abdomen',
  'কোষ্ঠকাঠিন্য (Constipation)': 'abdomen', // or stomach/rectum
  'আমাশয় (Dysentery)': 'abdomen',
  'অ্যাপেন্ডিসাইটিস (Appendicitis)': 'abdomen',
  
  'প্রস্রাবে জ্বালাপোড়া (UTI)': 'urinary_system',
  'কিডনি পাথর (Kidney Stone)': 'urinary_system',
  'প্রস্রাবে রক্ত (Hematuria)': 'urinary_system',
  'অসাড়ে প্রস্রাব (Incontinence)': 'urinary_system',
  'প্রস্রাব আটকে যাওয়া (Retention)': 'urinary_system',
  
  'মাসিকের সমস্যা (Menstrual Problems)': 'female_sexual_system',
  'সাদাস্রাব (Leucorrhea)': 'female_sexual_system',
  'মাসিকের ব্যথা (Dysmenorrhea)': 'female_sexual_system',
  'মেনোপজ (Menopause)': 'female_sexual_system',
  'বন্ধ্যাত্ব (Infertility)': 'female_sexual_system',
  
  'যৌন দুর্বলতা (Sexual Weakness)': 'male_sexual_system',
  'ধ্বজভঙ্গ (Impotence)': 'male_sexual_system',
  'প্রোস্টেট বৃদ্ধি (Prostatitis)': 'male_sexual_system',
  'ধাতুক্ষয় (Spermatorrhea)': 'male_sexual_system',
  'একশিরা (Hydrocele)': 'male_sexual_system'
};

allDiseases.forEach(dis => {
  const targetCatId = mapping[dis.name];
  if (targetCatId) {
    const cat = newCategoriesList.find(c => c.id === targetCatId);
    if (cat) {
      delete dis.oldCat;
      cat.diseases.push(dis);
    }
  } else {
    console.log('Unmapped disease:', dis.name);
  }
});

// Filter out categories with no diseases if we want, but the user requested these categories.
// Actually, let's keep all categories as requested, even if empty.

const newContent = content.substring(0, startIdx) + 
  'export const symptomCategories: SymptomCategory[] = ' + 
  JSON.stringify(newCategoriesList, null, 2) + ';\n\n' + 
  content.substring(endIdx);

fs.writeFileSync('src/data/mockData.ts', newContent);
console.log('Updated src/data/mockData.ts');
