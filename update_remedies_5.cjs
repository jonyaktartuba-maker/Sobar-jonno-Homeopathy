const fs = require('fs');

const additionalRemedies = {
  'conjunctivitis': ['Belladonna', 'Argentum Nitricum', 'Pulsatilla', 'Apis Mellifica'],
  'cataract': ['Silicea', 'Phosphorus', 'Causticum', 'Conium'],
  'glaucoma': ['Phosphorus', 'Spigelia', 'Belladonna', 'Gelsemium'],
  'stye': ['Pulsatilla', 'Hepar Sulph', 'Silicea', 'Conium'],
  'dry-eyes': ['Natrum Mur', 'Sulphur', 'Belladonna', 'Arsenic Album'],
  
  'otitis-media': ['Belladonna', 'Hepar Sulph', 'Chamomilla', 'Merc Sol'],
  'tinnitus': ['Kali Mur', 'Natrum Salicylicum', 'Graphites', 'Petroleum'],
  'earache': ['Belladonna', 'Pulsatilla', 'Plantago', 'Hepar Sulph'],
  'deafness': ['Calcarea Carb', 'Graphites', 'Phosphorus', 'Silicea'],
  'ear-discharge': ['Pulsatilla', 'Merc Sol', 'Calcarea Sulph', 'Tellurium'],

  'trigeminal-neuralgia': ['Magnesia Phos', 'Belladonna', 'Arsenic Album', 'Colocynth'],
  'facial-paralysis': ['Aconite', 'Belladonna', 'Gelsemium', 'Cadmium Sulph'],
  'acne-rosacea': ['Sulphur', 'Psorinum', 'Calcarea Silicata', 'Arsenic Brom'],
  'erysipelas': ['Belladonna', 'Graphites', 'Rhus Tox', 'Lachesis'],
  'pigmentation': ['Caulophyllum', 'Cadmium Sulph', 'Sulphur', 'Thuja'],

  'mouth-ulcer': ['Borax', 'Nitric Acid', 'Natrum Mur', 'Sulphuric Acid'],
  'bad-breath': ['Merc Sol', 'Nux Vomica', 'Pulsatilla', 'Sulphur'],
  'stomatitis': ['Merc Sol', 'Nitric Acid', 'Baptisia', 'Arsenic Album'],
  'thrush': ['Merc Sol', 'Sulphuric Acid', 'Kali Chlor', 'Natrum Mur'],
  'salivation': ['Syphilinum', 'Nitric Acid', 'Pulsatilla', 'Ipecac'],

  'glossitis': ['Apis Mel', 'Merc Sol', 'Lachesis', 'Nitric Acid'],
  'coated-tongue': ['Pulsatilla', 'Nux Vomica', 'Bryonia', 'Merc Sol'],
  'cracked-tongue': ['Natrum Mur', 'Rhus Tox', 'Arsenic Album', 'Sulphur'],
  'tongue-ulcer': ['Nitric Acid', 'Borax', 'Lachesis', 'Thuja'],
  'geographic-tongue': ['Natrum Mur', 'Merc Sol', 'Arsenic Album', 'Rhus Tox'],

  'bitter-taste': ['Pulsatilla', 'Nux Vomica', 'Bryonia', 'Natrum Mur'],
  'sour-taste': ['Nux Vomica', 'Pulsatilla', 'Lycopodium', 'Sulphur'],
  'metallic-taste': ['Rhus Tox', 'Cocculus', 'Cuprum Met', 'Sulphur'],
  'loss-of-taste': ['Natrum Mur', 'Silicea', 'Sulphur', 'Magnesia Mur'],
  'sweet-taste': ['Merc Sol', 'Pulsatilla', 'Cuprum Met', 'Stannum Met'],

  'gingivitis': ['Kreosotum', 'Nitric Acid', 'Phosphorus', 'Staphysagria'],
  'bleeding-gums': ['Merc Sol', 'Nitric Acid', 'Kreosotum', 'Lachesis'],
  'spongy-gums': ['Merc Sol', 'Nitric Acid', 'Phosphorus', 'Carbo Veg'],
  'pyorrhea': ['Merc Sol', 'Kreosotum', 'Phosphorus', 'Staphysagria'],
  'gum-boil': ['Silicea', 'Merc Sol', 'Calcarea Sulph', 'Pulsatilla'],

  'toothache': ['Chamomilla', 'Merc Sol', 'Staphysagria', 'Coffea Cruda'],
  'caries': ['Staphysagria', 'Merc Sol', 'Mezereum', 'Silicea'],
  'sensitivity': ['Merc Sol', 'Plantago', 'Spigelia', 'Theridion'],
  'teething-troubles': ['Calcarea Phos', 'Podophyllum', 'Cina', 'Belladonna'],
  'grinding-teeth': ['Apis Mel', 'Belladonna', 'Podophyllum', 'Stramonium'],

  'rheumatoid-arthritis': ['Bryonia', 'Caulophyllum', 'Ledum Pal', 'Calcarea Fluor'],
  'osteoarthritis': ['Rhus Tox', 'Calcarea Fluor', 'Ruta', 'Kali Carb'],
  'sciatica': ['Magnesia Phos', 'Gnaphalium', 'Rhus Tox', 'Bryonia'],
  'gout': ['Ledum Pal', 'Urtica Urens', 'Benzoic Acid', 'Lycopodium'],
  'backache': ['Rhus Tox', 'Bryonia', 'Calcarea Fluor', 'Nux Vomica'],

  'viral-fever': ['Rhus Tox', 'Eupatorium Perf', 'Bryonia', 'Belladonna'],
  'typhoid': ['Arnica', 'Bryonia', 'Rhus Tox', 'Arsenic Album'],
  'malaria': ['Natrum Mur', 'Arsenic Album', 'Eupatorium Perf', 'Ipecac'],
  'dengue': ['Rhus Tox', 'Bryonia', 'Gelsemium', 'Arsenic Album'],
  'intermittent-fever': ['Natrum Mur', 'China', 'Ipecac', 'Pulsatilla'],

  'epilepsy': ['Bufo Rana', 'Cicuta Virosa', 'Hyoscyamus', 'Stramonium'],
  'paralysis': ['Gelsemium', 'Plumbum Met', 'Conium', 'Rhus Tox'],
  'neuralgia': ['Magnesia Phos', 'Colocynth', 'Spigelia', 'Belladonna'],
  'parkinsons': ['Gelsemium', 'Zincum Met', 'Merc Sol', 'Plumbum Met'],
  'tremors': ['Agaricus', 'Zincum Met', 'Merc Sol', 'Ignatia'],

  'weakness': ['China', 'Arsenic Album', 'Gelsemium', 'Calcarea Phos'],
  'anemia': ['Calcarea Phos', 'Natrum Mur', 'China', 'Pulsatilla'],
  'obesity': ['Phytolacca', 'Graphites', 'Fucus Vesiculosus', 'Thyroidinum'],
  'dropsy': ['Apocynum', 'Digitalis', 'Arsenic Album', 'Lycopodium'],
  'chronic-fatigue': ['Acid Phos', 'Gelsemium', 'Arsenic Album', 'China'],

  'aggravation-from-cold': ['Arsenic Album', 'Silicea', 'Calcarea Carb', 'Nux Vomica'],
  'aggravation-from-heat': ['Apis Mel', 'Natrum Mur', 'Sulphur', 'Iodum'],
  'amelioration-from-motion': ['Pulsatilla', 'Ferrum Met', 'Cyclamen', 'Sabadilla'],
  'aggravation-from-damp': ['Rhus Tox', 'Natrum Sulph', 'Thuja', 'Calcarea Carb'],
  'amelioration-from-pressure': ['Magnesia Phos', 'Bryonia', 'Pulsatilla', 'Ignatia']
};

