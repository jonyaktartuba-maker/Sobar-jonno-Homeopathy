import fs from 'fs';

const newMedicines = [
  {
    "id": "ignatia-amara",
    "name": "ইগ্নেশিয়া আমারা (Ignatia Amara)",
    "commonName": "St. Ignatius Bean",
    "source": "উদ্ভিজ",
    "description": "মানসিক শোক, দুঃখ, হতাশা বা প্রেমে ব্যর্থতার ফলে সৃষ্ট শারীরিক ও মানসিক সমস্যার জন্য এটি একটি অন্যতম প্রধান ওষুধ।",
    "mainSymptoms": [
      "দীর্ঘশ্বাস ফেলা এবং একা থাকতে পছন্দ করা।",
      "গলায় কিছু আটকে থাকার অনুভূতি (Globus hystericus)।",
      "পরস্পরবিরোধী লক্ষণ (যেমন- জ্বর হলে পিপাসা থাকে না, শীত করলে পিপাসা থাকে)।"
    ],
    "mentalSymptoms": [
      "অত্যন্ত সংবেদনশীল, সহজেই কাঁদে বা হাসে।",
      "দুঃখ বা শোক চেপে রাখার প্রবণতা।"
    ],
    "modalities": {
      "worse": ["সকালে", "খোলা বাতাসে", "কফি পান করলে", "শোক বা মানসিক চাপে"],
      "better": ["গরম ঘরে", "শক্ত চাপে", "খাওয়ার সময়"]
    },
    "dosage": "সাধারণত 30C বা 200C শক্তিতে ব্যবহার করা হয়। মানসিক লক্ষণে উচ্চশক্তি ভালো কাজ করে।"
  },
  {
    "id": "natrum-mur",
    "name": "নেট্রাম মিউরিয়াটিকাম (Natrum Muriaticum)",
    "commonName": "Common Salt",
    "source": "খনিজ",
    "description": "দীর্ঘদিনের চাপা কষ্ট, শোক বা রাগ থেকে সৃষ্ট রোগের জন্য এটি অত্যন্ত কার্যকর। বিশেষ করে যারা অতিরিক্ত লবণ খেতে পছন্দ করে।",
    "mainSymptoms": [
      "সকাল ১০টা থেকে ১১টার দিকে মাথাব্যথা বাড়ে।",
      "ঠোঁটের কোণে বা জিভে ঘা (Cold sores)।",
      "অতিরিক্ত লবণ খাওয়ার প্রবল ইচ্ছা।"
    ],
    "mentalSymptoms": [
      "সান্ত্বনা দিলে রাগ বাড়ে।",
      "অতীতের কষ্টকর স্মৃতি মনে করে কাঁদে।"
    ],
    "modalities": {
      "worse": ["সকাল ১০-১১ টায়", "রোদে গেলে", "সান্ত্বনা দিলে"],
      "better": ["খোলা বাতাসে", "ঠান্ডা পানিতে গোসল করলে", "বিশ্রামে"]
    },
    "dosage": "30C, 200C বা 1M শক্তিতে ব্যবহৃত হয়। এটি একটি গভীর ক্রিয়াশীল ওষুধ, তাই ঘন ঘন প্রয়োগ করা উচিত নয়।"
  },
  {
    "id": "phosphorus",
    "name": "ফসফরাস (Phosphorus)",
    "commonName": "Phosphorus",
    "source": "খনিজ",
    "description": "স্নায়বিক দুর্বলতা, রক্তপাত প্রবণতা এবং শ্বাসযন্ত্রের সমস্যায় এটি ব্যাপকভাবে ব্যবহৃত হয়। লম্বা, ছিপছিপে এবং সংবেদনশীল ব্যক্তিদের জন্য এটি বেশি উপযোগী।",
    "mainSymptoms": [
      "বরফের মতো ঠান্ডা পানি পানের প্রবল ইচ্ছা।",
      "সামান্য আঘাতেই প্রচুর রক্তপাত হয়।",
      "বাম পাশে শুলে বা ঠান্ডা বাতাসে কাশি বাড়ে।"
    ],
    "mentalSymptoms": [
      "অন্ধকার, বজ্রপাত এবং একা থাকতে প্রচণ্ড ভয়।",
      "খুবই সহানুভূতিশীল এবং মিশুক স্বভাবের।"
    ],
    "modalities": {
      "worse": ["বজ্রপাতের সময়", "বাম পাশে শুলে", "গরম খাবার বা পানীয়ে"],
      "better": ["ঠান্ডা খাবার বা পানীয়ে", "ডান পাশে শুলে", "ঘুমের পর"]
    },
    "dosage": "30C বা 200C শক্তিতে ব্যবহার করা হয়। যক্ষ্মা রোগীদের ক্ষেত্রে সাবধানে ব্যবহার করতে হয়।"
  },
  {
    "id": "sepia",
    "name": "সিপিয়া (Sepia)",
    "commonName": "Cuttlefish Ink",
    "source": "প্রাণিজ",
    "description": "মহিলাদের বিভিন্ন সমস্যা, বিশেষ করে জরায়ুর সমস্যা এবং হরমোনের ভারসাম্যহীনতায় এটি একটি অন্যতম প্রধান ওষুধ।",
    "mainSymptoms": [
      "তলপেট থেকে সবকিছু নিচের দিকে বেরিয়ে আসার অনুভূতি (Bearing down sensation)।",
      "নাক ও গালের ওপর বাদামী দাগ (Yellow saddle across nose)।",
      "অত্যধিক শীতকাতরতা।"
    ],
    "mentalSymptoms": [
      "পরিবার এবং প্রিয়জনদের প্রতি উদাসীনতা।",
      "একা থাকতে চায়, কিন্তু আবার একা থাকতে ভয়ও পায়।"
    ],
    "modalities": {
      "worse": ["ঠান্ডা বাতাসে", "বিশ্রামে", "সকালে ও সন্ধ্যায়"],
      "better": ["ব্যায়াম করলে", "দ্রুত হাঁটলে", "গরম সেঁক দিলে"]
    },
    "dosage": "30C বা 200C শক্তিতে ব্যবহৃত হয়। এটি একটি দীর্ঘ ক্রিয়াশীল ওষুধ।"
  },
  {
    "id": "silicea",
    "name": "সাইলিসিয়া (Silicea)",
    "commonName": "Pure Flint",
    "source": "খনিজ",
    "description": "শরীরের পুঁজ তৈরি হওয়ার প্রবণতা রোধ করতে এবং যেকোনো বহিরাগত বস্তু (যেমন- কাঁটা বা স্প্লিন্টার) শরীর থেকে বের করতে এটি সাহায্য করে।",
    "mainSymptoms": [
      "প্রচণ্ড শীতকাতর, সবসময় গরম কাপড় পরতে চায়।",
      "মাথা, হাত ও পায়ে প্রচুর দুর্গন্ধযুক্ত ঘাম হয়।",
      "কোষ্ঠকাঠিন্য: মল কিছুটা বেরিয়ে আবার ভেতরে ঢুকে যায়।"
    ],
    "mentalSymptoms": [
      "আত্মবিশ্বাসের অভাব, কিন্তু কাজ শুরু করলে ঠিকমতো করতে পারে।",
      "সুঁচ বা ধারালো জিনিসের প্রতি ভয়।"
    ],
    "modalities": {
      "worse": ["ঠান্ডা বাতাসে", "শীতকালে", "অমাবস্যা বা পূর্ণিমায়"],
      "better": ["গরম ঘরে", "মাথা গরম কাপড়ে মুড়িয়ে রাখলে"]
    },
    "dosage": "30C, 200C বা উচ্চতর শক্তিতে ব্যবহৃত হয়। পুঁজ বের করার জন্য নিম্নশক্তি এবং শুকানোর জন্য উচ্চশক্তি ব্যবহৃত হয়।"
  }
];

function addAndSortMedicines(filePath, startMarker, endMarker, isExport = false) {
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
      
      const existingIds = new Set(existingArray.map(m => m.id));
      let added = false;
      
      for (const m of newMedicines) {
        if (!existingIds.has(m.id)) {
          existingArray.push(m);
          added = true;
        }
      }
      
      if (added) {
        // Sort alphabetically by id
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
        console.log('Added and sorted medicines in', filePath);
      } else {
        console.log('Medicines already exist in', filePath);
      }
    } else {
      console.error('Could not find markers in', filePath);
    }
  } catch (err) {
    console.error('Error processing', filePath, err.message);
  }
}

// Update js/script.js
addAndSortMedicines('js/script.js', 'const medicines = [', 'const organonPrinciples = [');

// Update js/data/mockData.js
addAndSortMedicines('js/data/mockData.js', 'export const medicines = [', 'export const organonPrinciples = [', true);

// Update src/data/mockData.ts
addAndSortMedicines('src/data/mockData.ts', 'export const medicines: Medicine[] = [', 'export const organonPrinciples: OrganonPrinciple[] = [', true);
