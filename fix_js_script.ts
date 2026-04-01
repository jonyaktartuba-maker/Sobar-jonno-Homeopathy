import fs from 'fs';

const newMedicines = [
  {
    id: 'bryonia-alba',
    name: 'ব্রায়োনিয়া অ্যালবা (Bryonia Alba)',
    commonName: 'White Bryony',
    source: 'উদ্ভিজ',
    description: 'কেন্টের মতে, ব্রায়োনিয়ার প্রধান বৈশিষ্ট্য হলো নড়াচড়ায় বৃদ্ধি এবং বিশ্রামে উপশম। এটি শ্লৈষ্মিক ঝিল্লি (Mucous membranes) এবং সেরাস ঝিল্লির (Serous membranes) ওপর কাজ করে এবং শুষ্কতা সৃষ্টি করে।',
    mainSymptoms: [
      'যেকোনো নড়াচড়ায় রোগের বৃদ্ধি (Aggravation from any motion)।',
      'অত্যন্ত শুষ্কতা - মুখ, ঠোঁট, গলা এবং মলদ্বার শুকনো থাকে।',
      'প্রচণ্ড জলপিপাসা, অনেকক্ষণ পর পর প্রচুর পরিমাণে পানি পান করে।',
      'কোষ্ঠকাঠিন্য, মল বড়, শক্ত এবং শুষ্ক।',
      'মাথাব্যথা, মনে হয় মাথা ফেটে যাবে, বিশেষ করে নড়াচড়া বা কাশলে বাড়ে।'
    ],
    mentalSymptoms: [
      'রোগী অত্যন্ত খিটখিটে এবং রাগান্বিত থাকে।',
      'ব্যবসা বা কাজের চিন্তা সবসময় মাথায় ঘোরে, এমনকি প্রলাপ বকার সময়ও ব্যবসার কথা বলে।',
      'বাড়ি যাওয়ার জন্য ব্যস্ত হয়ে পড়ে (Desires to go home)।'
    ],
    modalities: {
      aggravation: 'সামান্য নড়াচড়ায়, গরমে, সকালে, খাওয়ার পরে।',
      amelioration: 'সম্পূর্ণ বিশ্রামে, আক্রান্ত স্থানে চাপ দিলে, ঠান্ডা পানীয়ে।'
    }
  },
  {
    id: 'calcarea-carb',
    name: 'ক্যালকেরিয়া কার্ব (Calcarea Carbonica)',
    commonName: 'Carbonate of Lime',
    source: 'খনিজ (Mineral Kingdom)',
    description: 'বোয়েরিকের মতে, এটি মোটা, থলথলে এবং শীতকাতর ব্যক্তিদের জন্য অত্যন্ত উপযোগী। এটি পুষ্টির অভাব এবং গ্রন্থির (Glandular) সমস্যায় দারুণ কাজ করে।',
    mainSymptoms: [
      'অত্যন্ত শীতকাতর, সামান্য ঠান্ডাতেই রোগাক্রান্ত হয়।',
      'প্রচুর ঘাম হয়, বিশেষ করে মাথায় এবং ঘুমের মধ্যে বালিশ ভিজে যায়।',
      'ডিম খাওয়ার প্রবল ইচ্ছা (Craving for eggs) এবং অপাচ্য জিনিস (মাটি, চক) খাওয়ার প্রবণতা।',
      'হাড়ের বিকাশ ধীর, শিশুদের দাঁত উঠতে বা হাঁটতে দেরি হয়।',
      'পরিশ্রম করলে সহজেই হাঁপিয়ে ওঠে।'
    ],
    mentalSymptoms: [
      'ভবিষ্যৎ নিয়ে অত্যন্ত চিন্তিত এবং ভয় পায় যে সে পাগল হয়ে যাবে।',
      'অন্ধকার, ভূত এবং সংক্রামক রোগের ভয়।',
      'মানসিক পরিশ্রমে অনীহা এবং সহজেই ক্লান্ত হয়ে পড়ে।'
    ],
    modalities: {
      aggravation: 'ঠান্ডা বাতাসে, পানিতে ভিজলে, পূর্ণিমায়, শারীরিক বা মানসিক পরিশ্রমে।',
      amelioration: 'শুষ্ক আবহাওয়ায়, ব্যথার দিকে শুলে।'
    }
  },
  {
    id: 'lycopodium',
    name: 'লাইকোপোডিয়াম (Lycopodium Clavatum)',
    commonName: 'Club Moss',
    source: 'উদ্ভিজ',
    description: 'কেন্টের মতে, এটি পরিপাকতন্ত্র এবং যকৃতের (Liver) সমস্যার একটি প্রধান ওষুধ। এর লক্ষণগুলো সাধারণত ডান দিক থেকে শুরু হয়ে বাম দিকে যায়।',
    mainSymptoms: [
      'পেটে প্রচুর গ্যাস হয়, বিশেষ করে পেটের নিচের অংশে (Lower abdomen)।',
      'অল্প খেলেই পেট ভরে যায় (Early satiety)।',
      'রোগের লক্ষণ বিকেল ৪টা থেকে রাত ৮টা পর্যন্ত বৃদ্ধি পায়।',
      'মিষ্টি এবং গরম খাবার খাওয়ার প্রবল ইচ্ছা।',
      'ডান দিকের রোগ (যেমন- ডান দিকের গলা ব্যথা, ডান দিকের কিডনিতে পাথর) বেশি দেখা যায়।'
    ],
    mentalSymptoms: [
      'রোগী অত্যন্ত রাগী, একগুঁয়ে এবং কর্তৃত্বপরায়ণ (Dictatorial)।',
      'নতুন কাজ শুরু করতে ভয় পায় (Lack of self-confidence), কিন্তু শুরু করলে ভালোভাবে শেষ করে।',
      'একা থাকতে ভয় পায়, কিন্তু আবার মানুষের ভিড়ও পছন্দ করে পছন্দ করে না (চায় কেউ পাশের ঘরে থাকুক)।'
    ],
    modalities: {
      aggravation: 'বিকেল ৪টা থেকে রাত ৮টায়, ডান দিকে শুলে, ঠান্ডা খাবারে।',
      amelioration: 'গরম খাবার ও পানীয়ে, নড়াচড়ায়, প্রস্রাব করার পর।'
    }
  },
  {
    id: 'pulsatilla',
    name: 'পালসেটিলা (Pulsatilla)',
    commonName: 'Wind Flower',
    source: 'উদ্ভিজ',
    description: 'বোয়েরিকের মতে, এটি নম্র, শান্ত এবং ক্রন্দনশীল স্বভাবের মহিলাদের জন্য বেশি উপযোগী। এর লক্ষণগুলো পরিবর্তনশীল এবং খোলা বাতাসে রোগী আরাম বোধ করে।',
    mainSymptoms: [
      'লক্ষণগুলো দ্রুত পরিবর্তন হয় (Shifting symptoms), ব্যথা এক জায়গা থেকে অন্য জায়গায় যায়।',
      'তৃষ্ণাহীনতা (Thirstless), মুখ শুকনো থাকলেও পানি খেতে চায় না।',
      'গরম ঘরে বা গরমে রোগের বৃদ্ধি এবং খোলা বাতাসে আরাম।',
      'চর্বিযুক্ত খাবার বা মাখন খাওয়ার পর পেটের সমস্যা।',
      'সর্দি বা স্রাব সাধারণত ঘন এবং হলদে-সবুজ রঙের হয়।'
    ],
    mentalSymptoms: [
      'অত্যন্ত ক্রন্দনশীল স্বভাব (Weeps easily), কথা বলার সময় কেঁদে ফেলে।',
      'সহানুভূতি এবং সান্ত্বনা পেলে খুশি হয় (Consolation ameliorates)।',
      'নম্র, সহজে বশ্যতা স্বীকার করে এবং একা থাকতে ভয় পায়।'
    ],
    modalities: {
      aggravation: 'গরমে, গরম ঘরে, চর্বিযুক্ত খাবারে, বিশ্রামে, সন্ধ্যায়।',
      amelioration: 'খোলা বাতাসে, ঠান্ডা পানীয়ে, ধীরে ধীরে হাঁটলে, সান্ত্বনা দিলে।'
    }
  },
  {
    id: 'sulphur',
    name: 'সালফার (Sulphur)',
    commonName: 'Brimstone',
    source: 'খনিজ',
    description: 'কেন্টের মতে, এটি অ্যান্টি-সোরিক (Anti-psoric) ওষুধের রাজা। চর্মরোগ এবং দীর্ঘস্থায়ী রোগের ক্ষেত্রে এটি অত্যন্ত গুরুত্বপূর্ণ। রোগী সাধারণত অপরিষ্কার থাকতে পছন্দ করে।',
    mainSymptoms: [
      'চর্মরোগ এবং প্রচণ্ড চুলকানি, যা গরমে এবং রাতে বিছানায় বাড়ে।',
      'গোসল করতে অনীহা (Aversion to washing/bathing), গোসল করলে রোগ বাড়ে।',
      'সকাল ১১টার দিকে পেটে প্রচণ্ড ক্ষুধা এবং দুর্বলতা অনুভব করে।',
      'পায়ের তলায়, মাথায় এবং শরীরে জ্বালাপোড়া (Burning sensation), রাতে বিছানা থেকে পা বের করে রাখে।',
      'দাঁড়িয়ে থাকতে খুব কষ্ট হয় (Standing is the worst position)।'
    ],
    mentalSymptoms: [
      'রোগী নিজেকে খুব জ্ঞানী এবং ধনী মনে করে (Ragged philosopher)।',
      'অপরিষ্কার এবং অগোছালো স্বভাব, কিন্তু নিজের নোংরামি তার খারাপ লাগে না।',
      'স্বার্থপর এবং অন্যের প্রতি উদাসীন।'
    ],
    modalities: {
      aggravation: 'গরমে, বিছানার গরমে, গোসল করলে, সকাল ১১টায়, দাঁড়িয়ে থাকলে।',
      amelioration: 'শুষ্ক এবং উষ্ণ আবহাওয়ায়, ডান দিকে শুলে।'
    }
  }
];