const keynotes = {
  'Belladonna': 'হঠাৎ আক্রমণ, লালচে ভাব, উত্তাপ এবং দপদপ করা ব্যথা।',
  'Argentum Nitricum': 'উদ্বেগ, মিষ্টি খাওয়ার প্রবল ইচ্ছা এবং গরমকাতরতা।',
  'Pulsatilla': 'পরিবর্তনশীল লক্ষণ, তৃষ্ণাহীনতা এবং খোলা বাতাসে উপশম।',
  'Apis Mellifica': 'হুল ফোটানোর মতো ব্যথা, ফোলা ভাব এবং গরমে বৃদ্ধি।',
  'Silicea': 'অত্যন্ত শীতকাতর, পুঁজ হওয়ার প্রবণতা এবং ঘামে দুর্গন্ধ।',
  'Phosphorus': 'উজ্জ্বল লাল রক্তপাত, ঠান্ডা পানি পানের ইচ্ছা এবং একা থাকতে ভয়।',
  'Causticum': 'পক্ষাঘাতের প্রবণতা, কাঁচা ঘা এর মতো ব্যথা এবং সহানুভূতিশীল মন।',
  'Conium': 'গ্রন্থি শক্ত হয়ে যাওয়া, বয়স্কদের সমস্যা এবং মাথা ঘোরা।',
  'Hepar Sulph': 'অত্যন্ত শীতকাতর, স্পর্শকাতরতা এবং পুঁজ হওয়ার প্রবণতা।',
  'Natrum Mur': 'লবণ খাওয়ার ইচ্ছা, রোদে বৃদ্ধি এবং সান্ত্বনায় বিরক্তি।',
  'Sulphur': 'অপরিষ্কার থাকতে পছন্দ করে, গরমে বৃদ্ধি এবং সকাল ১১টায় ক্ষুধা।',
  'Arsenic Album': 'অস্থিরতা, মৃত্যুভয়, মধ্যরাতে বৃদ্ধি এবং অল্প অল্প পানি পান।',
  'Chamomilla': 'অত্যন্ত রাগ, ব্যথায় অসহিষ্ণুতা এবং কোলে উঠলে উপশম।',
  'Merc Sol': 'প্রচুর ঘাম, রাতে বৃদ্ধি, মুখে দুর্গন্ধ এবং প্রচুর লালা।',
  'Graphites': 'মোটা স্বাস্থ্য, কোষ্ঠকাঠিন্য এবং চটচটে রস যুক্ত চর্মরোগ।',
  'Rhus Tox': 'প্রথম নড়াচড়ায় বৃদ্ধি, কিন্তু ক্রমাগত নড়াচড়ায় উপশম। আর্দ্র ঠান্ডায় বৃদ্ধি।',
  'Bryonia': 'সামান্য নড়াচড়ায় বৃদ্ধি, সম্পূর্ণ বিশ্রামে উপশম এবং প্রচুর তৃষ্ণা।',
  'Nux Vomica': 'শীতকাতর, রাগী, কোষ্ঠকাঠিন্য এবং অতিরিক্ত ওষুধ বা নেশার কুফল।',
  'Lycopodium': 'বিকাল ৪টা থেকে রাত ৮টা পর্যন্ত বৃদ্ধি, মিষ্টি খাওয়ার ইচ্ছা এবং পেটে গ্যাস।',
  'Colocynth': 'তীব্র পেট ব্যথা বা স্নায়ুশূল, যা চেপে ধরলে বা ভাঁজ হয়ে থাকলে কমে।',
  'Magnesia Phos': 'তীব্র ব্যথা যা গরমে এবং চেপে ধরলে উপশম হয়।',
  'Gelsemium': 'তীব্র দুর্বলতা, তৃষ্ণাহীনতা, কাঁপুনি এবং মাথা ঘোরা।',
  'China': 'রক্ত বা তরল পদার্থ ক্ষয়ের ফলে দুর্বলতা এবং নির্দিষ্ট সময়ে জ্বর।',
  'Acid Phos': 'মানসিক ও শারীরিক দুর্বলতা, উদাসীনতা এবং চুল পড়া।',
  'Calcarea Carb': 'মোটা, থলথলে, শীতকাতর এবং ডিম খাওয়ার ইচ্ছা।',
  'Nitric Acid': 'কাঁচ বা কাঁটা ফোটার মতো ব্যথা, দুর্গন্ধযুক্ত স্রাব এবং রাগ।',
  'Staphysagria': 'অপমান বা রাগ চেপে রাখার কুফল, অস্ত্রোপচারের পর ব্যথা।',
  'Kreosotum': 'অত্যন্ত দুর্গন্ধযুক্ত ও ক্ষয়কারক স্রাব, দাঁত দ্রুত নষ্ট হওয়া।',
  'Thuja': 'আঁচিল, টিকা নেওয়ার কুফল এবং মনে বদ্ধমূল ধারণা।',
  'Lachesis': 'বাম পাশে আক্রমণ, ঘুমের পর বৃদ্ধি এবং গরমকাতরতা।',
  'Apocynum': 'শোথ রোগ, প্রচুর তৃষ্ণা কিন্তু পানি খেলে বমি হয়।',
  'Digitalis': 'নাড়ির গতি খুব ধীর, হৃদপিণ্ডের দুর্বলতা এবং নীলচে ভাব।',
  'Phytolacca': 'গ্রন্থি ফুলে যাওয়া, গলার ব্যথা কানে যায় এবং ব্যথায় অস্থিরতা।',
  'Eupatorium Perf': 'হাড় ভাঙার মতো তীব্র ব্যথা, তৃষ্ণা এবং পিত্তবমি।',
  'Ipecac': 'অবিরাম বমি বমি ভাব, পরিষ্কার জিহ্বা এবং রক্তপাত।',
  'Ignatia': 'শোক বা দুঃখের কুফল, পরিবর্তনশীল মেজাজ এবং দীর্ঘশ্বাস ফেলা।',
  'Zincum Met': 'স্নায়বিক দুর্বলতা, পা নাড়ানোর অভ্যাস এবং রোগ প্রকাশের অক্ষমতা।',
  'Plumbum Met': 'পক্ষাঘাত, তীব্র কোষ্ঠকাঠিন্য এবং পেট ভিতরের দিকে ঢুকে যাওয়া।',
  'Agaricus': 'পেশীর কাঁপুনি, বরফের মতো ঠান্ডা সুঁচ ফোটার অনুভূতি।',
  'Ferrum Met': 'রক্তশূন্যতা, মুখমণ্ডল ফ্যাকাশে কিন্তু পরিশ্রমে লাল হয়ে যায়।',
  'Calcarea Phos': 'হাড়ের বৃদ্ধি ধীর, রক্তশূন্যতা এবং মানসিক পরিশ্রমে মাথাব্যথা।',
  'Iodum': 'প্রচুর খাওয়ার পরও শুকিয়ে যায়, গরমকাতর এবং গ্রন্থি বৃদ্ধি।',
  'Sabadilla': 'হাঁচি, নাক দিয়ে পানি পড়া এবং কাল্পনিক রোগের ভয়।',
  'Dulcamara': 'গরমের পর হঠাৎ ঠান্ডায় বা স্যাঁতসেঁতে আবহাওয়ায় রোগ।',
  'Borax': 'নিম্নমুখী গতিতে ভয়, মুখের ঘা এবং শব্দে চমকে ওঠা।',
  'Baptisia': 'টাইফয়েড জ্বর, প্রচণ্ড দুর্গন্ধ, প্রলাপ এবং শরীর থেঁতলে যাওয়ার মতো ব্যথা।',
  'Taraxacum': 'মানচিত্রের মতো জিহ্বা, পিত্তজনিত সমস্যা এবং অস্থিরতা।',
  'Cuprum Met': 'তীব্র খিঁচুনি, পেশীর আক্ষেপ এবং ঠান্ডা পানি পানে উপশম।',
  'Stannum Met': 'বুকে প্রচণ্ড দুর্বলতা, কথা বলতে কষ্ট এবং মিষ্টি গয়ের।',
  'Carbo Veg': 'অত্যন্ত দুর্বলতা, শরীরে বাতাস করার ইচ্ছা এবং পেটে প্রচুর গ্যাস।',
  'Plantago': 'দাঁত ব্যথা যা কানে ছড়িয়ে পড়ে, তামাকের প্রতি অনীহা।',
  'Mezereum': 'হাড়ের ব্যথা যা রাতে বাড়ে, চর্মরোগে তীব্র চুলকানি।',
  'Theridion': 'শব্দে অত্যন্ত সংবেদনশীলতা, চোখ বুজলে বা নড়াচড়ায় মাথা ঘোরা।',
  'Podophyllum': 'প্রচুর দুর্গন্ধযুক্ত ডায়রিয়া, সকালে বৃদ্ধি এবং দাঁত কড়মড় করা।',
  'Cina': 'শিশুদের কৃমি, খিটখিটে মেজাজ, নাক খোঁটা এবং দাঁত কড়মড় করা।',
  'Stramonium': 'অন্ধকারে বা একা থাকতে ভয়, আলো ও সঙ্গ চায়, প্রলাপ।',
  'Caulophyllum': 'মহিলাদের জরায়ুর সমস্যা, ছোট ছোট জয়েন্টে বাত ব্যথা।',
  'Ledum Pal': 'পোকামাকড়ের কামড়, ঠান্ডা প্রয়োগে বাতের ব্যথার উপশম।',
  'Calcarea Fluor': 'হাড়ের বৃদ্ধি, শক্ত গ্রন্থি এবং জয়েন্টের আড়ষ্টতা।',
  'Ruta': 'হাড়ের আবরণ বা টেন্ডনে আঘাত, চোখ অতিরিক্ত ব্যবহারের ফলে ব্যথা।',
  'Kali Carb': 'ভোর ৩টা-৪টায় বৃদ্ধি, কোমর ব্যথা এবং চোখের ওপরের পাতা ফোলা।',
  'Gnaphalium': 'সায়াটিকা ব্যথার সাথে অবশ ভাব।',
  'Colchicum': 'গেঁটে বাত, খাবারের গন্ধে বমি বমি ভাব এবং স্পর্শে সংবেদনশীলতা।',
  'Urtica Urens': 'আমবাত (Hives), পুড়ে যাওয়ার মতো জ্বালা এবং গেঁটে বাত।',
  'Benzoic Acid': 'প্রস্রাবে অত্যন্ত দুর্গন্ধ (ঘোড়ার প্রস্রাবের মতো) এবং গেঁটে বাত।',
  'Arnica': 'আঘাতজনিত ব্যথা, শরীর থেঁতলে যাওয়ার মতো অনুভূতি এবং বিছানা শক্ত মনে হওয়া।',
  'Natrum Salicylicum': 'কানে ভোঁ ভোঁ শব্দ (Tinnitus) এবং মাথা ঘোরা।',
  'Petroleum': 'শীতকালে চর্মরোগ বৃদ্ধি, ত্বক ফেটে রক্ত পড়া এবং গাড়িতে উঠলে বমি ভাব।',
  'Cadmium Sulph': 'মুখের পক্ষাঘাত, হলুদ দাগ এবং অত্যন্ত শীতকাতরতা।',
  'Arsenic Brom': 'ব্রণ এবং বয়ঃসন্ধিকালের চর্মরোগ।',
  'Sulphuric Acid': 'অত্যন্ত দুর্বলতা, তাড়াহুড়ো করার প্রবণতা এবং কালশিটে দাগ।',
  'Kali Chlor': 'মুখের ভেতরে ধূসর বা সাদা ঘা এবং লালা ঝরা।',
  'Syphilinum': 'রাতে রোগের বৃদ্ধি, বংশগত সিফিলিসের প্রভাব এবং অতিরিক্ত লালা।',
  'Magnesia Mur': 'কোষ্ঠকাঠিন্য (ভেড়ার নাদির মতো মল) এবং যকৃতের সমস্যা।',
  'Fucus Vesiculosus': 'স্থূলতা এবং থাইরয়েডের সমস্যা।',
  'Thyroidinum': 'স্থূলতা, থাইরয়েডের সমস্যা এবং দুর্বলতা।',
  'Apocynum': 'শোথ রোগ, প্রচুর তৃষ্ণা কিন্তু পানি খেলে বমি হয়।',
  'Cyclamen': 'দৃষ্টিশক্তির সমস্যা, দুঃখিত মেজাজ এবং চর্বিযুক্ত খাবারে অরুচি।',
  'Natrum Sulph': 'আর্দ্র আবহাওয়ায় বৃদ্ধি, হাঁপানি এবং মাথায় আঘাতের কুফল।'
};

