const fs = require('fs');

const catData = {
  eyes: [
    ['Conjunctivitis', 'চোখ ওঠা', 'Euphrasia', 'চোখ লাল ও পানি পড়া'],
    ['Cataract', 'ছানি', 'Calcarea Fluor', 'চোখের লেন্স ঘোলাটে হওয়া'],
    ['Glaucoma', 'গ্লুকোমা', 'Phosphorus', 'চোখের চাপ বৃদ্ধি'],
    ['Stye', 'অঞ্জনি', 'Staphysagria', 'চোখের পাতায় ফোঁড়া'],
    ['Dry Eyes', 'শুষ্ক চোখ', 'Alumina', 'চোখে শুষ্কতা ও জ্বালা']
  ],
  ears: [
    ['Otitis Media', 'কানের প্রদাহ', 'Pulsatilla', 'কান পাকা ও ব্যথা'],
    ['Tinnitus', 'কানে ভোঁ ভোঁ শব্দ', 'Chininum Sulph', 'কানে শব্দ হওয়া'],
    ['Earache', 'কান ব্যথা', 'Chamomilla', 'অসহ্য কান ব্যথা'],
    ['Deafness', 'বধিরতা', 'Baryta Carb', 'বয়স্কদের কানে কম শোনা'],
    ['Ear Discharge', 'কান থেকে পুঁজ পড়া', 'Silicea', 'কান দিয়ে দুর্গন্ধযুক্ত পুঁজ পড়া']
  ],
  face: [
    ['Trigeminal Neuralgia', 'মুখের স্নায়ুশূল', 'Spigelia', 'মুখের একপাশে তীব্র ব্যথা'],
    ['Facial Paralysis', 'মুখের পক্ষাঘাত', 'Causticum', 'মুখ বেঁকে যাওয়া'],
    ['Acne Rosacea', 'মুখের লালচে ব্রণ', 'Rhus Tox', 'মুখে লালচে দানা'],
    ['Erysipelas', 'মুখের বিসর্প', 'Apis Mel', 'মুখ ফুলে লাল হয়ে যাওয়া'],
    ['Pigmentation', 'মুখের দাগ', 'Sepia', 'মুখে মেছতা বা কালো দাগ']
  ],
  mouth: [
    ['Mouth Ulcer', 'মুখের ঘা', 'Merc Sol', 'মুখে ঘা ও প্রচুর লালা'],
    ['Bad Breath', 'মুখের দুর্গন্ধ', 'Kreosotum', 'মুখ থেকে দুর্গন্ধ বের হওয়া'],
    ['Stomatitis', 'মুখের প্রদাহ', 'Borax', 'মুখের ভেতর সাদা ঘা'],
    ['Thrush', 'ছত্রাক সংক্রমণ', 'Monilia Albicans', 'জিহ্বা ও মুখে সাদা প্রলেপ'],
    ['Salivation', 'অতিরিক্ত লালা', 'Merc Sol', 'ঘুমের মধ্যে মুখ দিয়ে লালা পড়া']
  ],
  tongue: [
    ['Glossitis', 'জিহ্বার প্রদাহ', 'Belladonna', 'জিহ্বা লাল ও ফুলে যাওয়া'],
    ['Coated Tongue', 'জিহ্বায় প্রলেপ', 'Antim Crud', 'জিহ্বায় সাদা বা হলুদ প্রলেপ'],
    ['Cracked Tongue', 'ফাটা জিহ্বা', 'Nitric Acid', 'জিহ্বার মাঝখানে ফাটল'],
    ['Tongue Ulcer', 'জিহ্বার ঘা', 'Merc Sol', 'জিহ্বায় যন্ত্রণাদায়ক ঘা'],
    ['Geographic Tongue', 'মানচিত্রের মতো জিহ্বা', 'Taraxacum', 'জিহ্বায় ছোপ ছোপ দাগ']
  ],
  taste: [
    ['Bitter Taste', 'তেতো স্বাদ', 'Chamomilla', 'মুখে সবসময় তেতো স্বাদ'],
    ['Sour Taste', 'টক স্বাদ', 'Calcarea Carb', 'মুখে টক স্বাদ'],
    ['Metallic Taste', 'ধাতব স্বাদ', 'Merc Sol', 'মুখে ধাতব বা তামার মতো স্বাদ'],
    ['Loss of Taste', 'স্বাদহীনতা', 'Pulsatilla', 'খাবারে কোনো স্বাদ না পাওয়া'],
    ['Sweet Taste', 'মিষ্টি স্বাদ', 'Sulphur', 'মুখে মিষ্টি স্বাদ অনুভব হওয়া']
  ],
  gums: [
    ['Gingivitis', 'মাড়ির প্রদাহ', 'Merc Sol', 'মাড়ি ফুলে যাওয়া ও ব্যথা'],
    ['Bleeding Gums', 'মাড়ি দিয়ে রক্ত পড়া', 'Phosphorus', 'সামান্য আঘাতেই মাড়ি থেকে রক্ত পড়া'],
    ['Spongy Gums', 'নরম মাড়ি', 'Kreosotum', 'মাড়ি নরম হয়ে যাওয়া'],
    ['Pyorrhea', 'পায়োরিয়া', 'Silicea', 'মাড়ি থেকে পুঁজ পড়া'],
    ['Gum Boil', 'মাড়ির ফোঁড়া', 'Hepar Sulph', 'মাড়িতে ফোঁড়া ও তীব্র ব্যথা']
  ],
  teeth: [
    ['Toothache', 'দাঁত ব্যথা', 'Plantago', 'তীব্র দাঁত ব্যথা'],
    ['Caries', 'দাঁতের ক্ষয়', 'Kreosotum', 'দাঁত দ্রুত কালো হয়ে ক্ষয় হওয়া'],
    ['Sensitivity', 'দাঁত শিরশির করা', 'Staphysagria', 'ঠান্ডা বা গরমে দাঁত শিরশির করা'],
    ['Teething Troubles', 'দাঁত ওঠার সমস্যা', 'Chamomilla', 'শিশুদের দাঁত ওঠার সময় ডায়রিয়া ও বিরক্তি'],
    ['Grinding Teeth', 'দাঁত কড়মড় করা', 'Cina', 'ঘুমের মধ্যে দাঁত কড়মড় করা']
  ],
  locomotor_system: [
    ['Rheumatoid Arthritis', 'বাতজ্বর', 'Rhus Tox', 'গিঁটে গিঁটে ব্যথা ও আড়ষ্টতা'],
    ['Osteoarthritis', 'অস্টিওআর্থ্রাইটিস', 'Bryonia', 'নড়াচড়ায় অস্থিসন্ধিতে ব্যথা'],
    ['Sciatica', 'সায়াটিকা', 'Colocynth', 'কোমর থেকে পা পর্যন্ত স্নায়ুশূল'],
    ['Gout', 'গেঁটে বাত', 'Colchicum', 'পায়ের বুড়ো আঙুলে তীব্র ব্যথা ও ফোলা'],
    ['Backache', 'কোমর ব্যথা', 'Aesculus', 'কোমরে তীব্র ব্যথা ও দুর্বলতা']
  ],
  fever: [
    ['Viral Fever', 'ভাইরাল জ্বর', 'Gelsemium', 'জ্বরের সাথে প্রচণ্ড দুর্বলতা ও শীত শীত ভাব'],
    ['Typhoid', 'টাইফয়েড', 'Baptisia', 'টাইফয়েড জ্বর ও প্রলাপ বকা'],
    ['Malaria', 'ম্যালেরিয়া', 'China', 'নির্দিষ্ট সময়ে কাঁপুনি দিয়ে জ্বর'],
    ['Dengue', 'ডেঙ্গু', 'Eupatorium Perf', 'জ্বরের সাথে হাড় ভাঙা ব্যথা'],
    ['Intermittent Fever', 'সবিরাম জ্বর', 'Arsenic Album', 'জ্বর আসে এবং যায়, সাথে অস্থিরতা']
  ],
  nervous_system: [
    ['Epilepsy', 'মৃগীরোগ', 'Cuprum Met', 'খিঁচুনি ও অজ্ঞান হয়ে যাওয়া'],
    ['Paralysis', 'পক্ষাঘাত', 'Causticum', 'শরীরের একপাশ অবশ হয়ে যাওয়া'],
    ['Neuralgia', 'স্নায়ুশূল', 'Hypericum', 'স্নায়ুতে আঘাতজনিত তীব্র ব্যথা'],
    ['Parkinsons', 'পারকিনসন্স', 'Agaricus', 'হাত-পা কাঁপা ও নিয়ন্ত্রণহীনতা'],
    ['Tremors', 'কাঁপুনি', 'Gelsemium', 'ভয় বা দুর্বলতায় হাত-পা কাঁপা']
  ],
  generalities: [
    ['Weakness', 'দুর্বলতা', 'Acid Phos', 'মানসিক ও শারীরিক দুর্বলতা'],
    ['Anemia', 'রক্তশূন্যতা', 'Ferrum Met', 'রক্তশূন্যতা ও ফ্যাকাশে চেহারা'],
    ['Obesity', 'স্থূলতা', 'Calcarea Carb', 'অতিরিক্ত ওজন বৃদ্ধি'],
    ['Dropsy', 'শোথ', 'Apis Mel', 'শরীরে পানি জমা ও ফোলা'],
    ['Chronic Fatigue', 'দীর্ঘস্থায়ী ক্লান্তি', 'Kali Phos', 'সামান্য পরিশ্রমে অতিরিক্ত ক্লান্তি']
  ],
  modalities: [
    ['Aggravation from Cold', 'ঠান্ডায় বৃদ্ধি', 'Hepar Sulph', 'সামান্য ঠান্ডাতেই রোগের বৃদ্ধি'],
    ['Aggravation from Heat', 'গরমে বৃদ্ধি', 'Pulsatilla', 'গরম ঘরে বা গরমে রোগের বৃদ্ধি'],
    ['Amelioration from Motion', 'নড়াচড়ায় উপশম', 'Rhus Tox', 'নড়াচড়া করলে ব্যথার উপশম'],
    ['Aggravation from Damp', 'আর্দ্রতায় বৃদ্ধি', 'Dulcamara', 'স্যাঁতসেঁতে আবহাওয়ায় রোগের বৃদ্ধি'],
    ['Amelioration from Pressure', 'চাপে উপশম', 'Colocynth', 'জোরে চাপ দিলে ব্যথার উপশম']
  ]
};