async function main() {
  const jsContent = fs.readFileSync('js/script.js', 'utf-8');

  // Find the medicines array in js/script.js
  const startIdx = jsContent.indexOf('const medicines = [');
  const endIdx = jsContent.indexOf('const organonPrinciples = [');
  
  if (startIdx !== -1 && endIdx !== -1) {
    // Extract the existing medicines array
    const medicinesStr = jsContent.substring(startIdx + 'const medicines = '.length, endIdx).trim();
    // Remove the trailing semicolon if it exists
    const cleanMedicinesStr = medicinesStr.endsWith(';') ? medicinesStr.slice(0, -1) : medicinesStr;
    
    let existingMedicines;
    try {
      // Use Function to safely evaluate the array string (since it's JS, not strict JSON)
      existingMedicines = new Function('return ' + cleanMedicinesStr)();
    } catch (e) {
      console.error('Failed to parse existing medicines:', e);
      return;
    }
    
    const existingIds = new Set(existingMedicines.map(m => m.id));
    let added = false;
    
    for (const m of newMedicines) {
      if (!existingIds.has(m.id)) {
        existingMedicines.push(m);
        added = true;
      }
    }
    
    if (added) {
      const newMedicinesStrJS = `const medicines = ${JSON.stringify(existingMedicines, null, 2)};\n`;
      const newJsContent = jsContent.substring(0, startIdx) + newMedicinesStrJS + jsContent.substring(endIdx);
      fs.writeFileSync('js/script.js', newJsContent, 'utf-8');
      console.log('Updated js/script.js');
    } else {
      console.log('Medicines already exist in js/script.js.');
    }
  } else {
    console.error('Could not find medicines array bounds in js/script.js');
  }
}

main().catch(console.error);