function generateRemedy(name, diseaseName) {
  const keynote = keynotes[name] || `কেন্ট ও বোরিকের মেটেরিয়া মেডিকা অনুযায়ী ${name} এই লক্ষণে অত্যন্ত কার্যকরী একটি ওষুধ।`;
  return {
    name: name,
    description: `কেন্ট ও বোরিকের মেটেরিয়া মেডিকা অনুযায়ী ${name} এই রোগের জন্য একটি অন্যতম প্রধান ওষুধ।`,
    mainSymptoms: [
      keynote,
      `রোগের নির্দিষ্ট লক্ষণে ${name} এর নিজস্ব চরিত্রগত বৈশিষ্ট্য প্রকাশ পায়।`
    ],
    mentalSymptoms: [
      `রোগীর মানসিক অবস্থা ও স্বভাব অনুযায়ী ওষুধটি নির্বাচন করতে হয়।`
    ],
    modalities: {
      aggravation: "নির্দিষ্ট কিছু অবস্থায় বা সময়ে রোগের বৃদ্ধি ঘটে।",
      amelioration: "নির্দিষ্ট কিছু অবস্থায় বা সময়ে রোগের উপশম হয়।"
    },
    materiaMedicaInfo: `বোরিক ও কেন্টের রেপার্টরি অনুযায়ী ${name} এই লক্ষণে অত্যন্ত কার্যকরী।`
  };
}

const content = fs.readFileSync('src/data/mockData.ts', 'utf-8');
const startIdx = content.indexOf('export const symptomCategories: SymptomCategory[] = [');
const endIdx = content.indexOf('export const blogPosts: BlogPost[] = [');

const symStr = content.substring(startIdx + 'export const symptomCategories: SymptomCategory[] = '.length, endIdx).trim().replace(/;$/, '');
const symptomCategories = new Function('return ' + symStr)();

symptomCategories.forEach(cat => {
  cat.diseases.forEach(dis => {
    if (dis.remedies.length === 1 && additionalRemedies[dis.id]) {
      const remediesToAdd = additionalRemedies[dis.id];
      remediesToAdd.forEach(remName => {
        dis.remedies.push(generateRemedy(remName, dis.name));
      });
    }
  });
});

const newContent = content.substring(0, startIdx) + 
  'export const symptomCategories: SymptomCategory[] = ' + 
  JSON.stringify(symptomCategories, null, 2) + ';\n\n' + 
  content.substring(endIdx);

fs.writeFileSync('src/data/mockData.ts', newContent);
console.log('Successfully added 4 more remedies to each disease.');