const content = fs.readFileSync('src/data/mockData.ts', 'utf-8');
const startIdx = content.indexOf('export const symptomCategories: SymptomCategory[] = [');
const endIdx = content.indexOf('export const blogPosts: BlogPost[] = [');

const symStr = content.substring(startIdx + 'export const symptomCategories: SymptomCategory[] = '.length, endIdx).trim().replace(/;$/, '');
const symptomCategories = new Function('return ' + symStr)();

symptomCategories.forEach(cat => {
  if (cat.diseases.length === 0 && catData[cat.id]) {
    const diseasesToAdd = catData[cat.id];
    diseasesToAdd.forEach(d => {
      cat.diseases.push({
        id: d[0].toLowerCase().replace(/ /g, '-'),
        name: `${d[1]} (${d[0]})`,
        remedies: [
          {
            name: d[2],
            description: `এই লক্ষণের ক্ষেত্রে ${d[2]} অত্যন্ত কার্যকরী একটি হোমিওপ্যাথিক ওষুধ।`,
            mainSymptoms: [d[3]],
            mentalSymptoms: ['রোগীর মানসিক লক্ষণ অনুযায়ী ওষুধ নির্বাচন করতে হবে।'],
            modalities: {
              aggravation: 'লক্ষণ অনুযায়ী বৃদ্ধি',
              amelioration: 'লক্ষণ অনুযায়ী উপশম'
            },
            materiaMedicaInfo: 'মেটেরিয়া মেডিকা অনুযায়ী এই ওষুধটি উক্ত লক্ষণে নির্দেশিত।'
          }
        ]
      });
    });
  }
});

const newContent = content.substring(0, startIdx) + 
  'export const symptomCategories: SymptomCategory[] = ' + 
  JSON.stringify(symptomCategories, null, 2) + ';\n\n' + 
  content.substring(endIdx);

fs.writeFileSync('src/data/mockData.ts', newContent);
console.log('Successfully populated empty categories.');
