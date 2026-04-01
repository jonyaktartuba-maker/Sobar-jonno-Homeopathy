const medicines = [
  {
    id: "arnica-montana",
    name: "\u0986\u09B0\u09CD\u09A8\u09BF\u0995 \u09AE\u09A8\u09CD\u099F\u09BE\u09A8\u09BE (Arnica Montana)",
    commonName: "Leopard's Bane",
    source: "\u0989\u09A6\u09CD\u09AD\u09BF\u099C (Vegetable Kingdom)",
    description: "\u09AC\u09CB\u09DF\u09C7\u09B0\u09BF\u0995 \u0993 \u0995\u09C7\u09A8\u09CD\u099F\u09C7\u09B0 \u09AE\u09A4\u09C7, \u098F\u099F\u09BF \u0986\u0998\u09BE\u09A4\u099C\u09A8\u09BF\u09A4 \u09AF\u09A8\u09CD\u09A4\u09CD\u09B0\u09A3\u09BE\u09B0 \u09AA\u09CD\u09B0\u09A7\u09BE\u09A8 \u0993\u09B7\u09C1\u09A7\u0964 \u09AF\u09C7\u0995\u09CB\u09A8\u09CB \u09A7\u09B0\u09A3\u09C7\u09B0 \u0986\u0998\u09BE\u09A4, \u09A5\u09C7\u0981\u09A4\u09B2\u09C7 \u09AF\u09BE\u0993\u09DF\u09BE, \u0995\u09BE\u09B2\u09B6\u09BF\u099F\u09C7 \u09AA\u09DC\u09BE \u09AC\u09BE \u09AA\u09C7\u09B6\u09C0\u09B0 \u0985\u09A4\u09BF\u09B0\u09BF\u0995\u09CD\u09A4 \u0996\u09BE\u099F\u09C1\u09A8\u09BF\u09B0 \u09AB\u09B2\u09C7 \u09B8\u09C3\u09B7\u09CD\u099F \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE\u09DF \u098F\u099F\u09BF \u0985\u09AC\u09CD\u09AF\u09B0\u09CD\u09A5\u0964 \u098F\u099F\u09BF \u09B0\u0995\u09CD\u09A4\u09A8\u09BE\u09B2\u09C0\u09B0 \u0993\u09AA\u09B0 \u0995\u09BE\u099C \u0995\u09B0\u09C7 \u098F\u09AC\u0982 \u09AA\u099A\u09A8\u09B6\u09C0\u09B2\u09A4\u09BE \u09B0\u09CB\u09A7 \u0995\u09B0\u09C7\u0964",
    mainSymptoms: [
      "\u09B6\u09B0\u09C0\u09B0\u09C7\u09B0 \u09AF\u09C7 \u0985\u0982\u09B6\u09C7 \u0986\u0998\u09BE\u09A4 \u09B2\u09BE\u0997\u09C7 \u09AC\u09BE \u09AF\u09C7 \u0985\u0982\u09B6\u09C7 \u09B6\u09C1\u09DF\u09C7 \u09A5\u09BE\u0995\u09C7, \u09A4\u09BE \u09A5\u09C7\u0981\u09A4\u09B2\u09C7 \u09AF\u09BE\u0993\u09DF\u09BE\u09B0 \u09AE\u09A4\u09CB \u09AC\u09CD\u09AF\u09A5\u09BE (Sore, lame, bruised feeling)\u0964",
      "\u09AC\u09BF\u099B\u09BE\u09A8\u09BE \u0996\u09C1\u09AC \u09B6\u0995\u09CD\u09A4 \u09AE\u09A8\u09C7 \u09B9\u09DF, \u09A4\u09BE\u0987 \u09B0\u09CB\u0997\u09C0 \u09AC\u09BE\u09B0\u09AC\u09BE\u09B0 \u09AA\u09BE\u09B6 \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u0995\u09B0\u09C7 \u0986\u09B0\u09BE\u09AE \u0996\u09CB\u0981\u099C\u09C7\u0964",
      "\u0986\u0998\u09BE\u09A4\u09C7\u09B0 \u0995\u09BE\u09B0\u09A3\u09C7 \u09B6\u0995 \u09AC\u09BE \u0985\u099C\u09CD\u099E\u09BE\u09A8 \u09B9\u09DF\u09C7 \u09AF\u09BE\u0993\u09DF\u09BE, \u09B8\u09BE\u09A5\u09C7 \u0985\u09B8\u09BE\u09DC\u09A4\u09BE\u0964",
      "\u09AE\u09BE\u09A5\u09BE \u0997\u09B0\u09AE \u0995\u09BF\u09A8\u09CD\u09A4\u09C1 \u09B6\u09B0\u09C0\u09B0 \u09A0\u09BE\u09A8\u09CD\u09A1\u09BE \u09A5\u09BE\u0995\u09C7\u0964",
      "\u09B6\u09B0\u09C0\u09B0\u09C7\u09B0 \u09A8\u09BF\u09AE\u09CD\u09A8\u09BE\u0999\u09CD\u0997\u09C7 \u0995\u09BE\u09B2\u09B6\u09BF\u099F\u09C7 \u09A6\u09BE\u0997 \u09AC\u09BE \u098F\u0995\u09BE\u0987\u09AE\u09CB\u09B8\u09BF\u09B8 (Ecchymosis)\u0964"
    ],
    mentalSymptoms: [
      "\u09B0\u09CB\u0997\u09C0 \u0985\u09A4\u09CD\u09AF\u09A8\u09CD\u09A4 \u09B8\u09CD\u09AA\u09B0\u09CD\u09B6\u0995\u09BE\u09A4\u09B0, \u0995\u09C7\u0989 \u09A4\u09BE\u09B0 \u09A6\u09BF\u0995\u09C7 \u098F\u0997\u09BF\u09DF\u09C7 \u098F\u09B2\u09C7 \u09B8\u09C7 \u09AD\u09DF \u09AA\u09BE\u09DF \u09AF\u09C7 \u09A4\u09BE\u0995\u09C7 \u09B8\u09CD\u09AA\u09B0\u09CD\u09B6 \u0995\u09B0\u09AC\u09C7 (Fear of touch)\u0964",
      "\u0985\u099C\u09CD\u099E\u09BE\u09A8 \u09AC\u09BE \u0986\u099A\u09CD\u099B\u09A8\u09CD\u09A8 \u0985\u09AC\u09B8\u09CD\u09A5\u09BE\u09DF \u09A5\u09BE\u0995\u09C7, \u0995\u09BF\u09A8\u09CD\u09A4\u09C1 \u09A1\u09BE\u0995\u09B2\u09C7 \u09B8\u09A0\u09BF\u0995 \u0989\u09A4\u09CD\u09A4\u09B0 \u09A6\u09C7\u09DF \u098F\u09AC\u0982 \u0986\u09AC\u09BE\u09B0 \u0998\u09C1\u09AE\u09BF\u09DF\u09C7 \u09AA\u09DC\u09C7\u0964",
      '\u0997\u09C1\u09B0\u09C1\u09A4\u09B0 \u0985\u09B8\u09C1\u09B8\u09CD\u09A5 \u0985\u09AC\u09B8\u09CD\u09A5\u09BE\u09A4\u09C7\u0993 \u09B0\u09CB\u0997\u09C0 \u09AC\u09B2\u09C7 "\u0986\u09AE\u09BF \u09AD\u09BE\u09B2\u09CB \u0986\u099B\u09BF" (Says he is well)\u0964',
      "\u09B9\u09A0\u09BE\u09CE \u09AE\u09C3\u09A4\u09CD\u09AF\u09C1\u09B0 \u09AD\u09DF \u098F\u09AC\u0982 \u09B9\u09C3\u09A6\u09AA\u09BF\u09A3\u09CD\u09A1\u09C7\u09B0 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE \u09A8\u09BF\u09DF\u09C7 \u0986\u09A4\u0999\u09CD\u0995\u0964"
    ],
    modalities: {
      aggravation: "\u09B8\u09CD\u09AA\u09B0\u09CD\u09B6\u09C7, \u09A8\u09DC\u09BE\u099A\u09DC\u09BE\u09DF, \u0986\u09B0\u09CD\u09A6\u09CD\u09B0 \u09A0\u09BE\u09A8\u09CD\u09A1\u09BE\u09DF, \u09AC\u09BE\u09AE \u09AA\u09BE\u09B6\u09C7 \u09B6\u09C1\u09B2\u09C7\u0964",
      amelioration: "\u09AE\u09BE\u09A5\u09BE \u09A8\u09BF\u099A\u09C1 \u0995\u09B0\u09C7 \u09B6\u09C1\u09B2\u09C7, \u09AC\u09BF\u09B6\u09CD\u09B0\u09BE\u09AE\u09C7\u0964"
    }
  },
  {
    id: "aconite-napellus",
    name: "\u098F\u0995\u09CB\u09A8\u09BE\u0987\u099F \u09A8\u09C7\u09AA\u09BE\u09B2\u09BE\u09B8 (Aconite Napellus)",
    commonName: "Monkshood",
    source: "\u0989\u09A6\u09CD\u09AD\u09BF\u099C",
    description: "\u0995\u09C7\u09A8\u09CD\u099F\u09C7\u09B0 \u09AE\u09A4\u09C7, \u098F\u099F\u09BF \u099D\u09DC\u09C7\u09B0 \u09AE\u09A4\u09CB \u0986\u09B8\u09C7 \u098F\u09AC\u0982 \u099D\u09DC\u09C7\u09B0 \u09AE\u09A4\u09CB \u099A\u09B2\u09C7 \u09AF\u09BE\u09DF\u0964 \u09B9\u09A0\u09BE\u09CE \u0995\u09B0\u09C7 \u0986\u09B8\u09BE \u09AF\u09C7\u0995\u09CB\u09A8\u09CB \u09B0\u09CB\u0997\u09C7\u09B0 \u09AA\u09CD\u09B0\u09A5\u09AE \u0985\u09AC\u09B8\u09CD\u09A5\u09BE\u09DF, \u09AC\u09BF\u09B6\u09C7\u09B7 \u0995\u09B0\u09C7 \u09B6\u09C1\u09B7\u09CD\u0995 \u09A0\u09BE\u09A8\u09CD\u09A1\u09BE \u09AC\u09BE\u09A4\u09BE\u09B8 \u09B2\u09C7\u0997\u09C7 \u099C\u09CD\u09AC\u09B0 \u09AC\u09BE \u09AA\u09CD\u09B0\u09A6\u09BE\u09B9 \u09B9\u09B2\u09C7 \u098F\u099F\u09BF \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0\u09CD\u09AF\u0964 \u098F\u099F\u09BF \u09B8\u09CD\u09A8\u09BE\u09DF\u09C1\u09A4\u09A8\u09CD\u09A4\u09CD\u09B0 \u098F\u09AC\u0982 \u09B0\u0995\u09CD\u09A4\u09B8\u0982\u09AC\u09B9\u09A8\u09A4\u09A8\u09CD\u09A4\u09CD\u09B0\u09C7\u09B0 \u0993\u09AA\u09B0 \u0995\u09BE\u099C \u0995\u09B0\u09C7\u0964",
    mainSymptoms: [
      "\u09B0\u09CB\u0997\u09C7\u09B0 \u0986\u0995\u09CD\u09B0\u09AE\u09A3 \u0985\u09A4\u09CD\u09AF\u09A8\u09CD\u09A4 \u09B9\u09A0\u09BE\u09CE \u098F\u09AC\u0982 \u09AA\u09CD\u09B0\u099A\u09A3\u09CD\u09A1 (Sudden and violent invasion)\u0964",
      "\u099A\u09BE\u09AE\u09DC\u09BE \u09B6\u09C1\u0995\u09A8\u09CB \u098F\u09AC\u0982 \u0997\u09B0\u09AE, \u0998\u09BE\u09AE \u09B9\u09DF \u09A8\u09BE\u0964",
      "\u09AA\u09CD\u09B0\u099A\u09A3\u09CD\u09A1 \u099C\u09B2\u09AA\u09BF\u09AA\u09BE\u09B8\u09BE, \u09AA\u09CD\u09B0\u099A\u09C1\u09B0 \u09AA\u09B0\u09BF\u09AE\u09BE\u09A3\u09C7 \u09A0\u09BE\u09A8\u09CD\u09A1\u09BE \u09AA\u09BE\u09A8\u09BF \u09AA\u09BE\u09A8 \u0995\u09B0\u09A4\u09C7 \u099A\u09BE\u09DF\u0964",
      "\u09A8\u09BE\u09DC\u09BF \u09A6\u09CD\u09B0\u09C1\u09A4, \u09AA\u09C2\u09B0\u09CD\u09A3 \u098F\u09AC\u0982 \u0995\u09A0\u09BF\u09A8 (Full and bounding pulse)\u0964"
    ],
    mentalSymptoms: [
      "\u0985\u09A4\u09CD\u09AF\u09A8\u09CD\u09A4 \u09AE\u09BE\u09A8\u09B8\u09BF\u0995 \u0993 \u09B6\u09BE\u09B0\u09C0\u09B0\u09BF\u0995 \u0985\u09B8\u09CD\u09A5\u09BF\u09B0\u09A4\u09BE; \u09B0\u09CB\u0997\u09C0 \u098F\u0995 \u099C\u09BE\u09DF\u0997\u09BE\u09DF \u09B8\u09CD\u09A5\u09BF\u09B0 \u09A5\u09BE\u0995\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7 \u09A8\u09BE\u0964",
      "\u09AA\u09CD\u09B0\u099A\u09A3\u09CD\u09A1 \u09AE\u09C3\u09A4\u09CD\u09AF\u09C1\u09AD\u09DF (Fear of death); \u09B0\u09CB\u0997\u09C0 \u09AE\u09C3\u09A4\u09CD\u09AF\u09C1\u09B0 \u09B8\u09AE\u09DF \u09AC\u09BE \u09A6\u09BF\u09A8\u0995\u09CD\u09B7\u09A3 \u09AC\u09B2\u09C7 \u09A6\u09C7\u09DF\u0964",
      "\u0985\u0995\u09BE\u09B0\u09A3\u09C7 \u09AD\u09DF, \u09AD\u09BF\u09DC\u09C7\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7 \u09AF\u09C7\u09A4\u09C7 \u09AD\u09DF, \u09B0\u09BE\u09B8\u09CD\u09A4\u09BE \u09AA\u09BE\u09B0 \u09B9\u09A4\u09C7 \u09AD\u09DF\u0964"
    ],
    modalities: {
      aggravation: "\u09B8\u09A8\u09CD\u09A7\u09CD\u09AF\u09BE\u09DF \u0993 \u09B0\u09BE\u09A4\u09C7, \u0997\u09B0\u09AE\u09C7, \u09AC\u09BE\u09AE \u09AA\u09BE\u09B6\u09C7 \u09B6\u09C1\u09B2\u09C7, \u09B6\u09C1\u09B7\u09CD\u0995 \u09A0\u09BE\u09A8\u09CD\u09A1\u09BE \u09AC\u09BE\u09A4\u09BE\u09B8\u09C7\u0964",
      amelioration: "\u0996\u09CB\u09B2\u09BE \u09AC\u09BE\u09A4\u09BE\u09B8\u09C7, \u09AC\u09BF\u09B6\u09CD\u09B0\u09BE\u09AE\u09C7\u0964"
    }
  },
  {
    id: "belladonna",
    name: "\u09AC\u09C7\u09B2\u09BE\u09A1\u09CB\u09A8\u09BE (Belladonna)",
    commonName: "Deadly Nightshade",
    source: "\u0989\u09A6\u09CD\u09AD\u09BF\u099C",
    description: "\u09AC\u09CB\u09DF\u09C7\u09B0\u09BF\u0995\u09C7\u09B0 \u09AE\u09A4\u09C7, \u098F\u099F\u09BF \u09AA\u09CD\u09B0\u09A6\u09BE\u09B9\u09C7\u09B0 \u09AA\u09CD\u09B0\u09A5\u09AE \u0985\u09AC\u09B8\u09CD\u09A5\u09BE\u09DF \u09AF\u0996\u09A8 \u09B2\u09BE\u09B2\u09AD\u09BE\u09AC, \u0989\u09A4\u09CD\u09A4\u09BE\u09AA \u098F\u09AC\u0982 \u09AC\u09CD\u09AF\u09A5\u09BE \u09A5\u09BE\u0995\u09C7 \u09A4\u0996\u09A8 \u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09B0\u09C0\u0964 \u098F\u099F\u09BF \u09AA\u09CD\u09B0\u09A7\u09BE\u09A8\u09A4 \u09AE\u09B8\u09CD\u09A4\u09BF\u09B7\u09CD\u0995\u09C7\u09B0 \u0993\u09AA\u09B0 \u0995\u09BE\u099C \u0995\u09B0\u09C7 \u098F\u09AC\u0982 \u09B0\u0995\u09CD\u09A4\u09B8\u099E\u09CD\u099A\u09BE\u09B2\u09A8 \u09AC\u09BE\u09DC\u09BF\u09DF\u09C7 \u09A6\u09C7\u09DF\u0964",
    mainSymptoms: [
      "\u0986\u0995\u09CD\u09B0\u09BE\u09A8\u09CD\u09A4 \u09B8\u09CD\u09A5\u09BE\u09A8 \u0989\u099C\u09CD\u099C\u09CD\u09AC\u09B2 \u09B2\u09BE\u09B2, \u0997\u09B0\u09AE \u098F\u09AC\u0982 \u09A6\u09AA\u09A6\u09AA \u0995\u09B0\u09C7 (Redness, Heat, Throbbing)\u0964",
      "\u099A\u09CB\u0996 \u09B2\u09BE\u09B2, \u099A\u0995\u099A\u0995\u09C7 \u098F\u09AC\u0982 \u099A\u09CB\u0996\u09C7\u09B0 \u09A4\u09BE\u09B0\u09BE \u09AA\u09CD\u09B0\u09B8\u09BE\u09B0\u09BF\u09A4 (Dilated pupils)\u0964",
      "\u099C\u09CD\u09AC\u09B0 \u09B9\u09A0\u09BE\u09CE \u0986\u09B8\u09C7 \u098F\u09AC\u0982 \u0996\u09C1\u09AC \u09AC\u09C7\u09B6\u09BF \u09A4\u09BE\u09AA\u09AE\u09BE\u09A4\u09CD\u09B0\u09BE\u09DF \u09AA\u09CC\u0981\u099B\u09BE\u09DF\u0964",
      "\u09AE\u09BE\u09A5\u09BE\u09AC\u09CD\u09AF\u09A5\u09BE, \u09AE\u09A8\u09C7 \u09B9\u09DF \u09AE\u09BE\u09A5\u09BE \u09AB\u09C7\u099F\u09C7 \u09AF\u09BE\u09AC\u09C7, \u09AC\u09BF\u09B6\u09C7\u09B7 \u0995\u09B0\u09C7 \u0995\u09AA\u09BE\u09B2 \u098F\u09AC\u0982 \u09B0\u0997\u09C7\u0964"
    ],
    mentalSymptoms: [
      "\u09AA\u09CD\u09B0\u09B2\u09BE\u09AA \u09AC\u0995\u09BE (Delirium); \u09B0\u09CB\u0997\u09C0 \u0995\u09BE\u09AE\u09DC\u09BE\u09A4\u09C7, \u09AE\u09BE\u09B0\u09A4\u09C7 \u09AC\u09BE \u09AA\u09BE\u09B2\u09BE\u09A4\u09C7 \u099A\u09BE\u09DF\u0964",
      "\u0995\u09BE\u09B2\u09CD\u09AA\u09A8\u09BF\u0995 \u099C\u09BF\u09A8\u09BF\u09B8 \u09AC\u09BE \u09AD\u09C2\u09A4-\u09AA\u09CD\u09B0\u09C7\u09A4 \u09A6\u09C7\u0996\u09C7 \u09AD\u09DF \u09AA\u09BE\u09DF\u0964",
      "\u0985\u09A4\u09CD\u09AF\u09A8\u09CD\u09A4 \u09B9\u09BF\u0982\u09B8\u09CD\u09B0 \u0986\u099A\u09B0\u09A3 \u098F\u09AC\u0982 \u0985\u09B8\u0982\u09B2\u0997\u09CD\u09A8 \u0995\u09A5\u09BE\u09AC\u09BE\u09B0\u09CD\u09A4\u09BE\u0964"
    ],
    modalities: {
      aggravation: "\u09B8\u09CD\u09AA\u09B0\u09CD\u09B6\u09C7, \u09B8\u09BE\u09AE\u09BE\u09A8\u09CD\u09AF \u09A8\u09DC\u09BE\u099A\u09DC\u09BE\u09DF, \u0986\u09B2\u09CB\u09A4\u09C7, \u09B6\u09AC\u09CD\u09A6\u09C7, \u09B6\u09C1\u09DF\u09C7 \u09A5\u09BE\u0995\u09B2\u09C7\u0964",
      amelioration: "\u0985\u09B0\u09CD\u09A7-\u09B6\u09BE\u09DF\u09BF\u09A4 \u0985\u09AC\u09B8\u09CD\u09A5\u09BE\u09DF (Semi-erect), \u0986\u0995\u09CD\u09B0\u09BE\u09A8\u09CD\u09A4 \u09B8\u09CD\u09A5\u09BE\u09A8\u09C7 \u0997\u09B0\u09AE \u0995\u09BE\u09AA\u09DC \u09A6\u09BF\u09B2\u09C7\u0964"
    }
  },
  {
    id: "nux-vomica",
    name: "\u09A8\u09BE\u0995\u09CD\u09B8 \u09AD\u09AE\u09BF\u0995\u09BE (Nux Vomica)",
    commonName: "Poison Nut",
    source: "\u0989\u09A6\u09CD\u09AD\u09BF\u099C",
    description: "\u0995\u09C7\u09A8\u09CD\u099F\u09C7\u09B0 \u09AE\u09A4\u09C7, \u098F\u099F\u09BF \u0986\u09A7\u09C1\u09A8\u09BF\u0995 \u099C\u09C0\u09AC\u09A8\u09C7\u09B0 \u09B8\u09CD\u099F\u09CD\u09B0\u09C7\u09B8, \u0985\u09A8\u09BF\u09DF\u09AE, \u0985\u09A4\u09BF\u09B0\u09BF\u0995\u09CD\u09A4 \u09AE\u09BE\u09A8\u09B8\u09BF\u0995 \u09AA\u09B0\u09BF\u09B6\u09CD\u09B0\u09AE \u098F\u09AC\u0982 \u0985\u09B2\u09B8 \u099C\u09C0\u09AC\u09A8\u09AF\u09BE\u09AA\u09A8\u0995\u09BE\u09B0\u09C0\u09A6\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u09B8\u09C7\u09B0\u09BE \u0993\u09B7\u09C1\u09A7\u0964 \u09AF\u09BE\u09B0\u09BE \u0985\u09A4\u09BF\u09B0\u09BF\u0995\u09CD\u09A4 \u09AE\u09B8\u09B2\u09BE\u09AF\u09C1\u0995\u09CD\u09A4 \u0996\u09BE\u09AC\u09BE\u09B0, \u0995\u09AB\u09BF \u09AC\u09BE \u0985\u09CD\u09AF\u09BE\u09B2\u0995\u09CB\u09B9\u09B2 \u09B8\u09C7\u09AC\u09A8 \u0995\u09B0\u09C7\u09A8 \u09A4\u09BE\u09A6\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u098F\u099F\u09BF \u09AC\u09BF\u09B6\u09C7\u09B7 \u0989\u09AA\u09AF\u09CB\u0997\u09C0\u0964",
    mainSymptoms: [
      "\u0995\u09CB\u09B7\u09CD\u09A0\u0995\u09BE\u09A0\u09BF\u09A8\u09CD\u09AF; \u09AC\u09BE\u09B0\u09AC\u09BE\u09B0 \u09AA\u09BE\u09DF\u0996\u09BE\u09A8\u09BE\u09B0 \u09AC\u09C7\u0997 \u09B9\u09DF \u0995\u09BF\u09A8\u09CD\u09A4\u09C1 \u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0 \u09B9\u09DF \u09A8\u09BE (Ineffectual urging)\u0964",
      "\u0996\u09BE\u0993\u09DF\u09BE\u09B0 \u09AA\u09B0\u09C7 \u09AA\u09C7\u099F\u09C7 \u09AD\u09BE\u09B0\u09AC\u09CB\u09A7 \u098F\u09AC\u0982 \u0998\u09C1\u09AE \u0998\u09C1\u09AE \u09AD\u09BE\u09AC\u0964",
      "\u09B8\u0995\u09BE\u09B2\u09C7 \u09AC\u09AE\u09BF \u09AC\u09AE\u09BF \u09AD\u09BE\u09AC \u098F\u09AC\u0982 \u09A4\u09BF\u09A4\u09BE \u09B8\u09CD\u09AC\u09BE\u09A6\u0964",
      "\u0985\u09A4\u09CD\u09AF\u09A8\u09CD\u09A4 \u09B6\u09C0\u09A4\u0995\u09BE\u09A4\u09B0; \u09B8\u09BE\u09AE\u09BE\u09A8\u09CD\u09AF \u09A0\u09BE\u09A8\u09CD\u09A1\u09BE\u0993 \u09B8\u09B9\u09CD\u09AF \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7 \u09A8\u09BE\u0964"
    ],
    mentalSymptoms: [
      "\u0985\u09A4\u09CD\u09AF\u09A8\u09CD\u09A4 \u0996\u09BF\u099F\u0996\u09BF\u099F\u09C7 \u09AE\u09C7\u099C\u09BE\u099C (Irritable); \u09B8\u09BE\u09AE\u09BE\u09A8\u09CD\u09AF \u09B6\u09AC\u09CD\u09A6 \u09AC\u09BE \u0986\u09B2\u09CB \u09B8\u09B9\u09CD\u09AF \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7 \u09A8\u09BE\u0964",
      "\u0985\u09A8\u09CD\u09AF\u09C7\u09B0 \u09AD\u09C1\u09B2 \u09A7\u09B0\u09BF\u09DF\u09C7 \u09A6\u09BF\u09A4\u09C7 \u09AA\u099B\u09A8\u09CD\u09A6 \u0995\u09B0\u09C7 \u098F\u09AC\u0982 \u09AA\u09CD\u09B0\u09A4\u09BF\u09AC\u09BE\u09A6 \u09B8\u09B9\u09CD\u09AF \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7 \u09A8\u09BE\u0964",
      "\u09AE\u09BE\u09A8\u09B8\u09BF\u0995 \u09AA\u09B0\u09BF\u09B6\u09CD\u09B0\u09AE\u09C7\u09B0 \u09AA\u09B0 \u0995\u09CD\u09B2\u09BE\u09A8\u09CD\u09A4\u09BF \u098F\u09AC\u0982 \u0985\u09A8\u09BF\u09A6\u09CD\u09B0\u09BE\u0964"
    ],
    modalities: {
      aggravation: "\u09B8\u0995\u09BE\u09B2\u09C7, \u0996\u09BE\u0993\u09DF\u09BE\u09B0 \u09AA\u09B0\u09C7, \u09AE\u09BE\u09A8\u09B8\u09BF\u0995 \u09AA\u09B0\u09BF\u09B6\u09CD\u09B0\u09AE\u09C7, \u09A0\u09BE\u09A8\u09CD\u09A1\u09BE\u09DF, \u09AE\u09B6\u09B2\u09BE\u09AF\u09C1\u0995\u09CD\u09A4 \u0996\u09BE\u09AC\u09BE\u09B0\u09C7\u0964",
      amelioration: "\u09B8\u09A8\u09CD\u09A7\u09CD\u09AF\u09BE\u09DF, \u09AC\u09BF\u09B6\u09CD\u09B0\u09BE\u09AE\u09C7, \u0997\u09B0\u09AE\u09C7, \u09AD\u09C7\u099C\u09BE \u0986\u09AC\u09B9\u09BE\u0993\u09DF\u09BE\u09DF\u0964"
    }
  },
  {
    id: "rhus-tox",
    name: "\u09B0\u09BE\u09B8 \u099F\u0995\u09CD\u09B8 (Rhus Tox)",
    commonName: "Poison Ivy",
    source: "\u0989\u09A6\u09CD\u09AD\u09BF\u099C",
    description: "\u09AC\u09CB\u09DF\u09C7\u09B0\u09BF\u0995\u09C7\u09B0 \u09AE\u09A4\u09C7, \u098F\u099F\u09BF \u09AC\u09BE\u09A4, \u09AA\u09C7\u09B6\u09C0\u09B0 \u09AC\u09CD\u09AF\u09A5\u09BE \u098F\u09AC\u0982 \u099A\u09B0\u09CD\u09AE\u09B0\u09CB\u0997\u09C7\u09B0 \u09AA\u09CD\u09B0\u09A7\u09BE\u09A8 \u0993\u09B7\u09C1\u09A7\u0964 \u09AC\u09BF\u09B6\u09C7\u09B7 \u0995\u09B0\u09C7 \u09AF\u0996\u09A8 \u09AC\u09BF\u09B6\u09CD\u09B0\u09BE\u09AE \u09A8\u09BF\u09B2\u09C7 \u09AC\u09CD\u09AF\u09A5\u09BE \u09AC\u09BE\u09DC\u09C7 \u098F\u09AC\u0982 \u09A8\u09DC\u09BE\u099A\u09DC\u09BE \u0995\u09B0\u09B2\u09C7 \u0995\u09AE\u09C7\u0964",
    mainSymptoms: [
      "\u09AC\u09BF\u09B6\u09CD\u09B0\u09BE\u09AE\u09C7 \u09AC\u09CD\u09AF\u09A5\u09BE \u09AC\u09BE\u09DC\u09C7, \u0995\u09BF\u09A8\u09CD\u09A4\u09C1 \u09A8\u09DC\u09BE\u099A\u09DC\u09BE \u09B6\u09C1\u09B0\u09C1 \u0995\u09B0\u09B2\u09C7 \u09AA\u09CD\u09B0\u09A5\u09AE\u09C7 \u09AC\u09CD\u09AF\u09A5\u09BE \u09B2\u09BE\u0997\u09C7 \u098F\u09AC\u0982 \u09AA\u09B0\u09C7 \u09B9\u09BE\u0981\u099F\u09B2\u09C7 \u0986\u09B0\u09BE\u09AE \u09AC\u09CB\u09A7 \u09B9\u09DF\u0964",
      "\u09AC\u09C3\u09B7\u09CD\u099F\u09BF\u09A4\u09C7 \u09AD\u09BF\u099C\u09B2\u09C7 \u09AC\u09BE \u0998\u09BE\u09AE \u0985\u09AC\u09B8\u09CD\u09A5\u09BE\u09DF \u09A0\u09BE\u09A8\u09CD\u09A1\u09BE \u09B2\u09BE\u0997\u09B2\u09C7 \u09B0\u09CB\u0997 \u09B8\u09C3\u09B7\u09CD\u099F\u09BF \u09B9\u09DF\u0964",
      "\u099C\u09BF\u09AD\u09C7\u09B0 \u09A1\u0997\u09BE\u09DF \u09B2\u09BE\u09B2 \u09A4\u09CD\u09B0\u09BF\u09AD\u09C1\u099C\u09BE\u0995\u09C3\u09A4\u09BF \u09A6\u09BE\u0997 (Red triangular tip of tongue)\u0964",
      "\u099A\u09BE\u09AE\u09DC\u09BE\u09DF \u099C\u09CD\u09AC\u09BE\u09B2\u09BE \u0995\u09B0\u09BE \u09AB\u09C1\u09B8\u0995\u09C1\u09DC\u09BF \u09AC\u09BE \u098F\u0995\u099C\u09BF\u09AE\u09BE, \u09AF\u09BE\u09A4\u09C7 \u0985\u09A4\u09CD\u09AF\u09A8\u09CD\u09A4 \u099A\u09C1\u09B2\u0995\u09BE\u09A8\u09BF \u09A5\u09BE\u0995\u09C7\u0964"
    ],
    mentalSymptoms: [
      "\u0985\u09B8\u09CD\u09A5\u09BF\u09B0\u09A4\u09BE; \u09AC\u09CD\u09AF\u09A5\u09BE\u09B0 \u099C\u09A8\u09CD\u09AF \u09B0\u09CB\u0997\u09C0 \u098F\u0995 \u0985\u09AC\u09B8\u09CD\u09A5\u09BE\u09A8\u09C7 \u09AC\u09C7\u09B6\u09BF\u0995\u09CD\u09B7\u09A3 \u09A5\u09BE\u0995\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7 \u09A8\u09BE\u0964",
      "\u09B0\u09BE\u09A4\u09C7 \u09AD\u09DF \u09AA\u09BE\u09DF \u098F\u09AC\u0982 \u09AC\u09BF\u09B7\u09A3\u09CD\u09A3\u09A4\u09BE\u09DF \u09AD\u09CB\u0997\u09C7\u0964",
      "\u0986\u09A4\u09CD\u09AE\u09B9\u09A4\u09CD\u09AF\u09BE\u09B0 \u099A\u09BF\u09A8\u09CD\u09A4\u09BE \u0986\u09B8\u09C7 \u0995\u09BF\u09A8\u09CD\u09A4\u09C1 \u09AE\u09C3\u09A4\u09CD\u09AF\u09C1\u09AD\u09DF \u09A5\u09BE\u0995\u09C7 \u09A8\u09BE\u0964"
    ],
    modalities: {
      aggravation: "\u09AC\u09BF\u09B6\u09CD\u09B0\u09BE\u09AE\u09C7, \u0998\u09C1\u09AE\u09C7\u09B0 \u09B6\u09C1\u09B0\u09C1\u09A4\u09C7, \u09A0\u09BE\u09A8\u09CD\u09A1\u09BE \u09AC\u09BE\u09A4\u09BE\u09B8\u09C7, \u09AC\u09B0\u09CD\u09B7\u09BE\u0995\u09BE\u09B2\u09C7 \u09AC\u09BE \u09B8\u09CD\u09AF\u09BE\u0981\u09A4\u09B8\u09C7\u0981\u09A4\u09C7 \u0986\u09AC\u09B9\u09BE\u0993\u09DF\u09BE\u09DF\u0964",
      amelioration: "\u09A8\u09DC\u09BE\u099A\u09DC\u09BE\u09DF, \u0997\u09B0\u09AE \u09B8\u09C7\u0981\u0995 \u09A6\u09BF\u09B2\u09C7, \u09B6\u09C1\u09B7\u09CD\u0995 \u0986\u09AC\u09B9\u09BE\u0993\u09DF\u09BE\u09DF\u0964"
    }
  }
];
const organonPrinciples = [
  {
    id: 1,
    title: "\u099A\u09BF\u0995\u09BF\u09CE\u09B8\u0995\u09C7\u09B0 \u09AE\u09B9\u09CE \u0989\u09A6\u09CD\u09A6\u09C7\u09B6\u09CD\u09AF",
    content: "\u099A\u09BF\u0995\u09BF\u09CE\u09B8\u0995\u09C7\u09B0 \u098F\u0995\u09AE\u09BE\u09A4\u09CD\u09B0 \u098F\u09AC\u0982 \u09AE\u09B9\u09CE \u0989\u09A6\u09CD\u09A6\u09C7\u09B6\u09CD\u09AF \u09B9\u09B2\u09CB \u09B0\u09CB\u0997\u09C0\u0995\u09C7 \u09A6\u09CD\u09B0\u09C1\u09A4, \u0986\u09B2\u09A4\u09CB\u09AD\u09BE\u09AC\u09C7 \u098F\u09AC\u0982 \u09B8\u09CD\u09A5\u09BE\u09DF\u09C0\u09AD\u09BE\u09AC\u09C7 \u0986\u09B0\u09CB\u0997\u09CD\u09AF \u09AA\u09CD\u09B0\u09A6\u09BE\u09A8 \u0995\u09B0\u09BE\u0964"
  },
  {
    id: 2,
    title: "\u0986\u09B0\u09CB\u0997\u09CD\u09AF\u09C7\u09B0 \u0986\u09A6\u09B0\u09CD\u09B6",
    content: "\u0986\u09B0\u09CB\u0997\u09CD\u09AF \u09B9\u09A4\u09C7 \u09B9\u09AC\u09C7 \u09A6\u09CD\u09B0\u09C1\u09A4, \u0995\u09B7\u09CD\u099F\u09B9\u09C0\u09A8 \u098F\u09AC\u0982 \u09B8\u09CD\u09A5\u09BE\u09DF\u09C0\u0964 \u098F\u099F\u09BF \u09B9\u09A4\u09C7 \u09B9\u09AC\u09C7 \u09B8\u09C1\u09A8\u09BF\u09B0\u09CD\u09A6\u09BF\u09B7\u09CD\u099F \u09A8\u09C0\u09A4\u09BF\u09B0 \u09AD\u09BF\u09A4\u09CD\u09A4\u09BF\u09A4\u09C7\u0964"
  },
  {
    id: 3,
    title: "\u09B8\u09A6\u09C3\u09B6 \u09AC\u09BF\u09A7\u09BE\u09A8 (Similia Similibus Curentur)",
    content: "\u09AF\u09C7 \u09AC\u09B8\u09CD\u09A4\u09C1 \u09B8\u09C1\u09B8\u09CD\u09A5 \u09AE\u09BE\u09A8\u09C1\u09B7\u09C7\u09B0 \u09A6\u09C7\u09B9\u09C7 \u09B0\u09CB\u0997\u09B2\u0995\u09CD\u09B7\u09A3 \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7, \u09B8\u09C7\u0987 \u09AC\u09B8\u09CD\u09A4\u09C1\u0987 \u09B8\u09A6\u09C3\u09B6 \u09B2\u0995\u09CD\u09B7\u09A3\u09C7\u09B0 \u09B0\u09CB\u0997\u09C0\u0995\u09C7 \u0986\u09B0\u09CB\u0997\u09CD\u09AF \u0995\u09B0\u09A4\u09C7 \u09B8\u0995\u09CD\u09B7\u09AE\u0964"
  },
  {
    id: 4,
    title: "\u098F\u0995\u0995 \u0993\u09B7\u09C1\u09A7 (Single Remedy)",
    content: "\u098F\u0995 \u09B8\u09AE\u09DF\u09C7 \u09B0\u09CB\u0997\u09C0\u0995\u09C7 \u0995\u09C7\u09AC\u09B2 \u098F\u0995\u099F\u09BF\u09AE\u09BE\u09A4\u09CD\u09B0 \u0993\u09B7\u09C1\u09A7 \u09AA\u09CD\u09B0\u09DF\u09CB\u0997 \u0995\u09B0\u09A4\u09C7 \u09B9\u09AC\u09C7\u0964 \u09AE\u09BF\u09B6\u09CD\u09B0 \u0993\u09B7\u09C1\u09A7 \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u09A8\u09BF\u09B7\u09BF\u09A6\u09CD\u09A7\u0964"
  },
  {
    id: 5,
    title: "\u09B6\u0995\u09CD\u09A4\u09BF\u0995\u09B0\u09A3 (Potentization)",
    content: "\u0993\u09B7\u09C1\u09A7\u09C7\u09B0 \u09B6\u0995\u09CD\u09A4\u09BF \u09AF\u09A4 \u09AC\u09C3\u09A6\u09CD\u09A7\u09BF \u0995\u09B0\u09BE \u09B9\u09DF, \u09A4\u09BE\u09B0 \u09AC\u09B8\u09CD\u09A4\u09C1\u09AC\u09BE\u09A6\u09C0 \u0997\u09C1\u09A3 \u0995\u09AE\u09C7 \u098F\u09AC\u0982 \u0986\u09B0\u09CB\u0997\u09CD\u09AF\u0995\u09BE\u09B0\u09C0 \u0995\u09CD\u09B7\u09AE\u09A4\u09BE \u09AC\u09BE\u09DC\u09C7\u0964"
  },
  {
    id: 6,
    title: "\u099C\u09C0\u09AC\u09A8\u09C0 \u09B6\u0995\u09CD\u09A4\u09BF (Vital Force)",
    content: "\u09B8\u09C1\u09B8\u09CD\u09A5 \u0985\u09AC\u09B8\u09CD\u09A5\u09BE\u09DF \u09AE\u09BE\u09A8\u09C1\u09B7\u09C7\u09B0 \u09A6\u09C7\u09B9\u09C7 \u098F\u0995 \u0986\u09A7\u09CD\u09AF\u09BE\u09A4\u09CD\u09AE\u09BF\u0995 \u09B6\u0995\u09CD\u09A4\u09BF \u09AC\u09BF\u09B0\u09BE\u099C \u0995\u09B0\u09C7 \u09AF\u09BE \u09B6\u09B0\u09C0\u09B0\u0995\u09C7 \u09B8\u099C\u09C0\u09AC \u09B0\u09BE\u0996\u09C7 \u0993 \u09AA\u09B0\u09BF\u099A\u09BE\u09B2\u09A8\u09BE \u0995\u09B0\u09C7\u0964"
  },
  {
    id: 7,
    title: "\u09A6\u09C0\u09B0\u09CD\u0998\u09B8\u09CD\u09A5\u09BE\u09AF\u09BC\u09C0 \u09B0\u09CB\u0997 (Chronic Diseases)",
    content: "\u09AF\u09C7\u09B8\u09AC \u09B0\u09CB\u0997 \u09A7\u09C0\u09B0\u09C7 \u09A7\u09C0\u09B0\u09C7 \u09B6\u09B0\u09C0\u09B0\u09C7 \u09AC\u09BE\u09B8\u09BE \u09AC\u09BE\u0981\u09A7\u09C7 \u098F\u09AC\u0982 \u09B8\u09A0\u09BF\u0995 \u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE \u09A8\u09BE \u09B9\u09B2\u09C7 \u0986\u09AE\u09C3\u09A4\u09CD\u09AF\u09C1 \u09A5\u09C7\u0995\u09C7 \u09AF\u09BE\u09DF, \u09A4\u09BE\u0995\u09C7 \u09A6\u09C0\u09B0\u09CD\u0998\u09B8\u09CD\u09A5\u09BE\u09AF\u09BC\u09C0 \u09B0\u09CB\u0997 \u09AC\u09B2\u09C7\u0964"
  },
  {
    id: 8,
    title: "\u0993\u09B7\u09C1\u09A7\u09C7\u09B0 \u09AA\u09CD\u09B0\u09AE\u09BE\u09A3\u09C0\u0995\u09B0\u09A3 (Drug Proving)",
    content: "\u09B8\u09C1\u09B8\u09CD\u09A5 \u09AE\u09BE\u09A8\u09C1\u09B7\u09C7\u09B0 \u09A6\u09C7\u09B9\u09C7 \u0993\u09B7\u09C1\u09A7 \u09AA\u09CD\u09B0\u09DF\u09CB\u0997 \u0995\u09B0\u09C7 \u09A4\u09BE\u09B0 \u09B2\u0995\u09CD\u09B7\u09A3\u09B8\u09AE\u09C2\u09B9 \u09B2\u09BF\u09AA\u09BF\u09AC\u09A6\u09CD\u09A7 \u0995\u09B0\u09BE\u09B0 \u09AA\u09CD\u09B0\u0995\u09CD\u09B0\u09BF\u09DF\u09BE\u0995\u09C7 \u09A1\u09CD\u09B0\u09BE\u0997 \u09AA\u09CD\u09B0\u09C1\u09AD\u09BF\u0982 \u09AC\u09B2\u09C7\u0964"
  },
  {
    id: 9,
    title: "\u09AE\u09BE\u09AF\u09BC\u09BE\u099C\u09AE (Miasm)",
    content: "\u09B0\u09CB\u0997\u09C7\u09B0 \u09AE\u09C2\u09B2 \u0995\u09BE\u09B0\u09A3 \u09B9\u09B2\u09CB \u09AE\u09BE\u09DF\u09BE\u099C\u09AE\u0964 \u09B8\u09CB\u09B0\u09BE, \u09B8\u09BF\u09AB\u09BF\u09B2\u09BF\u09B8 \u0993 \u09B8\u09BE\u0987\u0995\u09CB\u09B8\u09BF\u09B8\u2014\u098F\u0987 \u09A4\u09BF\u09A8\u099F\u09BF \u09AE\u09BE\u09DF\u09BE\u099C\u09AE\u0987 \u09A6\u09C0\u09B0\u09CD\u0998\u09B8\u09CD\u09A5\u09BE\u09AF\u09BC\u09C0 \u09B0\u09CB\u0997\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u09A6\u09BE\u09DF\u09C0\u0964"
  },
  {
    id: 10,
    title: "\u09AA\u09A5\u09CD\u09AF \u0993 \u09A8\u09BF\u09AF\u09BC\u09AE\u09BE\u09AC\u09B2\u09C0 (Diet and Regimen)",
    content: "\u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE \u099A\u09B2\u09BE\u0995\u09BE\u09B2\u09C0\u09A8 \u09B0\u09CB\u0997\u09C0\u0995\u09C7 \u09B8\u09A0\u09BF\u0995 \u09AA\u09A5\u09CD\u09AF \u0993 \u09A8\u09BF\u09DF\u09AE \u09AE\u09C7\u09A8\u09C7 \u099A\u09B2\u09A4\u09C7 \u09B9\u09AC\u09C7, \u09AF\u09BE \u0986\u09B0\u09CB\u0997\u09CD\u09AF \u09AA\u09CD\u09B0\u0995\u09CD\u09B0\u09BF\u09DF\u09BE\u0995\u09C7 \u09A4\u09CD\u09AC\u09B0\u09BE\u09A8\u09CD\u09AC\u09BF\u09A4 \u0995\u09B0\u09C7\u0964"
  },
  {
    id: 11,
    title: "\u09B0\u09CB\u0997\u09B2\u0995\u09CD\u09B7\u09A3 \u09B8\u09AE\u09B7\u09CD\u099F\u09BF (Totality of Symptoms)",
    content: "\u09B0\u09CB\u0997\u09C7\u09B0 \u09A8\u09BE\u09AE \u09A8\u09DF, \u09AC\u09B0\u0982 \u09B0\u09CB\u0997\u09C0\u09B0 \u09B8\u09BE\u09AE\u0997\u09CD\u09B0\u09BF\u0995 \u09B2\u0995\u09CD\u09B7\u09A3 \u09B8\u09AE\u09B7\u09CD\u099F\u09BF\u09B0 \u0993\u09AA\u09B0 \u09AD\u09BF\u09A4\u09CD\u09A4\u09BF \u0995\u09B0\u09C7 \u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE \u0995\u09B0\u09A4\u09C7 \u09B9\u09AC\u09C7\u0964"
  },
  {
    id: 12,
    title: "\u09AC\u09CD\u09AF\u0995\u09CD\u09A4\u09BF \u09B8\u09CD\u09AC\u09BE\u09A4\u09A8\u09CD\u09A4\u09CD\u09B0\u09CD\u09AF (Individualization)",
    content: "\u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u09B0\u09CB\u0997\u09C0 \u0985\u09A8\u09A8\u09CD\u09AF, \u09A4\u09BE\u0987 \u098F\u0995\u0987 \u09B0\u09CB\u0997\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u09AD\u09BF\u09A8\u09CD\u09A8 \u09AD\u09BF\u09A8\u09CD\u09A8 \u09B0\u09CB\u0997\u09C0\u09B0 \u09AD\u09BF\u09A8\u09CD\u09A8 \u09AD\u09BF\u09A8\u09CD\u09A8 \u0993\u09B7\u09C1\u09A7\u09C7\u09B0 \u09AA\u09CD\u09B0\u09DF\u09CB\u099C\u09A8 \u09B9\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964"
  },
  {
    id: 13,
    title: "\u0995\u09CD\u09B7\u09C1\u09A6\u09CD\u09B0\u09A4\u09AE \u09AE\u09BE\u09A4\u09CD\u09B0\u09BE (Minimum Dose)",
    content: "\u0986\u09B0\u09CB\u0997\u09CD\u09AF\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u09AA\u09CD\u09B0\u09DF\u09CB\u099C\u09A8\u09C0\u09DF \u09B8\u09B0\u09CD\u09AC\u09A8\u09BF\u09AE\u09CD\u09A8 \u09AE\u09BE\u09A4\u09CD\u09B0\u09BE\u09DF \u0993\u09B7\u09C1\u09A7 \u09AA\u09CD\u09B0\u09DF\u09CB\u0997 \u0995\u09B0\u09A4\u09C7 \u09B9\u09AC\u09C7 \u09AF\u09BE\u09A4\u09C7 \u0995\u09CB\u09A8\u09CB \u09AA\u09BE\u09B0\u09CD\u09B6\u09CD\u09AC\u09AA\u09CD\u09B0\u09A4\u09BF\u0995\u09CD\u09B0\u09BF\u09DF\u09BE \u09A8\u09BE \u09B9\u09DF\u0964"
  },
  {
    id: 14,
    title: "\u0986\u09B0\u09CB\u0997\u09CD\u09AF\u09C7\u09B0 \u09A6\u09BF\u0995 (Direction of Cure)",
    content: "\u0986\u09B0\u09CB\u0997\u09CD\u09AF \u09AD\u09C7\u09A4\u09B0 \u09A5\u09C7\u0995\u09C7 \u09AC\u09BE\u0987\u09B0\u09C7, \u0989\u09AA\u09B0 \u09A5\u09C7\u0995\u09C7 \u09A8\u09BF\u099A\u09C7 \u098F\u09AC\u0982 \u0997\u09C1\u09B0\u09C1\u09A4\u09CD\u09AC\u09AA\u09C2\u09B0\u09CD\u09A3 \u0985\u0999\u09CD\u0997 \u09A5\u09C7\u0995\u09C7 \u0995\u09AE \u0997\u09C1\u09B0\u09C1\u09A4\u09CD\u09AC\u09AA\u09C2\u09B0\u09CD\u09A3 \u0985\u0999\u09CD\u0997\u09C7 \u0998\u099F\u09C7\u0964"
  },
  {
    id: 15,
    title: "\u09B9\u09CB\u09AE\u09BF\u0993\u09AA\u09CD\u09AF\u09BE\u09A5\u09BF\u0995 \u098F\u0997\u09CD\u09B0\u09BE\u09AD\u09C7\u09B6\u09A8 (Homeopathic Aggravation)",
    content: "\u09B8\u09A0\u09BF\u0995 \u0993\u09B7\u09C1\u09A7 \u09AA\u09CD\u09B0\u09DF\u09CB\u0997\u09C7\u09B0 \u09AA\u09B0 \u09B8\u09BE\u09AE\u09DF\u09BF\u0995\u09AD\u09BE\u09AC\u09C7 \u09B0\u09CB\u0997\u09C7\u09B0 \u09B2\u0995\u09CD\u09B7\u09A3 \u09AC\u09C3\u09A6\u09CD\u09A7\u09BF \u09AA\u09C7\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7, \u09AF\u09BE \u0986\u09B0\u09CB\u0997\u09CD\u09AF\u09C7\u09B0 \u09B6\u09C1\u09AD \u09B2\u0995\u09CD\u09B7\u09A3\u0964"
  }
];
const symptomCategories = [
  {
    "id": "head",
    "name": "মাথা (Head)",
    "diseases": [
      {
        "id": "headache",
        "name": "মাথাব্যথা (Headache)",
        "remedies": [
          {
            "name": "Belladonna",
            "description": "এই রোগের ক্ষেত্রে Belladonna একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ব্যথা হঠাৎ আসে এবং হঠাৎ চলে যায়।"
            ],
            "mentalSymptoms": [
              "দপদপ করা ব্যথা (Throbbing pain), মনে হয় মাথা ফেটে যাবে।",
              "মুখমন্ডল লাল, চোখ লাল এবং গরম।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, শব্দে, আলোতে, বিকাল ৩টা বা রাত ১১টার পর।",
              "amelioration": "আধা-শোয়া অবস্থায়, গরম ঘরে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, হঠাৎ আক্রমণ, দপদপ করা ব্যথা, লালচে ভাব এবং উত্তাপ বেলেডোনার প্রধান লক্ষণ। বোরিক একে প্রদাহের প্রাথমিক অবস্থার ওষুধ বলেছেন।"
          },
          {
            "name": "Bryonia Alba",
            "description": "এই রোগের ক্ষেত্রে Bryonia Alba একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "চোখ খুললে বা নড়াচড়া করলে ব্যথা লাগে।",
              "প্রচণ্ড জলপিপাসা এবং কোষ্ঠকাঠিন্য থাকে।"
            ],
            "mentalSymptoms": [
              "মেজাজ খুব খিটখিটে, একা থাকতে চায়।"
            ],
            "modalities": {
              "aggravation": "সামান্য নড়াচড়ায়, গরমে, সকালে।",
              "amelioration": "সম্পূর্ণ বিশ্রামে, আক্রান্ত পাশে শুলে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, ব্রায়োনিয়ার প্রধান লক্ষণ হলো নড়াচড়ায় বৃদ্ধি এবং বিশ্রামে উপশম। রোগীর প্রচুর তৃষ্ণা থাকে এবং শ্লৈষ্মিক ঝিল্লি শুষ্ক থাকে।"
          },
          {
            "name": "Glonoinum",
            "description": "এই রোগের ক্ষেত্রে Glonoinum একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "রৌদ্রে বা গরমে ঘোরাঘুরির ফলে প্রচণ্ড মাথাব্যথা (Sun headache)।",
              "মাথার মধ্যে রক্তসঞ্চালন বেড়ে যায়, দপদপ করে।",
              "মাথা বালিশে রাখতে পারে না, উঁচু করে রাখতে হয়।"
            ],
            "mentalSymptoms": [
              "মাথা খুব বড় মনে হয়, যেন খুলি ফেটে যাবে।"
            ],
            "modalities": {
              "aggravation": "রোদে, গরমে, মাথা নিচু করলে।",
              "amelioration": "খোলা বাতাসে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Glonoinum ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Nux Vomica",
            "description": "এই রোগের ক্ষেত্রে Nux Vomica একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "সকালে ঘুম থেকে ওঠার পর মাথা ভার হয়ে থাকে।",
              "শীতকাতর এবং কোষ্ঠকাঠিন্য ধাতের রোগী।"
            ],
            "mentalSymptoms": [
              "অতিরিক্ত মদ্যপান, রাত জাগা বা মানসিক পরিশ্রমের পর মাথাব্যথা।",
              "শব্দ, আলো বা গন্ধে বিরক্তি।"
            ],
            "modalities": {
              "aggravation": "সকালে, ঠান্ডায়, মানসিক পরিশ্রমে, খাওয়ার পর।",
              "amelioration": "সন্ধ্যায়, বিশ্রামে, গরম প্রয়োগে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, অতিরিক্ত মানসিক পরিশ্রম, অনিয়মিত জীবনযাপন এবং উত্তেজক পদার্থের কুফল দূর করতে এটি অদ্বিতীয়। রোগী অত্যন্ত রাগী ও শীতকাতর হয়।"
          },
          {
            "name": "Natrum Mur",
            "description": "এই রোগের ক্ষেত্রে Natrum Mur একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "স্কুল ছাত্র-ছাত্রীদের বা রক্তাল্পতা রোগীদের মাথাব্যথা।",
              "অতিরিক্ত লবণ খাওয়ার ইচ্ছা।",
              "চোখের দৃষ্টি ঝাপসা হয়ে আসে ব্যথার আগে।"
            ],
            "mentalSymptoms": [
              "মনে হয় হাজারটা হাতুড়ি দিয়ে মাথায় পেটাচ্ছে।"
            ],
            "modalities": {
              "aggravation": "সকাল ১০টা-১১টায়, রোদে, সান্ত্বনায়।",
              "amelioration": "খোলা বাতাসে, ঠান্ডা স্নানে, ডান পাশে শুলে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, অতিরিক্ত লবণ খাওয়ার ইচ্ছা, রোদে মাথাব্যথা এবং সান্ত্বনায় বৃদ্ধি নেট্রাম মিউরের প্রধান লক্ষণ। রোগী অন্তর্মুখী স্বভাবের হয়।"
          }
        ]
      },
      {
        "id": "vertigo",
        "name": "মাথা ঘোরা (Vertigo)",
        "remedies": [
          {
            "name": "Conium Mac",
            "description": "এই রোগের ক্ষেত্রে Conium Mac একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বিছানায় শুয়ে পাশ ফিরলে মাথা ঘোরে।",
              "বয়স্কদের মাথা ঘোরার জন্য বিশেষ উপযোগী।",
              "মাথা ঘোরার সাথে ঘাড়ে ব্যথা থাকতে পারে।",
              "অল্প নড়াচড়াতেই মাথা ঘোরা বাড়ে।"
            ],
            "mentalSymptoms": [
              "চোখ বুজলে মনে হয় বিছানা ঘুরছে।"
            ],
            "modalities": {
              "aggravation": "শুয়ে থাকলে, রাতে, অবিবাহিত অবস্থায়।",
              "amelioration": "অন্ধকারে, পা ঝুলিয়ে বসলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Conium Mac ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Cocculus Ind",
            "description": "এই রোগের ক্ষেত্রে Cocculus Ind একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "গাড়িতে বা নৌকায় চড়লে মাথা ঘোরে (Motion sickness)।",
              "মাথা ঘোরার সাথে বমি বমি ভাব।",
              "রাত্রি জাগরণের ফলে মাথা ঘোরা।",
              "মাথা তোলার চেষ্টা করলেই মাথা ঘোরে।",
              "খাবার দেখলে বা গন্ধ পেলে বমি আসে।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "গাড়িতে বা নৌকায় চড়লে, ঘুম কম হলে।",
              "amelioration": "ঘরের ভেতর, শুয়ে থাকলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Cocculus Ind ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Phosphorus",
            "description": "এই রোগের ক্ষেত্রে Phosphorus একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "সকালে ঘুম থেকে ওঠার পর মাথা ঘোরে।",
              "উপর দিকে তাকালে মাথা ঘোরে।",
              "খালি পেটে থাকলে মাথা ঘোরা বাড়ে।",
              "মাথা ঘোরার সাথে মূর্ছা যাওয়ার প্রবণতা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায়, বাম পাশে শুলে, ঠান্ডা বাতাসে।",
              "amelioration": "ডান পাশে শুলে, ঠান্ডা খাবারে, ঘুমালে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, ফসফরাসের রোগী লম্বা, ছিপছিপে এবং রক্তস্রাব প্রবণ হয়। এদের ঠান্ডা জল, আইসক্রিম এবং লবণাক্ত খাবারের প্রতি প্রবল আকাঙ্ক্ষা থাকে।"
          },
          {
            "name": "Pulsatilla",
            "description": "এই রোগের ক্ষেত্রে Pulsatilla একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "গরম ঘরে বা বদ্ধ ঘরে মাথা ঘোরে।",
              "মাসিক ঋতুস্রাব অনিয়মিত বা বন্ধ থাকার কারণে মাথা ঘোরা।",
              "উপর দিকে তাকালে মাথা ঘোরে।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "গরমে, সন্ধ্যায়, চর্বিযুক্ত খাবারে।",
              "amelioration": "খোলা বাতাসে, ঠান্ডা প্রয়োগে, ধীরে ধীরে হাঁটলে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, পরিবর্তনশীল লক্ষণ, তৃষ্ণাহীনতা এবং মুক্ত বাতাসে উপশম পালসাটিলার প্রধান বৈশিষ্ট্য। রোগী নম্র ও ক্রন্দনশীল স্বভাবের হয়।"
          },
          {
            "name": "Gelsemium",
            "description": "এই রোগের ক্ষেত্রে Gelsemium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "মাথা ঘোরার সাথে তন্দ্রাচ্ছন্ন ভাব।",
              "মাথার পেছন দিক থেকে ব্যথা শুরু হয়ে পুরো মাথায় ছড়ায়।",
              "ভয় বা দুশ্চিন্তা থেকে মাথা ঘোরা।",
              "দৃষ্টিশক্তি ঝাপসা হয়ে আসে।"
            ],
            "mentalSymptoms": [
              "পায়ের নিচে মাটি সরে যাচ্ছে এমন অনুভূতি।"
            ],
            "modalities": {
              "aggravation": "আর্দ্র আবহাওয়ায়, মানসিক উত্তেজনায়, সকাল ১০টায়।",
              "amelioration": "প্রচুর প্রস্রাবের পর, খোলা বাতাসে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, দুর্বলতা, তন্দ্রাচ্ছন্নতা, তৃষ্ণাহীনতা এবং কাঁপুনি জেলসেমিয়ামের প্রধান লক্ষণ। এটি স্নায়বিক দুর্বলতা ও জ্বরের দারুণ ওষুধ।"
          }
        ]
      },
      {
        "id": "migraine",
        "name": "মাইগ্রেন (Migraine)",
        "remedies": [
          {
            "name": "Sanguinaria Can",
            "description": "এই রোগের ক্ষেত্রে Sanguinaria Can একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ডানদিকের মাথাব্যথা, যা ঘাড় থেকে শুরু হয়ে ডান চোখের ওপর এসে স্থির হয়।",
              "ঋতুস্রাবের সময় মাথাব্যথা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ডান দিকে, সকালে, আলোতে।",
              "amelioration": "ঘুমালে, অন্ধকারে, বমি হলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Sanguinaria Can ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Spigelia",
            "description": "এই রোগের ক্ষেত্রে Spigelia একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বামদিকের মাথাব্যথা, যা ঘাড় থেকে শুরু হয়ে বাম চোখের ওপর আসে।",
              "হৃৎপিণ্ডের ধড়ফড়ানির সাথে মাথাব্যথা।",
              "চোখ থেকে পানি পড়ে।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, সূর্যালোকের সাথে বাড়ে।",
              "amelioration": "ডান পাশে শুলে, মাথা উঁচু রাখলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Spigelia ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Iris Versicolor",
            "description": "এই রোগের ক্ষেত্রে Iris Versicolor একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "মাথাব্যথার সাথে প্রচুর টক বমি।",
              "সপ্তাহান্তে বা ছুটির দিনে মাথাব্যথা (Sunday headache)।",
              "পুরো মাথায় জ্বালা করা ব্যথা।"
            ],
            "mentalSymptoms": [
              "চোখের সামনে ঝাপসা দেখা বা আলোর ঝলকানি।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায়, বিশ্রামে।",
              "amelioration": "ক্রমাগত নড়াচড়ায়।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Iris Versicolor ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Sanguinaria",
            "description": "এই রোগের ক্ষেত্রে Sanguinaria একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ডান দিকের মাথাব্যথা",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ডান দিকে, সকালে, আলোতে।",
              "amelioration": "ঘুমালে, অন্ধকারে, বমি হলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Sanguinaria ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      },
      {
        "id": "hair_fall",
        "name": "চুল পড়া (Hair Fall)",
        "remedies": [
          {
            "name": "Acid Phos",
            "description": "এই রোগের ক্ষেত্রে Acid Phos একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "চুল খুব তাড়াতাড়ি পেকে যায়।",
              "শারীরিক দুর্বলতা ও উদাসীনতা।",
              "জ্বরের পর চুল পড়া।",
              "মাথার চুল পাতলা হয়ে যাওয়া।"
            ],
            "mentalSymptoms": [
              "শোক, দুঃখ বা মানসিক আঘাতের পর চুল পড়া।"
            ],
            "modalities": {
              "aggravation": "পরিশ্রমে, কথা বললে, সঙ্গীতে, শোক বা দুশ্চিন্তায়।",
              "amelioration": "সামান্য ঘুমে, গরমে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Acid Phos ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Lycopodium",
            "description": "এই রোগের ক্ষেত্রে Lycopodium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রসবের পর বা পেটের অসুখের পর চুল পড়া।",
              "মাথার মাঝখান থেকে চুল পড়া শুরু হয়।",
              "চুল অকালে পেকে যায়।",
              "গরম খাবার পছন্দ।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "বিকাল ৪টা থেকে রাত ৮টা, ডান দিকে, গরমে।",
              "amelioration": "ঠান্ডা বাতাসে, নড়াচড়ায়, গরম পানীয়তে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, ডান দিকের আক্রমণ, বিকাল ৪টা থেকে রাত ৮টা পর্যন্ত বৃদ্ধি এবং পেটে গ্যাসের সমস্যা লাইকোপোডিয়ামের নির্দেশক।"
          },
          {
            "name": "Wiesbaden",
            "description": "এই রোগের ক্ষেত্রে Wiesbaden একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "চুল পড়া বন্ধ করতে এবং নতুন চুল গজাতে সাহায্য করে।",
              "চুল খুব দ্রুত বড় হয়।",
              "চুলের গোড়া শক্ত করে।",
              "চুলের রঙ কালো করতে সাহায্য করে।",
              "চুল রুক্ষ ও শুষ্ক হলে কার্যকরী।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ঋতুস্রাবের সময়।",
              "amelioration": "খোলা বাতাসে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Wiesbaden ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Phosphoric Acid",
            "description": "এই রোগের ক্ষেত্রে Phosphoric Acid একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "চুল পাতলা হয়ে যাওয়া",
              "অল্প বয়সে চুল পেকে যাওয়া",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "মানসিক শোক বা দুশ্চিন্তার পর চুল পড়া"
            ],
            "modalities": {
              "aggravation": "পরিশ্রমে, কথা বললে, সঙ্গীতে, শোক বা দুশ্চিন্তায়।",
              "amelioration": "সামান্য ঘুমে, গরমে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Phosphoric Acid ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      },
      {
        "id": "dandruff",
        "name": "খুশকি (Dandruff)",
        "remedies": [
          {
            "name": "Thuja Occ",
            "description": "এই রোগের ক্ষেত্রে Thuja Occ একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "সাদা আঁশের মতো খুশকি।",
              "চুল শুকনো ও রুক্ষ।",
              "মাথায় চুলকানি।",
              "টিকা নেওয়ার পর সমস্যা বাড়লে।",
              "চুল চটচটে ও জট পাকানো।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "আর্দ্র আবহাওয়ায়, সকালে (৩টা)।",
              "amelioration": "মাথা পিছনের দিকে বাঁকালে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Thuja Occ ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Kali Sulph",
            "description": "এই রোগের ক্ষেত্রে Kali Sulph একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হলুদ রঙের চটচটে খুশকি।",
              "মাথা গরম ও চুলকানি।",
              "চুল পড়ে যাওয়া।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায় বা গরম ঘরে বৃদ্ধি।",
              "amelioration": "খোলা বাতাসে আরাম।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Kali Sulph ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Sanicula",
            "description": "এই রোগের ক্ষেত্রে Sanicula একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "মাথায় প্রচুর খুশকি, যা চিরুনি দিয়ে আঁচড়ালে পড়ে।",
              "ঘাড় ও মাথায় ঘাম।",
              "শিশুদের রিকেট বা হাড়ের সমস্যায়।",
              "পায়ের তলা জ্বালা করে।"
            ],
            "mentalSymptoms": [
              "মাথার ত্বক ও চুল খুব নোংরা মনে হয়।"
            ],
            "modalities": {
              "aggravation": "নিচের দিকে নামলে, ঠান্ডা বাতাসে, স্পর্শে।",
              "amelioration": "খোলা বাতাসে, বমি করলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Sanicula ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          },
          {
            "name": "Belladonna",
            "description": "এই রোগের ক্ষেত্রে Belladonna একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হঠাৎ করে রোগের আক্রমণ।",
              "প্রচণ্ড জ্বর ও মাথাব্যথা।",
              "মুখমণ্ডল লাল হয়ে যাওয়া।",
              "গলা ব্যথা ও গিলতে কষ্ট।"
            ],
            "mentalSymptoms": [
              "আলো ও শব্দে বিরক্তি।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, শব্দে, আলোতে, বিকাল ৩টা বা রাত ১১টার পর।",
              "amelioration": "আধা-শোয়া অবস্থায়, গরম ঘরে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, হঠাৎ আক্রমণ, দপদপ করা ব্যথা, লালচে ভাব এবং উত্তাপ বেলেডোনার প্রধান লক্ষণ। বোরিক একে প্রদাহের প্রাথমিক অবস্থার ওষুধ বলেছেন।"
          }
        ]
      }
    ]
  },
  {
    "id": "stomach",
    "name": "পেট (Stomach)",
    "diseases": [
      {
        "id": "gastritis",
        "name": "গ্যাস্ট্রিক (Gastritis)",
        "remedies": [
          {
            "name": "Nux Vomica",
            "description": "এই রোগের ক্ষেত্রে Nux Vomica একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "খাওয়ার এক-দুই ঘণ্টা পর পেটে ব্যথা ও ভারবোধ।",
              "বমি করার চেষ্টা করে কিন্তু বমি হয় না।",
              "মশলাযুক্ত ও গুরুপাক খাবার খাওয়ার পর সমস্যা।",
              "পেট ফাঁপা, পেটে চাপ দিলে ব্যথা।",
              "কোষ্ঠকাঠিন্য ও ঘন ঘন পায়খানার বেগ।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সকালে, ঠান্ডায়, মানসিক পরিশ্রমে, খাওয়ার পর।",
              "amelioration": "সন্ধ্যায়, বিশ্রামে, গরম প্রয়োগে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, অতিরিক্ত মানসিক পরিশ্রম, অনিয়মিত জীবনযাপন এবং উত্তেজক পদার্থের কুফল দূর করতে এটি অদ্বিতীয়। রোগী অত্যন্ত রাগী ও শীতকাতর হয়।"
          },
          {
            "name": "Carbo Veg",
            "description": "এই রোগের ক্ষেত্রে Carbo Veg একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "পেটের ওপরের অংশে প্রচুর গ্যাস জমে।",
              "সহজপাচ্য খাবারও হজম হতে চায় না।",
              "বাতাসের জন্য তীব্র আকাঙ্ক্ষা (Fan desire)।"
            ],
            "mentalSymptoms": [
              "পেট ফুলে থাকে, মনে হয় ফেটে যাবে।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায়, চর্বিযুক্ত খাবারে, গরমে।",
              "amelioration": "বাতাস করলে, ঢেকুর তুললে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Carbo Veg ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Lycopodium",
            "description": "এই রোগের ক্ষেত্রে Lycopodium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "পেটের নিচের অংশে গ্যাস জমে।",
              "সামান্য খেলেই পেট ভরে যায় (Easy satiety)।",
              "গরম খাবার পছন্দ করে।",
              "মিষ্টি খাওয়ার প্রবল ইচ্ছা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "বিকাল ৪টা থেকে রাত ৮টা, ডান দিকে, গরমে।",
              "amelioration": "ঠান্ডা বাতাসে, নড়াচড়ায়, গরম পানীয়তে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, ডান দিকের আক্রমণ, বিকাল ৪টা থেকে রাত ৮টা পর্যন্ত বৃদ্ধি এবং পেটে গ্যাসের সমস্যা লাইকোপোডিয়ামের নির্দেশক।"
          },
          {
            "name": "China",
            "description": "এই রোগের ক্ষেত্রে China একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "পুরো পেট গ্যাসে পূর্ণ থাকে।",
              "ফল বা দুধ খেলে সমস্যা বাড়ে।",
              "পেট ড্রামের মতো ফুলে থাকে।",
              "দুর্বলতা ও রক্তশূন্যতা থাকে।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সামান্য স্পর্শে, তরল পদার্থ নির্গত হলে।",
              "amelioration": "জোরে চাপ দিলে, গরমে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, China ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Pulsatilla",
            "description": "এই রোগের ক্ষেত্রে Pulsatilla একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "চর্বিযুক্ত খাবার, ঘি, মাখন খাওয়ার পর গ্যাস্ট্রিক।",
              "মুখে তিতা স্বাদ, বিশেষ করে সকালে।",
              "জলপিপাসা একদম থাকে না।",
              "পেট গুড়গুড় করে ও ব্যথা করে।",
              "খোলা বাতাসে থাকলে ভালো লাগে।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "গরমে, সন্ধ্যায়, চর্বিযুক্ত খাবারে।",
              "amelioration": "খোলা বাতাসে, ঠান্ডা প্রয়োগে, ধীরে ধীরে হাঁটলে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, পরিবর্তনশীল লক্ষণ, তৃষ্ণাহীনতা এবং মুক্ত বাতাসে উপশম পালসাটিলার প্রধান বৈশিষ্ট্য। রোগী নম্র ও ক্রন্দনশীল স্বভাবের হয়।"
          }
        ]
      },
      {
        "id": "acidity",
        "name": "এসিডিটি (Acidity)",
        "remedies": [
          {
            "name": "Robinia",
            "description": "এই রোগের ক্ষেত্রে Robinia একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রচণ্ড টক ঢেকুর ও টক বমি।",
              "মাথাব্যথা ও পেটে ব্যথা।",
              "দাঁত টক হয়ে যায়।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "টক খাওয়ার ইচ্ছা কিন্তু খেলে বাড়ে।",
              "amelioration": "লক্ষণ অনুযায়ী পরিবর্তনশীল।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Robinia ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Natrum Phos",
            "description": "এই রোগের ক্ষেত্রে Natrum Phos একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "জিভের পেছনে হলুদ লেপ।",
              "টক ঢেকুর ও টক বমি।",
              "শিশুদের দুধ তোলার সমস্যা।",
              "অতিরিক্ত মিষ্টি খাওয়ার ফলে এসিডিটি।",
              "পেটে কৃমি থাকার প্রবণতা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "চিনি বা মিষ্টি খেলে, দুধ পানে, বজ্রপাতের সময়।",
              "amelioration": "ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Natrum Phos ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Iris Versicolor",
            "description": "এই রোগের ক্ষেত্রে Iris Versicolor একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "গলা থেকে পেট পর্যন্ত জ্বালাপোড়া।",
              "টক ও তিতা বমি।",
              "মাথাব্যথার সাথে এসিডিটি।",
              "ডায়রিয়ার সাথে এসিডিটি।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায়, বিশ্রামে।",
              "amelioration": "ক্রমাগত নড়াচড়ায়।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Iris Versicolor ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Lycopodium",
            "description": "এই রোগের ক্ষেত্রে Lycopodium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "পেট ফেঁপে থাকা",
              "সামান্য খেলেই পেট ভরে যায়",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "বিকাল ৪টা থেকে রাত ৮টা, ডান দিকে, গরমে।",
              "amelioration": "ঠান্ডা বাতাসে, নড়াচড়ায়, গরম পানীয়তে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, ডান দিকের আক্রমণ, বিকাল ৪টা থেকে রাত ৮টা পর্যন্ত বৃদ্ধি এবং পেটে গ্যাসের সমস্যা লাইকোপোডিয়ামের নির্দেশক।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      },
      {
        "id": "indigestion",
        "name": "বদহজম (Indigestion)",
        "remedies": [
          {
            "name": "Pulsatilla",
            "description": "এই রোগের ক্ষেত্রে Pulsatilla একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "চর্বিযুক্ত খাবার, ঘি, মাখন খেয়ে বদহজম।",
              "মুখে তিতা স্বাদ।",
              "পানি পিপাসা থাকে না।",
              "পেট ভার ও গুড়গুড় করে।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "গরমে, সন্ধ্যায়, চর্বিযুক্ত খাবারে।",
              "amelioration": "খোলা বাতাসে, ঠান্ডা প্রয়োগে, ধীরে ধীরে হাঁটলে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, পরিবর্তনশীল লক্ষণ, তৃষ্ণাহীনতা এবং মুক্ত বাতাসে উপশম পালসাটিলার প্রধান বৈশিষ্ট্য। রোগী নম্র ও ক্রন্দনশীল স্বভাবের হয়।"
          },
          {
            "name": "Antim Crud",
            "description": "এই রোগের ক্ষেত্রে Antim Crud একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "জিভ সাদা লেপাবৃত (Milky white tongue)।",
              "অতিরিক্ত খাওয়ার ফলে বদহজম।",
              "টক ও আচার খাওয়ার ইচ্ছা।",
              "বমি বমি ভাব ও বমি।"
            ],
            "mentalSymptoms": [
              "মেজাজ খিটখিটে ও কারো দিকে তাকালে রেগে যায়।"
            ],
            "modalities": {
              "aggravation": "অতিরিক্ত গরমে, ঠান্ডা জলে স্নান করলে, রোদে, অতিরিক্ত খাওয়ার পর।",
              "amelioration": "খোলা বাতাসে, বিশ্রামে, গরম জলে স্নানে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Antim Crud ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "China",
            "description": "এই রোগের ক্ষেত্রে China একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "পেট গ্যাসে পূর্ণ থাকে।",
              "ফল বা দুধ খেলে হজম হয় না।",
              "দুর্বলতা ও রক্তশূন্যতা।",
              "খাওয়ার পর পেট ফাঁপে।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সামান্য স্পর্শে, তরল পদার্থ নির্গত হলে।",
              "amelioration": "জোরে চাপ দিলে, গরমে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, China ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Lycopodium",
            "description": "এই রোগের ক্ষেত্রে Lycopodium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "পেটে প্রচুর গ্যাস হয়",
              "মিষ্টি খাওয়ার প্রবল ইচ্ছা",
              "গরম খাবার খেতে পছন্দ করে",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "বিকাল ৪টা থেকে রাত ৮টা, ডান দিকে, গরমে।",
              "amelioration": "ঠান্ডা বাতাসে, নড়াচড়ায়, গরম পানীয়তে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, ডান দিকের আক্রমণ, বিকাল ৪টা থেকে রাত ৮টা পর্যন্ত বৃদ্ধি এবং পেটে গ্যাসের সমস্যা লাইকোপোডিয়ামের নির্দেশক।"
          },
          {
            "name": "Antimonium Crudum",
            "description": "এই রোগের ক্ষেত্রে Antimonium Crudum একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "অতিরিক্ত খাওয়ার পর বদহজম",
              "জিহ্বায় সাদা প্রলেপ",
              "টক জাতীয় খাবার খাওয়ার পর সমস্যা",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "অতিরিক্ত গরমে, ঠান্ডা জলে স্নান করলে, রোদে, অতিরিক্ত খাওয়ার পর।",
              "amelioration": "খোলা বাতাসে, বিশ্রামে, গরম জলে স্নানে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Antimonium Crudum ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          }
        ]
      },
      {
        "id": "nausea",
        "name": "বমি বমি ভাব (Nausea)",
        "remedies": [
          {
            "name": "Ipecac",
            "description": "এই রোগের ক্ষেত্রে Ipecac একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "জিভ পরিষ্কার।",
              "লালা ঝরে।",
              "গর্ভাবস্থায় বমি।",
              "অতিরিক্ত খাওয়ার পর বমি।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "আর্দ্র গরমে, অতিরিক্ত খাওয়ার পর।",
              "amelioration": "খোলা বাতাসে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Ipecac ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arsenic Album",
            "description": "এই রোগের ক্ষেত্রে Arsenic Album একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বাসি বা পচা খাবার খেয়ে বমি (Food poisoning)।",
              "বমির সাথে জ্বালাপোড়া।",
              "অল্প অল্প পানি পান করার ইচ্ছা।",
              "দুর্বলতা ও অস্থিরতা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "মধ্যরাতে (১২টা-২টা), ঠান্ডায়, ঠান্ডা খাবারে।",
              "amelioration": "গরমে, গরম পানীয়তে, মাথা উঁচু করে শুলে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, মৃত্যুভয়, অস্থিরতা, জ্বালাকর ব্যথা এবং মধ্যরাতে বৃদ্ধি আর্সেনিকের প্রধান লক্ষণ। রোগী অত্যন্ত খুঁতখুঁতে ও পরিচ্ছন্নতা পছন্দ করে।"
          },
          {
            "name": "Cocculus Ind",
            "description": "এই রোগের ক্ষেত্রে Cocculus Ind একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "গাড়িতে বা নৌকায় চড়লে বমি (Motion sickness)।",
              "খাবারের গন্ধ সহ্য করতে পারে না।",
              "মাথা ঘোরা ও বমি।",
              "রাত জাগার পর বমি ভাব।",
              "বিছানা থেকে মাথা তুললে বমি আসে।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "গাড়িতে বা নৌকায় চড়লে, ঘুম কম হলে।",
              "amelioration": "ঘরের ভেতর, শুয়ে থাকলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Cocculus Ind ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Tabacum",
            "description": "এই রোগের ক্ষেত্রে Tabacum একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রচণ্ড বমি বমি ভাব",
              "মুখ ফ্যাকাশে হয়ে যায়",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "চোখ খুললে, গরমে।",
              "amelioration": "খোলা বাতাসে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Tabacum ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      },
      {
        "id": "ulcer",
        "name": "আলসার (Ulcer)",
        "remedies": [
          {
            "name": "Argentum Nit",
            "description": "এই রোগের ক্ষেত্রে Argentum Nit একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "মিষ্টি খাওয়ার প্রবল ইচ্ছা।",
              "খাওয়ার পর পেট ফাঁপে ও ব্যথা করে।"
            ],
            "mentalSymptoms": [
              "পেটে মনে হয় কাঁচের টুকরো ফুটে আছে।"
            ],
            "modalities": {
              "aggravation": "গরমে, রাতে, মিষ্টি খেলে।",
              "amelioration": "ঠান্ডা বাতাসে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Argentum Nit ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Kali Bich",
            "description": "এই রোগের ক্ষেত্রে Kali Bich একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "পেটে গোল আকারের আলসার।",
              "খাওয়ার পরপরই পেটে ভারবোধ।",
              "জিভ চকচকে ও লাল।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সকালে (২টা-৩টা), গরমে।",
              "amelioration": "গরমে, ত্বকে উদ্ভেদ বের হলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Kali Bich ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Hydrastis",
            "description": "এই রোগের ক্ষেত্রে Hydrastis একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "পেটে খালি বোধ (Gone feeling)।",
              "কোষ্ঠকাঠিন্য ও হজমে দুর্বলতা।",
              "জিভ বড় ও হলুদ লেপযুক্ত।",
              "লিভারের সমস্যা।",
              "খাওয়ার প্রতি অনীহা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "রাতে, গরমে।",
              "amelioration": "চাপে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Hydrastis ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Argentum Nitricum",
            "description": "এই রোগের ক্ষেত্রে Argentum Nitricum একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "পেটে তীব্র ব্যথা",
              "উদ্বেগ ও দুশ্চিন্তার সাথে পেটের সমস্যা",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "গরমে, রাতে, মিষ্টি খেলে।",
              "amelioration": "ঠান্ডা বাতাসে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Argentum Nitricum ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Kali Bichromicum",
            "description": "এই রোগের ক্ষেত্রে Kali Bichromicum একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "পেটের একটি নির্দিষ্ট বিন্দুতে ব্যথা",
              "খাওয়ার পরপরই ব্যথা শুরু হয়",
              "বমির সাথে আঠালো শ্লেষ্মা",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সকালে (২টা-৩টা), গরমে।",
              "amelioration": "গরমে, ত্বকে উদ্ভেদ বের হলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Kali Bichromicum ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          }
        ]
      }
    ]
  },
  {
    "id": "respiratory",
    "name": "শ্বাসতন্ত্র (Respiratory)",
    "diseases": [
      {
        "id": "cough",
        "name": "কাশি (Cough)",
        "remedies": [
          {
            "name": "Bryonia Alba",
            "description": "এই রোগের ক্ষেত্রে Bryonia Alba একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "শুষ্ক, শক্ত কাশি, বুকে ব্যথা লাগে।",
              "কাশির সময় বুকে হাত দিয়ে চেপে ধরতে হয়।",
              "গরম ঘরে বা নড়াচড়ায় কাশি বাড়ে।",
              "প্রচণ্ড জলপিপাসা।",
              "গলা শুকিয়ে কাঠ হয়ে থাকে।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সামান্য নড়াচড়ায়, গরমে, সকালে।",
              "amelioration": "সম্পূর্ণ বিশ্রামে, আক্রান্ত পাশে শুলে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, ব্রায়োনিয়ার প্রধান লক্ষণ হলো নড়াচড়ায় বৃদ্ধি এবং বিশ্রামে উপশম। রোগীর প্রচুর তৃষ্ণা থাকে এবং শ্লৈষ্মিক ঝিল্লি শুষ্ক থাকে।"
          },
          {
            "name": "Drosera",
            "description": "এই রোগের ক্ষেত্রে Drosera একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "কুকুর-কাশি (Whooping cough) বা ঘং ঘং শব্দযুক্ত কাশি।",
              "রাতে শুলে কাশি বাড়ে, বালিশে মাথা রাখলেই কাশি শুরু হয়।",
              "কাশতে কাশতে বমি হয়ে যায়।",
              "গলায় সুড়সুড় করে কাশি আসে।"
            ],
            "mentalSymptoms": [
              "কাশির সময় মনে হয় দম বন্ধ হয়ে আসবে।"
            ],
            "modalities": {
              "aggravation": "মধ্যরাতের পর, শুয়ে থাকলে, কথা বললে।",
              "amelioration": "উঠে বসলে, খোলা বাতাসে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Drosera ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Antim Tart",
            "description": "এই রোগের ক্ষেত্রে Antim Tart একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বুকে প্রচুর কফ জমে, ঘড়ঘড় শব্দ হয়।",
              "কাশি দিলে কফ উঠতে চায় না।",
              "শ্বাসকষ্ট, বাতাস নেওয়ার জন্য ফ্যানের বাতাস চায়।",
              "জিভ সাদা লেপাবৃত থাকে।",
              "শিশু ও বয়স্কদের জন্য বিশেষ উপযোগী।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায়, গরমে, শুয়ে থাকলে, দুধ পানে।",
              "amelioration": "সোজা হয়ে বসলে, ঢেকুর তুললে, বমি করলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Antim Tart ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Rumex",
            "description": "এই রোগের ক্ষেত্রে Rumex একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "গলার নিচে গর্তে (Suprasternal fossa) সুড়সুড় করে কাশি।",
              "ঠান্ডা বাতাস লাগলেই কাশি শুরু হয়।",
              "কথা বললে বা লম্বা শ্বাস নিলে কাশি বাড়ে।",
              "শুকনো, একটানা কাশি।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ঠান্ডা বাতাসে, কথা বললে, সন্ধ্যায় ও রাতে।",
              "amelioration": "মুখ ঢেকে রাখলে, গরমে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Rumex ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Ipecac",
            "description": "এই রোগের ক্ষেত্রে Ipecac একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "কাশির সাথে সব সময় বমি বমি ভাব থাকে।",
              "বুকের ভেতর কফ জমে সাঁই সাঁই শব্দ হয়।",
              "কাশতে কাশতে শরীর শক্ত হয়ে যায়।",
              "জিভ পরিষ্কার, কোনো লেপ থাকে না।",
              "দম বন্ধ করা কাশি।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "আর্দ্র গরমে, অতিরিক্ত খাওয়ার পর।",
              "amelioration": "খোলা বাতাসে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Ipecac ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          }
        ]
      },
      {
        "id": "bronchitis",
        "name": "ব্রঙ্কাইটিস (Bronchitis)",
        "remedies": [
          {
            "name": "Bryonia Alba",
            "description": "এই রোগের ক্ষেত্রে Bryonia Alba একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "শুকনো কাশি ও বুকে ব্যথা।",
              "কাশির সময় বুক চেপে ধরতে হয়।",
              "প্রচণ্ড পিপাসা।",
              "কোষ্ঠকাঠিন্য।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সামান্য নড়াচড়ায়, গরমে, সকালে।",
              "amelioration": "সম্পূর্ণ বিশ্রামে, আক্রান্ত পাশে শুলে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, ব্রায়োনিয়ার প্রধান লক্ষণ হলো নড়াচড়ায় বৃদ্ধি এবং বিশ্রামে উপশম। রোগীর প্রচুর তৃষ্ণা থাকে এবং শ্লৈষ্মিক ঝিল্লি শুষ্ক থাকে।"
          },
          {
            "name": "Antim Tart",
            "description": "এই রোগের ক্ষেত্রে Antim Tart একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বুকে প্রচুর কফ জমে, ঘড়ঘড় শব্দ হয়।",
              "কাশি দিলে কফ উঠতে চায় না।",
              "শ্বাসকষ্ট ও তন্দ্রাচ্ছন্ন ভাব।",
              "বয়স্ক ও শিশুদের জন্য উপযোগী।",
              "বমি বমি ভাব।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায়, গরমে, শুয়ে থাকলে, দুধ পানে।",
              "amelioration": "সোজা হয়ে বসলে, ঢেকুর তুললে, বমি করলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Antim Tart ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Phosphorus",
            "description": "এই রোগের ক্ষেত্রে Phosphorus একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বুকে চাপ ও ভারবোধ।",
              "ঠান্ডা পানি পানের ইচ্ছা।",
              "সন্ধ্যায় স্বরভঙ্গ।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায়, বাম পাশে শুলে, ঠান্ডা বাতাসে।",
              "amelioration": "ডান পাশে শুলে, ঠান্ডা খাবারে, ঘুমালে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, ফসফরাসের রোগী লম্বা, ছিপছিপে এবং রক্তস্রাব প্রবণ হয়। এদের ঠান্ডা জল, আইসক্রিম এবং লবণাক্ত খাবারের প্রতি প্রবল আকাঙ্ক্ষা থাকে।"
          },
          {
            "name": "Antimonium Tart",
            "description": "এই রোগের ক্ষেত্রে Antimonium Tart একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বুকে প্রচুর কফ জমে থাকে",
              "কাশতে কাশতে শ্বাসকষ্ট হয়",
              "কফ সহজে বের হতে চায় না",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায়, গরমে, শুয়ে থাকলে, দুধ পানে।",
              "amelioration": "সোজা হয়ে বসলে, ঢেকুর তুললে, বমি করলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Antimonium Tart ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Spongia Tosta",
            "description": "এই রোগের ক্ষেত্রে Spongia Tosta একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "শুকনো ও কর্কশ কাশি",
              "গলা শুকিয়ে যায়",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "মধ্যরাতের আগে, শুয়ে থাকলে, মিষ্টি খেলে।",
              "amelioration": "গরম পানীয় খেলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Spongia Tosta ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          }
        ]
      },
      {
        "id": "pneumonia",
        "name": "নিউমোনিয়া (Pneumonia)",
        "remedies": [
          {
            "name": "Aconite Nap",
            "description": "এই রোগের ক্ষেত্রে Aconite Nap একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "রোগের প্রথম অবস্থায়, হঠাৎ জ্বর ও বুকে ব্যথা।",
              "শুকনো কাশি ও শ্বাসকষ্ট।",
              "ঠান্ডা বাতাস লেগে রোগ শুরু।",
              "চামড়া গরম ও শুকনো।"
            ],
            "mentalSymptoms": [
              "অস্থিরতা ও মৃত্যুভয়।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায় ও রাতে, শুষ্ক ঠান্ডা বাতাসে, গরম ঘরে।",
              "amelioration": "খোলা বাতাসে, বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের মতে, একোনাইট হঠাৎ ও তীব্র আক্রমণের প্রধান ওষুধ। মৃত্যুভয়, অস্থিরতা এবং প্রবল তৃষ্ণা এর প্রধান নির্দেশক লক্ষণ।"
          },
          {
            "name": "Bryonia Alba",
            "description": "এই রোগের ক্ষেত্রে Bryonia Alba একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "দ্বিতীয় অবস্থায় যখন বুকে ব্যথা ও কাশি থাকে।",
              "কাশির সাথে রক্তমিশ্রিত কফ।",
              "জিভ শুকনো ও সাদা।",
              "প্রচণ্ড পিপাসা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সামান্য নড়াচড়ায়, গরমে, সকালে।",
              "amelioration": "সম্পূর্ণ বিশ্রামে, আক্রান্ত পাশে শুলে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, ব্রায়োনিয়ার প্রধান লক্ষণ হলো নড়াচড়ায় বৃদ্ধি এবং বিশ্রামে উপশম। রোগীর প্রচুর তৃষ্ণা থাকে এবং শ্লৈষ্মিক ঝিল্লি শুষ্ক থাকে।"
          },
          {
            "name": "Lycopodium",
            "description": "এই রোগের ক্ষেত্রে Lycopodium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "রোগের শেষ অবস্থায় বা যখন রোগ সারে না।",
              "নাক দিয়ে শ্বাস নিতে কষ্ট, নাকের পাখা ওঠানামা করে (Fan-like motion)।",
              "ডান ফুসফুস বেশি আক্রান্ত।",
              "পেটে গ্যাস ও কোষ্ঠকাঠিন্য।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "বিকাল ৪টা থেকে রাত ৮টা, ডান দিকে, গরমে।",
              "amelioration": "ঠান্ডা বাতাসে, নড়াচড়ায়, গরম পানীয়তে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, ডান দিকের আক্রমণ, বিকাল ৪টা থেকে রাত ৮টা পর্যন্ত বৃদ্ধি এবং পেটে গ্যাসের সমস্যা লাইকোপোডিয়ামের নির্দেশক।"
          },
          {
            "name": "Antimonium Tart",
            "description": "এই রোগের ক্ষেত্রে Antimonium Tart একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বুকে ঘড়ঘড় শব্দ",
              "শ্বাস নিতে কষ্ট হয়",
              "রোগী দুর্বল হয়ে পড়ে",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায়, গরমে, শুয়ে থাকলে, দুধ পানে।",
              "amelioration": "সোজা হয়ে বসলে, ঢেকুর তুললে, বমি করলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Antimonium Tart ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      },
      {
        "id": "tonsillitis",
        "name": "টনসিল (Tonsillitis)",
        "remedies": [
          {
            "name": "Belladonna",
            "description": "এই রোগের ক্ষেত্রে Belladonna একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "টনসিল লাল, গরম ও ফোলা।",
              "গলায় দপদপ করা ব্যথা।",
              "ঢোক গিলতে কষ্ট, বিশেষ করে পানি।",
              "জ্বর ও মাথাব্যথা।",
              "ডানদিকের টনসিল বেশি আক্রান্ত।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, শব্দে, আলোতে, বিকাল ৩টা বা রাত ১১টার পর।",
              "amelioration": "আধা-শোয়া অবস্থায়, গরম ঘরে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, হঠাৎ আক্রমণ, দপদপ করা ব্যথা, লালচে ভাব এবং উত্তাপ বেলেডোনার প্রধান লক্ষণ। বোরিক একে প্রদাহের প্রাথমিক অবস্থার ওষুধ বলেছেন।"
          },
          {
            "name": "Merc Sol",
            "description": "এই রোগের ক্ষেত্রে Merc Sol একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "মুখে প্রচুর লালা ও দুর্গন্ধ।",
              "জিভ ভেজা ও দাঁতের ছাপযুক্ত।",
              "গলা ব্যথা কানে ছড়িয়ে পড়ে।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "রাতে, বিছানার গরমে, ঘামলে।",
              "amelioration": "বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Merc Sol ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Phytolacca",
            "description": "এই রোগের ক্ষেত্রে Phytolacca একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "টনসিল কালচে লাল।",
              "গলা ব্যথা কানে যায়।",
              "শরীর ব্যথা ও অস্থিরতা।",
              "ডানদিকের টনসিল ফোলা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "আর্দ্র আবহাওয়ায়, গরম পানীয়তে।",
              "amelioration": "শুষ্ক আবহাওয়ায়, বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Phytolacca ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Hepar Sulph",
            "description": "এই রোগের ক্ষেত্রে Hepar Sulph একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "গলায় কাঁটা ফোটার মতো ব্যথা",
              "গলা ব্যথার সাথে পুঁজ হওয়ার সম্ভাবনা",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সামান্য ঠান্ডায়, স্পর্শে, রাতে।",
              "amelioration": "গরমে, মাথা ঢেকে রাখলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Hepar Sulph ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      },
      {
        "id": "sinusitis",
        "name": "সাইনোসাইটিস (Sinusitis)",
        "remedies": [
          {
            "name": "Kali Bich",
            "description": "এই রোগের ক্ষেত্রে Kali Bich একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "নাক দিয়ে আঠালো, সুতার মতো সর্দি বের হয়।",
              "নাকের গোড়ায় ব্যথা ও চাপ।",
              "সকালে হাঁচি ও সর্দি।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সকালে (২টা-৩টা), গরমে।",
              "amelioration": "গরমে, ত্বকে উদ্ভেদ বের হলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Kali Bich ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Silicea",
            "description": "এই রোগের ক্ষেত্রে Silicea একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "দীর্ঘদিনের সাইনাসের সমস্যা।",
              "নাক বন্ধ থাকে।",
              "পুঁজ পড়ার প্রবণতা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ঠান্ডায়, সকালে, অমাবস্যা-পূর্ণিমায়।",
              "amelioration": "গরমে, মাথা ঢেকে রাখলে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, অত্যন্ত শীতকাতর, পুঁজ সৃষ্টিকারী প্রবণতা এবং অমাবস্যা-পূর্ণিমায় বৃদ্ধি সাইলেসিয়ার বৈশিষ্ট্য। এদের পায়ের ঘামে দুর্গন্ধ থাকে।"
          },
          {
            "name": "Pulsatilla",
            "description": "এই রোগের ক্ষেত্রে Pulsatilla একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হলুদ বা সবুজ রঙের ঘন সর্দি।",
              "নাক বন্ধ থাকে, বিশেষ করে রাতে বা গরম ঘরে।",
              "ঘ্রাণশক্তি নষ্ট।",
              "তৃষ্ণাহীনতা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "গরমে, সন্ধ্যায়, চর্বিযুক্ত খাবারে।",
              "amelioration": "খোলা বাতাসে, ঠান্ডা প্রয়োগে, ধীরে ধীরে হাঁটলে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, পরিবর্তনশীল লক্ষণ, তৃষ্ণাহীনতা এবং মুক্ত বাতাসে উপশম পালসাটিলার প্রধান বৈশিষ্ট্য। রোগী নম্র ও ক্রন্দনশীল স্বভাবের হয়।"
          },
          {
            "name": "Kali Bichromicum",
            "description": "এই রোগের ক্ষেত্রে Kali Bichromicum একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "নাকের গোড়ায় চাপবোধ ও ব্যথা",
              "আঠালো ও হলদেটে শ্লেষ্মা",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সকালে (২টা-৩টা), গরমে।",
              "amelioration": "গরমে, ত্বকে উদ্ভেদ বের হলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Kali Bichromicum ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      }
    ]
  },
  {
    "id": "skin",
    "name": "চামড়া (Skin)",
    "diseases": [
      {
        "id": "eczema",
        "name": "একজিমা (Eczema)",
        "remedies": [
          {
            "name": "Graphites",
            "description": "এই রোগের ক্ষেত্রে Graphites একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আক্রান্ত স্থান থেকে মধুর মতো চটচটে রস বের হয়।",
              "চামড়া ফাটা, মোটা ও শক্ত।",
              "কানের পেছনে বা ভাঁজে একজিমা।",
              "অতিরিক্ত চুলকানি, গরমে বাড়ে।",
              "মোটা ও কোষ্ঠকাঠিন্য ধাতের রোগীদের জন্য।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "রাতে, গরমে।",
              "amelioration": "অন্ধকারে, খোলা বাতাসে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Graphites ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Sulphur",
            "description": "এই রোগের ক্ষেত্রে Sulphur একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রচণ্ড চুলকানি, চুলকানোর পর জ্বালা করে।",
              "রাতে বিছানার গরমে চুলকানি বাড়ে।",
              "চামড়া অপরিষ্কার, নোংরা ও রুক্ষ।",
              "গোসল করতে চায় না।",
              "মাথার তালু ও পায়ের তালু গরম থাকে।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "বিশ্রামে, বিছানার গরমে, সকালে (১১টায়)।",
              "amelioration": "শুষ্ক ও উষ্ণ আবহাওয়ায়, ডান পাশে শুলে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, সালফার হলো অ্যান্টি-সোরিক ওষুধের রাজা। রোগীর স্নান করতে অনীহা, অপরিষ্কার থাকতে পছন্দ এবং সকাল ১১টায় পেটে খালি বোধ থাকে।"
          },
          {
            "name": "Rhus Tox",
            "description": "এই রোগের ক্ষেত্রে Rhus Tox একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ছোট ছোট ফুসকুড়ি, অত্যন্ত চুলকানি।",
              "আক্রান্ত স্থান লাল ও ফোলা।",
              "চুলকানোর পর অস্থিরতা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "প্রথম নড়াচড়ায়, আর্দ্র ঠান্ডায়, বিশ্রামে।",
              "amelioration": "ক্রমাগত নড়াচড়ায়, গরমে, শুষ্ক আবহাওয়ায়।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের মতে, প্রথম নড়াচড়ায় বৃদ্ধি কিন্তু ক্রমাগত নড়াচড়ায় উপশম রাস টক্সের প্রধান লক্ষণ। এটি স্যাঁতস্যাঁতে আবহাওয়ায় বৃদ্ধি পায়।"
          },
          {
            "name": "Mezereum",
            "description": "এই রোগের ক্ষেত্রে Mezereum একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "মাথায় বা মুখে একজিমা, পুরু মামড়ি পড়ে।",
              "মামড়ির নিচে পুঁজ জমে।",
              "চুলকানি ও জ্বালা, রাতে বাড়ে।",
              "ঠান্ডা বাতাসে বা ধুলে বাড়ে।",
              "চামড়া খুব স্পর্শকাতর।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "রাতে, বিছানার গরমে, স্পর্শে।",
              "amelioration": "খোলা বাতাসে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Mezereum ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Petroleum",
            "description": "এই রোগের ক্ষেত্রে Petroleum একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "শীতকালে একজিমা বাড়ে বা দেখা দেয়।",
              "চামড়া ফেটে যায় এবং রক্ত বের হয়।",
              "হাত ও পায়ের আঙুলের ডগায় ফাটা।",
              "চামড়া খসখসে ও শুকনো।",
              "গাড়িতে চড়লে বমি ভাব (অন্য লক্ষণের সাথে)।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "গাড়িতে চড়লে, শীতে।",
              "amelioration": "গরমে, শুষ্ক আবহাওয়ায়।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Petroleum ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          }
        ]
      },
      {
        "id": "psoriasis",
        "name": "সোরিয়াসিস (Psoriasis)",
        "remedies": [
          {
            "name": "Arsenic Album",
            "description": "এই রোগের ক্ষেত্রে Arsenic Album একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "চামড়া শুকনো, খসখসে ও আঁশযুক্ত।",
              "অস্থিরতা ও দুশ্চিন্তা।",
              "পিপাসা অল্প কিন্তু ঘন ঘন।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "মধ্যরাতে (১২টা-২টা), ঠান্ডায়, ঠান্ডা খাবারে।",
              "amelioration": "গরমে, গরম পানীয়তে, মাথা উঁচু করে শুলে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, মৃত্যুভয়, অস্থিরতা, জ্বালাকর ব্যথা এবং মধ্যরাতে বৃদ্ধি আর্সেনিকের প্রধান লক্ষণ। রোগী অত্যন্ত খুঁতখুঁতে ও পরিচ্ছন্নতা পছন্দ করে।"
          },
          {
            "name": "Graphites",
            "description": "এই রোগের ক্ষেত্রে Graphites একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "চামড়া মোটা, শক্ত ও ফাটা।",
              "আক্রান্ত স্থান থেকে চটচটে রস বের হয়।",
              "কোষ্ঠকাঠিন্য থাকে।",
              "মোটা ও শীতকাতর রোগী।",
              "ঋতুস্রাবের সময় সমস্যা বাড়ে (মহিলাদের)।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "রাতে, গরমে।",
              "amelioration": "অন্ধকারে, খোলা বাতাসে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Graphites ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Sepia",
            "description": "এই রোগের ক্ষেত্রে Sepia একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "গোলাকার বা চাকা চাকা দাগ (Ringworm-like)।",
              "চামড়া বাদামী বা হলুদ রঙের।",
              "বিষণ্ণতা ও উদাসীনতা।",
              "মহিলাদের জরায়ুর সমস্যার সাথে সোরিয়াসিস।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সকালে ও সন্ধ্যায়, ঠান্ডায়, পরিশ্রমে।",
              "amelioration": "ব্যায়াম করলে, গরমে, দ্রুত হাঁটলে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, জরায়ুর সমস্যা, উদাসীনতা এবং তলপেটে নিচের দিকে ঠেলা মারা ব্যথা সিপিয়ার প্রধান লক্ষণ। রোগী একা থাকতে পছন্দ করে।"
          },
          {
            "name": "Arsenicum Album",
            "description": "এই রোগের ক্ষেত্রে Arsenicum Album একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ত্বক শুষ্ক ও খসখসে",
              "তীব্র চুলকানি ও জ্বালাপোড়া",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "মধ্যরাতে (১২টা-২টা), ঠান্ডায়, ঠান্ডা খাবারে।",
              "amelioration": "গরমে, গরম পানীয়তে, মাথা উঁচু করে শুলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Arsenicum Album ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      },
      {
        "id": "ringworm",
        "name": "দাদ (Ringworm)",
        "remedies": [
          {
            "name": "Sepia",
            "description": "এই রোগের ক্ষেত্রে Sepia একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "শরীরের ভাঁজে বা সন্ধিস্থলে দাদ।",
              "চুলকানি ও জ্বালা।",
              "বসন্তকালে প্রাদুর্ভাব।",
              "বাদামী রঙের দাগ।",
              "ঘামাচির মতো ছোট ছোট দানা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সকালে ও সন্ধ্যায়, ঠান্ডায়, পরিশ্রমে।",
              "amelioration": "ব্যায়াম করলে, গরমে, দ্রুত হাঁটলে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, জরায়ুর সমস্যা, উদাসীনতা এবং তলপেটে নিচের দিকে ঠেলা মারা ব্যথা সিপিয়ার প্রধান লক্ষণ। রোগী একা থাকতে পছন্দ করে।"
          },
          {
            "name": "Tellurium",
            "description": "এই রোগের ক্ষেত্রে Tellurium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "সারা শরীরে দাদ, বিশেষ করে পিঠে ও মুখে।",
              "লাল রঙের চাকা চাকা দাগ।",
              "মাছের আঁশটে গন্ধ।",
              "চুলকানি ও জ্বালা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "বিশ্রামে, রাতে, ঠান্ডা আবহাওয়ায়, স্পর্শে।",
              "amelioration": "খোলা বাতাসে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Tellurium ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Bacillinum",
            "description": "এই রোগের ক্ষেত্রে Bacillinum একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বংশগত বা দীর্ঘদিনের দাদ।",
              "বারবার ফিরে আসে।",
              "শুকনো ও খসখসে চামড়া।",
              "রাতের বেলা দাঁত কিড়মিড় করা।",
              "ঠান্ডা লাগার প্রবণতা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "রাতে, ভোরে, ঠান্ডা বাতাসে।",
              "amelioration": "গরমে, নড়াচড়ায়।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Bacillinum ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          },
          {
            "name": "Belladonna",
            "description": "এই রোগের ক্ষেত্রে Belladonna একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হঠাৎ করে রোগের আক্রমণ।",
              "প্রচণ্ড জ্বর ও মাথাব্যথা।",
              "মুখমণ্ডল লাল হয়ে যাওয়া।",
              "গলা ব্যথা ও গিলতে কষ্ট।"
            ],
            "mentalSymptoms": [
              "আলো ও শব্দে বিরক্তি।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, শব্দে, আলোতে, বিকাল ৩টা বা রাত ১১টার পর।",
              "amelioration": "আধা-শোয়া অবস্থায়, গরম ঘরে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, হঠাৎ আক্রমণ, দপদপ করা ব্যথা, লালচে ভাব এবং উত্তাপ বেলেডোনার প্রধান লক্ষণ। বোরিক একে প্রদাহের প্রাথমিক অবস্থার ওষুধ বলেছেন।"
          }
        ]
      },
      {
        "id": "acne",
        "name": "ব্রণ (Acne)",
        "remedies": [
          {
            "name": "Berberis Aquifolium",
            "description": "এই রোগের ক্ষেত্রে Berberis Aquifolium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "মুখে ছোট ছোট ফুসকুড়ি বা ব্রণ।",
              "চামড়া খসখসে ও অপরিষ্কার।",
              "ব্রণের দাগ দূর করতে কার্যকরী।",
              "মাদার টিংচার হিসেবে ব্যবহার্য।",
              "পেটের সমস্যার সাথে ব্রণ।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "নড়াচড়ায়।",
              "amelioration": "বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Berberis Aquifolium ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Pulsatilla",
            "description": "এই রোগের ক্ষেত্রে Pulsatilla একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বয়ঃসন্ধিকালে মেয়েদের ব্রণ।",
              "চর্বিযুক্ত খাবার খেলে বাড়ে।",
              "মাসিক অনিয়মিত হলে।",
              "পানি পিপাসা কম।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "গরমে, সন্ধ্যায়, চর্বিযুক্ত খাবারে।",
              "amelioration": "খোলা বাতাসে, ঠান্ডা প্রয়োগে, ধীরে ধীরে হাঁটলে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, পরিবর্তনশীল লক্ষণ, তৃষ্ণাহীনতা এবং মুক্ত বাতাসে উপশম পালসাটিলার প্রধান বৈশিষ্ট্য। রোগী নম্র ও ক্রন্দনশীল স্বভাবের হয়।"
          },
          {
            "name": "Kali Brom",
            "description": "এই রোগের ক্ষেত্রে Kali Brom একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "শক্ত ও পুঁজযুক্ত ব্রণ।",
              "ব্রণ থেকে গর্ত হয়ে যায়।",
              "স্মৃতিশক্তি দুর্বল।",
              "হাত-পা অনবরত নাড়াচাড়া করা।"
            ],
            "mentalSymptoms": [
              "মুখমন্ডল, বুক ও কাঁধে ব্রণ।"
            ],
            "modalities": {
              "aggravation": "মানসিক পরিশ্রমে, চিন্তায়, বয়ঃসন্ধিকালে।",
              "amelioration": "শারীরিক পরিশ্রমে, ব্যস্ত থাকলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Kali Brom ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Calcarea Sulph",
            "description": "এই রোগের ক্ষেত্রে Calcarea Sulph একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ব্রণে পুঁজ থাকে",
              "ব্রণ সহজে শুকাতে চায় না",
              "হলদেটে পুঁজ বের হয়",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "গরমে, বদ্ধ ঘরে, খসড়া বাতাসে।",
              "amelioration": "খোলা বাতাসে, স্নান করলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Calcarea Sulph ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Hepar Sulph",
            "description": "এই রোগের ক্ষেত্রে Hepar Sulph একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ব্রণে তীব্র ব্যথা",
              "স্পর্শ করলে ব্যথা লাগে",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সামান্য ঠান্ডায়, স্পর্শে, রাতে।",
              "amelioration": "গরমে, মাথা ঢেকে রাখলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Hepar Sulph ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          }
        ]
      },
      {
        "id": "warts",
        "name": "আঁচিল (Warts)",
        "remedies": [
          {
            "name": "Thuja Occ",
            "description": "এই রোগের ক্ষেত্রে Thuja Occ একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ফুলকপির মতো দেখতে আঁচিল।",
              "শরীরের যেকোনো স্থানে হতে পারে।",
              "আঁচিল থেকে রক্তপাত হলে।",
              "টিকা নেওয়ার পর আঁচিল।",
              "চামড়া তেলতেলে ও ঘামযুক্ত।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "আর্দ্র আবহাওয়ায়, সকালে (৩টা)।",
              "amelioration": "মাথা পিছনের দিকে বাঁকালে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Thuja Occ ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Causticum",
            "description": "এই রোগের ক্ষেত্রে Causticum একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঙুলের ডগায় বা নখের পাশে আঁচিল।",
              "বড়, চ্যাপ্টা ও শক্ত আঁচিল।",
              "আঁচিলে ব্যথা ও জ্বালা।",
              "পুরানো পোড়া দাগের ওপর আঁচিল।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "শুষ্ক ও ঠান্ডা বাতাসে।",
              "amelioration": "আর্দ্র আবহাওয়ায়, গরম পানীয়তে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Causticum ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Nitric Acid",
            "description": "এই রোগের ক্ষেত্রে Nitric Acid একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "সোনালী বা হলুদ রঙের আঁচিল।",
              "আঁচিল থেকে সহজে রক্তপাত হয়।",
              "খোঁচা লাগার মতো ব্যথা।",
              "ঠোঁট বা যৌনাঙ্গে আঁচিল।",
              "প্রস্রাবে কড়া গন্ধ।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায় ও রাতে, স্পর্শে।",
              "amelioration": "গাড়িতে চড়লে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Nitric Acid ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Antimonium Crudum",
            "description": "এই রোগের ক্ষেত্রে Antimonium Crudum একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "পায়ের তলায় শক্ত আঁচিল",
              "হাঁটতে গেলে ব্যথা লাগে",
              "আঁচিলের উপরিভাগ অমসৃণ",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "অতিরিক্ত গরমে, ঠান্ডা জলে স্নান করলে, রোদে, অতিরিক্ত খাওয়ার পর।",
              "amelioration": "খোলা বাতাসে, বিশ্রামে, গরম জলে স্নানে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Antimonium Crudum ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      }
    ]
  },
  {
    "id": "mind",
    "name": "মন (Mind)",
    "diseases": [
      {
        "id": "anxiety",
        "name": "দুশ্চিন্তা ও ভয় (Anxiety)",
        "remedies": [
          {
            "name": "Aconite Nap",
            "description": "এই রোগের ক্ষেত্রে Aconite Nap একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হঠাৎ তীব্র ভয়, মৃত্যুর ভয়।",
              "ভিড়ের মধ্যে বা রাস্তা পার হতে ভয়।",
              "অস্থিরতা, এক জায়গায় স্থির থাকতে পারে না।",
              "বুক ধড়ফড় করে।",
              "কোনো নির্দিষ্ট ঘটনার পর ভয়।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায় ও রাতে, শুষ্ক ঠান্ডা বাতাসে, গরম ঘরে।",
              "amelioration": "খোলা বাতাসে, বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের মতে, একোনাইট হঠাৎ ও তীব্র আক্রমণের প্রধান ওষুধ। মৃত্যুভয়, অস্থিরতা এবং প্রবল তৃষ্ণা এর প্রধান নির্দেশক লক্ষণ।"
          },
          {
            "name": "Argentum Nit",
            "description": "এই রোগের ক্ষেত্রে Argentum Nit একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "পরীক্ষা বা ইন্টারভিউয়ের আগে ভয় (Anticipatory anxiety)।",
              "উঁচু স্থান থেকে পড়ার ভয়।",
              "মিষ্টি খাওয়ার প্রবল ইচ্ছা।",
              "ভয়ে বা টেনশনে পায়খানার বেগ হয়।"
            ],
            "mentalSymptoms": [
              "সময় খুব ধীরে যাচ্ছে মনে হয়।"
            ],
            "modalities": {
              "aggravation": "গরমে, রাতে, মিষ্টি খেলে।",
              "amelioration": "ঠান্ডা বাতাসে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Argentum Nit ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arsenic Album",
            "description": "এই রোগের ক্ষেত্রে Arsenic Album একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "অত্যন্ত খুতখুতে স্বভাবের (Fastidious)।"
            ],
            "mentalSymptoms": [
              "মৃত্যুভয়, মনে করে ওষুধ খেয়ে লাভ নেই।",
              "একা থাকতে ভয় পায়।",
              "আত্মহত্যার চিন্তা কিন্তু মৃত্যুর ভয়।"
            ],
            "modalities": {
              "aggravation": "মধ্যরাতে (১২টা-২টা), ঠান্ডায়, ঠান্ডা খাবারে।",
              "amelioration": "গরমে, গরম পানীয়তে, মাথা উঁচু করে শুলে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, মৃত্যুভয়, অস্থিরতা, জ্বালাকর ব্যথা এবং মধ্যরাতে বৃদ্ধি আর্সেনিকের প্রধান লক্ষণ। রোগী অত্যন্ত খুঁতখুঁতে ও পরিচ্ছন্নতা পছন্দ করে।"
          },
          {
            "name": "Gelsemium",
            "description": "এই রোগের ক্ষেত্রে Gelsemium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ভয়ে হাত-পা কাঁপে ও অবশ হয়ে আসে।",
              "জনসমক্ষে কথা বলতে ভয় (Stage fright)।",
              "দুঃসংবাদ শোনার পর অসুস্থতা।",
              "ভয়ে পায়খানা বা প্রস্রাব হয়ে যায়।",
              "তন্দ্রাচ্ছন্ন ভাব ও নিস্তেজতা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "আর্দ্র আবহাওয়ায়, মানসিক উত্তেজনায়, সকাল ১০টায়।",
              "amelioration": "প্রচুর প্রস্রাবের পর, খোলা বাতাসে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, দুর্বলতা, তন্দ্রাচ্ছন্নতা, তৃষ্ণাহীনতা এবং কাঁপুনি জেলসেমিয়ামের প্রধান লক্ষণ। এটি স্নায়বিক দুর্বলতা ও জ্বরের দারুণ ওষুধ।"
          },
          {
            "name": "Lycopodium",
            "description": "এই রোগের ক্ষেত্রে Lycopodium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আত্মবিশ্বাসের অভাব, কিন্তু বাইরে সাহস দেখায়।",
              "নতুন দায়িত্ব নিতে ভয় পায়।",
              "বিকেলে (৪টা-৮টা) ভয় বা দুশ্চিন্তা বাড়ে।",
              "স্মৃতিশক্তি দুর্বল, নাম ভুলে যায়।",
              "একা থাকতে ভয় পায় না, কিন্তু পাশের ঘরে লোক চায়।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "বিকাল ৪টা থেকে রাত ৮টা, ডান দিকে, গরমে।",
              "amelioration": "ঠান্ডা বাতাসে, নড়াচড়ায়, গরম পানীয়তে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, ডান দিকের আক্রমণ, বিকাল ৪টা থেকে রাত ৮টা পর্যন্ত বৃদ্ধি এবং পেটে গ্যাসের সমস্যা লাইকোপোডিয়ামের নির্দেশক।"
          }
        ]
      },
      {
        "id": "depression",
        "name": "বিষণ্ণতা (Depression)",
        "remedies": [
          {
            "name": "Aurum Met",
            "description": "এই রোগের ক্ষেত্রে Aurum Met একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "জীবনের প্রতি বিতৃষ্ণা, আত্মহত্যার ইচ্ছা।",
              "উচ্চ রক্তচাপ ও হৃদরোগের সমস্যা।",
              "গান-বাজনা ভালো লাগে না।"
            ],
            "mentalSymptoms": [
              "নিজেকে অপরাধী মনে করে।"
            ],
            "modalities": {
              "aggravation": "ঠান্ডায়, শীতে, মানসিক পরিশ্রমে।",
              "amelioration": "গরমে, খোলা বাতাসে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Aurum Met ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Ignatia",
            "description": "এই রোগের ক্ষেত্রে Ignatia একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রিয়জনের মৃত্যু বা বিচ্ছেদের পর বিষণ্ণতা।",
              "দীর্ঘশ্বাস ফেলে (Sighing)।",
              "গলায় দলা আটকে থাকার অনুভূতি (Globus hystericus)।"
            ],
            "mentalSymptoms": [
              "মেজাজ পরিবর্তনশীল, এই হাসে এই কাঁদে।"
            ],
            "modalities": {
              "aggravation": "সকালে, কফিতে, তামাকের ধোঁয়ায়, মানসিক শোকে।",
              "amelioration": "খাওয়ার সময়, চাপ দিলে, দীর্ঘশ্বাস ফেললে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, শোক, দুঃখ বা মানসিক আঘাতের ফলে সৃষ্ট উপসর্গে ইগ্নেশিয়া অদ্বিতীয়। এদের লক্ষণগুলো পরস্পরবিরোধী ও পরিবর্তনশীল হয়।"
          },
          {
            "name": "Natrum Mur",
            "description": "এই রোগের ক্ষেত্রে Natrum Mur একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "লবণ খাওয়ার ইচ্ছা।",
              "রোদে মাথাব্যথা।",
              "একান্ত নির্জনে থাকতে পছন্দ করে।"
            ],
            "mentalSymptoms": [
              "চাপা দুঃখ, কারো সামনে কাঁদতে চায় না।"
            ],
            "modalities": {
              "aggravation": "সকাল ১০টা-১১টায়, রোদে, সান্ত্বনায়।",
              "amelioration": "খোলা বাতাসে, ঠান্ডা স্নানে, ডান পাশে শুলে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, অতিরিক্ত লবণ খাওয়ার ইচ্ছা, রোদে মাথাব্যথা এবং সান্ত্বনায় বৃদ্ধি নেট্রাম মিউরের প্রধান লক্ষণ। রোগী অন্তর্মুখী স্বভাবের হয়।"
          },
          {
            "name": "Aurum Metallicum",
            "description": "এই রোগের ক্ষেত্রে Aurum Metallicum একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "তীব্র বিষণ্ণতা ও আত্মহত্যার ইচ্ছা",
              "রাতে ঘুম হয় না",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "নিজেকে অপরাধী মনে হয়"
            ],
            "modalities": {
              "aggravation": "ঠান্ডায়, শীতে, মানসিক পরিশ্রমে।",
              "amelioration": "গরমে, খোলা বাতাসে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Aurum Metallicum ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      },
      {
        "id": "insomnia",
        "name": "অনিদ্রা (Insomnia)",
        "remedies": [
          {
            "name": "Coffea Cruda",
            "description": "এই রোগের ক্ষেত্রে Coffea Cruda একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "মাথায় নানা চিন্তা ও আনন্দের কারণে ঘুম আসে না।",
              "ইন্দ্রিয় খুব সজাগ, সামান্য শব্দে ঘুম ভাঙ্গে।",
              "কফি পানের অপব্যবহার।",
              "দাঁত ব্যথা বা স্নায়বিক ব্যথা।"
            ],
            "mentalSymptoms": [
              "মানসিক ও শারীরিক অস্থিরতা।"
            ],
            "modalities": {
              "aggravation": "অতিরিক্ত আনন্দে, শব্দে, রাতে।",
              "amelioration": "ঘুমালে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Coffea Cruda ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Nux Vomica",
            "description": "এই রোগের ক্ষেত্রে Nux Vomica একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "রাত ৩টার পর ঘুম ভেঙ্গে যায় আর আসে না।",
              "সকালে ঘুম থেকে উঠলে ক্লান্তি।",
              "দুপুরের খাওয়ার পর ঘুম পায়।"
            ],
            "mentalSymptoms": [
              "অতিরিক্ত মানসিক পরিশ্রম ও নেশা।",
              "খিটখিটে মেজাজ।"
            ],
            "modalities": {
              "aggravation": "সকালে, ঠান্ডায়, মানসিক পরিশ্রমে, খাওয়ার পর।",
              "amelioration": "সন্ধ্যায়, বিশ্রামে, গরম প্রয়োগে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, অতিরিক্ত মানসিক পরিশ্রম, অনিয়মিত জীবনযাপন এবং উত্তেজক পদার্থের কুফল দূর করতে এটি অদ্বিতীয়। রোগী অত্যন্ত রাগী ও শীতকাতর হয়।"
          },
          {
            "name": "Passiflora",
            "description": "এই রোগের ক্ষেত্রে Passiflora একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বয়স্কদের বা শিশুদের অনিদ্রা।",
              "খিঁচুনি বা ধনুষ্টংকারের পর অনিদ্রা।",
              "মাদার টিংচার হিসেবে বেশি কার্যকরী।",
              "ক্লান্তি ও দুর্বলতা।"
            ],
            "mentalSymptoms": [
              "মানসিক উত্তেজনা ও দুশ্চিন্তা।"
            ],
            "modalities": {
              "aggravation": "রাতে, মানসিক পরিশ্রমে।",
              "amelioration": "বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Passiflora ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          },
          {
            "name": "Belladonna",
            "description": "এই রোগের ক্ষেত্রে Belladonna একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হঠাৎ করে রোগের আক্রমণ।",
              "প্রচণ্ড জ্বর ও মাথাব্যথা।",
              "মুখমণ্ডল লাল হয়ে যাওয়া।",
              "গলা ব্যথা ও গিলতে কষ্ট।"
            ],
            "mentalSymptoms": [
              "আলো ও শব্দে বিরক্তি।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, শব্দে, আলোতে, বিকাল ৩টা বা রাত ১১টার পর।",
              "amelioration": "আধা-শোয়া অবস্থায়, গরম ঘরে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, হঠাৎ আক্রমণ, দপদপ করা ব্যথা, লালচে ভাব এবং উত্তাপ বেলেডোনার প্রধান লক্ষণ। বোরিক একে প্রদাহের প্রাথমিক অবস্থার ওষুধ বলেছেন।"
          }
        ]
      },
      {
        "id": "anger",
        "name": "রাগ (Anger)",
        "remedies": [
          {
            "name": "Chamomilla",
            "description": "এই রোগের ক্ষেত্রে Chamomilla একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "কোলে চড়লে শান্ত থাকে।",
              "ব্যথা সহ্য করতে পারে না।"
            ],
            "mentalSymptoms": [
              "অত্যন্ত রাগী ও খিটখিটে, বিশেষ করে শিশুদের।",
              "যা চায় তাই দিতে হয়, না দিলে কান্না।",
              "রাগের সময় এক গাল লাল, অন্য গাল ফ্যাকাশে।"
            ],
            "modalities": {
              "aggravation": "গরমে, রাগে, রাতে, কফিতে।",
              "amelioration": "কোলে নিয়ে হাঁটলে, গরম প্রয়োগে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, অত্যন্ত রাগী, খিটখিটে এবং ব্যথায় অসহিষ্ণু রোগীদের জন্য এটি উপযোগী। কোলে নিলে বা ঘুরলে এরা শান্ত হয়।"
          },
          {
            "name": "Staphysagria",
            "description": "এই রোগের ক্ষেত্রে Staphysagria একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "অপমানিত হওয়ার পর অসুস্থতা।",
              "জিনিসপত্র ছুঁড়ে মারে।",
              "যৌন চিন্তা বেশি।",
              "চোখের পাতায় অঞ্জনী হওয়ার প্রবণতা।"
            ],
            "mentalSymptoms": [
              "রাগ চেপে রাখে (Suppressed anger)।"
            ],
            "modalities": {
              "aggravation": "রাগে, অপমানে, স্পর্শে।",
              "amelioration": "বিশ্রামে, রাতে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Staphysagria ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Nux Vomica",
            "description": "এই রোগের ক্ষেত্রে Nux Vomica একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রতিবাদ সহ্য করতে পারে না।",
              "অন্যের ভুল ধরে।",
              "কাজকর্মে খুব ধীরগতি পছন্দ করে না।",
              "হিংসুটে ও ঝগড়াটে।"
            ],
            "mentalSymptoms": [
              "শব্দ ও আলোতে বিরক্তি।"
            ],
            "modalities": {
              "aggravation": "সকালে, ঠান্ডায়, মানসিক পরিশ্রমে, খাওয়ার পর।",
              "amelioration": "সন্ধ্যায়, বিশ্রামে, গরম প্রয়োগে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, অতিরিক্ত মানসিক পরিশ্রম, অনিয়মিত জীবনযাপন এবং উত্তেজক পদার্থের কুফল দূর করতে এটি অদ্বিতীয়। রোগী অত্যন্ত রাগী ও শীতকাতর হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          },
          {
            "name": "Belladonna",
            "description": "এই রোগের ক্ষেত্রে Belladonna একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হঠাৎ করে রোগের আক্রমণ।",
              "প্রচণ্ড জ্বর ও মাথাব্যথা।",
              "মুখমণ্ডল লাল হয়ে যাওয়া।",
              "গলা ব্যথা ও গিলতে কষ্ট।"
            ],
            "mentalSymptoms": [
              "আলো ও শব্দে বিরক্তি।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, শব্দে, আলোতে, বিকাল ৩টা বা রাত ১১টার পর।",
              "amelioration": "আধা-শোয়া অবস্থায়, গরম ঘরে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, হঠাৎ আক্রমণ, দপদপ করা ব্যথা, লালচে ভাব এবং উত্তাপ বেলেডোনার প্রধান লক্ষণ। বোরিক একে প্রদাহের প্রাথমিক অবস্থার ওষুধ বলেছেন।"
          }
        ]
      },
      {
        "id": "memory_loss",
        "name": "স্মৃতিশক্তি হ্রাস (Memory Loss)",
        "remedies": [
          {
            "name": "Anacardium",
            "description": "এই রোগের ক্ষেত্রে Anacardium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আত্মবিশ্বাসের অভাব।",
              "কাউকে বিশ্বাস করতে পারে না।",
              "খালি পেটে মাথাব্যথা।"
            ],
            "mentalSymptoms": [
              "হঠাৎ করে সব ভুলে যায়, এমনকি নিজের নামও।",
              "পরীক্ষার আগে ভয় ও স্মৃতিভ্রম।"
            ],
            "modalities": {
              "aggravation": "খালি পেটে, মানসিক পরিশ্রমে।",
              "amelioration": "খাওয়ার সময় ও পরে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Anacardium ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Baryta Carb",
            "description": "এই রোগের ক্ষেত্রে Baryta Carb একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "শিশুদের ও বয়স্কদের স্মৃতিশক্তি দুর্বল।",
              "বুদ্ধি কম ও বোকা প্রকৃতির।",
              "ঠান্ডা লাগার প্রবণতা।",
              "গ্ল্যান্ড ফোলার প্রবণতা।"
            ],
            "mentalSymptoms": [
              "অপরিচিত লোক দেখলে ভয় পায়।"
            ],
            "modalities": {
              "aggravation": "ঠান্ডায়, পা ধুলে।",
              "amelioration": "একা থাকলে, গরম পোশাকে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Baryta Carb ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Kali Phos",
            "description": "এই রোগের ক্ষেত্রে Kali Phos একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "স্নায়বিক দুর্বলতার কারণে স্মৃতিশক্তি কম।",
              "বিষণ্ণতা ও ক্লান্তি।",
              "ছাত্র-ছাত্রীদের জন্য ভালো টনিক।",
              "ক্ষুধা লাগে কিন্তু খেতে পারে না।"
            ],
            "mentalSymptoms": [
              "মানসিক পরিশ্রমে মাথাব্যথা।"
            ],
            "modalities": {
              "aggravation": "মানসিক ও শারীরিক পরিশ্রমে, ঠান্ডায়, ভোরে।",
              "amelioration": "গরমে, বিশ্রামে, খাওয়ার পর।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Kali Phos ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Lycopodium",
            "description": "এই রোগের ক্ষেত্রে Lycopodium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "লেখার সময় বানান ভুল করে",
              "আত্মবিশ্বাসের অভাব",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "কথা বলার সময় সঠিক শব্দ মনে পড়ে না"
            ],
            "modalities": {
              "aggravation": "বিকাল ৪টা থেকে রাত ৮টা, ডান দিকে, গরমে।",
              "amelioration": "ঠান্ডা বাতাসে, নড়াচড়ায়, গরম পানীয়তে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, ডান দিকের আক্রমণ, বিকাল ৪টা থেকে রাত ৮টা পর্যন্ত বৃদ্ধি এবং পেটে গ্যাসের সমস্যা লাইকোপোডিয়ামের নির্দেশক।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      }
    ]
  },
  {
    "id": "chest",
    "name": "বুক (Chest)",
    "diseases": [
      {
        "id": "asthma",
        "name": "হাঁপানি (Asthma)",
        "remedies": [
          {
            "name": "Arsenic Album",
            "description": "এই রোগের ক্ষেত্রে Arsenic Album একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "মাঝরাতে শ্বাসকষ্ট বাড়ে, রোগী শুতে পারে না।",
              "বসে থাকলে বা সামনের দিকে ঝুঁকলে আরাম।",
              "অস্থিরতা ও মৃত্যুভয় থাকে।"
            ],
            "mentalSymptoms": [
              "অস্থিরতা ও মৃত্যুভয় থাকে।"
            ],
            "modalities": {
              "aggravation": "মধ্যরাতে (১২টা-২টা), ঠান্ডায়, ঠান্ডা খাবারে।",
              "amelioration": "গরমে, গরম পানীয়তে, মাথা উঁচু করে শুলে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, মৃত্যুভয়, অস্থিরতা, জ্বালাকর ব্যথা এবং মধ্যরাতে বৃদ্ধি আর্সেনিকের প্রধান লক্ষণ। রোগী অত্যন্ত খুঁতখুঁতে ও পরিচ্ছন্নতা পছন্দ করে।"
          },
          {
            "name": "Ipecac",
            "description": "এই রোগের ক্ষেত্রে Ipecac একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বুকের ভেতর কফ জমে সাঁই সাঁই শব্দ হয়।",
              "শ্বাসকষ্টের সাথে বমি বমি ভাব।",
              "কাশি দিলে কফ উঠতে চায় না।",
              "জিভ পরিষ্কার থাকে।",
              "দম বন্ধ হয়ে আসার উপক্রম।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "আর্দ্র গরমে, অতিরিক্ত খাওয়ার পর।",
              "amelioration": "খোলা বাতাসে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Ipecac ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Natrum Sulph",
            "description": "এই রোগের ক্ষেত্রে Natrum Sulph একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "কাশির সাথে সবুজ রঙের কফ ওঠে।",
              "বিষণ্ণতা ও আত্মহত্যার ইচ্ছা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ভোরবেলা (৪টা-৫টা) শ্বাসকষ্ট বাড়ে।",
              "amelioration": "বুক চেপে ধরলে আরাম বোধ হয়।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Natrum Sulph ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Blatta Orientalis",
            "description": "এই রোগের ক্ষেত্রে Blatta Orientalis একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ধুলোবালি বা স্যাঁতসেঁতে আবহাওয়ায় হাঁপানি",
              "কাশির সাথে প্রচুর কফ",
              "স্থূলকায় রোগীদের জন্য বেশি উপযোগী",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "রাতে, স্যাঁতসেঁতে আবহাওয়ায়, ধুলোবালিতে।",
              "amelioration": "কফ উঠলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Blatta Orientalis ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      },
      {
        "id": "palpitation",
        "name": "বুক ধড়ফড় (Palpitation)",
        "remedies": [
          {
            "name": "Aconite Nap",
            "description": "এই রোগের ক্ষেত্রে Aconite Nap একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "দ্রুত ও কঠিন নাড়ি।",
              "বুকে চাপ বোধ ও শ্বাসকষ্ট।"
            ],
            "mentalSymptoms": [
              "হঠাৎ ভয় বা আতঙ্কের কারণে বুক ধড়ফড়।",
              "মৃত্যুভয় ও অস্থিরতা।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায় ও রাতে, শুষ্ক ঠান্ডা বাতাসে, গরম ঘরে।",
              "amelioration": "খোলা বাতাসে, বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের মতে, একোনাইট হঠাৎ ও তীব্র আক্রমণের প্রধান ওষুধ। মৃত্যুভয়, অস্থিরতা এবং প্রবল তৃষ্ণা এর প্রধান নির্দেশক লক্ষণ।"
          },
          {
            "name": "Digitalis",
            "description": "এই রোগের ক্ষেত্রে Digitalis একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "নাড়ি অত্যন্ত ধীর ও অনিয়মিত।",
              "নীলচে ত্বক ও শ্বাসকষ্ট।",
              "হঠাৎ দুর্বলতা ও মূর্ছা যাওয়া।"
            ],
            "mentalSymptoms": [
              "মনে হয় হৃদপিণ্ড বন্ধ হয়ে যাবে।"
            ],
            "modalities": {
              "aggravation": "উঠে বসলে, খাওয়ার পর।",
              "amelioration": "শুয়ে থাকলে, খালি পেটে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Digitalis ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Aconite",
            "description": "এই রোগের ক্ষেত্রে Aconite একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হঠাৎ করে শুরু হয়",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "ভয় বা আতঙ্কের কারণে বুক ধড়ফড়",
              "মৃত্যুভয় থাকে"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায় ও রাতে, শুষ্ক ঠান্ডা বাতাসে, গরম ঘরে।",
              "amelioration": "খোলা বাতাসে, বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের মতে, একোনাইট হঠাৎ ও তীব্র আক্রমণের প্রধান ওষুধ। মৃত্যুভয়, অস্থিরতা এবং প্রবল তৃষ্ণা এর প্রধান নির্দেশক লক্ষণ।"
          },
          {
            "name": "Spigelia",
            "description": "এই রোগের ক্ষেত্রে Spigelia একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "তীব্র বুক ধড়ফড়, বাইরে থেকে দেখা যায়",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, সূর্যালোকের সাথে বাড়ে।",
              "amelioration": "ডান পাশে শুলে, মাথা উঁচু রাখলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Spigelia ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      },
      {
        "id": "chest_pain",
        "name": "বুক ব্যথা (Chest Pain)",
        "remedies": [
          {
            "name": "Bryonia Alba",
            "description": "এই রোগের ক্ষেত্রে Bryonia Alba একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বুকে সুঁই ফোটানোর মতো ব্যথা।",
              "শুকনো কাশি ও পিপাসা।",
              "কোষ্ঠকাঠিন্য।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সামান্য নড়াচড়ায়, গরমে, সকালে।",
              "amelioration": "সম্পূর্ণ বিশ্রামে, আক্রান্ত পাশে শুলে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, ব্রায়োনিয়ার প্রধান লক্ষণ হলো নড়াচড়ায় বৃদ্ধি এবং বিশ্রামে উপশম। রোগীর প্রচুর তৃষ্ণা থাকে এবং শ্লৈষ্মিক ঝিল্লি শুষ্ক থাকে।"
          },
          {
            "name": "Ranunculus Bulb",
            "description": "এই রোগের ক্ষেত্রে Ranunculus Bulb একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বুকের পেশিতে ব্যথা।",
              "শ্বাস নিতে কষ্ট।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ঠান্ডা বাতাসে বৃদ্ধি।",
              "amelioration": "লক্ষণ অনুযায়ী পরিবর্তনশীল।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Ranunculus Bulb ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Bryonia",
            "description": "এই রোগের ক্ষেত্রে Bryonia একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বুকে সুঁচ ফোটার মতো ব্যথা",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সামান্য নড়াচড়ায়, গরমে, সকালে।",
              "amelioration": "সম্পূর্ণ বিশ্রামে, আক্রান্ত পাশে শুলে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, ব্রায়োনিয়ার প্রধান লক্ষণ হলো নড়াচড়ায় বৃদ্ধি এবং বিশ্রামে উপশম। রোগীর প্রচুর তৃষ্ণা থাকে এবং শ্লৈষ্মিক ঝিল্লি শুষ্ক থাকে।"
          },
          {
            "name": "Kali Carb",
            "description": "এই রোগের ক্ষেত্রে Kali Carb একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বুকে তীক্ষ্ণ ব্যথা",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "রাত ২টা থেকে ৩টায় ব্যথা বাড়ে",
              "amelioration": "সামনে ঝুঁকে বসলে আরাম"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Kali Carb ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      },
      {
        "id": "pleurisy",
        "name": "প্লুরিসি (Pleurisy)",
        "remedies": [
          {
            "name": "Aconite Nap",
            "description": "এই রোগের ক্ষেত্রে Aconite Nap একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "রোগের শুরুতে জ্বর ও বুকে ব্যথা।",
              "শুকনো কাশি।",
              "ঠান্ডা বাতাস লেগে রোগ।",
              "দ্রুত নাড়ি।"
            ],
            "mentalSymptoms": [
              "অস্থিরতা ও মৃত্যুভয়।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায় ও রাতে, শুষ্ক ঠান্ডা বাতাসে, গরম ঘরে।",
              "amelioration": "খোলা বাতাসে, বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের মতে, একোনাইট হঠাৎ ও তীব্র আক্রমণের প্রধান ওষুধ। মৃত্যুভয়, অস্থিরতা এবং প্রবল তৃষ্ণা এর প্রধান নির্দেশক লক্ষণ।"
          },
          {
            "name": "Bryonia Alba",
            "description": "এই রোগের ক্ষেত্রে Bryonia Alba একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বুকে সুঁই ফোটানোর মতো ব্যথা।",
              "শুকনো কাশি ও পিপাসা।",
              "গভীর শ্বাস নিতে পারে না।"
            ],
            "mentalSymptoms": [
              "মেজাজ খিটখিটে।"
            ],
            "modalities": {
              "aggravation": "সামান্য নড়াচড়ায়, গরমে, সকালে।",
              "amelioration": "সম্পূর্ণ বিশ্রামে, আক্রান্ত পাশে শুলে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, ব্রায়োনিয়ার প্রধান লক্ষণ হলো নড়াচড়ায় বৃদ্ধি এবং বিশ্রামে উপশম। রোগীর প্রচুর তৃষ্ণা থাকে এবং শ্লৈষ্মিক ঝিল্লি শুষ্ক থাকে।"
          },
          {
            "name": "Bryonia",
            "description": "এই রোগের ক্ষেত্রে Bryonia একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "গভীর শ্বাস নিতে কষ্ট হয়",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সামান্য নড়াচড়ায়, গরমে, সকালে।",
              "amelioration": "সম্পূর্ণ বিশ্রামে, আক্রান্ত পাশে শুলে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, ব্রায়োনিয়ার প্রধান লক্ষণ হলো নড়াচড়ায় বৃদ্ধি এবং বিশ্রামে উপশম। রোগীর প্রচুর তৃষ্ণা থাকে এবং শ্লৈষ্মিক ঝিল্লি শুষ্ক থাকে।"
          },
          {
            "name": "Aconite",
            "description": "এই রোগের ক্ষেত্রে Aconite একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ঠান্ডা লাগার পর হঠাৎ প্লুরিসি",
              "তীব্র জ্বর ও অস্থিরতা",
              "বুকে সুঁচ ফোটার মতো ব্যথা",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায় ও রাতে, শুষ্ক ঠান্ডা বাতাসে, গরম ঘরে।",
              "amelioration": "খোলা বাতাসে, বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের মতে, একোনাইট হঠাৎ ও তীব্র আক্রমণের প্রধান ওষুধ। মৃত্যুভয়, অস্থিরতা এবং প্রবল তৃষ্ণা এর প্রধান নির্দেশক লক্ষণ।"
          },
          {
            "name": "Squilla",
            "description": "এই রোগের ক্ষেত্রে Squilla একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "কাশির সাথে বুকে তীব্র ব্যথা",
              "কাশতে কাশতে চোখ দিয়ে পানি পড়ে",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সকালে কাশির প্রকোপ বাড়ে",
              "amelioration": "লক্ষণ অনুযায়ী পরিবর্তনশীল।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Squilla ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          }
        ]
      },
      {
        "id": "tuberculosis",
        "name": "যক্ষ্মা (Tuberculosis)",
        "remedies": [
          {
            "name": "Tuberculinum",
            "description": "এই রোগের ক্ষেত্রে Tuberculinum একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বংশগত যক্ষ্মার ইতিহাস।",
              "ঘন ঘন ঠান্ডা লাগার প্রবণতা।",
              "রাতে ঘাম ও জ্বর।",
              "এক জায়গায় স্থির থাকতে পারে না।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "বদ্ধ ঘরে, আর্দ্র আবহাওয়ায়, পরিশ্রমে।",
              "amelioration": "খোলা বাতাসে, শুষ্ক আবহাওয়ায়।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Tuberculinum ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Phosphorus",
            "description": "এই রোগের ক্ষেত্রে Phosphorus একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "লম্বা ও সরু গড়নের রোগী।",
              "কাশির সাথে রক্ত পড়া।",
              "বুকে চাপ ও ভারবোধ।",
              "ঠান্ডা পানি পানের ইচ্ছা।",
              "সন্ধ্যায় স্বরভঙ্গ।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায়, বাম পাশে শুলে, ঠান্ডা বাতাসে।",
              "amelioration": "ডান পাশে শুলে, ঠান্ডা খাবারে, ঘুমালে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, ফসফরাসের রোগী লম্বা, ছিপছিপে এবং রক্তস্রাব প্রবণ হয়। এদের ঠান্ডা জল, আইসক্রিম এবং লবণাক্ত খাবারের প্রতি প্রবল আকাঙ্ক্ষা থাকে।"
          },
          {
            "name": "Calcarea Carb",
            "description": "এই রোগের ক্ষেত্রে Calcarea Carb একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "মোটা ও থলথলে গড়নের রোগী",
              "অল্প পরিশ্রমে হাঁপিয়ে ওঠে",
              "মাথায় প্রচুর ঘাম হয়",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ঠান্ডায়, আর্দ্র আবহাওয়ায়, শারীরিক পরিশ্রমে।",
              "amelioration": "শুষ্ক আবহাওয়ায়, ব্যথার দিকে শুলে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, মোটা, থলথলে এবং শীতকাতর রোগীদের জন্য এটি উপযোগী। এদের ডিম খাওয়ার প্রবল ইচ্ছা থাকে এবং মাথায় প্রচুর ঘাম হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          },
          {
            "name": "Belladonna",
            "description": "এই রোগের ক্ষেত্রে Belladonna একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হঠাৎ করে রোগের আক্রমণ।",
              "প্রচণ্ড জ্বর ও মাথাব্যথা।",
              "মুখমণ্ডল লাল হয়ে যাওয়া।",
              "গলা ব্যথা ও গিলতে কষ্ট।"
            ],
            "mentalSymptoms": [
              "আলো ও শব্দে বিরক্তি।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, শব্দে, আলোতে, বিকাল ৩টা বা রাত ১১টার পর।",
              "amelioration": "আধা-শোয়া অবস্থায়, গরম ঘরে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, হঠাৎ আক্রমণ, দপদপ করা ব্যথা, লালচে ভাব এবং উত্তাপ বেলেডোনার প্রধান লক্ষণ। বোরিক একে প্রদাহের প্রাথমিক অবস্থার ওষুধ বলেছেন।"
          }
        ]
      }
    ]
  },
  {
    "id": "abdomen",
    "name": "পেট (Abdomen)",
    "diseases": [
      {
        "id": "colic",
        "name": "পেট ব্যথা (Colic)",
        "remedies": [
          {
            "name": "Colocynth",
            "description": "এই রোগের ক্ষেত্রে Colocynth একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "নাভির চারপাশে তীব্র ব্যথা।",
              "ব্যথা হঠাৎ আসে এবং হঠাৎ যায়।"
            ],
            "mentalSymptoms": [
              "রাগের পর পেটে ব্যথা।"
            ],
            "modalities": {
              "aggravation": "রাগে, খাওয়ার পর।",
              "amelioration": "পেটে চাপ দিলে, সামনের দিকে ঝুঁকে থাকলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Colocynth ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Dioscorea",
            "description": "এই রোগের ক্ষেত্রে Dioscorea একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ব্যথা এক জায়গায় থাকে না, ছড়িয়ে পড়ে।",
              "নাভির চারপাশ থেকে ব্যথা শুরু হয়।",
              "গ্যাস ও পেট ফাঁপা থাকে।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সকালে বা সন্ধ্যায় ব্যথা বাড়ে।",
              "amelioration": "পেট পেছনের দিকে বাঁকা করলে আরাম।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Dioscorea ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Mag Phos",
            "description": "এই রোগের ক্ষেত্রে Mag Phos একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ব্যথা বিদ্যুৎ চমকানোর মতো আসে।",
              "পেট ফাঁপা ও ঢেকুর থাকে।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ঠান্ডায়, স্পর্শে, ডান দিকে।",
              "amelioration": "গরমে, চাপ দিলে, ঘর্ষণে, শরীর বাঁকালে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Mag Phos ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Magnesia Phos",
            "description": "এই রোগের ক্ষেত্রে Magnesia Phos একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "পেটে তীব্র খিল ধরা ব্যথা",
              "ব্যথায় রোগী কুঁকড়ে যায়",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ঠান্ডায়, স্পর্শে, ডান দিকে।",
              "amelioration": "গরমে, চাপ দিলে, ঘর্ষণে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Magnesia Phos ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      },
      {
        "id": "diarrhea",
        "name": "ডায়রিয়া (Diarrhea)",
        "remedies": [
          {
            "name": "Podophyllum",
            "description": "এই রোগের ক্ষেত্রে Podophyllum একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রচুর পরিমাণে দুর্গন্ধযুক্ত ও পানির মতো পায়খানা।",
              "সকালে পায়খানার বেগ বেশি থাকে।",
              "পায়খানার আগে পেটে গড়গড় শব্দ।",
              "পায়খানার পর খুব দুর্বলতা।",
              "দাঁত ওঠার সময় শিশুদের ডায়রিয়া।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ভোরে, গরমে, দাঁত ওঠার সময়।",
              "amelioration": "পেটে চাপ দিয়ে শুলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Podophyllum ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Aloe Soc",
            "description": "এই রোগের ক্ষেত্রে Aloe Soc একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "পায়খানার বেগ ধরে রাখা যায় না।",
              "পায়খানার সাথে প্রচুর গ্যাস বের হয়।",
              "খাওয়ার পরপরই পায়খানার বেগ।",
              "পায়ুপথে জ্বালা ও ভারবোধ।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ভোরে, গরমে, খাওয়ার পর।",
              "amelioration": "ঠান্ডা বাতাসে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Aloe Soc ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Aloe Socotrina",
            "description": "এই রোগের ক্ষেত্রে Aloe Socotrina একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "পায়খানার বেগ ধরে রাখতে পারে না",
              "পেটে প্রচুর গ্যাস ও ব্যথা",
              "খাওয়ার পরপরই পায়খানার বেগ আসে",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ভোরে, গরমে, খাওয়ার পর।",
              "amelioration": "ঠান্ডা বাতাসে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Aloe Socotrina ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Veratrum Album",
            "description": "এই রোগের ক্ষেত্রে Veratrum Album একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ডায়রিয়ার সাথে প্রচুর বমি",
              "শরীর ঠান্ডা হয়ে যায় ও প্রচুর ঘাম হয়",
              "তীব্র দুর্বলতা",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "রাতে, ঠান্ডায়, ঋতুস্রাবের আগে ও পরে।",
              "amelioration": "গরমে, হাঁটলে, গরম পানীয়তে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Veratrum Album ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      },
      {
        "id": "constipation",
        "name": "কোষ্ঠকাঠিন্য (Constipation)",
        "remedies": [
          {
            "name": "Bryonia Alba",
            "description": "এই রোগের ক্ষেত্রে Bryonia Alba একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "পায়খানা খুব শক্ত, শুকনো ও পোড়া পোড়া।",
              "পায়খানা করতে খুব কষ্ট হয়।",
              "প্রচণ্ড পিপাসা।",
              "মাথাব্যথা থাকে।"
            ],
            "mentalSymptoms": [
              "মেজাজ খিটখিটে।"
            ],
            "modalities": {
              "aggravation": "সামান্য নড়াচড়ায়, গরমে, সকালে।",
              "amelioration": "সম্পূর্ণ বিশ্রামে, আক্রান্ত পাশে শুলে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, ব্রায়োনিয়ার প্রধান লক্ষণ হলো নড়াচড়ায় বৃদ্ধি এবং বিশ্রামে উপশম। রোগীর প্রচুর তৃষ্ণা থাকে এবং শ্লৈষ্মিক ঝিল্লি শুষ্ক থাকে।"
          },
          {
            "name": "Nux Vomica",
            "description": "এই রোগের ক্ষেত্রে Nux Vomica একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ঘন ঘন পায়খানার বেগ কিন্তু পরিষ্কার হয় না।",
              "অনিয়মিত জীবনযাপন ও মশলাযুক্ত খাবার।",
              "শীতকাতর রোগী।",
              "বসে কাজ করা লোকদের সমস্যা।"
            ],
            "mentalSymptoms": [
              "পায়খানার পর মনে হয় আরও হবে।"
            ],
            "modalities": {
              "aggravation": "সকালে, ঠান্ডায়, মানসিক পরিশ্রমে, খাওয়ার পর।",
              "amelioration": "সন্ধ্যায়, বিশ্রামে, গরম প্রয়োগে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, অতিরিক্ত মানসিক পরিশ্রম, অনিয়মিত জীবনযাপন এবং উত্তেজক পদার্থের কুফল দূর করতে এটি অদ্বিতীয়। রোগী অত্যন্ত রাগী ও শীতকাতর হয়।"
          },
          {
            "name": "Alumina",
            "description": "এই রোগের ক্ষেত্রে Alumina একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "পায়খানার কোনো বেগ থাকে না",
              "নরম পায়খানাও অনেক কোঁত দিয়ে করতে হয়",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "আলু খেলে, সকালে ঘুম থেকে উঠলে।",
              "amelioration": "সন্ধ্যায়, খোলা বাতাসে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Alumina ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Bryonia",
            "description": "এই রোগের ক্ষেত্রে Bryonia একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "পায়খানা খুব বড়, শক্ত ও শুষ্ক",
              "পায়খানা করতে অনেক কষ্ট হয়",
              "প্রচুর জলপিপাসা থাকে",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সামান্য নড়াচড়ায়, গরমে, সকালে।",
              "amelioration": "সম্পূর্ণ বিশ্রামে, আক্রান্ত পাশে শুলে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, ব্রায়োনিয়ার প্রধান লক্ষণ হলো নড়াচড়ায় বৃদ্ধি এবং বিশ্রামে উপশম। রোগীর প্রচুর তৃষ্ণা থাকে এবং শ্লৈষ্মিক ঝিল্লি শুষ্ক থাকে।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      },
      {
        "id": "dysentery",
        "name": "আমাশয় (Dysentery)",
        "remedies": [
          {
            "name": "Merc Sol",
            "description": "এই রোগের ক্ষেত্রে Merc Sol একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "পায়খানার সাথে রক্ত ও আম।",
              "পায়খানার পরেও বেগ থাকে (Tenesmus)।",
              "ঘাম ও লালা ঝরে।",
              "পেটে কামড়ানি ব্যথা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "রাতে, বিছানার গরমে, ঘামলে।",
              "amelioration": "বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Merc Sol ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Nux Vomica",
            "description": "এই রোগের ক্ষেত্রে Nux Vomica একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "সাদা আমাশয়, পেটে ব্যথা।",
              "বারবার পায়খানার বেগ।",
              "শীতকাতর।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সকালে, ঠান্ডায়, মানসিক পরিশ্রমে, খাওয়ার পর।",
              "amelioration": "সন্ধ্যায়, বিশ্রামে, গরম প্রয়োগে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, অতিরিক্ত মানসিক পরিশ্রম, অনিয়মিত জীবনযাপন এবং উত্তেজক পদার্থের কুফল দূর করতে এটি অদ্বিতীয়। রোগী অত্যন্ত রাগী ও শীতকাতর হয়।"
          },
          {
            "name": "Merc Cor",
            "description": "এই রোগের ক্ষেত্রে Merc Cor একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আমাশয়ের সাথে তীব্র কোঁথানি",
              "পায়খানার সাথে রক্ত ও শ্লেষ্মা",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায়, রাতে, প্রস্রাব বা পায়খানার পর।",
              "amelioration": "বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Merc Cor ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Aloe Socotrina",
            "description": "এই রোগের ক্ষেত্রে Aloe Socotrina একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "জেলি বা থকথকে শ্লেষ্মাযুক্ত আমাশয়",
              "পেটে প্রচুর গ্যাস ও ব্যথা",
              "পায়খানার বেগ ধরে রাখতে পারে না",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ভোরে, গরমে, খাওয়ার পর।",
              "amelioration": "ঠান্ডা বাতাসে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Aloe Socotrina ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      },
      {
        "id": "appendicitis",
        "name": "অ্যাপেন্ডিসাইটিস (Appendicitis)",
        "remedies": [
          {
            "name": "Belladonna",
            "description": "এই রোগের ক্ষেত্রে Belladonna একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হঠাৎ তীব্র ব্যথা, ডানদিকের তলপেটে।",
              "দপদপ করা ব্যথা।"
            ],
            "mentalSymptoms": [
              "জ্বর ও মুখমন্ডল লাল।",
              "আলো ও শব্দে বিরক্তি।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, শব্দে, আলোতে, বিকাল ৩টা বা রাত ১১টার পর।",
              "amelioration": "আধা-শোয়া অবস্থায়, গরম ঘরে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, হঠাৎ আক্রমণ, দপদপ করা ব্যথা, লালচে ভাব এবং উত্তাপ বেলেডোনার প্রধান লক্ষণ। বোরিক একে প্রদাহের প্রাথমিক অবস্থার ওষুধ বলেছেন।"
          },
          {
            "name": "Bryonia Alba",
            "description": "এই রোগের ক্ষেত্রে Bryonia Alba একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রচণ্ড পিপাসা ও কোষ্ঠকাঠিন্য।",
              "শুকনো কাশি।",
              "পেট শক্ত হয়ে থাকে।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সামান্য নড়াচড়ায়, গরমে, সকালে।",
              "amelioration": "সম্পূর্ণ বিশ্রামে, আক্রান্ত পাশে শুলে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, ব্রায়োনিয়ার প্রধান লক্ষণ হলো নড়াচড়ায় বৃদ্ধি এবং বিশ্রামে উপশম। রোগীর প্রচুর তৃষ্ণা থাকে এবং শ্লৈষ্মিক ঝিল্লি শুষ্ক থাকে।"
          },
          {
            "name": "Iris Tenax",
            "description": "এই রোগের ক্ষেত্রে Iris Tenax একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "অ্যাপেন্ডিসাইটিসের তীব্র ব্যথা",
              "ব্যথার স্থানে প্রচণ্ড স্পর্শকাতরতা",
              "ডান দিকের তলপেটে ব্যথা",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "বিশ্রামে।",
              "amelioration": "নড়াচড়ায়।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Iris Tenax ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Bryonia",
            "description": "এই রোগের ক্ষেত্রে Bryonia একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "রোগী ব্যথার দিকে শুয়ে থাকতে চায়",
              "কোষ্ঠকাঠিন্য থাকে",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সামান্য নড়াচড়ায়, গরমে, সকালে।",
              "amelioration": "সম্পূর্ণ বিশ্রামে, আক্রান্ত পাশে শুলে, ঠান্ডা প্রয়োগে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, ব্রায়োনিয়ার প্রধান লক্ষণ হলো নড়াচড়ায় বৃদ্ধি এবং বিশ্রামে উপশম। রোগীর প্রচুর তৃষ্ণা থাকে এবং শ্লৈষ্মিক ঝিল্লি শুষ্ক থাকে।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      }
    ]
  },
  {
    "id": "urinary",
    "name": "মূত্রতন্ত্র (Urinary System)",
    "diseases": [
      {
        "id": "uti",
        "name": "প্রস্রাবে জ্বালাপোড়া (UTI)",
        "remedies": [
          {
            "name": "Cantharis",
            "description": "এই রোগের ক্ষেত্রে Cantharis একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রস্রাবের আগে, সময় ও পরে তীব্র জ্বালা।",
              "ফোঁটা ফোঁটা প্রস্রাব হয়।",
              "প্রস্রাবের বেগ সব সময় থাকে।",
              "রক্তমিশ্রিত প্রস্রাব হতে পারে।",
              "তলপেটে ব্যথা ও ভারবোধ।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "প্রস্রাবের সময়, কফি পানে, স্পর্শে।",
              "amelioration": "ঘর্ষণে, গরম প্রয়োগে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, প্রস্রাবের আগে, চলাকালীন এবং পরে প্রচণ্ড জ্বালা ও কাটার মতো ব্যথা ক্যান্থারিসের প্রধান লক্ষণ।"
          },
          {
            "name": "Apis Mel",
            "description": "এই রোগের ক্ষেত্রে Apis Mel একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রস্রাবের পরিমাণ খুব কম ও গরম।",
              "প্রস্রাবে জ্বালা ও হুল ফোটানো ব্যথা।",
              "তৃষ্ণাহীনতা ও চোখের নিচে ফোলা।",
              "ঘুমের মধ্যে প্রস্রাব হয়ে যাওয়া।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "গরমে, স্পর্শে, বিকাল ৩টায়, বদ্ধ ঘরে।",
              "amelioration": "ঠান্ডা প্রয়োগে, খোলা বাতাসে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, হুল ফোটানোর মতো ব্যথা, জ্বালা, ফুলে যাওয়া এবং গরমে বৃদ্ধি এপিস মেলের নির্দেশক। রোগীর তৃষ্ণা থাকে না।"
          },
          {
            "name": "Sarsaparilla",
            "description": "এই রোগের ক্ষেত্রে Sarsaparilla একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রস্রাব শেষ হওয়ার সময় তীব্র ব্যথা।",
              "বসে প্রস্রাব করতে কষ্ট, দাঁড়িয়ে করলে সহজ।",
              "প্রস্রাবে সাদা তলানি পড়ে।",
              "ডান কিডনিতে ব্যথা।"
            ],
            "mentalSymptoms": [
              "শিশুদের প্রস্রাবের আগে ও পরে কান্না।"
            ],
            "modalities": {
              "aggravation": "প্রস্রাব শেষে, বসন্তকালে।",
              "amelioration": "দাঁড়িয়ে প্রস্রাব করলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Sarsaparilla ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Apis Mellifica",
            "description": "এই রোগের ক্ষেত্রে Apis Mellifica একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রস্রাবে হুল ফোটার মতো ব্যথা",
              "প্রস্রাব খুব কম হয়",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "গরমে, স্পর্শে, বিকাল ৩টায়, বদ্ধ ঘরে।",
              "amelioration": "ঠান্ডা প্রয়োগে, খোলা বাতাসে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, হুল ফোটানোর মতো ব্যথা, জ্বালা, ফুলে যাওয়া এবং গরমে বৃদ্ধি এপিস মেলের নির্দেশক। রোগীর তৃষ্ণা থাকে না।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      },
      {
        "id": "kidney_stone",
        "name": "কিডনি পাথর (Kidney Stone)",
        "remedies": [
          {
            "name": "Berberis Vulgaris",
            "description": "এই রোগের ক্ষেত্রে Berberis Vulgaris একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বাম কিডনিতে পাথর।",
              "ব্যথা কিডনি থেকে মূত্রনালী দিয়ে নিচে নামে।",
              "প্রস্রাবে তলানি পড়ে।",
              "কোমরে ব্যথা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "নড়াচড়ায়, দাঁড়িয়ে থাকলে।",
              "amelioration": "বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Berberis Vulgaris ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Lycopodium",
            "description": "এই রোগের ক্ষেত্রে Lycopodium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ডান কিডনিতে পাথর।",
              "প্রস্রাবে লাল বালুকণা (Red sand)।",
              "পেটে গ্যাস ও কোষ্ঠকাঠিন্য।",
              "গরম খাবার পছন্দ।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "বিকাল ৪টা থেকে রাত ৮টা, ডান দিকে, গরমে।",
              "amelioration": "ঠান্ডা বাতাসে, নড়াচড়ায়, গরম পানীয়তে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, ডান দিকের আক্রমণ, বিকাল ৪টা থেকে রাত ৮টা পর্যন্ত বৃদ্ধি এবং পেটে গ্যাসের সমস্যা লাইকোপোডিয়ামের নির্দেশক।"
          },
          {
            "name": "Sarsaparilla",
            "description": "এই রোগের ক্ষেত্রে Sarsaparilla একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রস্রাব শেষ হওয়ার সময় তীব্র ব্যথা",
              "প্রস্রাবে সাদা বালির মতো তলানি",
              "দাঁড়িয়ে প্রস্রাব করলে সহজে হয়",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "প্রস্রাব শেষে, বসন্তকালে।",
              "amelioration": "দাঁড়িয়ে প্রস্রাব করলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Sarsaparilla ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          },
          {
            "name": "Belladonna",
            "description": "এই রোগের ক্ষেত্রে Belladonna একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হঠাৎ করে রোগের আক্রমণ।",
              "প্রচণ্ড জ্বর ও মাথাব্যথা।",
              "মুখমণ্ডল লাল হয়ে যাওয়া।",
              "গলা ব্যথা ও গিলতে কষ্ট।"
            ],
            "mentalSymptoms": [
              "আলো ও শব্দে বিরক্তি।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, শব্দে, আলোতে, বিকাল ৩টা বা রাত ১১টার পর।",
              "amelioration": "আধা-শোয়া অবস্থায়, গরম ঘরে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, হঠাৎ আক্রমণ, দপদপ করা ব্যথা, লালচে ভাব এবং উত্তাপ বেলেডোনার প্রধান লক্ষণ। বোরিক একে প্রদাহের প্রাথমিক অবস্থার ওষুধ বলেছেন।"
          }
        ]
      },
      {
        "id": "hematuria",
        "name": "প্রস্রাবে রক্ত (Hematuria)",
        "remedies": [
          {
            "name": "Cantharis",
            "description": "এই রোগের ক্ষেত্রে Cantharis একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রস্রাবের সাথে রক্ত ও তীব্র জ্বালা।",
              "বারবার প্রস্রাবের বেগ।",
              "তলপেটে ব্যথা।",
              "কিডনি প্রদাহ।",
              "অস্থিরতা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "প্রস্রাবের সময়, কফি পানে, স্পর্শে।",
              "amelioration": "ঘর্ষণে, গরম প্রয়োগে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, প্রস্রাবের আগে, চলাকালীন এবং পরে প্রচণ্ড জ্বালা ও কাটার মতো ব্যথা ক্যান্থারিসের প্রধান লক্ষণ।"
          },
          {
            "name": "Terebinthina",
            "description": "এই রোগের ক্ষেত্রে Terebinthina একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রস্রাব ধোঁয়াটে বা কালচে রঙের।",
              "কিডনিতে জ্বালা ও ব্যথা।",
              "প্রস্রাবের পরিমাণ কম।",
              "জিভ চকচকে লাল।",
              "পেট ফাঁপা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "রাতে, আর্দ্র আবহাওয়ায়, শুয়ে থাকলে।",
              "amelioration": "নড়াচড়ায়, খোলা বাতাসে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Terebinthina ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Hamamelis",
            "description": "এই রোগের ক্ষেত্রে Hamamelis একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রস্রাবের সাথে প্রচুর কালচে রক্তপাত",
              "কোনো ব্যথা থাকে না",
              "রক্তপাতের কারণে দুর্বলতা",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, গরমে।",
              "amelioration": "বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Hamamelis ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          },
          {
            "name": "Belladonna",
            "description": "এই রোগের ক্ষেত্রে Belladonna একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হঠাৎ করে রোগের আক্রমণ।",
              "প্রচণ্ড জ্বর ও মাথাব্যথা।",
              "মুখমণ্ডল লাল হয়ে যাওয়া।",
              "গলা ব্যথা ও গিলতে কষ্ট।"
            ],
            "mentalSymptoms": [
              "আলো ও শব্দে বিরক্তি।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, শব্দে, আলোতে, বিকাল ৩টা বা রাত ১১টার পর।",
              "amelioration": "আধা-শোয়া অবস্থায়, গরম ঘরে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, হঠাৎ আক্রমণ, দপদপ করা ব্যথা, লালচে ভাব এবং উত্তাপ বেলেডোনার প্রধান লক্ষণ। বোরিক একে প্রদাহের প্রাথমিক অবস্থার ওষুধ বলেছেন।"
          }
        ]
      },
      {
        "id": "incontinence",
        "name": "অসাড়ে প্রস্রাব (Incontinence)",
        "remedies": [
          {
            "name": "Causticum",
            "description": "এই রোগের ক্ষেত্রে Causticum একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হাঁচি, কাশি বা হাসলে প্রস্রাব বেরিয়ে যায়।",
              "প্রথম ঘুমের মধ্যে শিশুদের বিছানায় প্রস্রাব।",
              "প্রস্রাবের বেগ ধরে রাখা যায় না।",
              "প্যারালাইসিস রোগীদের জন্য।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "শুষ্ক ও ঠান্ডা বাতাসে।",
              "amelioration": "আর্দ্র আবহাওয়ায়, গরম পানীয়তে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Causticum ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Sepia",
            "description": "এই রোগের ক্ষেত্রে Sepia একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রথম ঘুমের মধ্যে বিছানায় প্রস্রাব।",
              "মহিলাদের জরায়ুর সমস্যার সাথে।",
              "প্রস্রাব ঘোলা ও দুর্গন্ধযুক্ত।",
              "উদাসী ও বিষণ্ণ।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সকালে ও সন্ধ্যায়, ঠান্ডায়, পরিশ্রমে।",
              "amelioration": "ব্যায়াম করলে, গরমে, দ্রুত হাঁটলে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, জরায়ুর সমস্যা, উদাসীনতা এবং তলপেটে নিচের দিকে ঠেলা মারা ব্যথা সিপিয়ার প্রধান লক্ষণ। রোগী একা থাকতে পছন্দ করে।"
          },
          {
            "name": "Equisetum",
            "description": "এই রোগের ক্ষেত্রে Equisetum একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "শিশুদের বিছানায় প্রস্রাব করা",
              "প্রস্রাবের পর মূত্রথলিতে ব্যথা",
              "প্রস্রাব পরিষ্কার ও প্রচুর পরিমাণে হয়",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "প্রস্রাবের শেষে, নড়াচড়ায়, স্পর্শে।",
              "amelioration": "শুয়ে থাকলে, বিকেলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Equisetum ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Kreosotum",
            "description": "এই রোগের ক্ষেত্রে Kreosotum একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "গভীর ঘুমের মধ্যে বিছানায় প্রস্রাব",
              "প্রস্রাবে খুব দুর্গন্ধ",
              "হঠাৎ করে প্রস্রাবের বেগ আসে",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ঠান্ডা বাতাসে, বিশ্রামে, দাঁত ওঠার সময়।",
              "amelioration": "গরমে, নড়াচড়ায়, গরম খাবারে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Kreosotum ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      },
      {
        "id": "retention",
        "name": "প্রস্রাব আটকে যাওয়া (Retention)",
        "remedies": [
          {
            "name": "Aconite Nap",
            "description": "এই রোগের ক্ষেত্রে Aconite Nap একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "তলপেটে ব্যথা ও অস্থিরতা।",
              "শিশুদের প্রস্রাব বন্ধ হলে।",
              "জ্বর ও পিপাসা।"
            ],
            "mentalSymptoms": [
              "ভয় বা ঠান্ডা লেগে প্রস্রাব বন্ধ।",
              "মৃত্যুভয়।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায় ও রাতে, শুষ্ক ঠান্ডা বাতাসে, গরম ঘরে।",
              "amelioration": "খোলা বাতাসে, বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের মতে, একোনাইট হঠাৎ ও তীব্র আক্রমণের প্রধান ওষুধ। মৃত্যুভয়, অস্থিরতা এবং প্রবল তৃষ্ণা এর প্রধান নির্দেশক লক্ষণ।"
          },
          {
            "name": "Arnica Mont",
            "description": "এই রোগের ক্ষেত্রে Arnica Mont একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাত লাগার পর প্রস্রাব বন্ধ।",
              "প্রসবের পর প্রস্রাব আটকে গেলে।",
              "প্রস্রাবের রাস্তায় কালশিটে দাগ।",
              "ব্যথা ও স্পর্শকাতরতা।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হয়।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          },
          {
            "name": "Aconite",
            "description": "এই রোগের ক্ষেত্রে Aconite একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "শিশুদের প্রস্রাব আটকে গেলে",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "ভয় বা ঠান্ডা লাগার পর প্রস্রাব আটকে যাওয়া",
              "তীব্র অস্থিরতা ও কান্না"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায় ও রাতে, শুষ্ক ঠান্ডা বাতাসে, গরম ঘরে।",
              "amelioration": "খোলা বাতাসে, বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের মতে, একোনাইট হঠাৎ ও তীব্র আক্রমণের প্রধান ওষুধ। মৃত্যুভয়, অস্থিরতা এবং প্রবল তৃষ্ণা এর প্রধান নির্দেশক লক্ষণ।"
          },
          {
            "name": "Cantharis",
            "description": "এই রোগের ক্ষেত্রে Cantharis একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রস্রাব আটকে যাওয়ার সাথে তীব্র জ্বালাপোড়া",
              "বারবার প্রস্রাবের বেগ কিন্তু প্রস্রাব হয় না",
              "তলপেটে ব্যথা",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "প্রস্রাবের সময়, কফি পানে, স্পর্শে।",
              "amelioration": "ঘর্ষণে, গরম প্রয়োগে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, প্রস্রাবের আগে, চলাকালীন এবং পরে প্রচণ্ড জ্বালা ও কাটার মতো ব্যথা ক্যান্থারিসের প্রধান লক্ষণ।"
          },
          {
            "name": "Clematis",
            "description": "এই রোগের ক্ষেত্রে Clematis একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রস্রাব ফোঁটা ফোঁটা করে পড়ে",
              "প্রস্রাব করতে অনেক সময় লাগে",
              "প্রস্রাবের ধারা সরু হয়ে যায়",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "রাতে, বিছানার গরমে, ঠান্ডা জলে ধুলে।",
              "amelioration": "খোলা বাতাসে, ঘাম হলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Clematis ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          }
        ]
      }
    ]
  },
  {
    "id": "female",
    "name": "মহিলা রোগ (Female Diseases)",
    "diseases": [
      {
        "id": "menstrual_problems",
        "name": "মাসিকের সমস্যা (Menstrual Problems)",
        "remedies": [
          {
            "name": "Pulsatilla",
            "description": "এই রোগের ক্ষেত্রে Pulsatilla একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "মাসিক অনিয়মিত, দেরিতে হয় ও পরিমাণে কম।",
              "মাসিকের সময় পেটে ব্যথা।",
              "পায়ে ভিজলে বা ঠান্ডা লাগলে মাসিক বন্ধ।"
            ],
            "mentalSymptoms": [
              "কান্নাকাটি করে ও সান্ত্বনায় শান্ত হয়।"
            ],
            "modalities": {
              "aggravation": "গরমে, সন্ধ্যায়, চর্বিযুক্ত খাবারে।",
              "amelioration": "খোলা বাতাসে, ঠান্ডা প্রয়োগে, ধীরে ধীরে হাঁটলে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, পরিবর্তনশীল লক্ষণ, তৃষ্ণাহীনতা এবং মুক্ত বাতাসে উপশম পালসাটিলার প্রধান বৈশিষ্ট্য। রোগী নম্র ও ক্রন্দনশীল স্বভাবের হয়।"
          },
          {
            "name": "Sepia",
            "description": "এই রোগের ক্ষেত্রে Sepia একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "মাসিক অনিয়মিত ও অল্প।",
              "স্বামীর প্রতি ও পরিবারের প্রতি উদাসীন।",
              "যৌন মিলনে অনিহা।",
              "মুখে মেছতার দাগ।"
            ],
            "mentalSymptoms": [
              "তলপেটে ভারবোধ, মনে হয় সব বেরিয়ে আসবে (Bearing down)।"
            ],
            "modalities": {
              "aggravation": "সকালে ও সন্ধ্যায়, ঠান্ডায়, পরিশ্রমে।",
              "amelioration": "ব্যায়াম করলে, গরমে, দ্রুত হাঁটলে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, জরায়ুর সমস্যা, উদাসীনতা এবং তলপেটে নিচের দিকে ঠেলা মারা ব্যথা সিপিয়ার প্রধান লক্ষণ। রোগী একা থাকতে পছন্দ করে।"
          },
          {
            "name": "Cimicifuga",
            "description": "এই রোগের ক্ষেত্রে Cimicifuga একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "মাসিকের সময় তীব্র ব্যথা",
              "ব্যথা এক পাশ থেকে অন্য পাশে ছড়ায়",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ঋতুস্রাবের সময়, ঠান্ডায়।",
              "amelioration": "গরমে, বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Cimicifuga ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          },
          {
            "name": "Belladonna",
            "description": "এই রোগের ক্ষেত্রে Belladonna একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হঠাৎ করে রোগের আক্রমণ।",
              "প্রচণ্ড জ্বর ও মাথাব্যথা।",
              "মুখমণ্ডল লাল হয়ে যাওয়া।",
              "গলা ব্যথা ও গিলতে কষ্ট।"
            ],
            "mentalSymptoms": [
              "আলো ও শব্দে বিরক্তি।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, শব্দে, আলোতে, বিকাল ৩টা বা রাত ১১টার পর।",
              "amelioration": "আধা-শোয়া অবস্থায়, গরম ঘরে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, হঠাৎ আক্রমণ, দপদপ করা ব্যথা, লালচে ভাব এবং উত্তাপ বেলেডোনার প্রধান লক্ষণ। বোরিক একে প্রদাহের প্রাথমিক অবস্থার ওষুধ বলেছেন।"
          }
        ]
      },
      {
        "id": "leucorrhea",
        "name": "সাদাস্রাব (Leucorrhea)",
        "remedies": [
          {
            "name": "Calcarea Carb",
            "description": "এই রোগের ক্ষেত্রে Calcarea Carb একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "দুধের মতো সাদা স্রাব।",
              "মোটা ও থলথলে মহিলা।",
              "পায়ে ঠান্ডা লাগে ও ঘামে।",
              "ডিম খাওয়ার ইচ্ছা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ঠান্ডায়, আর্দ্র আবহাওয়ায়, শারীরিক পরিশ্রমে।",
              "amelioration": "শুষ্ক আবহাওয়ায়, ব্যথার দিকে শুলে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, মোটা, থলথলে এবং শীতকাতর রোগীদের জন্য এটি উপযোগী। এদের ডিম খাওয়ার প্রবল ইচ্ছা থাকে এবং মাথায় প্রচুর ঘাম হয়।"
          },
          {
            "name": "Alumina",
            "description": "এই রোগের ক্ষেত্রে Alumina একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রচুর পরিমাণে স্বচ্ছ ও আঠালো স্রাব।",
              "স্রাব এত বেশি যে গোড়ালি পর্যন্ত গড়িয়ে পড়ে।",
              "কোষ্ঠকাঠিন্য ও দুর্বলতা।",
              "আলু বা অপাচ্য খাবার খাওয়ার ইচ্ছা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "আলু খেলে, সকালে ঘুম থেকে উঠলে।",
              "amelioration": "সন্ধ্যায়, খোলা বাতাসে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Alumina ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Kreosotum",
            "description": "এই রোগের ক্ষেত্রে Kreosotum একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "সাদাস্রাব খুব দুর্গন্ধযুক্ত ও ক্ষয়কারক",
              "স্রাব যেখানে লাগে সেখানে চুলকায় ও জ্বলে",
              "হলদেটে রঙের স্রাব",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ঠান্ডা বাতাসে, বিশ্রামে, দাঁত ওঠার সময়।",
              "amelioration": "গরমে, নড়াচড়ায়, গরম খাবারে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Kreosotum ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          },
          {
            "name": "Belladonna",
            "description": "এই রোগের ক্ষেত্রে Belladonna একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হঠাৎ করে রোগের আক্রমণ।",
              "প্রচণ্ড জ্বর ও মাথাব্যথা।",
              "মুখমণ্ডল লাল হয়ে যাওয়া।",
              "গলা ব্যথা ও গিলতে কষ্ট।"
            ],
            "mentalSymptoms": [
              "আলো ও শব্দে বিরক্তি।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, শব্দে, আলোতে, বিকাল ৩টা বা রাত ১১টার পর।",
              "amelioration": "আধা-শোয়া অবস্থায়, গরম ঘরে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, হঠাৎ আক্রমণ, দপদপ করা ব্যথা, লালচে ভাব এবং উত্তাপ বেলেডোনার প্রধান লক্ষণ। বোরিক একে প্রদাহের প্রাথমিক অবস্থার ওষুধ বলেছেন।"
          }
        ]
      },
      {
        "id": "dysmenorrhea",
        "name": "মাসিকের ব্যথা (Dysmenorrhea)",
        "remedies": [
          {
            "name": "Mag Phos",
            "description": "এই রোগের ক্ষেত্রে Mag Phos একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "মাসিকের সময় তীব্র ব্যথা।",
              "ব্যথা হঠাৎ আসে ও যায়।",
              "রক্ত জমাট ও কালো।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ঠান্ডায়, স্পর্শে, ডান দিকে।",
              "amelioration": "গরমে, চাপ দিলে, ঘর্ষণে, শরীর বাঁকালে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Mag Phos ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Chamomilla",
            "description": "এই রোগের ক্ষেত্রে Chamomilla একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ব্যথা অসহ্য, রোগী ছটফট করে।",
              "রক্ত কালো ও চাকা চাকা।",
              "এক গাল লাল, অন্য গাল ফ্যাকাশে।"
            ],
            "mentalSymptoms": [
              "রাগী ও খিটখিটে মেজাজ।"
            ],
            "modalities": {
              "aggravation": "গরমে, রাগে, রাতে, কফিতে।",
              "amelioration": "কোলে নিয়ে হাঁটলে, গরম প্রয়োগে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, অত্যন্ত রাগী, খিটখিটে এবং ব্যথায় অসহিষ্ণু রোগীদের জন্য এটি উপযোগী। কোলে নিলে বা ঘুরলে এরা শান্ত হয়।"
          },
          {
            "name": "Magnesia Phos",
            "description": "এই রোগের ক্ষেত্রে Magnesia Phos একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "মাসিকের সময় তীব্র খিল ধরা ব্যথা",
              "ব্যথায় রোগী কুঁকড়ে যায়",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ঠান্ডায়, স্পর্শে, ডান দিকে।",
              "amelioration": "গরমে, চাপ দিলে, ঘর্ষণে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Magnesia Phos ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Colocynthis",
            "description": "এই রোগের ক্ষেত্রে Colocynthis একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ব্যথার সাথে বমি বমি ভাব",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "রাগে, খাওয়ার পর।",
              "amelioration": "পেটে চাপ দিলে, সামনের দিকে ঝুঁকে থাকলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Colocynthis ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Viburnum Opulus",
            "description": "এই রোগের ক্ষেত্রে Viburnum Opulus একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ব্যথা কোমর থেকে শুরু হয়ে উরুর দিকে নামে",
              "মাসিক শুরু হওয়ার আগে তীব্র ব্যথা",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সন্ধ্যায়, গরম ঘরে।",
              "amelioration": "খোলা বাতাসে, বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Viburnum Opulus ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          }
        ]
      },
      {
        "id": "menopause",
        "name": "মেনোপজ (Menopause)",
        "remedies": [
          {
            "name": "Lachesis",
            "description": "এই রোগের ক্ষেত্রে Lachesis একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হঠাৎ গরম লাগা (Hot flashes)।",
              "গলায় কাপড় সহ্য হয় না।",
              "বাম দিক থেকে ডান দিকে রোগ ছড়ায়।",
              "অতিরিক্ত কথা বলার প্রবণতা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ঘুমের পর, বাম দিকে, গরমে, স্পর্শে।",
              "amelioration": "স্রাব নির্গত হলে, ঠান্ডা পানীয়তে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Lachesis ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Sepia",
            "description": "এই রোগের ক্ষেত্রে Sepia একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হঠাৎ গরম লাগা ও ঘাম।",
              "তলপেটে ভারবোধ।",
              "বিষণ্ণতা ও উদাসীনতা।",
              "যৌন মিলনে কষ্ট।",
              "একা থাকতে চায়।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সকালে ও সন্ধ্যায়, ঠান্ডায়, পরিশ্রমে।",
              "amelioration": "ব্যায়াম করলে, গরমে, দ্রুত হাঁটলে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, জরায়ুর সমস্যা, উদাসীনতা এবং তলপেটে নিচের দিকে ঠেলা মারা ব্যথা সিপিয়ার প্রধান লক্ষণ। রোগী একা থাকতে পছন্দ করে।"
          },
          {
            "name": "Sanguinaria",
            "description": "এই রোগের ক্ষেত্রে Sanguinaria একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ডান দিকের মাথাব্যথা",
              "হাতের তালু ও পায়ের তলায় জ্বালাপোড়া",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "মুখমন্ডল লাল হয়ে গরম ভাপ ওঠে"
            ],
            "modalities": {
              "aggravation": "ডান দিকে, সকালে, আলোতে।",
              "amelioration": "ঘুমালে, অন্ধকারে, বমি হলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Sanguinaria ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          },
          {
            "name": "Belladonna",
            "description": "এই রোগের ক্ষেত্রে Belladonna একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হঠাৎ করে রোগের আক্রমণ।",
              "প্রচণ্ড জ্বর ও মাথাব্যথা।",
              "মুখমণ্ডল লাল হয়ে যাওয়া।",
              "গলা ব্যথা ও গিলতে কষ্ট।"
            ],
            "mentalSymptoms": [
              "আলো ও শব্দে বিরক্তি।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, শব্দে, আলোতে, বিকাল ৩টা বা রাত ১১টার পর।",
              "amelioration": "আধা-শোয়া অবস্থায়, গরম ঘরে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, হঠাৎ আক্রমণ, দপদপ করা ব্যথা, লালচে ভাব এবং উত্তাপ বেলেডোনার প্রধান লক্ষণ। বোরিক একে প্রদাহের প্রাথমিক অবস্থার ওষুধ বলেছেন।"
          }
        ]
      },
      {
        "id": "infertility",
        "name": "বন্ধ্যাত্ব (Infertility)",
        "remedies": [
          {
            "name": "Natrum Carb",
            "description": "এই রোগের ক্ষেত্রে Natrum Carb একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "জরায়ুর মুখ থেকে বীর্য বেরিয়ে যায়।",
              "স্নায়বিক দুর্বলতা ও শব্দে চমকে ওঠে।",
              "গরম সহ্য করতে পারে না।",
              "পায়ে দুর্বলতা।",
              "হজমে গণ্ডগোল।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "মানসিক পরিশ্রমে, রোদে, গরমে, দুধ পানে।",
              "amelioration": "নড়াচড়ায়, খাওয়ার পর, কান চুলকালে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Natrum Carb ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Borax",
            "description": "এই রোগের ক্ষেত্রে Borax একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "সাদাস্রাব ডিমের লালার মতো।",
              "জরায়ুর মুখ গরম থাকে।",
              "মুখে ঘা হওয়ার প্রবণতা।"
            ],
            "mentalSymptoms": [
              "নিচে নামতে ভয় (Downward motion)।",
              "শব্দে ভয় পায়।"
            ],
            "modalities": {
              "aggravation": "নিচের দিকে নামলে (যেমন সিঁড়ি দিয়ে), হঠাৎ শব্দে।",
              "amelioration": "চাপ দিলে, সন্ধ্যা ১১টার পর।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Borax ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Natrum Mur",
            "description": "এই রোগের ক্ষেত্রে Natrum Mur একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "মাসিক অনিয়মিত",
              "সহবাসে ব্যথা বা অনীহা",
              "বিষণ্ণতা ও একাকীত্ব পছন্দ করে",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সকাল ১০টা-১১টায়, রোদে, সান্ত্বনায়।",
              "amelioration": "খোলা বাতাসে, ঠান্ডা স্নানে, ডান পাশে শুলে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, অতিরিক্ত লবণ খাওয়ার ইচ্ছা, রোদে মাথাব্যথা এবং সান্ত্বনায় বৃদ্ধি নেট্রাম মিউরের প্রধান লক্ষণ। রোগী অন্তর্মুখী স্বভাবের হয়।"
          },
          {
            "name": "Agnus Castus",
            "description": "এই রোগের ক্ষেত্রে Agnus Castus একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "যৌন ইচ্ছা সম্পূর্ণ লোপ পাওয়া",
              "অতিরিক্ত যৌন মিলনের ফলে দুর্বলতা",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "মানসিক অবসাদ"
            ],
            "modalities": {
              "aggravation": "নড়াচড়ায়।",
              "amelioration": "বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Agnus Castus ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      }
    ]
  },
  {
    "id": "male",
    "name": "পুরুষ রোগ (Male Diseases)",
    "diseases": [
      {
        "id": "sexual_weakness",
        "name": "যৌন দুর্বলতা (Sexual Weakness)",
        "remedies": [
          {
            "name": "Lycopodium",
            "description": "এই রোগের ক্ষেত্রে Lycopodium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ইচ্ছা আছে কিন্তু ক্ষমতা নেই।",
              "অকাল বার্ধক্য ও স্মৃতিশক্তি হ্রাস।",
              "গরম খাবার পছন্দ ও মিষ্টি প্রিয়।"
            ],
            "mentalSymptoms": [
              "মানসিক দুশ্চিন্তা ও আত্মবিশ্বাসের অভাব।"
            ],
            "modalities": {
              "aggravation": "বিকাল ৪টা থেকে রাত ৮টা, ডান দিকে, গরমে।",
              "amelioration": "ঠান্ডা বাতাসে, নড়াচড়ায়, গরম পানীয়তে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, ডান দিকের আক্রমণ, বিকাল ৪টা থেকে রাত ৮টা পর্যন্ত বৃদ্ধি এবং পেটে গ্যাসের সমস্যা লাইকোপোডিয়ামের নির্দেশক।"
          },
          {
            "name": "Agnus Castus",
            "description": "এই রোগের ক্ষেত্রে Agnus Castus একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "অতিরিক্ত যৌন অপব্যবহারের ফলে দুর্বলতা।",
              "লিঙ্গ ছোট ও শিথিল হয়ে যাওয়া।",
              "স্মৃতিশক্তি খুব দুর্বল ও বিষণ্ণতা।",
              "অকাল বার্ধক্য ও চুল পাকা।"
            ],
            "mentalSymptoms": [
              "যৌন ইচ্ছা ও ক্ষমতা উভয়ই নষ্ট।"
            ],
            "modalities": {
              "aggravation": "নড়াচড়ায়।",
              "amelioration": "বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Agnus Castus ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Selenium",
            "description": "এই রোগের ক্ষেত্রে Selenium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "যৌন দুর্বলতা ও দ্রুত বীর্যপাত।",
              "পায়খানার সময় বা প্রস্রাবের পর বীর্যপাত।",
              "চুল পড়া ও শারীরিক দুর্বলতা।",
              "স্বপ্নদোষ ও কামউত্তেজনা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ঘুমের পর, গরমে, চা পানে।",
              "amelioration": "ঠান্ডা বাতাসে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Selenium ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          },
          {
            "name": "Belladonna",
            "description": "এই রোগের ক্ষেত্রে Belladonna একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হঠাৎ করে রোগের আক্রমণ।",
              "প্রচণ্ড জ্বর ও মাথাব্যথা।",
              "মুখমণ্ডল লাল হয়ে যাওয়া।",
              "গলা ব্যথা ও গিলতে কষ্ট।"
            ],
            "mentalSymptoms": [
              "আলো ও শব্দে বিরক্তি।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, শব্দে, আলোতে, বিকাল ৩টা বা রাত ১১টার পর।",
              "amelioration": "আধা-শোয়া অবস্থায়, গরম ঘরে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, হঠাৎ আক্রমণ, দপদপ করা ব্যথা, লালচে ভাব এবং উত্তাপ বেলেডোনার প্রধান লক্ষণ। বোরিক একে প্রদাহের প্রাথমিক অবস্থার ওষুধ বলেছেন।"
          }
        ]
      },
      {
        "id": "impotence",
        "name": "ধ্বজভঙ্গ (Impotence)",
        "remedies": [
          {
            "name": "Caladium Seg",
            "description": "এই রোগের ক্ষেত্রে Caladium Seg একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "লিঙ্গ শিথিল, কিন্তু কামউত্তেজনা থাকে।",
              "ধূমপানের কারণে ধ্বজভঙ্গ।",
              "যৌন মিলনের সময় লিঙ্গ নেতিয়ে পড়ে।",
              "চুলকানি ও ঘাম।",
              "শব্দে চমকে ওঠে।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "গরমে, ঘুমালে, তামাকের ধোঁয়ায়।",
              "amelioration": "ঠান্ডা বাতাসে, ঘাম হলে, ছোট ঘুমে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Caladium Seg ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Conium Mac",
            "description": "এই রোগের ক্ষেত্রে Conium Mac একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "লিঙ্গ উত্থান হয় না বা অল্পতেই পড়ে যায়।",
              "বয়স্কদের বা অবিবাহিতদের জন্য।",
              "মাথা ঘোরা ও দুর্বলতা।",
              "স্মৃতিশক্তি হ্রাস।"
            ],
            "mentalSymptoms": [
              "যৌন ইচ্ছা দমন করার ফলে সমস্যা।"
            ],
            "modalities": {
              "aggravation": "শুয়ে থাকলে, রাতে, অবিবাহিত অবস্থায়।",
              "amelioration": "অন্ধকারে, পা ঝুলিয়ে বসলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Conium Mac ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Lycopodium",
            "description": "এই রোগের ক্ষেত্রে Lycopodium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "লিঙ্গ শিথিল হয়ে যায়",
              "বয়স্কদের পুরুষত্বহীনতা",
              "আত্মবিশ্বাসের অভাব",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "বিকাল ৪টা থেকে রাত ৮টা, ডান দিকে, গরমে।",
              "amelioration": "ঠান্ডা বাতাসে, নড়াচড়ায়, গরম পানীয়তে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, ডান দিকের আক্রমণ, বিকাল ৪টা থেকে রাত ৮টা পর্যন্ত বৃদ্ধি এবং পেটে গ্যাসের সমস্যা লাইকোপোডিয়ামের নির্দেশক।"
          },
          {
            "name": "Caladium",
            "description": "এই রোগের ক্ষেত্রে Caladium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "যৌন ইচ্ছা প্রবল কিন্তু লিঙ্গ উত্থান হয় না",
              "ঘুমের মধ্যে বীর্যপাত",
              "তামাক খাওয়ার কুফল",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "গরমে, ঘুমালে, তামাকের ধোঁয়ায়।",
              "amelioration": "ঠান্ডা বাতাসে, ঘাম হলে, ছোট ঘুমে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Caladium ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Conium",
            "description": "এই রোগের ক্ষেত্রে Conium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "দীর্ঘদিন যৌন মিলন থেকে বিরত থাকার ফলে সমস্যা",
              "অকাল বীর্যপাত",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "মানসিক অবসাদ"
            ],
            "modalities": {
              "aggravation": "শুয়ে থাকলে, রাতে, অবিবাহিত অবস্থায়।",
              "amelioration": "অন্ধকারে, পা ঝুলিয়ে বসলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Conium ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          }
        ]
      },
      {
        "id": "prostatitis",
        "name": "প্রোস্টেট বৃদ্ধি (Prostatitis)",
        "remedies": [
          {
            "name": "Sabal Serrulata",
            "description": "এই রোগের ক্ষেত্রে Sabal Serrulata একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রোস্টেট গ্ল্যান্ড বড় হয়ে প্রস্রাবে বাধা।",
              "রাতে বারবার প্রস্রাব করতে হয়।",
              "প্রস্রাব শুরু করতে দেরি হয়।",
              "অণ্ডকোষে ঠান্ডা বোধ।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ঠান্ডায়, আর্দ্র আবহাওয়ায়।",
              "amelioration": "গরমে, বিশ্রামে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Sabal Serrulata ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Thuja Occ",
            "description": "এই রোগের ক্ষেত্রে Thuja Occ একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রোস্টেট বড় ও প্রস্রাবে জ্বালা।",
              "প্রস্রাবের ধারা সরু বা দ্বিখণ্ডিত।",
              "টিকা বা গনোরিয়ার ইতিহাস।",
              "চামড়ায় আঁচিল।",
              "স্বপ্নদোষ।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "আর্দ্র আবহাওয়ায়, সকালে (৩টা)।",
              "amelioration": "মাথা পিছনের দিকে বাঁকালে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Thuja Occ ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Conium",
            "description": "এই রোগের ক্ষেত্রে Conium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রোস্টেট গ্রন্থি শক্ত হয়ে যাওয়া",
              "প্রস্রাব থেমে থেমে হওয়া",
              "বয়স্কদের প্রোস্টেটের সমস্যা",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "শুয়ে থাকলে, রাতে, অবিবাহিত অবস্থায়।",
              "amelioration": "অন্ধকারে, পা ঝুলিয়ে বসলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Conium ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Thuja",
            "description": "এই রোগের ক্ষেত্রে Thuja একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "প্রস্রাবের ধারা দুই ভাগে বিভক্ত হয়ে যায়",
              "গনোরিয়ার ইতিহাস থাকলে",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "প্রস্রাবের পর মনে হয় আরও রয়ে গেছে"
            ],
            "modalities": {
              "aggravation": "আর্দ্র আবহাওয়ায়, সকালে (৩টা)।",
              "amelioration": "মাথা পিছনের দিকে বাঁকালে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Thuja ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      },
      {
        "id": "spermatorrhea",
        "name": "ধাতুক্ষয় (Spermatorrhea)",
        "remedies": [
          {
            "name": "Acid Phos",
            "description": "এই রোগের ক্ষেত্রে Acid Phos একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "অতিরিক্ত শুক্রক্ষয়ের ফলে দুর্বলতা।",
              "উদাসীনতা ও স্মৃতিশক্তি হ্রাস।",
              "প্রস্রাবের সাথে ধাতু যায়।",
              "চুল পড়া ও অকাল পক্কতা।"
            ],
            "mentalSymptoms": [
              "শারীরিক ও মানসিক ক্লান্তি।"
            ],
            "modalities": {
              "aggravation": "পরিশ্রমে, কথা বললে, সঙ্গীতে, শোক বা দুশ্চিন্তায়।",
              "amelioration": "সামান্য ঘুমে, গরমে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Acid Phos ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "China",
            "description": "এই রোগের ক্ষেত্রে China একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "বীর্যপাতে অত্যন্ত দুর্বলতা।",
              "কানে ভোঁ ভোঁ শব্দ।",
              "পেটে গ্যাস ও হজমে সমস্যা।",
              "রক্তশূন্যতা ও ফ্যাকাশে চেহারা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "সামান্য স্পর্শে, তরল পদার্থ নির্গত হলে।",
              "amelioration": "জোরে চাপ দিলে, গরমে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, China ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Selenium",
            "description": "এই রোগের ক্ষেত্রে Selenium একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "ঘুমের মধ্যে বা মলত্যাগের সময় বীর্যপাত",
              "যৌন চিন্তার ফলে বীর্যপাত",
              "চুল পড়ে যাওয়া",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ঘুমের পর, গরমে, চা পানে।",
              "amelioration": "ঠান্ডা বাতাসে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Selenium ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Staphysagria",
            "description": "এই রোগের ক্ষেত্রে Staphysagria একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "অতিরিক্ত হস্তমৈথুনের ফলে ধাতুক্ষয়",
              "অপরাধবোধ ও বিষণ্ণতা",
              "স্মৃতিশক্তি হ্রাস",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "রাগে, অপমানে, স্পর্শে।",
              "amelioration": "বিশ্রামে, রাতে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Staphysagria ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          }
        ]
      },
      {
        "id": "hydrocele",
        "name": "একশিরা (Hydrocele)",
        "remedies": [
          {
            "name": "Rhododendron",
            "description": "এই রোগের ক্ষেত্রে Rhododendron একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "অণ্ডকোষ ফোলা ও ব্যথা।",
              "বাম অণ্ডকোষ বেশি আক্রান্ত।",
              "শিরায় টান ধরা ব্যথা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "ঝড়-বৃষ্টির আগে ব্যথা বাড়ে।",
              "amelioration": "চলাফেরা করলে ব্যথা কমে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Rhododendron ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Pulsatilla",
            "description": "এই রোগের ক্ষেত্রে Pulsatilla একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "অণ্ডকোষ ফোলা ও ঝুলে পড়া।",
              "তৃষ্ণাহীনতা।",
              "নম্র ও শান্ত স্বভাব।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "গরমে, সন্ধ্যায়, চর্বিযুক্ত খাবারে।",
              "amelioration": "খোলা বাতাসে, ঠান্ডা প্রয়োগে, ধীরে ধীরে হাঁটলে।"
            },
            "materiaMedicaInfo": "বোরিকের মতে, পরিবর্তনশীল লক্ষণ, তৃষ্ণাহীনতা এবং মুক্ত বাতাসে উপশম পালসাটিলার প্রধান বৈশিষ্ট্য। রোগী নম্র ও ক্রন্দনশীল স্বভাবের হয়।"
          },
          {
            "name": "Clematis",
            "description": "এই রোগের ক্ষেত্রে Clematis একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "অণ্ডকোষ শক্ত হয়ে ফুলে যাওয়া",
              "গনোরিয়ার ইতিহাস থাকলে",
              "ডান দিকের অণ্ডকোষে ব্যথা",
              "ঘুমের ব্যাঘাত।",
              "হালকা জ্বর বা গা ম্যাজ ম্যাজ করা।"
            ],
            "mentalSymptoms": [
              "রোগের কারণে মানসিক অস্থিরতা বা ক্লান্তি দেখা দিতে পারে।",
              "সঠিক চিকিৎসায় মানসিক অবস্থার উন্নতি হয়।"
            ],
            "modalities": {
              "aggravation": "রাতে, বিছানার গরমে, ঠান্ডা জলে ধুলে।",
              "amelioration": "খোলা বাতাসে, ঘাম হলে।"
            },
            "materiaMedicaInfo": "কেন্ট ও বোরিকের রেপার্টরি এবং মেটেরিয়া মেডিকা অনুযায়ী, Clematis ওষুধটি এই লক্ষণে অত্যন্ত কার্যকরী। এর নির্দিষ্ট চরিত্রগত লক্ষণগুলো রোগীর শারীরিক ও মানসিক অবস্থার সাথে মিলিয়ে প্রয়োগ করতে হয়।"
          },
          {
            "name": "Arnica Montana",
            "description": "এই রোগের ক্ষেত্রে Arnica Montana একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "আঘাতজনিত কারণে ব্যথা।",
              "শরীরে কালশিটে পড়া।",
              "অতিরিক্ত পরিশ্রমে ক্লান্তি।"
            ],
            "mentalSymptoms": [
              "বিছানা শক্ত মনে হওয়া।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, নড়াচড়ায়, আর্দ্র ঠান্ডায়।",
              "amelioration": "শুয়ে থাকলে, মাথা নিচু করে শুলে।"
            },
            "materiaMedicaInfo": "বোরিক ও কেন্টের মতে, এটি আঘাতজনিত যন্ত্রণার প্রধান ওষুধ। রোগী স্পর্শকাতর থাকে এবং বিছানা শক্ত মনে করে।"
          },
          {
            "name": "Belladonna",
            "description": "এই রোগের ক্ষেত্রে Belladonna একটি অত্যন্ত কার্যকরী হোমিওপ্যাথিক ওষুধ। এটি রোগীর শারীরিক ও মানসিক লক্ষণগুলোর ওপর ভিত্তি করে কাজ করে।",
            "mainSymptoms": [
              "হঠাৎ করে রোগের আক্রমণ।",
              "প্রচণ্ড জ্বর ও মাথাব্যথা।",
              "মুখমণ্ডল লাল হয়ে যাওয়া।",
              "গলা ব্যথা ও গিলতে কষ্ট।"
            ],
            "mentalSymptoms": [
              "আলো ও শব্দে বিরক্তি।"
            ],
            "modalities": {
              "aggravation": "স্পর্শে, শব্দে, আলোতে, বিকাল ৩টা বা রাত ১১টার পর।",
              "amelioration": "আধা-শোয়া অবস্থায়, গরম ঘরে।"
            },
            "materiaMedicaInfo": "কেন্টের মতে, হঠাৎ আক্রমণ, দপদপ করা ব্যথা, লালচে ভাব এবং উত্তাপ বেলেডোনার প্রধান লক্ষণ। বোরিক একে প্রদাহের প্রাথমিক অবস্থার ওষুধ বলেছেন।"
          }
        ]
      }
    ]
  }
];

const blogPosts = [
  {
    id: 1,
    title: "\u09B6\u09C0\u09A4\u0995\u09BE\u09B2\u09C0\u09A8 \u09B8\u09B0\u09CD\u09A6\u09BF-\u0995\u09BE\u09B6\u09BF \u0993 \u09B9\u09CB\u09AE\u09BF\u0993\u09AA\u09CD\u09AF\u09BE\u09A5\u09BF",
    excerpt: "\u09B6\u09C0\u09A4\u09C7\u09B0 \u09B6\u09C1\u09B0\u09C1\u09A4\u09C7 \u09B8\u09B0\u09CD\u09A6\u09BF-\u0995\u09BE\u09B6\u09BF\u09A4\u09C7 \u098F\u0995\u09CB\u09A8\u09BE\u0987\u099F \u098F\u09AC\u0982 \u09AC\u09CD\u09B0\u09BE\u09DF\u09CB\u09A8\u09BF\u09DF\u09BE \u0995\u09C0\u09AD\u09BE\u09AC\u09C7 \u0995\u09BE\u099C \u0995\u09B0\u09C7?",
    content: "\u09B6\u09C0\u09A4\u0995\u09BE\u09B2 \u0986\u09B8\u09BE\u09B0 \u09B8\u09BE\u09A5\u09C7 \u09B8\u09BE\u09A5\u09C7\u0987 \u09B8\u09B0\u09CD\u09A6\u09BF-\u0995\u09BE\u09B6\u09BF\u09B0 \u09AA\u09CD\u09B0\u0995\u09CB\u09AA \u09AC\u09C7\u09DC\u09C7 \u09AF\u09BE\u09DF\u0964 \u09AC\u09BF\u09B6\u09C7\u09B7 \u0995\u09B0\u09C7 \u098B\u09A4\u09C1 \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8\u09C7\u09B0 \u098F\u0987 \u09B8\u09AE\u09DF\u09C7 \u099B\u09CB\u099F \u09A5\u09C7\u0995\u09C7 \u09AC\u09DC \u09B8\u09AC\u09BE\u0987 \u09A0\u09BE\u09A8\u09CD\u09A1\u09BE \u099C\u09A8\u09BF\u09A4 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE\u09DF \u09AD\u09C1\u0997\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u09A8\u0964 \u09B9\u09CB\u09AE\u09BF\u0993\u09AA\u09CD\u09AF\u09BE\u09A5\u09BF \u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE\u09DF \u09B6\u09C0\u09A4\u0995\u09BE\u09B2\u09C0\u09A8 \u09B8\u09B0\u09CD\u09A6\u09BF-\u0995\u09BE\u09B6\u09BF\u09B0 \u099C\u09A8\u09CD\u09AF \u0985\u09A4\u09CD\u09AF\u09A8\u09CD\u09A4 \u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09B0\u09C0 \u0995\u09BF\u099B\u09C1 \u0993\u09B7\u09C1\u09A7 \u09B0\u09DF\u09C7\u099B\u09C7 \u09AF\u09BE \u09A6\u09CD\u09B0\u09C1\u09A4 \u0986\u09B0\u09CB\u0997\u09CD\u09AF \u09AA\u09CD\u09B0\u09A6\u09BE\u09A8 \u0995\u09B0\u09C7 \u098F\u09AC\u0982 \u09B6\u09B0\u09C0\u09B0\u09C7\u09B0 \u09B0\u09CB\u0997 \u09AA\u09CD\u09B0\u09A4\u09BF\u09B0\u09CB\u09A7 \u0995\u09CD\u09B7\u09AE\u09A4\u09BE \u09AC\u09C3\u09A6\u09CD\u09A7\u09BF \u0995\u09B0\u09C7\u0964\n\n\u09B6\u09C0\u09A4\u09C7\u09B0 \u09B6\u09C1\u09B0\u09C1\u09A4\u09C7 \u09B9\u09A0\u09BE\u09CE \u09A0\u09BE\u09A8\u09CD\u09A1\u09BE \u09AC\u09BE\u09A4\u09BE\u09B8 \u09B2\u09C7\u0997\u09C7 \u09AF\u09A6\u09BF \u09B8\u09B0\u09CD\u09A6\u09BF-\u099C\u09CD\u09AC\u09B0 \u09B6\u09C1\u09B0\u09C1 \u09B9\u09DF, \u098F\u09AC\u0982 \u09B0\u09CB\u0997\u09C0 \u0985\u09A4\u09CD\u09AF\u09A8\u09CD\u09A4 \u0985\u09B8\u09CD\u09A5\u09BF\u09B0\u09A4\u09BE \u0985\u09A8\u09C1\u09AD\u09AC \u0995\u09B0\u09C7\u09A8, \u09A4\u09AC\u09C7 **\u098F\u0995\u09CB\u09A8\u09BE\u0987\u099F \u09A8\u09CD\u09AF\u09BE\u09AA\u09C7\u09B2\u09BE\u09B8 (Aconite Napellus)** \u099C\u09BE\u09A6\u09C1\u09B0 \u09AE\u09A4\u09CB \u0995\u09BE\u099C \u0995\u09B0\u09C7\u0964 \u098F\u099F\u09BF \u09B0\u09CB\u0997\u09C7\u09B0 \u09AA\u09CD\u09B0\u09BE\u09A5\u09AE\u09BF\u0995 \u0985\u09AC\u09B8\u09CD\u09A5\u09BE\u09DF \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09B2\u09C7 \u09B0\u09CB\u0997 \u0986\u09B0 \u09AC\u09BE\u09DC\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7 \u09A8\u09BE\u0964\n\n\u09AF\u09A6\u09BF \u09B8\u09B0\u09CD\u09A6\u09BF-\u0995\u09BE\u09B6\u09BF\u09B0 \u09B8\u09BE\u09A5\u09C7 \u09AC\u09C1\u0995\u09C7 \u09AC\u09CD\u09AF\u09A5\u09BE \u09A5\u09BE\u0995\u09C7 \u098F\u09AC\u0982 \u09A8\u09DC\u09BE\u099A\u09DC\u09BE \u0995\u09B0\u09B2\u09C7 \u09B8\u09C7\u0987 \u09AC\u09CD\u09AF\u09A5\u09BE \u09AC\u09BE\u09DC\u09C7, \u09A4\u09AC\u09C7 **\u09AC\u09CD\u09B0\u09BE\u09DF\u09CB\u09A8\u09BF\u09DF\u09BE \u0985\u09CD\u09AF\u09BE\u09B2\u09AC\u09BE (Bryonia Alba)** \u0989\u09AA\u09AF\u09C1\u0995\u09CD\u09A4 \u0993\u09B7\u09C1\u09A7\u0964 \u098F\u0987 \u09B0\u09CB\u0997\u09C0\u09A6\u09C7\u09B0 \u09A0\u09CB\u0981\u099F-\u099C\u09BF\u09B9\u09CD\u09AC\u09BE \u09B6\u09C1\u0995\u09BF\u09DF\u09C7 \u09AF\u09BE\u09DF \u098F\u09AC\u0982 \u09AA\u09CD\u09B0\u099A\u09C1\u09B0 \u099C\u09B2 \u09AA\u09BF\u09AA\u09BE\u09B8\u09BE \u09A5\u09BE\u0995\u09C7\u0964 \u09A4\u09BE\u09B0\u09BE \u099A\u09C1\u09AA\u099A\u09BE\u09AA \u09B6\u09C1\u09DF\u09C7 \u09A5\u09BE\u0995\u09A4\u09C7 \u09AA\u099B\u09A8\u09CD\u09A6 \u0995\u09B0\u09C7\u09A8\u0964\n\n\u09B6\u09C0\u09A4\u0995\u09BE\u09B2\u09C7 \u09A8\u09BE\u0995 \u09A6\u09BF\u09DF\u09C7 \u09AA\u09BE\u09A4\u09B2\u09BE \u099C\u09B2 \u09AA\u09DC\u09BE, \u09B9\u09BE\u0981\u099A\u09BF \u098F\u09AC\u0982 \u09B8\u09C7\u0987 \u09B8\u09BE\u09A5\u09C7 \u09A8\u09BE\u0995\u09C7 \u099C\u09CD\u09AC\u09BE\u09B2\u09BE \u09A5\u09BE\u0995\u09B2\u09C7 **\u0986\u09B0\u09CD\u09B8\u09C7\u09A8\u09BF\u0995 \u0985\u09CD\u09AF\u09BE\u09B2\u09AC\u09BE\u09AE (Arsenic Album)** \u0996\u09C1\u09AC \u09AD\u09BE\u09B2\u09CB \u0995\u09BE\u099C \u0995\u09B0\u09C7\u0964 \u098F\u0987 \u09B0\u09CB\u0997\u09C0\u09A6\u09C7\u09B0 \u0997\u09B0\u09AE \u09AA\u09BE\u09A8\u09C0\u09DF \u09AA\u09BE\u09A8\u09C7 \u0986\u09B0\u09BE\u09AE \u09AC\u09CB\u09A7 \u09B9\u09DF \u098F\u09AC\u0982 \u09A4\u09BE\u09B0\u09BE \u0996\u09C1\u09AC \u09A6\u09C1\u09B0\u09CD\u09AC\u09B2\u09A4\u09BE \u0985\u09A8\u09C1\u09AD\u09AC \u0995\u09B0\u09C7\u09A8\u0964 \u09AC\u09BF\u09B6\u09C7\u09B7 \u0995\u09B0\u09C7 \u09AE\u09A7\u09CD\u09AF\u09B0\u09BE\u09A4\u09C7 \u09A4\u09BE\u09A6\u09C7\u09B0 \u0995\u09B7\u09CD\u099F \u09AC\u09BE\u09DC\u09C7\u0964\n\n\u09AC\u09C3\u09B7\u09CD\u099F\u09BF\u09A4\u09C7 \u09AD\u09BF\u099C\u09C7 \u09AC\u09BE \u09B8\u09CD\u09AF\u09BE\u0981\u09A4\u09B8\u09CD\u09AF\u09BE\u0981\u09A4\u09C7 \u0986\u09AC\u09B9\u09BE\u0993\u09DF\u09BE\u09DF \u09A5\u09BE\u0995\u09BE\u09B0 \u09AB\u09B2\u09C7 \u09AF\u09A6\u09BF \u09B8\u09B0\u09CD\u09A6\u09BF-\u0995\u09BE\u09B6\u09BF \u09AC\u09BE \u0997\u09BE\u09DF\u09C7 \u09AC\u09CD\u09AF\u09A5\u09BE \u09B9\u09DF, \u09A4\u09AC\u09C7 **\u09B0\u09BE\u09B8 \u099F\u0995\u09CD\u09B8 (Rhus Tox)** \u0985\u09AC\u09CD\u09AF\u09B0\u09CD\u09A5\u0964 \u0986\u09B0 \u09AF\u09A6\u09BF \u0986\u09B0\u09CD\u09A6\u09CD\u09B0 \u0986\u09AC\u09B9\u09BE\u0993\u09DF\u09BE\u09DF \u09AC\u09BE \u0995\u09C1\u09DF\u09BE\u09B6\u09BE\u09DF \u09A5\u09BE\u0995\u09BE\u09B0 \u09AB\u09B2\u09C7 \u09A8\u09BE\u0995 \u09AC\u09A8\u09CD\u09A7 \u09B9\u09DF\u09C7 \u09AF\u09BE\u09DF \u098F\u09AC\u0982 \u09B8\u09B0\u09CD\u09A6\u09BF \u099C\u09AE\u09C7 \u09A5\u09BE\u0995\u09C7, \u09A4\u09AC\u09C7 **\u09A1\u09BE\u09B2\u0995\u09BE\u09AE\u09BE\u09B0\u09BE (Dulcamara)** \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09BE \u0989\u099A\u09BF\u09A4\u0964\n\n**\u09AA\u09CD\u09B0\u09A4\u09BF\u09B0\u09CB\u09A7 \u0993 \u09B8\u09A4\u09B0\u09CD\u0995\u09A4\u09BE:**\n\u09B6\u09C0\u09A4\u0995\u09BE\u09B2\u09C7 \u09B8\u09B0\u09CD\u09A6\u09BF-\u0995\u09BE\u09B6\u09BF \u09A5\u09C7\u0995\u09C7 \u09AC\u09BE\u0981\u099A\u09A4\u09C7 \u0997\u09B0\u09AE \u0995\u09BE\u09AA\u09DC \u09AA\u09B0\u09BE \u098F\u09AC\u0982 \u09A0\u09BE\u09A8\u09CD\u09A1\u09BE \u09AC\u09BE\u09A4\u09BE\u09B8 \u098F\u09DC\u09BF\u09DF\u09C7 \u099A\u09B2\u09BE \u099C\u09B0\u09C1\u09B0\u09BF\u0964 \u0995\u09C1\u09B8\u09C1\u09AE \u0997\u09B0\u09AE \u099C\u09B2 \u09AA\u09BE\u09A8 \u0995\u09B0\u09BE \u098F\u09AC\u0982 \u09AD\u09BF\u099F\u09BE\u09AE\u09BF\u09A8 \u09B8\u09BF \u09AF\u09C1\u0995\u09CD\u09A4 \u09AB\u09B2\u09AE\u09C2\u09B2 (\u09AF\u09C7\u09AE\u09A8 \u0995\u09AE\u09B2\u09BE, \u09B2\u09C7\u09AC\u09C1) \u0996\u09BE\u0993\u09DF\u09BE \u09B0\u09CB\u0997 \u09AA\u09CD\u09B0\u09A4\u09BF\u09B0\u09CB\u09A7 \u0995\u09CD\u09B7\u09AE\u09A4\u09BE \u09AC\u09BE\u09DC\u09BE\u09A4\u09C7 \u09B8\u09BE\u09B9\u09BE\u09AF\u09CD\u09AF \u0995\u09B0\u09C7\u0964 \u09A7\u09C1\u09B2\u09CB\u09AC\u09BE\u09B2\u09BF \u098F\u09DC\u09BF\u09DF\u09C7 \u099A\u09B2\u09BE \u098F\u09AC\u0982 \u09AC\u09BE\u0987\u09B0\u09C7 \u09AC\u09C7\u09B0 \u09B9\u09B2\u09C7 \u09AE\u09BE\u09B8\u09CD\u0995 \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09BE \u0989\u099A\u09BF\u09A4\u0964 \u09AF\u09A6\u09BF \u09B8\u09B0\u09CD\u09A6\u09BF-\u0995\u09BE\u09B6\u09BF\u09B0 \u09B8\u09BE\u09A5\u09C7 \u09B6\u09CD\u09AC\u09BE\u09B8\u0995\u09B7\u09CD\u099F, \u09AC\u09C1\u0995\u09C7 \u09A4\u09C0\u09AC\u09CD\u09B0 \u09AC\u09CD\u09AF\u09A5\u09BE \u09AC\u09BE \u0989\u099A\u09CD\u099A \u09AE\u09BE\u09A4\u09CD\u09B0\u09BE\u09B0 \u099C\u09CD\u09AC\u09B0 \u09A5\u09BE\u0995\u09C7, \u09A4\u09AC\u09C7 \u09A6\u09CD\u09B0\u09C1\u09A4 \u099A\u09BF\u0995\u09BF\u09CE\u09B8\u0995\u09C7\u09B0 \u09AA\u09B0\u09BE\u09AE\u09B0\u09CD\u09B6 \u09A8\u09C7\u0993\u09DF\u09BE \u09AA\u09CD\u09B0\u09DF\u09CB\u099C\u09A8\u0964 \u09B8\u09A0\u09BF\u0995 \u09B2\u0995\u09CD\u09B7\u09A8 \u09AE\u09BF\u09B2\u09BF\u09DF\u09C7 \u09B9\u09CB\u09AE\u09BF\u0993\u09AA\u09CD\u09AF\u09BE\u09A5\u09BF \u0993\u09B7\u09C1\u09A7 \u09B8\u09C7\u09AC\u09A8 \u0995\u09B0\u09B2\u09C7 \u09B6\u09C0\u09A4\u0995\u09BE\u09B2\u09C0\u09A8 \u09B8\u09B0\u09CD\u09A6\u09BF-\u0995\u09BE\u09B6\u09BF \u09A5\u09C7\u0995\u09C7 \u09A6\u09CD\u09B0\u09C1\u09A4 \u098F\u09AC\u0982 \u09AA\u09BE\u09B0\u09CD\u09B6\u09CD\u09AC\u09AA\u09CD\u09B0\u09A4\u09BF\u0995\u09CD\u09B0\u09BF\u09DF\u09BE \u09AE\u09C1\u0995\u09CD\u09A4 \u0986\u09B0\u09CB\u0997\u09CD\u09AF \u09B2\u09BE\u09AD \u0995\u09B0\u09BE \u09B8\u09AE\u09CD\u09AD\u09AC\u0964",
    date: "\u09E8\u09E6\u09E8\u09E9-\u09E7\u09E6-\u09E7\u09EB",
    author: "\u09A1\u09BE\u0983 \u09B0\u09AB\u09BF\u0995 \u0986\u09B9\u09AE\u09C7\u09A6",
    category: "\u098B\u09A4\u09C1\u09AD\u09BF\u09A4\u09CD\u09A4\u09BF\u0995 \u09B0\u09CB\u0997",
    image: "https://picsum.photos/seed/cold/800/600"
  },
  {
    id: 2,
    title: "\u09B6\u09BF\u09B6\u09C1\u09A6\u09C7\u09B0 \u09A6\u09BE\u0981\u09A4 \u0993\u09A0\u09BE\u09B0 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE",
    excerpt: "\u09B6\u09BF\u09B6\u09C1\u09A6\u09C7\u09B0 \u09A6\u09BE\u0981\u09A4 \u0993\u09A0\u09BE\u09B0 \u09B8\u09AE\u09DF \u0995\u09BE\u09A8\u09CD\u09A8\u09BE\u0995\u09BE\u099F\u09BF \u0993 \u09AA\u09C7\u099F\u09C7\u09B0 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE\u09DF \u0995\u09CD\u09AF\u09BE\u09AE\u09CB\u09AE\u09BF\u09B2\u09BE\u0964",
    content: "\u09B6\u09BF\u09B6\u09C1\u09A6\u09C7\u09B0 \u09A6\u09BE\u0981\u09A4 \u0993\u09A0\u09BE\u09B0 \u09B8\u09AE\u09DF\u099F\u09BF \u09AE\u09BE-\u09AC\u09BE\u09AC\u09BE \u098F\u09AC\u0982 \u09B6\u09BF\u09B6\u09C1 \u0989\u09AD\u09DF\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF\u0987 \u09AC\u09C7\u09B6 \u0995\u09B7\u09CD\u099F\u0995\u09B0 \u09B9\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964 \u098F\u0987 \u09B8\u09AE\u09DF\u09C7 \u09B6\u09BF\u09B6\u09C1\u09B0\u09BE \u0996\u09BF\u099F\u0996\u09BF\u099F\u09C7 \u09B9\u09DF\u09C7 \u09AF\u09BE\u09DF, \u0995\u09BE\u09A8\u09CD\u09A8\u09BE\u0995\u09BE\u099F\u09BF \u0995\u09B0\u09C7 \u098F\u09AC\u0982 \u0985\u09A8\u09C7\u0995 \u09B8\u09AE\u09DF \u09AA\u09C7\u099F\u09C7\u09B0 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE\u09DF \u09AD\u09CB\u0997\u09C7\u0964 \u09B9\u09CB\u09AE\u09BF\u0993\u09AA\u09CD\u09AF\u09BE\u09A5\u09BF \u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE\u09DF \u09A6\u09BE\u0981\u09A4 \u0993\u09A0\u09BE\u09B0 \u0995\u09B7\u09CD\u099F \u09B2\u09BE\u0998\u09AC\u09C7 \u099A\u09AE\u09CE\u0995\u09BE\u09B0 \u0995\u09BF\u099B\u09C1 \u0993\u09B7\u09C1\u09A7 \u09B0\u09DF\u09C7\u099B\u09C7\u0964\n\n**\u0995\u09CD\u09AF\u09BE\u09AE\u09CB\u09AE\u09BF\u09B2\u09BE (Chamomilla):** \u09A6\u09BE\u0981\u09A4 \u0993\u09A0\u09BE\u09B0 \u09B8\u09AE\u09DF \u09AF\u09A6\u09BF \u09B6\u09BF\u09B6\u09C1 \u0985\u09A4\u09CD\u09AF\u09A8\u09CD\u09A4 \u0996\u09BF\u099F\u0996\u09BF\u099F\u09C7 \u09B9\u09DF\u09C7 \u09AF\u09BE\u09DF, \u0995\u09BF\u099B\u09C1\u09A4\u09C7\u0987 \u09B6\u09BE\u09A8\u09CD\u09A4 \u09B9\u09A4\u09C7 \u099A\u09BE\u09DF \u09A8\u09BE, \u098F\u09AC\u0982 \u0995\u09CB\u09B2\u09C7 \u099A\u09DC\u09C7 \u09AC\u09C7\u09DC\u09BE\u09A4\u09C7 \u099A\u09BE\u09DF, \u09A4\u09AC\u09C7 \u0995\u09CD\u09AF\u09BE\u09AE\u09CB\u09AE\u09BF\u09B2\u09BE \u09AA\u09CD\u09B0\u09A7\u09BE\u09A8 \u0993\u09B7\u09C1\u09A7\u0964 \u098F\u0987 \u09B6\u09BF\u09B6\u09C1\u09A6\u09C7\u09B0 \u098F\u0995 \u0997\u09BE\u09B2 \u09B2\u09BE\u09B2 \u098F\u09AC\u0982 \u0985\u09A8\u09CD\u09AF \u0997\u09BE\u09B2 \u09AB\u09CD\u09AF\u09BE\u0995\u09BE\u09B6\u09C7 \u09B9\u09A4\u09C7 \u09A6\u09C7\u0996\u09BE \u09AF\u09BE\u09DF\u0964 \u09A4\u09BE\u09A6\u09C7\u09B0 \u09AA\u09BE\u09DF\u0996\u09BE\u09A8\u09BE \u09B8\u09BE\u09A7\u09BE\u09B0\u09A3\u09A4 \u09B8\u09AC\u09C1\u099C \u09B0\u0999\u09C7\u09B0 \u098F\u09AC\u0982 \u09A6\u09C1\u09B0\u09CD\u0997\u09A8\u09CD\u09A7\u09AF\u09C1\u0995\u09CD\u09A4 \u09B9\u09DF\u0964\n\n**\u0995\u09CD\u09AF\u09BE\u09B2\u0995\u09C7\u09B0\u09BF\u09DF\u09BE \u0995\u09BE\u09B0\u09CD\u09AC (Calcarea Carb):** \u09AF\u09C7 \u09B8\u09AC \u09B6\u09BF\u09B6\u09C1 \u09A6\u09C7\u0996\u09A4\u09C7 \u09A8\u09BE\u09A6\u09C1\u09B8\u09A8\u09C1\u09A6\u09C1\u09B8, \u09AE\u09CB\u099F\u09BE \u098F\u09AC\u0982 \u09A5\u09B2\u09A5\u09B2\u09C7, \u09A4\u09BE\u09A6\u09C7\u09B0 \u09A6\u09BE\u0981\u09A4 \u0989\u09A0\u09A4\u09C7 \u09A6\u09C7\u09B0\u09BF \u09B9\u09B2\u09C7 \u0995\u09CD\u09AF\u09BE\u09B2\u0995\u09C7\u09B0\u09BF\u09DF\u09BE \u0995\u09BE\u09B0\u09CD\u09AC \u0996\u09C1\u09AC \u09AD\u09BE\u09B2\u09CB \u0995\u09BE\u099C \u0995\u09B0\u09C7\u0964 \u098F\u0987 \u09B6\u09BF\u09B6\u09C1\u09A6\u09C7\u09B0 \u09AE\u09BE\u09A5\u09BE\u09DF \u09AA\u09CD\u09B0\u099A\u09C1\u09B0 \u0998\u09BE\u09AE \u09B9\u09DF, \u09AC\u09BF\u09B6\u09C7\u09B7 \u0995\u09B0\u09C7 \u0998\u09C1\u09AE\u09C7\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7 \u09AC\u09BE\u09B2\u09BF\u09B6 \u09AD\u09BF\u099C\u09C7 \u09AF\u09BE\u09DF\u0964 \u09A4\u09BE\u09B0\u09BE \u09A1\u09BF\u09AE \u0996\u09C7\u09A4\u09C7 \u0996\u09C1\u09AC \u09AA\u099B\u09A8\u09CD\u09A6 \u0995\u09B0\u09C7\u0964\n\n**\u09AA\u09A1\u09CB\u09AB\u09BE\u0987\u09B2\u09BE\u09AE (Podophyllum):** \u09A6\u09BE\u0981\u09A4 \u0993\u09A0\u09BE\u09B0 \u09B8\u09AE\u09DF \u09AF\u09A6\u09BF \u09B6\u09BF\u09B6\u09C1\u09B0 \u0998\u09A8 \u0998\u09A8 \u09AA\u09BE\u09A4\u09B2\u09BE \u09AA\u09BE\u09DF\u0996\u09BE\u09A8\u09BE \u09B9\u09DF, \u09A4\u09AC\u09C7 \u09AA\u09A1\u09CB\u09AB\u09BE\u0987\u09B2\u09BE\u09AE \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09BE \u09AF\u09C7\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964 \u098F\u09A6\u09C7\u09B0 \u09AA\u09BE\u09DF\u0996\u09BE\u09A8\u09BE \u0996\u09C1\u09AC \u09A6\u09C1\u09B0\u09CD\u0997\u09A8\u09CD\u09A7\u09AF\u09C1\u0995\u09CD\u09A4 \u09B9\u09DF \u098F\u09AC\u0982 \u09B8\u0995\u09BE\u09B2\u09C7 \u09AC\u09C7\u09B6\u09BF \u09B9\u09DF\u0964 \u09B6\u09BF\u09B6\u09C1 \u09AA\u09BE\u09DF\u0996\u09BE\u09A8\u09BE\u09B0 \u0986\u0997\u09C7 \u0993 \u09AA\u09B0\u09C7 \u0996\u09C1\u09AC \u09A6\u09C1\u09B0\u09CD\u09AC\u09B2 \u09B9\u09DF\u09C7 \u09AA\u09DC\u09C7\u0964\n\n**\u09AE\u09CD\u09AF\u09BE\u0997\u09A8\u09C7\u09B6\u09BF\u09DF\u09BE \u0995\u09BE\u09B0\u09CD\u09AC (Magnesia Carb):** \u09A6\u09BE\u0981\u09A4 \u0993\u09A0\u09BE\u09B0 \u09B8\u09AE\u09DF \u09B6\u09BF\u09B6\u09C1\u09A6\u09C7\u09B0 \u09B9\u099C\u09AE\u09C7\u09B0 \u0997\u09A3\u09CD\u09A1\u0997\u09CB\u09B2 \u098F\u09AC\u0982 \u099F\u0995 \u0997\u09A8\u09CD\u09A7\u09AF\u09C1\u0995\u09CD\u09A4 \u09AA\u09BE\u09DF\u0996\u09BE\u09A8\u09BE \u09B9\u09B2\u09C7 \u098F\u099F\u09BF \u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09B0\u09C0\u0964 \u098F\u0987 \u09B6\u09BF\u09B6\u09C1\u09B0\u09BE \u09A6\u09C1\u09A7 \u09B8\u09B9\u09CD\u09AF \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7 \u09A8\u09BE\u0964\n\n**\u0998\u09B0\u09CB\u09DF\u09BE \u09AF\u09A4\u09CD\u09A8 \u0993 \u09AA\u09B0\u09BE\u09AE\u09B0\u09CD\u09B6:**\n\u09A6\u09BE\u0981\u09A4 \u0993\u09A0\u09BE\u09B0 \u09B8\u09AE\u09DF \u09B6\u09BF\u09B6\u09C1\u09A6\u09C7\u09B0 \u09AE\u09BE\u09DC\u09BF\u09A4\u09C7 \u09B8\u09C1\u09DC\u09B8\u09C1\u09DC\u09BF \u09AC\u09BE \u09AC\u09CD\u09AF\u09A5\u09BE \u09B9\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7, \u09A4\u09BE\u0987 \u09A4\u09BE\u09B0\u09BE \u09B9\u09BE\u09A4\u09C7\u09B0 \u0995\u09BE\u099B\u09C7 \u09AF\u09BE \u09AA\u09BE\u09DF \u09A4\u09BE\u0987 \u0995\u09BE\u09AE\u09DC\u09BE\u09A4\u09C7 \u099A\u09BE\u09DF\u0964 \u098F\u0987 \u09B8\u09AE\u09DF \u09A4\u09BE\u09A6\u09C7\u09B0 \u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0 \u0993 \u09A8\u09BF\u09B0\u09BE\u09AA\u09A6 \u0996\u09C7\u09B2\u09A8\u09BE \u09AC\u09BE \u099F\u09BF\u09A5\u09BE\u09B0 \u09A6\u09C7\u0993\u09DF\u09BE \u0989\u099A\u09BF\u09A4\u0964 \u09AE\u09BE\u09DC\u09BF \u09AE\u09CD\u09AF\u09BE\u09B8\u09BE\u099C \u0995\u09B0\u09C7 \u09A6\u09BF\u09B2\u09C7 \u09B6\u09BF\u09B6\u09C1\u09B0\u09BE \u0986\u09B0\u09BE\u09AE \u09AA\u09BE\u09DF\u0964 \u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0 \u09B8\u09C1\u09A4\u09BF \u0995\u09BE\u09AA\u09DC \u09A0\u09BE\u09A8\u09CD\u09A1\u09BE \u099C\u09B2\u09C7 \u09AD\u09BF\u099C\u09BF\u09DF\u09C7 \u09AE\u09BE\u09DC\u09BF\u09A4\u09C7 \u0986\u09B2\u09A4\u09CB \u0995\u09B0\u09C7 \u0998\u09B7\u09C7 \u09A6\u09C7\u0993\u09DF\u09BE \u09AF\u09C7\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964 \u098F\u0987 \u09B8\u09AE\u09DF\u09C7 \u09B6\u09BF\u09B6\u09C1\u09B0 \u0996\u09BE\u09AC\u09BE\u09B0\u09C7\u09B0 \u09AA\u09CD\u09B0\u09A4\u09BF \u0985\u09B0\u09C1\u099A\u09BF \u09A6\u09C7\u0996\u09BE \u09A6\u09BF\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7, \u09A4\u09BE\u0987 \u099C\u09CB\u09B0 \u0995\u09B0\u09C7 \u09A8\u09BE \u0996\u09BE\u0987\u09DF\u09C7 \u0985\u09B2\u09CD\u09AA \u0985\u09B2\u09CD\u09AA \u0995\u09B0\u09C7 \u09AC\u09BE\u09B0\u09AC\u09BE\u09B0 \u09A4\u09B0\u09B2 \u09AC\u09BE \u09A8\u09B0\u09AE \u0996\u09BE\u09AC\u09BE\u09B0 \u09A6\u09C7\u0993\u09DF\u09BE \u0989\u099A\u09BF\u09A4\u0964 \u09B2\u0995\u09CD\u09B7\u09A8 \u0985\u09A8\u09C1\u09AF\u09BE\u09DF\u09C0 \u09B8\u09A0\u09BF\u0995 \u09B9\u09CB\u09AE\u09BF\u0993\u09AA\u09CD\u09AF\u09BE\u09A5\u09BF \u0993\u09B7\u09C1\u09A7 \u09AA\u09CD\u09B0\u09DF\u09CB\u0997 \u0995\u09B0\u09B2\u09C7 \u09B6\u09BF\u09B6\u09C1\u09B0\u09BE \u098F\u0987 \u0995\u09A0\u09BF\u09A8 \u09B8\u09AE\u09DF\u099F\u09BF \u09B9\u09BE\u09B8\u09BF\u0996\u09C1\u09B6\u09BF\u09AD\u09BE\u09AC\u09C7 \u09AA\u09BE\u09B0 \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7 \u098F\u09AC\u0982 \u09A4\u09BE\u09A6\u09C7\u09B0 \u09A6\u09BE\u0981\u09A4 \u0993\u09A0\u09BE\u09B0 \u09AA\u09CD\u09B0\u0995\u09CD\u09B0\u09BF\u09DF\u09BE \u09B8\u09B9\u099C \u09B9\u09DF\u0964",
    date: "\u09E8\u09E6\u09E8\u09E9-\u09E7\u09E7-\u09E6\u09E8",
    author: "\u09A1\u09BE\u0983 \u09B8\u09C1\u09AE\u09BE\u0987\u09DF\u09BE \u0987\u09B8\u09B2\u09BE\u09AE",
    category: "\u09B6\u09BF\u09B6\u09C1 \u09B8\u09CD\u09AC\u09BE\u09B8\u09CD\u09A5\u09CD\u09AF",
    image: "https://picsum.photos/seed/baby/800/600"
  },
  {
    id: 3,
    title: "\u09B9\u09CB\u09AE\u09BF\u0993\u09AA\u09CD\u09AF\u09BE\u09A5\u09BF \u0993\u09B7\u09C1\u09A7 \u0996\u09BE\u0993\u09DF\u09BE\u09B0 \u09A8\u09BF\u09DF\u09AE",
    excerpt: "\u0993\u09B7\u09C1\u09A7 \u0996\u09BE\u0993\u09DF\u09BE\u09B0 \u0986\u0997\u09C7 \u0993 \u09AA\u09B0\u09C7 \u0995\u09C0 \u0995\u09C0 \u09AE\u09BE\u09A8\u09BE \u099C\u09B0\u09C1\u09B0\u09BF?",
    content: "\u09B9\u09CB\u09AE\u09BF\u0993\u09AA\u09CD\u09AF\u09BE\u09A5\u09BF \u0993\u09B7\u09C1\u09A7 \u0985\u09A4\u09CD\u09AF\u09A8\u09CD\u09A4 \u09B8\u09C2\u0995\u09CD\u09B7\u09CD\u09AE \u09AE\u09BE\u09A4\u09CD\u09B0\u09BE\u09DF \u0995\u09BE\u099C \u0995\u09B0\u09C7, \u09A4\u09BE\u0987 \u098F\u09B0 \u09AA\u09C2\u09B0\u09CD\u09A3 \u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09BE\u09B0\u09BF\u09A4\u09BE \u09AA\u09BE\u0993\u09DF\u09BE\u09B0 \u099C\u09A8\u09CD\u09AF \u0993\u09B7\u09C1\u09A7 \u09B8\u09C7\u09AC\u09A8\u09C7\u09B0 \u0995\u09BF\u099B\u09C1 \u09A8\u09BF\u09DF\u09AE \u09AE\u09C7\u09A8\u09C7 \u099A\u09B2\u09BE \u099C\u09B0\u09C1\u09B0\u09BF\u0964 \u09B8\u09A0\u09BF\u0995 \u09A8\u09BF\u09DF\u09AE \u09A8\u09BE \u09AE\u09BE\u09A8\u09B2\u09C7 \u0993\u09B7\u09C1\u09A7\u09C7\u09B0 \u0995\u09CD\u09B0\u09BF\u09DF\u09BE \u09A8\u09B7\u09CD\u099F \u09B9\u09DF\u09C7 \u09AF\u09C7\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7 \u09AC\u09BE \u09A7\u09C0\u09B0\u0997\u09A4\u09BF\u09A4\u09C7 \u0995\u09BE\u099C \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964\n\n\u09E7. **\u0996\u09BE\u09AC\u09BE\u09B0 \u0993 \u0993\u09B7\u09C1\u09A7\u09C7\u09B0 \u09AC\u09CD\u09AF\u09AC\u09A7\u09BE\u09A8:** \u09B9\u09CB\u09AE\u09BF\u0993\u09AA\u09CD\u09AF\u09BE\u09A5\u09BF \u0993\u09B7\u09C1\u09A7 \u0996\u09BE\u0993\u09DF\u09BE\u09B0 \u0985\u09A8\u09CD\u09A4\u09A4 \u09E7\u09EB \u09A5\u09C7\u0995\u09C7 \u09E8\u09E6 \u09AE\u09BF\u09A8\u09BF\u099F \u0986\u0997\u09C7 \u098F\u09AC\u0982 \u09AA\u09B0\u09C7 \u0985\u09A8\u09CD\u09AF \u0995\u09CB\u09A8\u09CB \u0996\u09BE\u09AC\u09BE\u09B0 \u09AC\u09BE \u09AA\u09BE\u09A8\u09C0\u09DF \u0997\u09CD\u09B0\u09B9\u09A3 \u0995\u09B0\u09BE \u0989\u099A\u09BF\u09A4 \u09A8\u09DF\u0964 \u09AE\u09C1\u0996 \u0997\u09B9\u09CD\u09AC\u09B0 \u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0 \u09A5\u09BE\u0995\u09B2\u09C7 \u0993\u09B7\u09C1\u09A7 \u09A6\u09CD\u09B0\u09C1\u09A4 \u09B8\u09CD\u09A8\u09BE\u09DF\u09C1\u09B0 \u09AE\u09BE\u09A7\u09CD\u09AF\u09AE\u09C7 \u0995\u09BE\u099C \u09B6\u09C1\u09B0\u09C1 \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964\n\n\u09E8. **\u0989\u0997\u09CD\u09B0 \u0997\u09A8\u09CD\u09A7 \u09AC\u09B0\u09CD\u099C\u09A8:** \u0995\u09BE\u0981\u099A\u09BE \u09AA\u09C7\u0981\u09DF\u09BE\u099C, \u09B0\u09B8\u09C1\u09A8, \u09B9\u09BF\u0982, \u09AC\u09BE \u0985\u09A4\u09BF\u09B0\u09BF\u0995\u09CD\u09A4 \u09AE\u09B6\u09B2\u09BE\u09AF\u09C1\u0995\u09CD\u09A4 \u0996\u09BE\u09AC\u09BE\u09B0\u09C7\u09B0 \u0989\u0997\u09CD\u09B0 \u0997\u09A8\u09CD\u09A7 \u0993\u09B7\u09C1\u09A7\u09C7\u09B0 \u0995\u09CD\u09B0\u09BF\u09DF\u09BE \u09A8\u09B7\u09CD\u099F \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964 \u09A4\u09BE\u0987 \u0993\u09B7\u09C1\u09A7 \u099A\u09B2\u09BE\u0995\u09BE\u09B2\u09C0\u09A8 \u09B8\u09AE\u09DF\u09C7 \u098F\u0997\u09C1\u09B2\u09CB \u0995\u09BE\u0981\u099A\u09BE \u0996\u09BE\u0993\u09DF\u09BE \u09A5\u09C7\u0995\u09C7 \u09AC\u09BF\u09B0\u09A4 \u09A5\u09BE\u0995\u09BE \u09AD\u09BE\u09B2\u09CB\u0964 \u09B0\u09BE\u09A8\u09CD\u09A8\u09BE\u09DF \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09B2\u09C7 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE \u09A8\u09C7\u0987, \u09A4\u09AC\u09C7 \u09AA\u09B0\u09BF\u09AE\u09BE\u09A3 \u0995\u09AE \u09B9\u0993\u09DF\u09BE \u09AC\u09BE\u099E\u09CD\u099B\u09A8\u09C0\u09DF\u0964\n\n\u09E9. **\u09A8\u09C7\u09B6\u09BE \u0993 \u0989\u09A4\u09CD\u09A4\u09C7\u099C\u0995 \u09A6\u09CD\u09B0\u09AC\u09CD\u09AF:** \u0995\u09AB\u09BF, \u09A7\u09C2\u09AE\u09AA\u09BE\u09A8, \u09AE\u09A6\u09CD\u09AF\u09AA\u09BE\u09A8 \u09AC\u09BE \u09A4\u09BE\u09AE\u09BE\u0995 \u099C\u09B0\u09CD\u09A6\u09BE \u0993\u09B7\u09C1\u09A7\u09C7\u09B0 \u0995\u09BE\u099C\u09C7 \u09AC\u09BE\u09A7\u09BE \u09B8\u09C3\u09B7\u09CD\u099F\u09BF \u0995\u09B0\u09C7\u0964 \u09AC\u09BF\u09B6\u09C7\u09B7 \u0995\u09B0\u09C7 \u0995\u09BF\u099B\u09C1 \u0993\u09B7\u09C1\u09A7\u09C7\u09B0 \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09B0\u09C7 \u0995\u09AB\u09BF \u09AA\u09BE\u09A8 \u09B8\u09AE\u09CD\u09AA\u09C2\u09B0\u09CD\u09A3 \u09A8\u09BF\u09B7\u09BF\u09A6\u09CD\u09A7\u0964 \u0995\u09B0\u09CD\u09AA\u09C2\u09B0 \u09AC\u09BE \u09AE\u09C7\u09A8\u09CD\u09A5\u09B2 \u09AF\u09C1\u0995\u09CD\u09A4 \u0996\u09BE\u09AC\u09BE\u09B0 \u09AC\u09BE \u09AA\u09CD\u09B0\u09B8\u09BE\u09A7\u09A8\u09C0\u0993 \u098F\u09DC\u09BF\u09DF\u09C7 \u099A\u09B2\u09BE \u0989\u099A\u09BF\u09A4\u0964\n\n\u09EA. **\u09B8\u09CD\u09AA\u09B0\u09CD\u09B6 \u0993 \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09A3:** \u09B9\u09CB\u09AE\u09BF\u0993\u09AA\u09CD\u09AF\u09BE\u09A5\u09BF \u0993\u09B7\u09C1\u09A7 \u09B8\u09BE\u09A7\u09BE\u09B0\u09A3\u09A4 \u0997\u09CD\u09B2\u09CB\u09AC\u09BF\u0989\u09B2\u09B8 \u09AC\u09BE \u09B2\u09BF\u0995\u09C1\u0987\u09A1 \u0986\u0995\u09BE\u09B0\u09C7 \u09A5\u09BE\u0995\u09C7\u0964 \u0997\u09CD\u09B2\u09CB\u09AC\u09BF\u0989\u09B2\u09B8 \u09AC\u09BE \u09AC\u09DC\u09BF \u09B9\u09BE\u09A4\u09C7 \u09B8\u09CD\u09AA\u09B0\u09CD\u09B6 \u09A8\u09BE \u0995\u09B0\u09C7 \u09A2\u09BE\u0995\u09A8\u09BE \u09AC\u09BE \u0995\u09BE\u0997\u099C\u09C7\u09B0 \u09B8\u09BE\u09B9\u09BE\u09AF\u09CD\u09AF\u09C7 \u09AE\u09C1\u0996\u09C7 \u09A6\u09C7\u0993\u09DF\u09BE \u0989\u099A\u09BF\u09A4\u0964 \u0993\u09B7\u09C1\u09A7 \u09B8\u09AC\u09B8\u09AE\u09DF \u09B6\u09C1\u09B7\u09CD\u0995, \u09A0\u09BE\u09A8\u09CD\u09A1\u09BE \u098F\u09AC\u0982 \u099B\u09BE\u09DF\u09BE\u09AE\u09DF \u09B8\u09CD\u09A5\u09BE\u09A8\u09C7 \u09B0\u09BE\u0996\u09BE \u0989\u099A\u09BF\u09A4\u0964 \u09A4\u09C0\u09AC\u09CD\u09B0 \u09B0\u09CB\u09A6 \u09AC\u09BE \u0987\u09B2\u09C7\u0995\u099F\u09CD\u09B0\u09A8\u09BF\u0995 \u09A1\u09BF\u09AD\u09BE\u0987\u09B8\u09C7\u09B0 (\u09AF\u09C7\u09AE\u09A8 \u09AE\u09CB\u09AC\u09BE\u0987\u09B2, \u099F\u09BF\u09AD\u09BF) \u0996\u09C1\u09AC \u0995\u09BE\u099B\u09C7 \u0993\u09B7\u09C1\u09A7 \u09B0\u09BE\u0996\u09BE \u0989\u099A\u09BF\u09A4 \u09A8\u09DF\u0964\n\n\u09EB. **\u09AC\u09CD\u09B0\u09BE\u09B6 \u0993 \u09AA\u09C7\u09B8\u09CD\u099F:** \u0993\u09B7\u09C1\u09A7 \u0996\u09BE\u0993\u09DF\u09BE\u09B0 \u09A0\u09BF\u0995 \u0986\u0997\u09C7 \u09AC\u09BE \u09AA\u09B0\u09C7 \u09A6\u09BE\u0981\u09A4 \u09AC\u09CD\u09B0\u09BE\u09B6 \u0995\u09B0\u09BE \u0989\u099A\u09BF\u09A4 \u09A8\u09DF, \u09AC\u09BF\u09B6\u09C7\u09B7 \u0995\u09B0\u09C7 \u09AE\u09C7\u09A8\u09CD\u09A5\u09B2 \u09AF\u09C1\u0995\u09CD\u09A4 \u09AA\u09C7\u09B8\u09CD\u099F \u09A6\u09BF\u09DF\u09C7\u0964 \u09AA\u09CD\u09B0\u09DF\u09CB\u099C\u09A8\u09C7 \u09AD\u09C7\u09B7\u099C \u09AE\u09BE\u099C\u09A8 \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09BE \u09AF\u09C7\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7 \u0985\u09A5\u09AC\u09BE \u0993\u09B7\u09C1\u09A7 \u0996\u09BE\u0993\u09DF\u09BE\u09B0 \u0986\u09A7\u09BE \u0998\u09A3\u09CD\u099F\u09BE \u09AA\u09B0 \u09AC\u09CD\u09B0\u09BE\u09B6 \u0995\u09B0\u09BE \u09AF\u09C7\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964\n\n**\u0995\u09C7\u09A8 \u098F\u0987 \u09A8\u09BF\u09DF\u09AE\u0997\u09C1\u09B2\u09CB \u099C\u09B0\u09C1\u09B0\u09BF?**\n\u09B9\u09CB\u09AE\u09BF\u0993\u09AA\u09CD\u09AF\u09BE\u09A5\u09BF \u0993\u09B7\u09C1\u09A7 \u09B8\u09B0\u09BE\u09B8\u09B0\u09BF \u09B8\u09CD\u09A8\u09BE\u09DF\u09C1\u09A4\u09A8\u09CD\u09A4\u09CD\u09B0\u09C7\u09B0 \u0993\u09AA\u09B0 \u0995\u09BE\u099C \u0995\u09B0\u09C7\u0964 \u09AE\u09C1\u0996\u09C7\u09B0 \u09B2\u09BE\u09B2\u09BE\u0997\u09CD\u09B0\u09A8\u09CD\u09A5\u09BF \u0993 \u09B8\u09CD\u09A8\u09BE\u09DF\u09C1 \u09AA\u09CD\u09B0\u09BE\u09A8\u09CD\u09A4\u09C7\u09B0 \u09AE\u09BE\u09A7\u09CD\u09AF\u09AE\u09C7 \u098F\u099F\u09BF \u09B6\u09CB\u09B7\u09BF\u09A4 \u09B9\u09DF\u0964 \u09A4\u09BE\u0987 \u09AE\u09C1\u0996\u09C7 \u0985\u09A8\u09CD\u09AF \u0995\u09CB\u09A8\u09CB \u09A4\u09C0\u09AC\u09CD\u09B0 \u09B8\u09CD\u09AC\u09BE\u09A6 \u09AC\u09BE \u0997\u09A8\u09CD\u09A7 \u09A5\u09BE\u0995\u09B2\u09C7 \u0993\u09B7\u09C1\u09A7\u09C7\u09B0 \u09B6\u09CB\u09B7\u09A3 \u09AC\u09BE\u09A7\u09BE\u0997\u09CD\u09B0\u09B8\u09CD\u09A4 \u09B9\u09DF\u0964 \u098F\u099B\u09BE\u09DC\u09BE \u0993\u09B7\u09C1\u09A7\u09C7\u09B0 \u09B6\u0995\u09CD\u09A4\u09BF \u09AC\u09BE \u09AA\u09CB\u099F\u09C7\u09A8\u09CD\u09B8\u09BF \u09A0\u09BF\u0995 \u09B0\u09BE\u0996\u09A4\u09C7 \u09B8\u09A0\u09BF\u0995 \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09A3 \u09AA\u09A6\u09CD\u09A7\u09A4\u09BF \u09AE\u09C7\u09A8\u09C7 \u099A\u09B2\u09BE \u0986\u09AC\u09B6\u09CD\u09AF\u0995\u0964 \u099A\u09BF\u0995\u09BF\u09CE\u09B8\u0995\u09C7\u09B0 \u09AA\u09B0\u09BE\u09AE\u09B0\u09CD\u09B6 \u0985\u09A8\u09C1\u09AF\u09BE\u09DF\u09C0 \u09B8\u09A0\u09BF\u0995 \u09AE\u09BE\u09A4\u09CD\u09B0\u09BE \u0993 \u09B8\u09AE\u09DF\u09C7 \u0993\u09B7\u09C1\u09A7 \u09B8\u09C7\u09AC\u09A8 \u0995\u09B0\u09B2\u09C7 \u098F\u09AC\u0982 \u098F\u0987 \u09A8\u09BF\u09DF\u09AE\u0997\u09C1\u09B2\u09CB \u09AE\u09C7\u09A8\u09C7 \u099A\u09B2\u09B2\u09C7 \u09B9\u09CB\u09AE\u09BF\u0993\u09AA\u09CD\u09AF\u09BE\u09A5\u09BF \u0993\u09B7\u09C1\u09A7\u09C7\u09B0 \u09B8\u09B0\u09CD\u09AC\u09CB\u099A\u09CD\u099A \u0993 \u09A6\u09CD\u09B0\u09C1\u09A4 \u09B8\u09C1\u09AB\u09B2 \u09AA\u09BE\u0993\u09DF\u09BE \u09B8\u09AE\u09CD\u09AD\u09AC\u0964",
    date: "\u09E8\u09E6\u09E8\u09E9-\u09E7\u09E8-\u09E7\u09E6",
    author: "\u09A1\u09BE\u0983 \u0986\u09AC\u09BF\u09B0 \u09B9\u09BE\u09B8\u09BE\u09A8",
    category: "\u09AA\u09B0\u09BE\u09AE\u09B0\u09CD\u09B6",
    image: "https://picsum.photos/seed/medicine/800/600"
  },
  {
    id: 4,
    title: "\u0997\u09CD\u09AF\u09BE\u09B8\u09CD\u099F\u09CD\u09B0\u09BF\u0995 \u0993 \u098F\u09B8\u09BF\u09A1\u09BF\u099F\u09BF\u09B0 \u09B8\u09CD\u09A5\u09BE\u09DF\u09C0 \u09B8\u09AE\u09BE\u09A7\u09BE\u09A8",
    excerpt: "\u09A8\u09BE\u0995\u09CD\u09B8 \u09AD\u09AE\u09BF\u0995\u09BE, \u0995\u09BE\u09B0\u09CD\u09AC\u09CB \u09AD\u09C7\u099C \u0993 \u09B2\u09BE\u0987\u0995\u09CB\u09AA\u09CB\u09A1\u09BF\u09DF\u09BE\u09AE\u09C7\u09B0 \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0\u0964",
    content: "\u0997\u09CD\u09AF\u09BE\u09B8\u09CD\u099F\u09CD\u09B0\u09BF\u0995 \u09AC\u09BE \u098F\u09B8\u09BF\u09A1\u09BF\u099F\u09BF \u09AC\u09B0\u09CD\u09A4\u09AE\u09BE\u09A8 \u09B8\u09AE\u09DF\u09C7 \u098F\u0995\u099F\u09BF \u09B8\u09BE\u09A7\u09BE\u09B0\u09A3 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE\u0964 \u0985\u09A8\u09BF\u09DF\u09AE\u09BF\u09A4 \u099C\u09C0\u09AC\u09A8\u09AF\u09BE\u09AA\u09A8, \u09AD\u09BE\u099C\u09BE\u09AA\u09CB\u09DC\u09BE \u0993 \u09AE\u09B6\u09B2\u09BE\u09AF\u09C1\u0995\u09CD\u09A4 \u0996\u09BE\u09AC\u09BE\u09B0 \u0996\u09BE\u0993\u09DF\u09BE, \u098F\u09AC\u0982 \u09AE\u09BE\u09A8\u09B8\u09BF\u0995 \u09A6\u09C1\u09B6\u09CD\u099A\u09BF\u09A8\u09CD\u09A4\u09BE \u098F\u09B0 \u09AA\u09CD\u09B0\u09A7\u09BE\u09A8 \u0995\u09BE\u09B0\u09A3\u0964 \u09B9\u09CB\u09AE\u09BF\u0993\u09AA\u09CD\u09AF\u09BE\u09A5\u09BF \u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE\u09DF \u0997\u09CD\u09AF\u09BE\u09B8\u09CD\u099F\u09CD\u09B0\u09BF\u0995\u09C7\u09B0 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE\u09B0 \u09B8\u09CD\u09A5\u09BE\u09DF\u09C0 \u09B8\u09AE\u09BE\u09A7\u09BE\u09A8 \u09B8\u09AE\u09CD\u09AD\u09AC\u0964\n\n**\u09A8\u09BE\u0995\u09CD\u09B8 \u09AD\u09AE\u09BF\u0995\u09BE (Nux Vomica):** \u09AF\u09BE\u09B0\u09BE \u09A6\u09C0\u09B0\u09CD\u0998\u0995\u09CD\u09B7\u09A3 \u09AC\u09B8\u09C7 \u0995\u09BE\u099C \u0995\u09B0\u09C7\u09A8, \u0985\u09A8\u09BF\u09DF\u09AE\u09BF\u09A4 \u09B8\u09AE\u09DF\u09C7 \u0996\u09BE\u09AC\u09BE\u09B0 \u0996\u09BE\u09A8, \u098F\u09AC\u0982 \u0985\u09A4\u09BF\u09B0\u09BF\u0995\u09CD\u09A4 \u09AE\u09B6\u09B2\u09BE\u09AF\u09C1\u0995\u09CD\u09A4 \u09AC\u09BE \u09AC\u09BE\u0987\u09B0\u09C7\u09B0 \u0996\u09BE\u09AC\u09BE\u09B0 \u09AA\u099B\u09A8\u09CD\u09A6 \u0995\u09B0\u09C7\u09A8, \u09A4\u09BE\u09A6\u09C7\u09B0 \u0997\u09CD\u09AF\u09BE\u09B8\u09CD\u099F\u09CD\u09B0\u09BF\u0995\u09C7\u09B0 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE\u09DF \u09A8\u09BE\u0995\u09CD\u09B8 \u09AD\u09AE\u09BF\u0995\u09BE \u09AA\u09CD\u09B0\u09A7\u09BE\u09A8 \u0993\u09B7\u09C1\u09A7\u0964 \u098F\u09A6\u09C7\u09B0 \u0995\u09CB\u09B7\u09CD\u09A0\u0995\u09BE\u09A0\u09BF\u09A8\u09CD\u09AF\u09C7\u09B0 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE \u09A5\u09BE\u0995\u09C7 \u098F\u09AC\u0982 \u0996\u09BE\u0993\u09DF\u09BE\u09B0 \u09AA\u09B0 \u09AA\u09C7\u099F\u09C7 \u09AD\u09BE\u09B0 \u09AC\u09CB\u09A7 \u09B9\u09DF\u0964 \u09B8\u0995\u09BE\u09B2\u09C7 \u09AC\u09AE\u09BF \u09AC\u09AE\u09BF \u09AD\u09BE\u09AC \u09AC\u09BE \u09A4\u09BF\u09A4\u09BE \u09B8\u09CD\u09AC\u09BE\u09A6 \u09A5\u09BE\u0995\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964\n\n**\u0995\u09BE\u09B0\u09CD\u09AC\u09CB \u09AD\u09C7\u099C (Carbo Veg):** \u09AA\u09C7\u099F\u09C7\u09B0 \u0989\u09AA\u09B0\u09C7\u09B0 \u0985\u0982\u09B6\u09C7 \u0997\u09CD\u09AF\u09BE\u09B8 \u099C\u09AE\u09C7 \u09AA\u09C7\u099F \u09AB\u09C1\u09B2\u09C7 \u09A5\u09BE\u0995\u09B2\u09C7 \u098F\u09AC\u0982 \u0985\u09A8\u09AC\u09B0\u09A4 \u09A2\u09C7\u0995\u09C1\u09B0 \u0989\u09A0\u09B2\u09C7 \u0995\u09BE\u09B0\u09CD\u09AC\u09CB \u09AD\u09C7\u099C \u0996\u09C1\u09AC \u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09B0\u09C0\u0964 \u098F\u09A6\u09C7\u09B0 \u09B9\u099C\u09AE \u09B6\u0995\u09CD\u09A4\u09BF \u0996\u09C1\u09AC \u09A6\u09C1\u09B0\u09CD\u09AC\u09B2 \u09A5\u09BE\u0995\u09C7 \u098F\u09AC\u0982 \u09B8\u09BE\u09A7\u09BE\u09B0\u09A3 \u0996\u09BE\u09AC\u09BE\u09B0 \u0996\u09C7\u09B2\u09C7\u0993 \u0997\u09CD\u09AF\u09BE\u09B8 \u09B9\u09DF\u0964 \u09AC\u09BE\u09A4\u09BE\u09B8\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u09AA\u09CD\u09B0\u09AC\u09B2 \u0986\u0995\u09BE\u0999\u09CD\u0995\u09CD\u09B7\u09BE \u09A5\u09BE\u0995\u09C7, \u09A4\u09BE\u0987 \u09A4\u09BE\u09B0\u09BE \u099C\u09BE\u09A8\u09B2\u09BE \u0996\u09C1\u09B2\u09C7 \u09B0\u09BE\u0996\u09A4\u09C7 \u09AC\u09BE \u09AB\u09CD\u09AF\u09BE\u09A8 \u099A\u09BE\u09B2\u09BE\u09A4\u09C7 \u09AC\u09B2\u09C7\u09A8\u0964\n\n**\u09B2\u09BE\u0987\u0995\u09CB\u09AA\u09CB\u09A1\u09BF\u09DF\u09BE\u09AE (Lycopodium):** \u09AA\u09C7\u099F\u09C7\u09B0 \u09A8\u09BF\u099A\u09C7\u09B0 \u0985\u0982\u09B6\u09C7 \u0997\u09CD\u09AF\u09BE\u09B8 \u099C\u09AE\u09B2\u09C7 \u098F\u09AC\u0982 \u09AC\u09BF\u0995\u09C7\u09B2\u09C7 (\u09AC\u09BF\u0995\u09C7\u09B2 \u09EA\u099F\u09BE \u09A5\u09C7\u0995\u09C7 \u09B0\u09BE\u09A4 \u09EE\u099F\u09BE) \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE \u09AC\u09BE\u09DC\u09B2\u09C7 \u09B2\u09BE\u0987\u0995\u09CB\u09AA\u09CB\u09A1\u09BF\u09DF\u09BE\u09AE \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09BE \u09B9\u09DF\u0964 \u098F\u09A6\u09C7\u09B0 \u0995\u09CD\u09B7\u09C1\u09A7\u09BE \u09A5\u09BE\u0995\u09C7 \u0995\u09BF\u09A8\u09CD\u09A4\u09C1 \u0985\u09B2\u09CD\u09AA \u0996\u09C7\u09B2\u09C7\u0987 \u09AA\u09C7\u099F \u09AD\u09B0\u09C7 \u09AF\u09BE\u09DF\u0964 \u0997\u09B0\u09AE \u0996\u09BE\u09AC\u09BE\u09B0 \u0996\u09C7\u09A4\u09C7 \u098F\u09B0\u09BE \u09AA\u099B\u09A8\u09CD\u09A6 \u0995\u09B0\u09C7 \u098F\u09AC\u0982 \u09AE\u09BF\u09B7\u09CD\u099F\u09BF \u09AA\u09CD\u09B0\u09BF\u09DF \u09B9\u09DF\u0964\n\n**\u099A\u09BE\u09DF\u09A8\u09BE (China):** \u09AA\u09C1\u09B0\u09CB \u09AA\u09C7\u099F \u0997\u09CD\u09AF\u09BE\u09B8\u09C7 \u09AD\u09B0\u09CD\u09A4\u09BF \u09AE\u09A8\u09C7 \u09B9\u09B2\u09C7 \u098F\u09AC\u0982 \u09AA\u09C7\u099F \u09AB\u09BE\u0981\u09AA\u09BE \u09A5\u09BE\u0995\u09B2\u09C7 \u099A\u09BE\u09DF\u09A8\u09BE \u09AD\u09BE\u09B2\u09CB \u0995\u09BE\u099C \u0995\u09B0\u09C7\u0964 \u09AB\u09B2 \u09AC\u09BE \u09A6\u09C1\u09A7 \u0996\u09C7\u09B2\u09C7 \u098F\u09A6\u09C7\u09B0 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE \u09AC\u09BE\u09DC\u09C7\u0964 \u09AA\u09C7\u099F\u09C7\u09B0 \u0985\u09B8\u09C1\u0996\u09C7\u09B0 \u0995\u09BE\u09B0\u09A3\u09C7 \u09A6\u09C1\u09B0\u09CD\u09AC\u09B2\u09A4\u09BE \u09A6\u09C7\u0996\u09BE \u09A6\u09BF\u09B2\u09C7 \u098F\u099F\u09BF \u0996\u09C1\u09AC \u0989\u09AA\u0995\u09BE\u09B0\u09C0\u0964\n\n**\u09AA\u09BE\u09B2\u09B8\u09C7\u099F\u09BF\u09B2\u09BE (Pulsatilla):** \u09B0\u09BF\u099A \u09AB\u09C1\u09A1 \u09AC\u09BE \u099A\u09B0\u09CD\u09AC\u09BF\u09AF\u09C1\u0995\u09CD\u09A4 \u0996\u09BE\u09AC\u09BE\u09B0 (\u09AF\u09C7\u09AE\u09A8 \u09AA\u09CB\u09B2\u09BE\u0993, \u09AC\u09BF\u09B0\u09BF\u09DF\u09BE\u09A8\u09BF) \u0996\u09BE\u0993\u09DF\u09BE\u09B0 \u09AA\u09B0 \u0997\u09CD\u09AF\u09BE\u09B8\u09CD\u099F\u09CD\u09B0\u09BF\u0995 \u09B9\u09B2\u09C7 \u09AA\u09BE\u09B2\u09B8\u09C7\u099F\u09BF\u09B2\u09BE \u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09B0\u09C0\u0964 \u098F\u09A6\u09C7\u09B0 \u099C\u09B2 \u09AA\u09BF\u09AA\u09BE\u09B8\u09BE \u0996\u09C1\u09AC \u0995\u09AE \u09A5\u09BE\u0995\u09C7 \u098F\u09AC\u0982 \u0996\u09CB\u09B2\u09BE \u09AC\u09BE\u09A4\u09BE\u09B8\u09C7 \u09B9\u09BE\u0981\u099F\u09B2\u09C7 \u09AD\u09BE\u09B2\u09CB \u09B2\u09BE\u0997\u09C7\u0964\n\n**\u099C\u09C0\u09AC\u09A8\u09AF\u09BE\u09A4\u09CD\u09B0\u09BE\u09B0 \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8:**\n\u0997\u09CD\u09AF\u09BE\u09B8\u09CD\u099F\u09CD\u09B0\u09BF\u0995 \u09A5\u09C7\u0995\u09C7 \u09AE\u09C1\u0995\u09CD\u09A4\u09BF \u09AA\u09C7\u09A4\u09C7 \u0993\u09B7\u09C1\u09A7\u09C7\u09B0 \u09AA\u09BE\u09B6\u09BE\u09AA\u09BE\u09B6\u09BF \u0995\u09BF\u099B\u09C1 \u09A8\u09BF\u09DF\u09AE \u09AE\u09C7\u09A8\u09C7 \u099A\u09B2\u09BE \u099C\u09B0\u09C1\u09B0\u09BF\u0964 \u09AA\u09CD\u09B0\u099A\u09C1\u09B0 \u09AA\u09B0\u09BF\u09AE\u09BE\u09A3\u09C7 \u099C\u09B2 \u09AA\u09BE\u09A8 \u0995\u09B0\u09BE, \u09B8\u09AE\u09DF\u09AE\u09A4\u09CB \u0996\u09BE\u09AC\u09BE\u09B0 \u0996\u09BE\u0993\u09DF\u09BE \u098F\u09AC\u0982 \u09AC\u09BE\u0987\u09B0\u09C7\u09B0 \u09AD\u09BE\u099C\u09BE\u09AA\u09CB\u09DC\u09BE \u0996\u09BE\u09AC\u09BE\u09B0 \u09AC\u09B0\u09CD\u099C\u09A8 \u0995\u09B0\u09BE \u0989\u099A\u09BF\u09A4\u0964 \u0996\u09BE\u09AC\u09BE\u09B0 \u09AD\u09BE\u09B2\u09CB \u0995\u09B0\u09C7 \u099A\u09BF\u09AC\u09BF\u09DF\u09C7 \u0996\u09BE\u0993\u09DF\u09BE \u098F\u09AC\u0982 \u0996\u09BE\u0993\u09DF\u09BE\u09B0 \u09AA\u09B0\u09AA\u09B0\u0987 \u09B6\u09C1\u09DF\u09C7 \u09A8\u09BE \u09AA\u09DC\u09BE \u09B9\u099C\u09AE\u09C7 \u09B8\u09B9\u09BE\u09DF\u09A4\u09BE \u0995\u09B0\u09C7\u0964 \u09A7\u09C1\u09AE\u09AA\u09BE\u09A8 \u0993 \u09AE\u09A6\u09CD\u09AF\u09AA\u09BE\u09A8 \u09AA\u09B0\u09BF\u09B9\u09BE\u09B0 \u0995\u09B0\u09BE \u098F\u09AC\u0982 \u09A8\u09BF\u09DF\u09AE\u09BF\u09A4 \u09B9\u09BE\u0981\u099F\u09BE\u099A\u09B2\u09BE \u09AC\u09BE \u09AC\u09CD\u09AF\u09BE\u09DF\u09BE\u09AE \u0995\u09B0\u09BE \u0997\u09CD\u09AF\u09BE\u09B8\u09CD\u099F\u09CD\u09B0\u09BF\u0995\u09C7\u09B0 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE \u0995\u09AE\u09BE\u09A4\u09C7 \u09B8\u09BE\u09B9\u09BE\u09AF\u09CD\u09AF \u0995\u09B0\u09C7\u0964 \u09AE\u09BE\u09A8\u09B8\u09BF\u0995 \u099A\u09BE\u09AA \u0995\u09AE\u09BE\u09A8\u09CB \u098F\u09AC\u0982 \u09AA\u09B0\u09CD\u09AF\u09BE\u09AA\u09CD\u09A4 \u0998\u09C1\u09AE \u09A8\u09BF\u09B6\u09CD\u099A\u09BF\u09A4 \u0995\u09B0\u09BE\u0993 \u098F\u09B8\u09BF\u09A1\u09BF\u099F\u09BF \u09A8\u09BF\u09DF\u09A8\u09CD\u09A4\u09CD\u09B0\u09A3\u09C7 \u0997\u09C1\u09B0\u09C1\u09A4\u09CD\u09AC\u09AA\u09C2\u09B0\u09CD\u09A3 \u09AD\u09C2\u09AE\u09BF\u0995\u09BE \u09AA\u09BE\u09B2\u09A8 \u0995\u09B0\u09C7\u0964",
    date: "\u09E8\u09E6\u09E8\u09EA-\u09E6\u09E7-\u09E6\u09EB",
    author: "\u09A1\u09BE\u0983 \u09AB\u09BE\u09B0\u09B9\u09BE\u09A8\u09BE \u09B0\u09B9\u09AE\u09BE\u09A8",
    category: "\u09AA\u09BE\u0995\u09B8\u09CD\u09A5\u09B2\u09C0",
    image: "https://picsum.photos/seed/stomach/800/600"
  },
  {
    id: 5,
    title: "\u099A\u09B0\u09CD\u09AE\u09B0\u09CB\u0997 \u0993 \u09B9\u09CB\u09AE\u09BF\u0993\u09AA\u09CD\u09AF\u09BE\u09A5\u09BF \u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE",
    excerpt: "\u098F\u0995\u099C\u09BF\u09AE\u09BE, \u09A6\u09BE\u09A6 \u0993 \u09B8\u09CB\u09B0\u09BF\u09DF\u09BE\u09B8\u09BF\u09B8\u09C7 \u09B8\u09BE\u09B2\u09AB\u09BE\u09B0 \u0993 \u0997\u09CD\u09B0\u09BE\u09AB\u09BE\u0987\u099F\u09BF\u09B8\u0964",
    content: "\u099A\u09B0\u09CD\u09AE\u09B0\u09CB\u0997 \u09AC\u09BE \u09B8\u09CD\u0995\u09BF\u09A8 \u09A1\u09BF\u099C\u09BF\u099C \u098F\u0995\u099F\u09BF \u09AC\u09BF\u09B0\u0995\u09CD\u09A4\u09BF\u0995\u09B0 \u098F\u09AC\u0982 \u0985\u09A8\u09C7\u0995 \u09B8\u09AE\u09DF \u09A6\u09C0\u09B0\u09CD\u0998\u09B8\u09CD\u09A5\u09BE\u09AF\u09BC\u09C0 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE\u0964 \u09AE\u09B2\u09AE \u09AC\u09BE \u09AC\u09BE\u09B9\u09CD\u09AF\u09BF\u0995 \u09AA\u09CD\u09B0\u09DF\u09CB\u0997\u09C7\u09B0 \u0993\u09B7\u09C1\u09A7 \u09A6\u09BF\u09DF\u09C7 \u099A\u09B0\u09CD\u09AE\u09B0\u09CB\u0997 \u099A\u09BE\u09AA\u09BE \u09A6\u09BF\u09B2\u09C7 \u09A4\u09BE \u09AA\u09B0\u09AC\u09B0\u09CD\u09A4\u09C0\u09A4\u09C7 \u09B9\u09BE\u0981\u09AA\u09BE\u09A8\u09BF \u09AC\u09BE \u0985\u09A8\u09CD\u09AF \u099C\u099F\u09BF\u09B2 \u09B0\u09CB\u0997\u09C7\u09B0 \u09B0\u09C2\u09AA \u09A8\u09BF\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964 \u09A4\u09BE\u0987 \u09B9\u09CB\u09AE\u09BF\u0993\u09AA\u09CD\u09AF\u09BE\u09A5\u09BF \u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE\u09DF \u099A\u09B0\u09CD\u09AE\u09B0\u09CB\u0997\u0995\u09C7 \u09AD\u09C7\u09A4\u09B0 \u09A5\u09C7\u0995\u09C7 \u09A8\u09BF\u09B0\u09CD\u09AE\u09C2\u09B2 \u0995\u09B0\u09BE\u09B0 \u0993\u09AA\u09B0 \u099C\u09CB\u09B0 \u09A6\u09C7\u0993\u09DF\u09BE \u09B9\u09DF\u0964\n\n**\u09B8\u09BE\u09B2\u09AB\u09BE\u09B0 (Sulphur):** \u099A\u09B0\u09CD\u09AE\u09B0\u09CB\u0997\u09C7\u09B0 \u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE\u09DF \u09B8\u09BE\u09B2\u09AB\u09BE\u09B0\u0995\u09C7 \u09AC\u09B2\u09BE \u09B9\u09DF '\u09B0\u09BE\u099C\u09BE'\u0964 \u09AF\u09A6\u09BF \u099A\u09B0\u09CD\u09AE\u09B0\u09CB\u0997\u09C7 \u09AA\u09CD\u09B0\u099A\u09A3\u09CD\u09A1 \u099A\u09C1\u09B2\u0995\u09BE\u09A8\u09BF \u09A5\u09BE\u0995\u09C7, \u09AC\u09BF\u09B6\u09C7\u09B7 \u0995\u09B0\u09C7 \u09B0\u09BE\u09A4\u09C7 \u09AC\u09BF\u099B\u09BE\u09A8\u09BE\u09B0 \u0997\u09B0\u09AE\u09C7 \u099A\u09C1\u09B2\u0995\u09BE\u09A8\u09BF \u09AC\u09BE\u09DC\u09C7, \u098F\u09AC\u0982 \u099A\u09C1\u09B2\u0995\u09BE\u09A8\u09CB\u09B0 \u09AA\u09B0 \u099C\u09CD\u09AC\u09BE\u09B2\u09BE \u0995\u09B0\u09C7, \u09A4\u09AC\u09C7 \u09B8\u09BE\u09B2\u09AB\u09BE\u09B0 \u09AA\u09CD\u09B0\u09A7\u09BE\u09A8 \u0993\u09B7\u09C1\u09A7\u0964 \u098F\u0987 \u09B0\u09CB\u0997\u09C0\u09B0\u09BE \u09B8\u09BE\u09A7\u09BE\u09B0\u09A3\u09A4 \u0985\u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0 \u09A5\u09BE\u0995\u09A4\u09C7 \u09AA\u099B\u09A8\u09CD\u09A6 \u0995\u09B0\u09C7, \u0997\u09CB\u09B8\u09B2 \u0995\u09B0\u09A4\u09C7 \u099A\u09BE\u09DF \u09A8\u09BE \u098F\u09AC\u0982 \u09AE\u09BF\u09B7\u09CD\u099F\u09BF \u0996\u09C7\u09A4\u09C7 \u09AA\u099B\u09A8\u09CD\u09A6 \u0995\u09B0\u09C7\u0964 \u09A4\u09BE\u09A6\u09C7\u09B0 \u09B9\u09BE\u09A4\u09C7\u09B0 \u09A4\u09BE\u09B2\u09C1 \u0993 \u09AA\u09BE\u09DF\u09C7\u09B0 \u09A4\u09B2\u09BE \u0997\u09B0\u09AE \u09A5\u09BE\u0995\u09C7\u0964\n\n**\u0997\u09CD\u09B0\u09BE\u09AB\u09BE\u0987\u099F\u09BF\u09B8 (Graphites):** \u098F\u0995\u099C\u09BF\u09AE\u09BE \u09AC\u09BE \u099A\u09B0\u09CD\u09AE\u09B0\u09CB\u0997 \u09A5\u09C7\u0995\u09C7 \u09AF\u09A6\u09BF \u09AE\u09A7\u09C1\u09B0 \u09AE\u09A4\u09CB \u099A\u099F\u099A\u099F\u09C7 \u0986\u09A0\u09BE\u09B2\u09CB \u09B0\u09B8 \u09AC\u09C7\u09B0 \u09B9\u09DF, \u09A4\u09AC\u09C7 \u0997\u09CD\u09B0\u09BE\u09AB\u09BE\u0987\u099F\u09BF\u09B8 \u0985\u09AC\u09CD\u09AF\u09B0\u09CD\u09A5\u0964 \u098F\u099F\u09BF \u09B8\u09BE\u09A7\u09BE\u09B0\u09A3\u09A4 \u0995\u09BE\u09A8\u09C7\u09B0 \u09AA\u09C7\u099B\u09A8\u09C7, \u099A\u09CB\u0996\u09C7\u09B0 \u09AA\u09BE\u09A4\u09BE\u09DF \u09AC\u09BE \u09AD\u09BE\u0981\u099C\u09AF\u09C1\u0995\u09CD\u09A4 \u09B8\u09CD\u09A5\u09BE\u09A8\u09C7 \u09AC\u09C7\u09B6\u09BF \u09B9\u09DF\u0964 \u098F\u0987 \u09B0\u09CB\u0997\u09C0\u09B0\u09BE \u09B8\u09BE\u09A7\u09BE\u09B0\u09A3\u09A4 \u09AE\u09CB\u099F\u09BE \u0993 \u09B6\u09C0\u09A4\u0995\u09BE\u09A4\u09C1\u09B0\u09C7 \u09B9\u09DF \u098F\u09AC\u0982 \u09A4\u09BE\u09A6\u09C7\u09B0 \u0995\u09CB\u09B7\u09CD\u09A0\u0995\u09BE\u09A0\u09BF\u09A8\u09CD\u09AF\u09C7\u09B0 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE \u09A5\u09BE\u0995\u09C7\u0964\n\n**\u09AE\u09C7\u099C\u09C7\u09B0\u09BF\u09DF\u09BE\u09AE (Mezereum):** \u09AE\u09BE\u09A5\u09BE\u09DF \u09AC\u09BE \u09B6\u09B0\u09C0\u09B0\u09C7 \u09AE\u09CB\u099F\u09BE \u09AE\u09BE\u09AE\u09DC\u09BF\u09AF\u09C1\u0995\u09CD\u09A4 \u099A\u09B0\u09CD\u09AE\u09B0\u09CB\u0997 \u09B9\u09B2\u09C7 \u09AE\u09C7\u099C\u09C7\u09B0\u09BF\u09DF\u09BE\u09AE \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09BE \u09B9\u09DF\u0964 \u09AE\u09BE\u09AE\u09DC\u09BF\u09B0 \u09A8\u09BF\u099A\u09C7 \u09AA\u09C1\u0981\u099C \u099C\u09AE\u09C7 \u09A5\u09BE\u0995\u09C7 \u098F\u09AC\u0982 \u0985\u09B8\u09B9\u09CD\u09AF \u099A\u09C1\u09B2\u0995\u09BE\u09A8\u09BF \u09B9\u09DF\u0964\n\n**\u09AA\u09C7\u099F\u09CD\u09B0\u09CB\u09B2\u09BF\u09DF\u09BE\u09AE (Petroleum):** \u09B6\u09C0\u09A4\u0995\u09BE\u09B2\u09C7 \u09AF\u09A6\u09BF \u09B9\u09BE\u09A4-\u09AA\u09BE\u09DF\u09C7\u09B0 \u099A\u09BE\u09AE\u09DC\u09BE \u09AB\u09C7\u099F\u09C7 \u09AF\u09BE\u09DF \u098F\u09AC\u0982 \u099A\u09B0\u09CD\u09AE\u09B0\u09CB\u0997 \u09AC\u09BE\u09DC\u09C7, \u09A4\u09AC\u09C7 \u09AA\u09C7\u099F\u09CD\u09B0\u09CB\u09B2\u09BF\u09DF\u09BE\u09AE \u0996\u09C1\u09AC \u09AD\u09BE\u09B2\u09CB \u0995\u09BE\u099C \u0995\u09B0\u09C7\u0964 \u098F\u09A6\u09C7\u09B0 \u09A4\u09CD\u09AC\u0995 \u0996\u09C1\u09AC \u0996\u09B8\u0996\u09B8\u09C7 \u0993 \u09B6\u09C1\u0995\u09A8\u09CB \u09B9\u09DF\u0964\n\n**\u09B0\u09BE\u09B8 \u099F\u0995\u09CD\u09B8 (Rhus Tox):** \u099B\u09CB\u099F \u099B\u09CB\u099F \u09AB\u09C1\u09B8\u0995\u09C1\u09DC\u09BF, \u09B8\u09BE\u09A5\u09C7 \u09AA\u09CD\u09B0\u099A\u09A3\u09CD\u09A1 \u099A\u09C1\u09B2\u0995\u09BE\u09A8\u09BF \u0993 \u099C\u09CD\u09AC\u09BE\u09B2\u09BE, \u098F\u09AC\u0982 \u0997\u09B0\u09AE \u099B\u09CD\u09AF\u09BE\u0995 \u09A6\u09BF\u09B2\u09C7 \u0986\u09B0\u09BE\u09AE \u09AC\u09CB\u09A7 \u09B9\u09B2\u09C7 \u09B0\u09BE\u09B8 \u099F\u0995\u09CD\u09B8 \u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09B0\u09C0\u0964 \u09AC\u09BF\u09B6\u09C7\u09B7 \u0995\u09B0\u09C7 \u09AC\u09B0\u09CD\u09B7\u09BE\u0995\u09BE\u09B2\u09C7 \u09AC\u09BE \u09AD\u09BF\u099C\u09C7 \u0986\u09AC\u09B9\u09BE\u0993\u09DF\u09BE\u09DF \u099A\u09B0\u09CD\u09AE\u09B0\u09CB\u0997 \u09AC\u09BE\u09DC\u09B2\u09C7 \u098F\u099F\u09BF \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09BE \u09B9\u09DF\u0964\n\n**\u09B8\u09A4\u09B0\u09CD\u0995\u09A4\u09BE \u0993 \u09AF\u09A4\u09CD\u09A8:**\n\u099A\u09B0\u09CD\u09AE\u09B0\u09CB\u0997\u09C7\u09B0 \u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE\u09DF \u09A7\u09C8\u09B0\u09CD\u09AF \u09A7\u09B0\u09BE \u09AA\u09CD\u09B0\u09DF\u09CB\u099C\u09A8\u0964 \u099A\u09BF\u0995\u09BF\u09CE\u09B8\u0995\u09C7\u09B0 \u09AA\u09B0\u09BE\u09AE\u09B0\u09CD\u09B6 \u099B\u09BE\u09DC\u09BE \u0995\u09CB\u09A8\u09CB \u09AE\u09B2\u09AE \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09BE \u0989\u099A\u09BF\u09A4 \u09A8\u09DF, \u0995\u09BE\u09B0\u09A3 \u098F\u09A4\u09C7 \u09B0\u09CB\u0997 \u09B8\u09BE\u09AE\u09DF\u09BF\u0995\u09AD\u09BE\u09AC\u09C7 \u0995\u09AE\u09B2\u09C7\u0993 \u09AA\u09B0\u09C7 \u0986\u09B0\u0993 \u09AD\u09DF\u09BE\u09AC\u09B9 \u0986\u0995\u09BE\u09B0\u09C7 \u09AB\u09BF\u09B0\u09C7 \u0986\u09B8\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964 \u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0-\u09AA\u09B0\u09BF\u099A\u09CD\u099B\u09A8\u09CD\u09A8 \u09A5\u09BE\u0995\u09BE, \u09A8\u09BF\u09DF\u09AE\u09BF\u09A4 \u0997\u09CB\u09B8\u09B2 \u0995\u09B0\u09BE \u098F\u09AC\u0982 \u09B8\u09C1\u09A4\u09BF \u0995\u09BE\u09AA\u09DC \u09AA\u09B0\u09BE \u099A\u09B0\u09CD\u09AE\u09B0\u09CB\u0997 \u09AA\u09CD\u09B0\u09A4\u09BF\u09B0\u09CB\u09A7\u09C7 \u09B8\u09B9\u09BE\u09DF\u0995\u0964 \u098F\u09B2\u09BE\u09B0\u09CD\u099C\u09BF \u09B9\u09DF \u098F\u09AE\u09A8 \u0996\u09BE\u09AC\u09BE\u09B0 (\u09AF\u09C7\u09AE\u09A8 \u099A\u09BF\u0982\u09DC\u09BF, \u0987\u09B2\u09BF\u09B6, \u09AC\u09C7\u0997\u09C1\u09A8) \u098F\u09DC\u09BF\u09DF\u09C7 \u099A\u09B2\u09BE \u0989\u099A\u09BF\u09A4\u0964 \u09AA\u09CD\u09B0\u099A\u09C1\u09B0 \u099C\u09B2 \u0993 \u09B6\u09BE\u0995\u09B8\u09AC\u099C\u09BF \u0996\u09C7\u09B2\u09C7 \u09A4\u09CD\u09AC\u0995 \u09AD\u09BE\u09B2\u09CB \u09A5\u09BE\u0995\u09C7\u0964",
    date: "\u09E8\u09E6\u09E8\u09EA-\u09E6\u09E7-\u09E8\u09E6",
    author: "\u09A1\u09BE\u0983 \u0995\u09C7. \u098F\u09AE. \u0986\u09B2\u09C0",
    category: "\u099A\u09B0\u09CD\u09AE\u09B0\u09CB\u0997",
    image: "https://picsum.photos/seed/skin/800/600"
  },
  {
    id: 6,
    title: "\u09AE\u09BE\u09A8\u09B8\u09BF\u0995 \u09B8\u09CD\u09AC\u09BE\u09B8\u09CD\u09A5\u09CD\u09AF \u0993 \u09B9\u09CB\u09AE\u09BF\u0993\u09AA\u09CD\u09AF\u09BE\u09A5\u09BF",
    excerpt: "\u09A6\u09C1\u09B6\u09CD\u099A\u09BF\u09A8\u09CD\u09A4\u09BE, \u09AD\u09DF \u0993 \u09AC\u09BF\u09B7\u09A3\u09CD\u09A3\u09A4\u09BE\u09DF \u0987\u0997\u09A8\u09C7\u09B6\u09BF\u09DF\u09BE \u0993 \u09A8\u09C7\u099F\u09CD\u09B0\u09BE\u09AE \u09AE\u09BF\u0989\u09B0\u0964",
    content: "\u09B6\u09B0\u09C0\u09B0 \u0993 \u09AE\u09A8 \u098F\u0995\u09C7 \u0985\u09AA\u09B0\u09C7\u09B0 \u09AA\u09B0\u09BF\u09AA\u09C2\u09B0\u0995\u0964 \u09AE\u09A8\u09C7\u09B0 \u0985\u09B8\u09C1\u0996 \u09B6\u09B0\u09C0\u09B0\u09C7\u09B0 \u0993\u09AA\u09B0 \u0997\u09AD\u09C0\u09B0 \u09AA\u09CD\u09B0\u09AD\u09BE\u09AC \u09AB\u09C7\u09B2\u09C7\u0964 \u09B9\u09CB\u09AE\u09BF\u0993\u09AA\u09CD\u09AF\u09BE\u09A5\u09BF \u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE\u09DF \u09AE\u09BE\u09A8\u09B8\u09BF\u0995 \u09B8\u09CD\u09AC\u09BE\u09B8\u09CD\u09A5\u09CD\u09AF\u09C7\u09B0 \u0993\u09AA\u09B0 \u09AC\u09BF\u09B6\u09C7\u09B7 \u0997\u09C1\u09B0\u09C1\u09A4\u09CD\u09AC \u09A6\u09C7\u0993\u09DF\u09BE \u09B9\u09DF \u098F\u09AC\u0982 \u09AE\u09A8\u09C7\u09B0 \u09B2\u0995\u09CD\u09B7\u09A3 \u09AC\u09BF\u099A\u09BE\u09B0 \u0995\u09B0\u09C7 \u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE \u09AA\u09CD\u09B0\u09A6\u09BE\u09A8 \u0995\u09B0\u09BE \u09B9\u09DF\u0964\n\n**\u0987\u0997\u09A8\u09C7\u09B6\u09BF\u09DF\u09BE (Ignatia):** \u0995\u09CB\u09A8\u09CB \u09AA\u09CD\u09B0\u09BF\u09DF\u099C\u09A8\u09C7\u09B0 \u09AE\u09C3\u09A4\u09CD\u09AF\u09C1, \u09AC\u09BF\u099A\u09CD\u099B\u09C7\u09A6, \u09AC\u09BE \u09AC\u09DC \u0995\u09CB\u09A8\u09CB \u09AE\u09BE\u09A8\u09B8\u09BF\u0995 \u0986\u0998\u09BE\u09A4 \u09A5\u09C7\u0995\u09C7 \u09B8\u09C3\u09B7\u09CD\u099F \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE\u09DF \u0987\u0997\u09A8\u09C7\u09B6\u09BF\u09DF\u09BE \u09AA\u09CD\u09B0\u09A7\u09BE\u09A8 \u0993\u09B7\u09C1\u09A7\u0964 \u09B0\u09CB\u0997\u09C0 \u09A6\u09C0\u09B0\u09CD\u0998\u09B6\u09CD\u09AC\u09BE\u09B8 \u09AB\u09C7\u09B2\u09C7, \u099A\u09C1\u09AA\u099A\u09BE\u09AA \u09AC\u09B8\u09C7 \u09A5\u09BE\u0995\u09C7 \u098F\u09AC\u0982 \u09A8\u09BF\u099C\u09C7\u09B0 \u09AE\u09A8\u09C7 \u0995\u09BE\u0981\u09A6\u09A4\u09C7 \u09A5\u09BE\u0995\u09C7\u0964 \u09A4\u09BE\u09A6\u09C7\u09B0 \u09AE\u09C7\u099C\u09BE\u099C \u0996\u09C1\u09AC \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8\u09B6\u09C0\u09B2 \u09B9\u09DF\u2014\u098F\u0987 \u09B9\u09BE\u09B8\u099B\u09C7, \u0986\u09AC\u09BE\u09B0 \u098F\u0987 \u0995\u09BE\u0981\u09A6\u099B\u09C7\u0964 \u0997\u09B2\u09BE\u09B0 \u0995\u09BE\u099B\u09C7 \u09A6\u09B2\u09BE \u09AA\u09BE\u0995\u09BF\u09DF\u09C7 \u0986\u099B\u09C7 \u098F\u09AE\u09A8 \u0985\u09A8\u09C1\u09AD\u09C2\u09A4\u09BF (Globus Hystericus) \u09B9\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964\n\n**\u09A8\u09C7\u099F\u09CD\u09B0\u09BE\u09AE \u09AE\u09BF\u0989\u09B0 (Natrum Mur):** \u09AF\u09BE\u09B0\u09BE \u09AE\u09A8\u09C7\u09B0 \u09A6\u09C1\u0983\u0996 \u09AE\u09A8\u09C7\u0987 \u099A\u09C7\u09AA\u09C7 \u09B0\u09BE\u0996\u09C7\u09A8, \u0995\u09BE\u09B0\u09CB \u09B8\u09BE\u09A5\u09C7 \u09B6\u09C7\u09DF\u09BE\u09B0 \u0995\u09B0\u09A4\u09C7 \u099A\u09BE\u09A8 \u09A8\u09BE, \u098F\u09AC\u0982 \u098F\u0995\u09BE \u09A5\u09BE\u0995\u09A4\u09C7 \u09AA\u099B\u09A8\u09CD\u09A6 \u0995\u09B0\u09C7\u09A8, \u09A4\u09BE\u09A6\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u09A8\u09C7\u099F\u09CD\u09B0\u09BE\u09AE \u09AE\u09BF\u0989\u09B0\u0964 \u09B8\u09BE\u09A8\u09CD\u09A4\u09CD\u09AC\u09A8\u09BE \u09A6\u09BF\u09B2\u09C7 \u098F\u09A6\u09C7\u09B0 \u09B0\u09BE\u0997 \u09AC\u09BE \u09A6\u09C1\u0983\u0996 \u0986\u09B0\u0993 \u09AC\u09C7\u09DC\u09C7 \u09AF\u09BE\u09DF\u0964 \u098F\u09B0\u09BE \u0996\u09C1\u09AC \u09B2\u09AC\u09A3 \u09AA\u09CD\u09B0\u09BF\u09DF \u09B9\u09DF \u098F\u09AC\u0982 \u09B0\u09CB\u09A6\u09C7 \u0997\u09C7\u09B2\u09C7 \u09AE\u09BE\u09A5\u09BE\u09AC\u09CD\u09AF\u09A5\u09BE \u0995\u09B0\u09C7\u0964 \u09AA\u09C1\u09B0\u09A8\u09CB \u0995\u09CB\u09A8\u09CB \u09A6\u09C1\u0983\u0996\u09C7\u09B0 \u09B8\u09CD\u09AE\u09C3\u09A4\u09BF \u09AE\u09A8\u09C7 \u0995\u09B0\u09C7 \u098F\u09B0\u09BE \u0995\u09B7\u09CD\u099F \u09AA\u09BE\u09DF\u0964\n\n**\u0985\u09B0\u09BE\u09AE \u09AE\u09C7\u099F\u09BE\u09B2\u09BF\u0995\u09BE\u09AE (Aurum Metallicum):** \u0997\u09AD\u09C0\u09B0 \u09AC\u09BF\u09B7\u09A3\u09CD\u09A3\u09A4\u09BE \u09AC\u09BE \u09A1\u09BF\u09AA\u09CD\u09B0\u09C7\u09B6\u09A8\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u098F\u099F\u09BF \u098F\u0995\u099F\u09BF \u09B6\u0995\u09CD\u09A4\u09BF\u09B6\u09BE\u09B2\u09C0 \u0993\u09B7\u09C1\u09A7\u0964 \u09B0\u09CB\u0997\u09C0\u09B0 \u09AE\u09A8\u09C7 \u09AC\u09C7\u0981\u099A\u09C7 \u09A5\u09BE\u0995\u09BE\u09B0 \u0995\u09CB\u09A8\u09CB \u0987\u099A\u09CD\u099B\u09BE \u09A5\u09BE\u0995\u09C7 \u09A8\u09BE, \u098F\u09AE\u09A8\u0995\u09BF \u0986\u09A4\u09CD\u09AE\u09B9\u09A4\u09CD\u09AF\u09BE\u09B0 \u09AA\u09CD\u09B0\u09AC\u09A3\u09A4\u09BE\u0993 \u09A6\u09C7\u0996\u09BE \u09A6\u09BF\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964 \u09A4\u09BE\u09B0\u09BE \u09A8\u09BF\u099C\u09C7\u0995\u09C7 \u0996\u09C1\u09AC \u09A6\u09CB\u09B7\u09C0 \u09AE\u09A8\u09C7 \u0995\u09B0\u09C7 \u098F\u09AC\u0982 \u099C\u09C0\u09AC\u09A8\u09C7\u09B0 \u09AA\u09CD\u09B0\u09A4\u09BF \u09B8\u09AE\u09CD\u09AA\u09C2\u09B0\u09CD\u09A3 \u09B9\u09A4\u09BE\u09B6 \u09B9\u09DF\u09C7 \u09AA\u09DC\u09C7\u0964\n\n**\u09AA\u09BE\u09B2\u09B8\u09C7\u099F\u09BF\u09B2\u09BE (Pulsatilla):** \u0996\u09C1\u09AC \u0986\u09AC\u09C7\u0997\u09AA\u09CD\u09B0\u09AC\u09A3, \u0985\u09B2\u09CD\u09AA\u09A4\u09C7\u0987 \u0995\u09C7\u0981\u09A6\u09C7 \u09AB\u09C7\u09B2\u09C7 \u098F\u09AC\u0982 \u09A8\u09AE\u09CD\u09B0 \u09B8\u09CD\u09AC\u09AD\u09BE\u09AC\u09C7\u09B0 \u09B0\u09CB\u0997\u09C0\u09A6\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u09AA\u09BE\u09B2\u09B8\u09C7\u099F\u09BF\u09B2\u09BE\u0964 \u098F\u09B0\u09BE \u098F\u0995\u09BE \u09A5\u09BE\u0995\u09A4\u09C7 \u09AD\u09DF \u09AA\u09BE\u09DF \u098F\u09AC\u0982 \u09B8\u09AC\u09B8\u09AE\u09DF \u09B8\u0999\u09CD\u0997 \u099A\u09BE\u09DF\u0964 \u098F\u09A6\u09C7\u09B0 \u09AE\u09A8 \u0996\u09C1\u09AC \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8\u09B6\u09C0\u09B2 \u098F\u09AC\u0982 \u09B8\u09B9\u09BE\u09A8\u09C1\u09AD\u09C2\u09A4\u09BF \u09AC\u09BE \u09B8\u09BE\u09A8\u09CD\u09A4\u09CD\u09AC\u09A8\u09BE \u09AA\u09C7\u09B2\u09C7 \u098F\u09B0\u09BE \u09AD\u09BE\u09B2\u09CB \u09AC\u09CB\u09A7 \u0995\u09B0\u09C7\u0964\n\n**\u09A8\u09BE\u0995\u09CD\u09B8 \u09AD\u09AE\u09BF\u0995\u09BE (Nux Vomica):** \u09AF\u09BE\u09B0\u09BE \u0996\u09C1\u09AC \u0996\u09BF\u099F\u0996\u09BF\u099F\u09C7, \u09B0\u09BE\u0997\u09C0 \u098F\u09AC\u0982 \u0995\u09BE\u099C\u09C7\u09B0 \u099A\u09BE\u09AA\u09C7 \u09B8\u09AC\u09B8\u09AE\u09DF \u09AC\u09CD\u09AF\u09B8\u09CD\u09A4 \u09A5\u09BE\u0995\u09C7\u09A8, \u09A4\u09BE\u09A6\u09C7\u09B0 \u09AE\u09BE\u09A8\u09B8\u09BF\u0995 \u0995\u09CD\u09B2\u09BE\u09A8\u09CD\u09A4\u09BF\u09A4\u09C7 \u09A8\u09BE\u0995\u09CD\u09B8 \u09AD\u09AE\u09BF\u0995\u09BE \u09AD\u09BE\u09B2\u09CB \u0995\u09BE\u099C \u0995\u09B0\u09C7\u0964 \u098F\u09B0\u09BE \u0985\u09A8\u09CD\u09AF\u09C7\u09B0 \u09B8\u09BE\u09AE\u09BE\u09A8\u09CD\u09AF \u09AD\u09C1\u09B2\u0993 \u09B8\u09B9\u09CD\u09AF \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7 \u09A8\u09BE\u0964\n\n**\u09AE\u09BE\u09A8\u09B8\u09BF\u0995 \u09AA\u09CD\u09B0\u09B6\u09BE\u09A8\u09CD\u09A4\u09BF:**\n\u09AE\u09BE\u09A8\u09B8\u09BF\u0995 \u09B8\u09CD\u09AC\u09BE\u09B8\u09CD\u09A5\u09CD\u09AF \u09AD\u09BE\u09B2\u09CB \u09B0\u09BE\u0996\u09A4\u09C7 \u0993\u09B7\u09C1\u09A7\u09C7\u09B0 \u09AA\u09BE\u09B6\u09BE\u09AA\u09BE\u09B6\u09BF \u0987\u09A4\u09BF\u09AC\u09BE\u099A\u0995 \u099A\u09BF\u09A8\u09CD\u09A4\u09BE, \u09AE\u09C7\u09A1\u09BF\u099F\u09C7\u09B6\u09A8 \u098F\u09AC\u0982 \u09AA\u09CD\u09B0\u09BF\u09DF\u099C\u09A8\u09A6\u09C7\u09B0 \u09B8\u09BE\u09A5\u09C7 \u09B8\u09AE\u09DF \u0995\u09BE\u099F\u09BE\u09A8\u09CB \u099C\u09B0\u09C1\u09B0\u09BF\u0964 \u09AA\u09B0\u09CD\u09AF\u09BE\u09AA\u09CD\u09A4 \u0998\u09C1\u09AE \u098F\u09AC\u0982 \u09B8\u09C1\u09B7\u09AE \u0996\u09BE\u09A6\u09CD\u09AF \u0997\u09CD\u09B0\u09B9\u09A3 \u09AE\u09A8\u09C7\u09B0 \u0993\u09AA\u09B0 \u09AD\u09BE\u09B2\u09CB \u09AA\u09CD\u09B0\u09AD\u09BE\u09AC \u09AB\u09C7\u09B2\u09C7\u0964 \u09AA\u09CD\u09B0\u09DF\u09CB\u099C\u09A8\u09C7 \u09AA\u09CD\u09B0\u09AB\u09C7\u09B6\u09A8\u09BE\u09B2 \u0995\u09BE\u0989\u09A8\u09CD\u09B8\u09BF\u09B2\u09BF\u0982 \u09A8\u09C7\u0993\u09DF\u09BE \u09AF\u09C7\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964 \u09AE\u09A8\u09C7\u09B0 \u0995\u09A5\u09BE \u099A\u09C7\u09AA\u09C7 \u09A8\u09BE \u09B0\u09C7\u0996\u09C7 \u09AC\u09BF\u09B6\u09CD\u09AC\u09BE\u09B8\u09AF\u09CB\u0997\u09CD\u09AF \u0995\u09BE\u09B0\u09CB \u09B8\u09BE\u09A5\u09C7 \u09B6\u09C7\u09DF\u09BE\u09B0 \u0995\u09B0\u09B2\u09C7 \u09AE\u09BE\u09A8\u09B8\u09BF\u0995 \u099A\u09BE\u09AA \u0995\u09AE\u09C7\u0964",
    date: "\u09E8\u09E6\u09E8\u09EA-\u09E6\u09E8-\u09E7\u09E6",
    author: "\u09A1\u09BE\u0983 \u09A8\u09BE\u09B8\u09B0\u09BF\u09A8 \u0986\u0995\u09CD\u09A4\u09BE\u09B0",
    category: "\u09AE\u09BE\u09A8\u09B8\u09BF\u0995 \u09B8\u09CD\u09AC\u09BE\u09B8\u09CD\u09A5\u09CD\u09AF",
    image: "https://picsum.photos/seed/mind/800/600"
  },
  {
    id: 7,
    title: "\u09AC\u09BE\u09A4 \u09AC\u09CD\u09AF\u09A5\u09BE \u0993 \u0986\u09B0\u09A5\u09CD\u09B0\u09BE\u0987\u099F\u09BF\u09B8",
    excerpt: "\u09B0\u09BE\u09B8 \u099F\u0995\u09CD\u09B8 \u0993 \u09AC\u09CD\u09B0\u09BE\u09DF\u09CB\u09A8\u09BF\u09DF\u09BE \u0995\u0996\u09A8 \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09AC\u09C7\u09A8?",
    content: "\u09AC\u09BE\u09A4 \u09AC\u09CD\u09AF\u09A5\u09BE \u09AC\u09BE \u0986\u09B0\u09A5\u09CD\u09B0\u09BE\u0987\u099F\u09BF\u09B8 \u09AC\u09DF\u09B8\u09CD\u0995\u09A6\u09C7\u09B0 \u098F\u0995\u099F\u09BF \u09B8\u09BE\u09A7\u09BE\u09B0\u09A3 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE \u09B9\u09B2\u09C7\u0993 \u09AC\u09B0\u09CD\u09A4\u09AE\u09BE\u09A8\u09C7 \u0995\u09AE \u09AC\u09DF\u09B8\u09C0\u09A6\u09C7\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7\u0993 \u098F\u099F\u09BF \u09A6\u09C7\u0996\u09BE \u09AF\u09BE\u099A\u09CD\u099B\u09C7\u0964 \u0997\u09BF\u0981\u099F\u09C7 \u0997\u09BF\u0981\u099F\u09C7 \u09AC\u09CD\u09AF\u09A5\u09BE, \u09AB\u09CB\u09B2\u09BE \u098F\u09AC\u0982 \u09A8\u09DC\u09BE\u099A\u09DC\u09BE\u09DF \u0995\u09B7\u09CD\u099F \u09B9\u0993\u09DF\u09BE \u098F\u09B0 \u09AA\u09CD\u09B0\u09A7\u09BE\u09A8 \u09B2\u0995\u09CD\u09B7\u09A3\u0964 \u09B9\u09CB\u09AE\u09BF\u0993\u09AA\u09CD\u09AF\u09BE\u09A5\u09BF \u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE\u09DF \u09AC\u09BE\u09A4\u09C7\u09B0 \u09AC\u09CD\u09AF\u09A5\u09BE\u09B0 \u099A\u09AE\u09CE\u0995\u09BE\u09B0 \u09B8\u09AE\u09BE\u09A7\u09BE\u09A8 \u09B0\u09DF\u09C7\u099B\u09C7\u0964\n\n**\u09B0\u09BE\u09B8 \u099F\u0995\u09CD\u09B8 (Rhus Tox):** \u09AC\u09BE\u09A4\u09C7\u09B0 \u09AC\u09CD\u09AF\u09A5\u09BE\u09DF \u09B0\u09BE\u09B8 \u099F\u0995\u09CD\u09B8 \u09AC\u09B9\u09C1\u09B2 \u09AC\u09CD\u09AF\u09AC\u09B9\u09C3\u09A4 \u098F\u0995\u099F\u09BF \u0993\u09B7\u09C1\u09A7\u0964 \u098F\u09B0 \u09AA\u09CD\u09B0\u09A7\u09BE\u09A8 \u09B2\u0995\u09CD\u09B7\u09A3 \u09B9\u09B2\u09CB\u2014\u09AC\u09BF\u09B6\u09CD\u09B0\u09BE\u09AE \u09A8\u09BF\u09B2\u09C7 \u09AC\u09BE \u099A\u09C1\u09AA\u099A\u09BE\u09AA \u09AC\u09B8\u09C7 \u09A5\u09BE\u0995\u09B2\u09C7 \u09AC\u09CD\u09AF\u09A5\u09BE \u09AC\u09BE\u09DC\u09C7, \u0995\u09BF\u09A8\u09CD\u09A4\u09C1 \u09A8\u09DC\u09BE\u099A\u09DC\u09BE \u09AC\u09BE \u09B9\u09BE\u0981\u099F\u09BE\u09B9\u09BE\u0981\u099F\u09BF \u0995\u09B0\u09B2\u09C7 \u09AC\u09CD\u09AF\u09A5\u09BE \u0995\u09AE\u09C7 \u09AF\u09BE\u09DF\u0964 \u09B8\u0995\u09BE\u09B2\u09C7 \u0998\u09C1\u09AE \u09A5\u09C7\u0995\u09C7 \u0993\u09A0\u09BE\u09B0 \u09AA\u09B0 \u09AC\u09BE \u09A6\u09C0\u09B0\u09CD\u0998\u0995\u09CD\u09B7\u09A3 \u09AC\u09B8\u09C7 \u09A5\u09BE\u0995\u09BE\u09B0 \u09AA\u09B0 \u09AA\u09CD\u09B0\u09A5\u09AE \u09A8\u09DC\u09BE\u099A\u09DC\u09BE\u09DF \u0996\u09C1\u09AC \u0995\u09B7\u09CD\u099F \u09B9\u09DF, \u0995\u09BF\u09A8\u09CD\u09A4\u09C1 \u0995\u09BF\u099B\u09C1\u0995\u09CD\u09B7\u09A3 \u09B9\u09BE\u0981\u099F\u09B2\u09C7 \u0986\u09B0\u09BE\u09AE \u09B2\u09BE\u0997\u09C7\u0964 \u09AC\u09B0\u09CD\u09B7\u09BE\u0995\u09BE\u09B2\u09C7 \u09AC\u09BE \u09B8\u09CD\u09AF\u09BE\u0981\u09A4\u09B8\u09CD\u09AF\u09BE\u0981\u09A4\u09C7 \u0986\u09AC\u09B9\u09BE\u0993\u09DF\u09BE\u09DF \u098F\u09A6\u09C7\u09B0 \u09AC\u09CD\u09AF\u09A5\u09BE \u09AC\u09BE\u09DC\u09C7\u0964 \u0997\u09B0\u09AE \u09B8\u09C7\u0981\u0995 \u09A6\u09BF\u09B2\u09C7 \u098F\u09B0\u09BE \u0986\u09B0\u09BE\u09AE \u09AA\u09BE\u09DF\u0964\n\n**\u09AC\u09CD\u09B0\u09BE\u09DF\u09CB\u09A8\u09BF\u09DF\u09BE (Bryonia):** \u09B0\u09BE\u09B8 \u099F\u0995\u09CD\u09B8\u09C7\u09B0 \u09A0\u09BF\u0995 \u09AC\u09BF\u09AA\u09B0\u09C0\u09A4 \u09B2\u0995\u09CD\u09B7\u09A3\u09C7 \u09AC\u09CD\u09B0\u09BE\u09DF\u09CB\u09A8\u09BF\u09DF\u09BE \u0995\u09BE\u099C \u0995\u09B0\u09C7\u0964 \u098F\u09A6\u09C7\u09B0 \u09AC\u09CD\u09AF\u09A5\u09BE \u09A8\u09DC\u09BE\u099A\u09DC\u09BE \u0995\u09B0\u09B2\u09C7 \u09AC\u09BE\u09DC\u09C7 \u098F\u09AC\u0982 \u099A\u09C1\u09AA\u099A\u09BE\u09AA \u09B6\u09C1\u09DF\u09C7 \u09AC\u09BE \u09AC\u09B8\u09C7 \u09A5\u09BE\u0995\u09B2\u09C7 \u0995\u09AE\u09C7\u0964 \u0986\u0995\u09CD\u09B0\u09BE\u09A8\u09CD\u09A4 \u09B8\u09CD\u09A5\u09BE\u09A8 \u099F\u09BF\u09AA\u09B2\u09C7 \u09AC\u09BE \u099A\u09BE\u09AA \u09A6\u09BF\u09DF\u09C7 \u09B0\u09BE\u0996\u09B2\u09C7 \u0986\u09B0\u09BE\u09AE \u09AC\u09CB\u09A7 \u09B9\u09DF\u0964 \u098F\u09A6\u09C7\u09B0 \u09AA\u09CD\u09B0\u099A\u09A3\u09CD\u09A1 \u099C\u09B2 \u09AA\u09BF\u09AA\u09BE\u09B8\u09BE \u09A5\u09BE\u0995\u09C7 \u098F\u09AC\u0982 \u0995\u09CB\u09B7\u09CD\u09A0\u0995\u09BE\u09A0\u09BF\u09A8\u09CD\u09AF \u09A6\u09C7\u0996\u09BE \u09AF\u09BE\u09DF\u0964\n\n**\u09B2\u09BF\u09A1\u09BE\u09AE \u09AA\u09BE\u09B2 (Ledum Pal):** \u09AC\u09BE\u09A4 \u09AC\u09CD\u09AF\u09A5\u09BE \u09AF\u09A6\u09BF \u09AA\u09BE\u09DF\u09C7\u09B0 \u09A6\u09BF\u0995 \u09A5\u09C7\u0995\u09C7 \u09B6\u09C1\u09B0\u09C1 \u09B9\u09DF\u09C7 \u0993\u09AA\u09B0\u09C7\u09B0 \u09A6\u09BF\u0995\u09C7 \u0993\u09A0\u09C7, \u09A4\u09AC\u09C7 \u09B2\u09BF\u09A1\u09BE\u09AE \u09AA\u09BE\u09B2 \u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09B0\u09C0\u0964 \u0986\u0995\u09CD\u09B0\u09BE\u09A8\u09CD\u09A4 \u09B8\u09CD\u09A5\u09BE\u09A8 \u09A0\u09BE\u09A8\u09CD\u09A1\u09BE \u09A5\u09BE\u0995\u09C7 \u0995\u09BF\u09A8\u09CD\u09A4\u09C1 \u09B0\u09CB\u0997\u09C0 \u0997\u09B0\u09AE \u09B8\u09B9\u09CD\u09AF \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7 \u09A8\u09BE, \u09A0\u09BE\u09A8\u09CD\u09A1\u09BE \u099C\u09B2 \u09AC\u09BE \u09AC\u09B0\u09AB \u09A6\u09BF\u09B2\u09C7 \u0986\u09B0\u09BE\u09AE \u09AA\u09BE\u09DF\u0964 \u099B\u09CB\u099F \u099B\u09CB\u099F \u099C\u09DF\u09C7\u09A8\u09CD\u099F\u09C7 \u09AC\u09BE\u09A4\u09C7\u09B0 \u09AC\u09CD\u09AF\u09A5\u09BE\u09DF \u098F\u099F\u09BF \u09AD\u09BE\u09B2\u09CB \u0995\u09BE\u099C \u0995\u09B0\u09C7\u0964\n\n**\u0995\u09B2\u099A\u09BF\u0995\u09BE\u09AE (Colchicum):** \u09AC\u09BE\u09A4\u09C7\u09B0 \u09AC\u09CD\u09AF\u09A5\u09BE\u09B0 \u09B8\u09BE\u09A5\u09C7 \u09AF\u09A6\u09BF \u0986\u0995\u09CD\u09B0\u09BE\u09A8\u09CD\u09A4 \u09B8\u09CD\u09A5\u09BE\u09A8 \u0996\u09C1\u09AC \u09B8\u09CD\u09AA\u09B0\u09CD\u09B6\u0995\u09BE\u09A4\u09B0 \u09B9\u09DF, \u0995\u09C7\u0989 \u0995\u09BE\u099B\u09C7 \u0986\u09B8\u09B2\u09C7\u0993 \u09B0\u09CB\u0997\u09C0 \u09AD\u09DF \u09AA\u09BE\u09DF \u09AF\u09C7 \u09AC\u09CD\u09AF\u09A5\u09BE \u09B2\u09BE\u0997\u09AC\u09C7, \u09A4\u09AC\u09C7 \u0995\u09B2\u099A\u09BF\u0995\u09BE\u09AE \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09BE \u09B9\u09DF\u0964 \u0996\u09BE\u09AC\u09BE\u09B0\u09C7\u09B0 \u0997\u09A8\u09CD\u09A7\u09C7 \u098F\u09A6\u09C7\u09B0 \u09AC\u09AE\u09BF \u09AD\u09BE\u09AC \u09B9\u09DF\u0964\n\n**\u0995\u09B8\u09CD\u099F\u09BF\u0995\u09BE\u09AE (Causticum):** \u09B6\u09C0\u09A4\u0995\u09BE\u09B2\u09C7 \u09AC\u09BE \u09B6\u09C1\u09B7\u09CD\u0995 \u09A0\u09BE\u09A8\u09CD\u09A1\u09BE \u09AC\u09BE\u09A4\u09BE\u09B8\u09C7 \u09AC\u09BE\u09A4 \u09AC\u09CD\u09AF\u09A5\u09BE \u09AC\u09BE\u09DC\u09B2\u09C7 \u0995\u09B8\u09CD\u099F\u09BF\u0995\u09BE\u09AE \u0989\u09AA\u09AF\u09CB\u0997\u09C0\u0964 \u098F\u09A6\u09C7\u09B0 \u0986\u0995\u09CD\u09B0\u09BE\u09A8\u09CD\u09A4 \u0985\u0999\u09CD\u0997 \u09B8\u0982\u0995\u09C1\u099A\u09BF\u09A4 \u09B9\u09DF\u09C7 \u09AF\u09BE\u09DF \u09AC\u09BE \u099B\u09CB\u099F \u09B9\u09DF\u09C7 \u09AF\u09BE\u09DF\u0964 \u09AC\u09CD\u09AF\u09A5\u09BE\u09B0 \u09B8\u09BE\u09A5\u09C7 \u0985\u09AC\u09B6 \u09AD\u09BE\u09AC \u09A5\u09BE\u0995\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964\n\n**\u09AC\u09CD\u09AF\u09BE\u09DF\u09BE\u09AE \u0993 \u0996\u09BE\u09A6\u09CD\u09AF\u09BE\u09AD\u09CD\u09AF\u09BE\u09B8:**\n\u09AC\u09BE\u09A4\u09C7\u09B0 \u09AC\u09CD\u09AF\u09A5\u09BE\u09DF \u09B8\u09A0\u09BF\u0995 \u0993\u09B7\u09C1\u09A7\u09C7\u09B0 \u09AA\u09BE\u09B6\u09BE\u09AA\u09BE\u09B6\u09BF \u09A8\u09BF\u09DF\u09AE\u09BF\u09A4 \u09B9\u09BE\u09B2\u0995\u09BE \u09AC\u09CD\u09AF\u09BE\u09DF\u09BE\u09AE \u098F\u09AC\u0982 \u0993\u099C\u09A8 \u09A8\u09BF\u09DF\u09A8\u09CD\u09A4\u09CD\u09B0\u09A3\u09C7 \u09B0\u09BE\u0996\u09BE \u099C\u09B0\u09C1\u09B0\u09BF\u0964 \u09AB\u09BF\u099C\u09BF\u0993\u09A5\u09C7\u09B0\u09BE\u09AA\u09BF \u09AC\u09BE \u09AF\u09CB\u0997\u09AC\u09CD\u09AF\u09BE\u09DF\u09BE\u09AE \u09AC\u09CD\u09AF\u09A5\u09BE\u09B0 \u0989\u09AA\u09B6\u09AE\u09C7 \u09B8\u09BE\u09B9\u09BE\u09AF\u09CD\u09AF \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964 \u0987\u0989\u09B0\u09BF\u0995 \u098F\u09B8\u09BF\u09A1 \u09AC\u09BE\u09DC\u09BE\u09DF \u098F\u09AE\u09A8 \u0996\u09BE\u09AC\u09BE\u09B0 (\u09AF\u09C7\u09AE\u09A8 \u09B2\u09BE\u09B2 \u09AE\u09BE\u0982\u09B8, \u09A1\u09BE\u09B2, \u09AA\u09C1\u0981\u0987\u09B6\u09BE\u0995) \u098F\u09DC\u09BF\u09DF\u09C7 \u099A\u09B2\u09BE \u0989\u099A\u09BF\u09A4\u0964 \u09AA\u09CD\u09B0\u099A\u09C1\u09B0 \u099C\u09B2 \u09AA\u09BE\u09A8 \u0995\u09B0\u09BE \u098F\u09AC\u0982 \u0993\u09AE\u09C7\u0997\u09BE-\u09E9 \u09AB\u09CD\u09AF\u09BE\u099F\u09BF \u098F\u09B8\u09BF\u09A1 \u09AF\u09C1\u0995\u09CD\u09A4 \u0996\u09BE\u09AC\u09BE\u09B0 \u0996\u09BE\u0993\u09DF\u09BE \u09B9\u09BE\u09DC\u09C7\u09B0 \u09B8\u09CD\u09AC\u09BE\u09B8\u09CD\u09A5\u09CD\u09AF\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u0989\u09AA\u0995\u09BE\u09B0\u09C0\u0964",
    date: "\u09E8\u09E6\u09E8\u09EA-\u09E6\u09E8-\u09E8\u09EB",
    author: "\u09A1\u09BE\u0983 \u09AE\u09CB\u0983 \u0987\u09AC\u09CD\u09B0\u09BE\u09B9\u09BF\u09AE",
    category: "\u09AC\u09BE\u09A4 \u09AC\u09CD\u09AF\u09A5\u09BE",
    image: "https://picsum.photos/seed/pain/800/600"
  },
  {
    id: 8,
    title: "\u09AE\u09B9\u09BF\u09B2\u09BE\u09A6\u09C7\u09B0 \u09B9\u09B0\u09AE\u09CB\u09A8\u099C\u09A8\u09BF\u09A4 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE",
    excerpt: "\u09AE\u09BE\u09B8\u09BF\u0995\u09C7\u09B0 \u0985\u09A8\u09BF\u09DF\u09AE \u0993 \u09AA\u09BF\u09B8\u09BF\u0993\u098F\u09B8 (PCOS) \u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE\u09DF \u09AA\u09BE\u09B2\u09B8\u09C7\u099F\u09BF\u09B2\u09BE \u0993 \u09B8\u09BF\u09AA\u09BF\u09AF\u09BC\u09BE\u0964",
    content: "\u09AE\u09B9\u09BF\u09B2\u09BE\u09A6\u09C7\u09B0 \u09B9\u09B0\u09AE\u09CB\u09A8\u099C\u09A8\u09BF\u09A4 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE \u09AF\u09C7\u09AE\u09A8 \u09AA\u09BF\u09B8\u09BF\u0993\u098F\u09B8 (PCOS), \u09AE\u09BE\u09B8\u09BF\u0995\u09C7\u09B0 \u0985\u09A8\u09BF\u09DF\u09AE, \u098F\u09AC\u0982 \u09A5\u09BE\u0987\u09B0\u09DF\u09C7\u09A1\u09C7\u09B0 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE \u09AC\u09B0\u09CD\u09A4\u09AE\u09BE\u09A8\u09C7 \u0996\u09C1\u09AC \u09B8\u09BE\u09A7\u09BE\u09B0\u09A3 \u09B9\u09DF\u09C7 \u09A6\u09BE\u0981\u09DC\u09BF\u09DF\u09C7\u099B\u09C7\u0964 \u09B9\u09CB\u09AE\u09BF\u0993\u09AA\u09CD\u09AF\u09BE\u09A5\u09BF \u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE\u09DF \u09B9\u09B0\u09AE\u09CB\u09A8\u09C7\u09B0 \u09AD\u09BE\u09B0\u09B8\u09BE\u09AE\u09CD\u09AF \u09AB\u09BF\u09B0\u09BF\u09DF\u09C7 \u098F\u09A8\u09C7 \u098F\u09B8\u09AC \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE\u09B0 \u09B8\u09CD\u09A5\u09BE\u09DF\u09C0 \u09B8\u09AE\u09BE\u09A7\u09BE\u09A8 \u0995\u09B0\u09BE \u09B8\u09AE\u09CD\u09AD\u09AC\u0964\n\n**\u09AA\u09BE\u09B2\u09B8\u09C7\u099F\u09BF\u09B2\u09BE (Pulsatilla):** \u09AE\u09B9\u09BF\u09B2\u09BE\u09A6\u09C7\u09B0 \u09B9\u09B0\u09AE\u09CB\u09A8\u099C\u09A8\u09BF\u09A4 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE\u09DF \u09AA\u09BE\u09B2\u09B8\u09C7\u099F\u09BF\u09B2\u09BE \u098F\u0995\u099F\u09BF \u09AA\u09CD\u09B0\u09A7\u09BE\u09A8 \u0993\u09B7\u09C1\u09A7\u0964 \u09AC\u09BF\u09B6\u09C7\u09B7 \u0995\u09B0\u09C7 \u09AF\u09BE\u09A6\u09C7\u09B0 \u09AE\u09BE\u09B8\u09BF\u0995 \u0985\u09A8\u09BF\u09DF\u09AE\u09BF\u09A4, \u09A6\u09C7\u09B0\u09BF\u09A4\u09C7 \u09B9\u09DF \u09AC\u09BE \u09AA\u09B0\u09BF\u09AE\u09BE\u09A3\u09C7 \u0996\u09C1\u09AC \u0995\u09AE \u09B9\u09DF\u0964 \u09AC\u09DF\u0983\u09B8\u09A8\u09CD\u09A7\u09BF\u0995\u09BE\u09B2\u09C7 \u09AE\u09BE\u09B8\u09BF\u0995 \u09B6\u09C1\u09B0\u09C1 \u09B9\u09A4\u09C7 \u09A6\u09C7\u09B0\u09BF \u09B9\u09B2\u09C7 \u098F\u099F\u09BF \u0996\u09C1\u09AC \u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09B0\u09C0\u0964 \u098F\u0987 \u09B0\u09CB\u0997\u09C0\u09B0\u09BE \u09B8\u09BE\u09A7\u09BE\u09B0\u09A3\u09A4 \u09B6\u09BE\u09A8\u09CD\u09A4, \u09A8\u09AE\u09CD\u09B0 \u098F\u09AC\u0982 \u09B2\u09BE\u099C\u09C1\u0995 \u09B8\u09CD\u09AC\u09AD\u09BE\u09AC\u09C7\u09B0 \u09B9\u09DF\u0964 \u09A4\u09BE\u09B0\u09BE \u0997\u09B0\u09AE \u09B8\u09B9\u09CD\u09AF \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7 \u09A8\u09BE \u098F\u09AC\u0982 \u0996\u09CB\u09B2\u09BE \u09AC\u09BE\u09A4\u09BE\u09B8\u09C7 \u09AD\u09BE\u09B2\u09CB \u09AC\u09CB\u09A7 \u0995\u09B0\u09C7\u0964 \u09A4\u09BE\u09A6\u09C7\u09B0 \u099C\u09B2 \u09AA\u09BF\u09AA\u09BE\u09B8\u09BE \u0996\u09C1\u09AC \u0995\u09AE \u09A5\u09BE\u0995\u09C7\u0964\n\n**\u09B8\u09BF\u09AA\u09BF\u09AF\u09BC\u09BE (Sepia):** \u099C\u09B0\u09BE\u09AF\u09BC\u09C1\u09B0 \u09AC\u09BF\u09AD\u09BF\u09A8\u09CD\u09A8 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE \u098F\u09AC\u0982 \u09B9\u09B0\u09AE\u09CB\u09A8\u09C7\u09B0 \u09AD\u09BE\u09B0\u09B8\u09BE\u09AE\u09CD\u09AF\u09B9\u09C0\u09A8\u09A4\u09BE\u09DF \u09B8\u09BF\u09AA\u09BF\u09AF\u09BC\u09BE \u099A\u09AE\u09CE\u0995\u09BE\u09B0 \u0995\u09BE\u099C \u0995\u09B0\u09C7\u0964 \u098F\u0987 \u09B0\u09CB\u0997\u09C0\u09B0\u09BE \u0996\u09C1\u09AC \u0996\u09BF\u099F\u0996\u09BF\u099F\u09C7, \u0989\u09A6\u09BE\u09B8\u09C0\u09A8 \u098F\u09AC\u0982 \u09AA\u09B0\u09BF\u09AC\u09BE\u09B0\u09C7\u09B0 \u09AA\u09CD\u09B0\u09A4\u09BF \u0995\u09B0\u09CD\u09A4\u09AC\u09CD\u09AF\u09AC\u09BF\u09AE\u09C1\u0996 \u09B9\u09DF\u09C7 \u09AA\u09DC\u09C7\u0964 \u09A4\u09BE\u09A6\u09C7\u09B0 \u09AE\u09A8\u09C7 \u09B9\u09DF \u099C\u09B0\u09BE\u09AF\u09BC\u09C1 \u09AF\u09C7\u09A8 \u09A8\u09BF\u099A\u09C7\u09B0 \u09A6\u09BF\u0995\u09C7 \u09AC\u09C7\u09B0\u09BF\u09DF\u09C7 \u0986\u09B8\u09AC\u09C7, \u09A4\u09BE\u0987 \u09A4\u09BE\u09B0\u09BE \u09A6\u09C1\u0987 \u09AA\u09BE \u0995\u09CD\u09B0\u09B8 \u0995\u09B0\u09C7 \u09AC\u09B8\u09C7\u0964 \u09AE\u09BE\u09B8\u09BF\u0995\u09C7\u09B0 \u09B8\u09AE\u09DF \u09A4\u09B2\u09AA\u09C7\u099F\u09C7 \u09AC\u09CD\u09AF\u09A5\u09BE \u098F\u09AC\u0982 \u09B8\u09BE\u09A6\u09BE \u09B8\u09CD\u09B0\u09BE\u09AC\u09C7\u09B0 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE \u09A5\u09BE\u0995\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964\n\n**\u0995\u09CD\u09AF\u09BE\u09B2\u0995\u09C7\u09B0\u09BF\u09DF\u09BE \u0995\u09BE\u09B0\u09CD\u09AC (Calcarea Carb):** \u09AF\u09C7 \u09B8\u09AC \u09AE\u09B9\u09BF\u09B2\u09BE \u098F\u0995\u099F\u09C1 \u09AE\u09CB\u099F\u09BE, \u09AB\u09B0\u09CD\u09B8\u09BE \u098F\u09AC\u0982 \u09A5\u09B2\u09A5\u09B2\u09C7 \u09B8\u09CD\u09AC\u09BE\u09B8\u09CD\u09A5\u09CD\u09AF\u09C7\u09B0 \u0985\u09A7\u09BF\u0995\u09BE\u09B0\u09C0, \u09A4\u09BE\u09A6\u09C7\u09B0 \u09AE\u09BE\u09B8\u09BF\u0995\u09C7\u09B0 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE\u09DF \u098F\u099F\u09BF \u09AC\u09CD\u09AF\u09AC\u09B9\u09C3\u09A4 \u09B9\u09DF\u0964 \u098F\u09A6\u09C7\u09B0 \u09AE\u09BE\u09B8\u09BF\u0995 \u09B8\u09AE\u09DF\u09C7\u09B0 \u0986\u0997\u09C7\u0987 \u09B9\u09DF \u098F\u09AC\u0982 \u09AA\u09B0\u09BF\u09AE\u09BE\u09A3\u09C7 \u09AC\u09C7\u09B6\u09BF \u09B9\u09DF\u0964 \u098F\u09B0\u09BE \u0996\u09C1\u09AC \u09B6\u09C0\u09A4\u0995\u09BE\u09A4\u09C1\u09B0\u09C7 \u09B9\u09DF \u098F\u09AC\u0982 \u09A1\u09BF\u09AE \u0996\u09C7\u09A4\u09C7 \u09AA\u099B\u09A8\u09CD\u09A6 \u0995\u09B0\u09C7\u0964 \u09B8\u09BE\u09AE\u09BE\u09A8\u09CD\u09AF \u09AA\u09B0\u09BF\u09B6\u09CD\u09B0\u09AE\u09C7\u0987 \u098F\u09A6\u09C7\u09B0 \u09B6\u09CD\u09AC\u09BE\u09B8\u0995\u09B7\u09CD\u099F \u09B9\u09DF \u098F\u09AC\u0982 \u0998\u09BE\u09AE \u09B9\u09DF\u0964\n\n**\u09B2\u09CD\u09AF\u09BE\u0995\u09C7\u09B8\u09BF\u09B8 (Lachesis):** \u09AE\u09C7\u09A8\u09CB\u09AA\u09CB\u099C \u09AC\u09BE \u09AE\u09BE\u09B8\u09BF\u0995 \u09AC\u09A8\u09CD\u09A7 \u09B9\u0993\u09DF\u09BE\u09B0 \u09B8\u09AE\u09DF\u0995\u09BE\u09B2\u09C0\u09A8 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE\u09DF \u09B2\u09CD\u09AF\u09BE\u0995\u09C7\u09B8\u09BF\u09B8 \u0996\u09C1\u09AC \u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09B0\u09C0\u0964 \u098F\u09A6\u09C7\u09B0 \u0997\u09B0\u09AE \u098F\u0995\u09A6\u09AE \u09B8\u09B9\u09CD\u09AF \u09B9\u09DF \u09A8\u09BE, \u0997\u09B2\u09BE\u09B0 \u0995\u09BE\u099B\u09C7 \u0995\u09BE\u09AA\u09DC \u09AC\u09BE \u0997\u09DF\u09A8\u09BE \u09AA\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7 \u09A8\u09BE\u0964 \u0998\u09C1\u09AE \u09AD\u09BE\u0999\u09BE\u09B0 \u09AA\u09B0 \u098F\u09A6\u09C7\u09B0 \u0995\u09B7\u09CD\u099F \u09AC\u09BE\u09DC\u09C7\u0964 \u098F\u09B0\u09BE \u0996\u09C1\u09AC \u09AC\u09BE\u099A\u09BE\u09B2 \u09AA\u09CD\u09B0\u0995\u09C3\u09A4\u09BF\u09B0 \u09B9\u09DF \u098F\u09AC\u0982 \u098F\u0995 \u09AC\u09BF\u09B7\u09DF \u09A5\u09C7\u0995\u09C7 \u0985\u09A8\u09CD\u09AF \u09AC\u09BF\u09B7\u09DF\u09C7 \u0995\u09A5\u09BE \u09AC\u09B2\u09C7\u0964\n\n**\u09A5\u09C1\u099C\u09BE (Thuja):** \u09AA\u09BF\u09B8\u09BF\u0993\u098F\u09B8 \u09AC\u09BE \u0993\u09AD\u09BE\u09B0\u09BF\u09A4\u09C7 \u09B8\u09BF\u09B8\u09CD\u099F \u09A5\u09BE\u0995\u09B2\u09C7 \u098F\u09AC\u0982 \u09B6\u09B0\u09C0\u09B0\u09C7 \u0985\u09AC\u09BE\u099E\u09CD\u099B\u09BF\u09A4 \u09B2\u09CB\u09AE \u09A6\u09C7\u0996\u09BE \u09A6\u09BF\u09B2\u09C7 \u09A5\u09C1\u099C\u09BE \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09BE \u09B9\u09DF\u0964 \u098F\u09A6\u09C7\u09B0 \u09B6\u09B0\u09C0\u09B0\u09C7 \u0986\u0981\u099A\u09BF\u09B2 \u09A5\u09BE\u0995\u09BE\u09B0 \u09AA\u09CD\u09B0\u09AC\u09A3\u09A4\u09BE \u09A5\u09BE\u0995\u09C7\u0964\n\n**\u099C\u09C0\u09AC\u09A8\u09A7\u09BE\u09B0\u09BE \u0993 \u09AA\u09C1\u09B7\u09CD\u099F\u09BF:**\n\u09B9\u09B0\u09AE\u09CB\u09A8\u099C\u09A8\u09BF\u09A4 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE\u09DF \u099C\u09C0\u09AC\u09A8\u09AF\u09BE\u09A4\u09CD\u09B0\u09BE\u09B0 \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8, \u09B8\u09C1\u09B7\u09AE \u0996\u09BE\u09A6\u09CD\u09AF \u0997\u09CD\u09B0\u09B9\u09A3 \u098F\u09AC\u0982 \u09A6\u09C1\u09B6\u09CD\u099A\u09BF\u09A8\u09CD\u09A4\u09BE\u09AE\u09C1\u0995\u09CD\u09A4 \u09A5\u09BE\u0995\u09BE \u0993\u09B7\u09C1\u09A7\u09C7\u09B0 \u09AE\u09A4\u09CB\u0987 \u0997\u09C1\u09B0\u09C1\u09A4\u09CD\u09AC\u09AA\u09C2\u09B0\u09CD\u09A3\u0964 \u09A8\u09BF\u09DF\u09AE\u09BF\u09A4 \u09AC\u09CD\u09AF\u09BE\u09DF\u09BE\u09AE \u09AC\u09BE \u09B9\u09BE\u0981\u099F\u09BE\u099A\u09B2\u09BE \u0993\u099C\u09A8 \u09A8\u09BF\u09DF\u09A8\u09CD\u09A4\u09CD\u09B0\u09A3\u09C7 \u09B0\u09BE\u0996\u09A4\u09C7 \u09B8\u09BE\u09B9\u09BE\u09AF\u09CD\u09AF \u0995\u09B0\u09C7, \u09AF\u09BE \u09AA\u09BF\u09B8\u09BF\u0993\u098F\u09B8 \u09A8\u09BF\u09DF\u09A8\u09CD\u09A4\u09CD\u09B0\u09A3\u09C7 \u0985\u09A4\u09CD\u09AF\u09A8\u09CD\u09A4 \u099C\u09B0\u09C1\u09B0\u09BF\u0964 \u09AA\u09CD\u09B0\u0995\u09CD\u09B0\u09BF\u09DF\u09BE\u099C\u09BE\u09A4 \u0996\u09BE\u09AC\u09BE\u09B0 \u0993 \u0985\u09A4\u09BF\u09B0\u09BF\u0995\u09CD\u09A4 \u099A\u09BF\u09A8\u09BF \u09AC\u09B0\u09CD\u099C\u09A8 \u0995\u09B0\u09BE \u0989\u099A\u09BF\u09A4\u0964 \u09AA\u09B0\u09CD\u09AF\u09BE\u09AA\u09CD\u09A4 \u0998\u09C1\u09AE \u098F\u09AC\u0982 \u09AE\u09BE\u09A8\u09B8\u09BF\u0995 \u09AA\u09CD\u09B0\u09B6\u09BE\u09A8\u09CD\u09A4\u09BF \u09B9\u09B0\u09AE\u09CB\u09A8\u09C7\u09B0 \u09AD\u09BE\u09B0\u09B8\u09BE\u09AE\u09CD\u09AF \u09AC\u099C\u09BE\u09DF \u09B0\u09BE\u0996\u09A4\u09C7 \u09B8\u09B9\u09BE\u09DF\u09A4\u09BE \u0995\u09B0\u09C7\u0964",
    date: "\u09E8\u09E6\u09E8\u09EA-\u09E6\u09E9-\u09E6\u09EB",
    author: "\u09A1\u09BE\u0983 \u09AB\u09BE\u09A4\u09C7\u09AE\u09BE \u099C\u09CB\u09B9\u09B0\u09BE",
    category: "\u09AE\u09B9\u09BF\u09B2\u09BE \u09B8\u09CD\u09AC\u09BE\u09B8\u09CD\u09A5\u09CD\u09AF",
    image: "https://picsum.photos/seed/women/800/600"
  },
  {
    id: 9,
    title: "\u09B6\u09BF\u09B6\u09C1\u09A6\u09C7\u09B0 \u0995\u09C3\u09AE\u09BF \u0993 \u09A4\u09BE\u09B0 \u09AA\u09CD\u09B0\u09A4\u09BF\u0995\u09BE\u09B0",
    excerpt: "\u09B8\u09BF\u09A8\u09BE \u0993 \u099F\u09BF\u0989\u0995\u09CD\u09B0\u09BF\u09DF\u09BE\u09AE \u0995\u09C3\u09AE\u09BF\u09B0 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE\u09DF \u0995\u09A4\u099F\u09BE \u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09B0\u09C0?",
    content: "\u09B6\u09BF\u09B6\u09C1\u09A6\u09C7\u09B0 \u09B8\u09CD\u09AC\u09BE\u09B8\u09CD\u09A5\u09CD\u09AF\u09C7\u09B0 \u0993\u09AA\u09B0 \u0995\u09C3\u09AE\u09BF\u09B0 \u09AA\u09CD\u09B0\u09AD\u09BE\u09AC \u0985\u09A8\u09C7\u0995 \u09AC\u09C7\u09B6\u09BF\u0964 \u0995\u09C3\u09AE\u09BF\u09B0 \u0995\u09BE\u09B0\u09A3\u09C7 \u09B6\u09BF\u09B6\u09C1\u09B0\u09BE \u0985\u09AA\u09C1\u09B7\u09CD\u099F\u09BF\u09A4\u09C7 \u09AD\u09CB\u0997\u09C7, \u0996\u09BF\u099F\u0996\u09BF\u099F\u09C7 \u09B9\u09DF\u09C7 \u09AF\u09BE\u09DF \u098F\u09AC\u0982 \u09A4\u09BE\u09A6\u09C7\u09B0 \u09B6\u09BE\u09B0\u09C0\u09B0\u09BF\u0995 \u0993 \u09AE\u09BE\u09A8\u09B8\u09BF\u0995 \u09AC\u09BF\u0995\u09BE\u09B6 \u09AC\u09BE\u09A7\u09BE\u0997\u09CD\u09B0\u09B8\u09CD\u09A4 \u09B9\u09DF\u0964 \u09B9\u09CB\u09AE\u09BF\u0993\u09AA\u09CD\u09AF\u09BE\u09A5\u09BF \u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE\u09DF \u0995\u09C3\u09AE\u09BF\u09B0 \u0996\u09C1\u09AC \u09AD\u09BE\u09B2\u09CB \u0993\u09B7\u09C1\u09A7 \u09B0\u09DF\u09C7\u099B\u09C7 \u09AF\u09BE \u0995\u09CB\u09A8\u09CB \u09AA\u09BE\u09B0\u09CD\u09B6\u09CD\u09AC\u09AA\u09CD\u09B0\u09A4\u09BF\u0995\u09CD\u09B0\u09BF\u09DF\u09BE \u099B\u09BE\u09DC\u09BE\u0987 \u0995\u09C3\u09AE\u09BF \u09A6\u09C2\u09B0 \u0995\u09B0\u09C7\u0964\n\n**\u09B8\u09BF\u09A8\u09BE (Cina):** \u09B6\u09BF\u09B6\u09C1\u09A6\u09C7\u09B0 \u0995\u09C3\u09AE\u09BF\u09B0 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE\u09DF \u09B8\u09BF\u09A8\u09BE \u09B8\u09AC\u099A\u09C7\u09DF\u09C7 \u09AC\u09C7\u09B6\u09BF \u09AC\u09CD\u09AF\u09AC\u09B9\u09C3\u09A4 \u0993\u09B7\u09C1\u09A7\u0964 \u098F\u09B0 \u09B2\u0995\u09CD\u09B7\u09A3\u0997\u09C1\u09B2\u09CB \u0996\u09C1\u09AC \u09B8\u09CD\u09AA\u09B7\u09CD\u099F\u2014\u09B6\u09BF\u09B6\u09C1 \u0985\u09A4\u09CD\u09AF\u09A8\u09CD\u09A4 \u0996\u09BF\u099F\u0996\u09BF\u099F\u09C7 \u0993 \u09B0\u09BE\u0997\u09C0 \u09B9\u09DF, \u0995\u09BF\u099B\u09C1\u09A4\u09C7\u0987 \u09B8\u09A8\u09CD\u09A4\u09C1\u09B7\u09CD\u099F \u09B9\u09DF \u09A8\u09BE\u0964 \u09A4\u09BE\u09B0\u09BE \u09B8\u09AC\u09B8\u09AE\u09DF \u09A8\u09BE\u0995 \u0996\u09CB\u0981\u099F\u09C7 \u09AC\u09BE \u0998\u09B7\u09C7\u0964 \u0998\u09C1\u09AE\u09C7\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7 \u09A6\u09BE\u0981\u09A4 \u0995\u09BE\u099F\u09C7 (Teeth Grinding) \u098F\u09AC\u0982 \u099A\u09AE\u0995\u09C7 \u0993\u09A0\u09C7\u0964 \u09A4\u09BE\u09A6\u09C7\u09B0 \u0995\u09CD\u09B7\u09C1\u09A7\u09BE \u0996\u09C1\u09AC \u09AC\u09C7\u09B6\u09BF \u09A5\u09BE\u0995\u09C7, \u0996\u09BE\u0993\u09DF\u09BE\u09B0 \u09AA\u09B0\u09AA\u09B0\u0987 \u0986\u09AC\u09BE\u09B0 \u0996\u09C7\u09A4\u09C7 \u099A\u09BE\u09DF\u0964 \u09AE\u09BF\u09B7\u09CD\u099F\u09BF \u0996\u09BE\u0993\u09DF\u09BE\u09B0 \u09AA\u09CD\u09B0\u09AC\u09B2 \u0987\u099A\u09CD\u099B\u09BE \u09A5\u09BE\u0995\u09C7\u0964 \u09AA\u09CD\u09B0\u09B8\u09CD\u09B0\u09BE\u09AC \u09B8\u09BE\u09A6\u09BE \u09B0\u0999\u09C7\u09B0 \u09B9\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964\n\n**\u099F\u09BF\u0989\u0995\u09CD\u09B0\u09BF\u09DF\u09BE\u09AE (Teucrium):** \u099B\u09CB\u099F \u099B\u09CB\u099F \u09B8\u09C1\u09A4\u09BE \u0995\u09C3\u09AE\u09BF \u09AC\u09BE \u0997\u09C1\u09DC\u09CB\u0995\u09C3\u09AE\u09BF\u09A4\u09C7 \u099F\u09BF\u0989\u0995\u09CD\u09B0\u09BF\u09DF\u09BE\u09AE \u0996\u09C1\u09AC \u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09B0\u09C0\u0964 \u09AE\u09B2\u09A6\u09CD\u09AC\u09BE\u09B0\u09C7 \u09AA\u09CD\u09B0\u099A\u09A3\u09CD\u09A1 \u099A\u09C1\u09B2\u0995\u09BE\u09A8\u09BF \u09B9\u09DF, \u09AC\u09BF\u09B6\u09C7\u09B7 \u0995\u09B0\u09C7 \u09B8\u09A8\u09CD\u09A7\u09CD\u09AF\u09BE\u09B0 \u09AA\u09B0 \u09AC\u09BE \u09AC\u09BF\u099B\u09BE\u09A8\u09BE\u09B0 \u0997\u09B0\u09AE\u09C7 \u099A\u09C1\u09B2\u0995\u09BE\u09A8\u09BF \u09AC\u09BE\u09DC\u09C7\u0964 \u09B6\u09BF\u09B6\u09C1 \u0985\u09A8\u09AC\u09B0\u09A4 \u09AE\u09B2\u09A6\u09CD\u09AC\u09BE\u09B0 \u099A\u09C1\u09B2\u0995\u09BE\u09A4\u09C7 \u09A5\u09BE\u0995\u09C7\u0964 \u09A8\u09BE\u0995\u09C7\u09B0 \u09AA\u09B2\u09BF\u09CD\u09AA\u09BE\u09B8\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF\u0993 \u098F\u099F\u09BF \u098F\u0995\u099F\u09BF \u09AD\u09BE\u09B2\u09CB \u0993\u09B7\u09C1\u09A7\u0964\n\n**\u09B8\u09CD\u09AF\u09BE\u09A8\u09CD\u099F\u09CB\u09A8\u09BF\u09A8 (Santonin):** \u09B8\u09BF\u09A8\u09BE\u09B0 \u09B2\u0995\u09CD\u09B7\u09A3\u09C7\u09B0 \u09AE\u09A4\u09CB\u0987 \u0995\u09BF\u09A8\u09CD\u09A4\u09C1 \u0995\u09BF\u099B\u09C1\u099F\u09BE \u0995\u09AE \u09A4\u09C0\u09AC\u09CD\u09B0 \u09B9\u09B2\u09C7 \u09B8\u09CD\u09AF\u09BE\u09A8\u09CD\u099F\u09CB\u09A8\u09BF\u09A8 \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09BE \u09B9\u09DF\u0964 \u099A\u09CB\u0996\u09C7\u09B0 \u09A8\u09BF\u099A\u09C7 \u0995\u09BE\u09B2\u09BF \u09AA\u09DC\u09C7, \u09AE\u09C1\u0996 \u09AB\u09CD\u09AF\u09BE\u0995\u09BE\u09B6\u09C7 \u09A6\u09C7\u0996\u09BE\u09DF \u098F\u09AC\u0982 \u09B8\u0995\u09BE\u09B2\u09C7 \u09AE\u09C1\u0996\u09C7 \u09A6\u09C1\u09B0\u09CD\u0997\u09A8\u09CD\u09A7 \u09A5\u09BE\u0995\u09C7\u0964 \u09AA\u09C7\u099F\u09C7 \u09AC\u09CD\u09AF\u09A5\u09BE \u098F\u09AC\u0982 \u09AC\u09AE\u09BF \u09AC\u09AE\u09BF \u09AD\u09BE\u09AC \u09A5\u09BE\u0995\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964\n\n**\u0995\u09CD\u09AF\u09BE\u09B2\u0995\u09C7\u09B0\u09BF\u09DF\u09BE \u0995\u09BE\u09B0\u09CD\u09AC (Calcarea Carb):** \u0995\u09C3\u09AE\u09BF\u09B0 \u09A7\u09BE\u09A4 \u09A6\u09C2\u09B0 \u0995\u09B0\u09A4\u09C7 \u09AC\u09BE \u09AC\u09BE\u09B0\u09AC\u09BE\u09B0 \u0995\u09C3\u09AE\u09BF \u09B9\u0993\u09DF\u09BE\u09B0 \u09AA\u09CD\u09B0\u09AC\u09A3\u09A4\u09BE \u0995\u09AE\u09BE\u09A4\u09C7 \u0995\u09CD\u09AF\u09BE\u09B2\u0995\u09C7\u09B0\u09BF\u09DF\u09BE \u0995\u09BE\u09B0\u09CD\u09AC \u09B8\u09BE\u09B9\u09BE\u09AF\u09CD\u09AF \u0995\u09B0\u09C7\u0964 \u09AC\u09BF\u09B6\u09C7\u09B7 \u0995\u09B0\u09C7 \u09AE\u09CB\u099F\u09BE, \u09A5\u09B2\u09A5\u09B2\u09C7 \u098F\u09AC\u0982 \u09AE\u09BE\u09A5\u09BE\u09DF \u0998\u09BE\u09AE \u09B9\u0993\u09DF\u09BE \u09B6\u09BF\u09B6\u09C1\u09A6\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u098F\u099F\u09BF \u0989\u09AA\u09AF\u09CB\u0997\u09C0\u0964 \u098F\u09B0\u09BE \u09AE\u09BE\u099F\u09BF, \u099A\u0995 \u09AC\u09BE \u09AA\u09C7\u09A8\u09CD\u09B8\u09BF\u09B2 \u0996\u09C7\u09A4\u09C7 \u09AA\u099B\u09A8\u09CD\u09A6 \u0995\u09B0\u09C7\u0964\n\n**\u09B8\u09BE\u09B2\u09AB\u09BE\u09B0 (Sulphur):** \u0995\u09C3\u09AE\u09BF\u09B0 \u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE\u09B0 \u09B6\u09C7\u09B7\u09C7 \u09AC\u09BE \u09AC\u09BE\u09B0\u09AC\u09BE\u09B0 \u0995\u09C3\u09AE\u09BF \u09B9\u09B2\u09C7 \u09B8\u09BE\u09B2\u09AB\u09BE\u09B0 \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09BE \u09B9\u09DF\u0964 \u09AE\u09B2\u09A6\u09CD\u09AC\u09BE\u09B0\u09C7 \u09B2\u09BE\u09B2\u099A\u09C7 \u09AD\u09BE\u09AC \u098F\u09AC\u0982 \u099A\u09C1\u09B2\u0995\u09BE\u09A8\u09BF \u09A5\u09BE\u0995\u09C7\u0964 \u09B6\u09BF\u09B6\u09C1 \u0985\u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0 \u09A5\u09BE\u0995\u09A4\u09C7 \u09AA\u099B\u09A8\u09CD\u09A6 \u0995\u09B0\u09C7\u0964\n\n**\u09AA\u09B0\u09BF\u099A\u09CD\u099B\u09A8\u09CD\u09A8\u09A4\u09BE \u0993 \u09B8\u09A4\u09B0\u09CD\u0995\u09A4\u09BE:**\n\u0995\u09C3\u09AE\u09BF \u09A5\u09C7\u0995\u09C7 \u09AC\u09BE\u0981\u099A\u09A4\u09C7 \u09B6\u09BF\u09B6\u09C1\u09A6\u09C7\u09B0 \u09A8\u0996 \u099B\u09CB\u099F \u09B0\u09BE\u0996\u09BE, \u0996\u09BE\u0993\u09DF\u09BE\u09B0 \u0986\u0997\u09C7 \u09B9\u09BE\u09A4 \u09A7\u09CB\u09DF\u09BE \u098F\u09AC\u0982 \u0996\u09BE\u09B2\u09BF \u09AA\u09BE\u09DF\u09C7 \u09A8\u09BE \u09B9\u09BE\u0981\u099F\u09BE\u09B0 \u0985\u09AD\u09CD\u09AF\u09BE\u09B8 \u0997\u09DC\u09C7 \u09A4\u09CB\u09B2\u09BE \u099C\u09B0\u09C1\u09B0\u09BF\u0964 \u09AA\u09B0\u09BF\u09AC\u09BE\u09B0\u09C7\u09B0 \u098F\u0995\u099C\u09A8\u09C7\u09B0 \u0995\u09C3\u09AE\u09BF \u09B9\u09B2\u09C7 \u09B8\u09AC\u09BE\u09B0\u0987 \u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE \u09A8\u09C7\u0993\u09DF\u09BE \u0989\u099A\u09BF\u09A4\u0964 \u0995\u09BE\u0981\u099A\u09BE \u09AB\u09B2\u09AE\u09C2\u09B2 \u0993 \u09B6\u09BE\u0995\u09B8\u09AC\u099C\u09BF \u09AD\u09BE\u09B2\u09CB \u0995\u09B0\u09C7 \u09A7\u09C1\u09DF\u09C7 \u0996\u09BE\u0993\u09DF\u09BE \u098F\u09AC\u0982 \u09AC\u09BF\u09B6\u09C1\u09A6\u09CD\u09A7 \u099C\u09B2 \u09AA\u09BE\u09A8 \u0995\u09B0\u09BE \u0995\u09C3\u09AE\u09BF \u09AA\u09CD\u09B0\u09A4\u09BF\u09B0\u09CB\u09A7\u09C7 \u09B8\u09BE\u09B9\u09BE\u09AF\u09CD\u09AF \u0995\u09B0\u09C7\u0964 \u09A8\u09BF\u09DF\u09AE\u09BF\u09A4 \u0995\u09C3\u09AE\u09BF\u09B0 \u0993\u09B7\u09C1\u09A7 \u09B8\u09C7\u09AC\u09A8 \u0995\u09B0\u09B2\u09C7 \u09B6\u09BF\u09B6\u09C1\u09B0\u09BE \u09B8\u09C1\u09B8\u09CD\u09A5 \u0993 \u09B8\u09AC\u09B2 \u09A5\u09BE\u0995\u09C7\u0964",
    date: "\u09E8\u09E6\u09E8\u09EA-\u09E6\u09E9-\u09E7\u09EB",
    author: "\u09A1\u09BE\u0983 \u0986\u09AC\u09CD\u09A6\u09C1\u09B2\u09CD\u09B2\u09BE\u09B9 \u0986\u09B2 \u09AE\u09BE\u09AE\u09C1\u09A8",
    category: "\u09B6\u09BF\u09B6\u09C1 \u09B8\u09CD\u09AC\u09BE\u09B8\u09CD\u09A5\u09CD\u09AF",
    image: "https://picsum.photos/seed/worm/800/600"
  },
  {
    id: 10,
    title: "\u09AE\u09BE\u0987\u0997\u09CD\u09B0\u09C7\u09A8 \u0993 \u09A6\u09C0\u09B0\u09CD\u0998\u09B8\u09CD\u09A5\u09BE\u09AF\u09BC\u09C0 \u09AE\u09BE\u09A5\u09BE\u09AC\u09CD\u09AF\u09A5\u09BE",
    excerpt: "\u09A8\u09CD\u09AF\u09BE\u099F\u09CD\u09B0\u09BE\u09AE \u09AE\u09BF\u0989\u09B0 \u0993 \u09B8\u09CD\u09AF\u09BE\u0999\u09CD\u0997\u09C1\u0987\u09A8\u09C7\u09B0\u09BF\u09DF\u09BE \u0995\u0996\u09A8 \u0996\u09BE\u09AC\u09C7\u09A8?",
    content: "\u09AE\u09BE\u0987\u0997\u09CD\u09B0\u09C7\u09A8 \u098F\u0995 \u09A7\u09B0\u09A3\u09C7\u09B0 \u09AC\u09BF\u09B6\u09C7\u09B7 \u09AE\u09BE\u09A5\u09BE\u09AC\u09CD\u09AF\u09A5\u09BE \u09AF\u09BE \u09B8\u09BE\u09A7\u09BE\u09B0\u09A3\u09A4 \u09AE\u09BE\u09A5\u09BE\u09B0 \u098F\u0995\u09AA\u09BE\u09B6\u09C7 \u09B9\u09DF \u098F\u09AC\u0982 \u098F\u09B0 \u09B8\u09BE\u09A5\u09C7 \u09AC\u09AE\u09BF \u09AC\u09AE\u09BF \u09AD\u09BE\u09AC \u09AC\u09BE \u09AC\u09AE\u09BF \u09B9\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964 \u0986\u09B2\u09CB \u09AC\u09BE \u09B6\u09AC\u09CD\u09A6\u09C7 \u098F\u0987 \u09AC\u09CD\u09AF\u09A5\u09BE \u09AC\u09BE\u09DC\u09C7\u0964 \u09B9\u09CB\u09AE\u09BF\u0993\u09AA\u09CD\u09AF\u09BE\u09A5\u09BF \u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE\u09DF \u09AE\u09BE\u0987\u0997\u09CD\u09B0\u09C7\u09A8\u09C7\u09B0 \u0996\u09C1\u09AC \u09AD\u09BE\u09B2\u09CB \u09B8\u09AE\u09BE\u09A7\u09BE\u09A8 \u09B0\u09DF\u09C7\u099B\u09C7\u0964\n\n**\u09A8\u09CD\u09AF\u09BE\u099F\u09CD\u09B0\u09BE\u09AE \u09AE\u09BF\u0989\u09B0 (Natrum Mur):** \u09AE\u09BE\u0987\u0997\u09CD\u09B0\u09C7\u09A8\u09C7\u09B0 \u09AC\u09CD\u09AF\u09A5\u09BE\u09DF \u09A8\u09CD\u09AF\u09BE\u099F\u09CD\u09B0\u09BE\u09AE \u09AE\u09BF\u0989\u09B0 \u0996\u09C1\u09AC \u099C\u09A8\u09AA\u09CD\u09B0\u09BF\u09DF\u0964 \u098F\u09B0 \u09AC\u09CD\u09AF\u09A5\u09BE \u09B8\u09BE\u09A7\u09BE\u09B0\u09A3\u09A4 \u09B8\u09C2\u09B0\u09CD\u09AF\u09CB\u09A6\u09DF\u09C7\u09B0 \u09B8\u09BE\u09A5\u09C7 \u09B6\u09C1\u09B0\u09C1 \u09B9\u09DF, \u09A6\u09C1\u09AA\u09C1\u09B0\u09C7 \u09AC\u09BE\u09DC\u09C7 \u098F\u09AC\u0982 \u09B8\u09C2\u09B0\u09CD\u09AF\u09BE\u09B8\u09CD\u09A4\u09C7\u09B0 \u09B8\u09BE\u09A5\u09C7 \u09B8\u09BE\u09A5\u09C7 \u0995\u09AE\u09A4\u09C7 \u09A5\u09BE\u0995\u09C7\u0964 \u09AE\u09A8\u09C7 \u09B9\u09DF \u09AF\u09C7\u09A8 \u09AE\u09BE\u09A5\u09BE\u09B0 \u09AD\u09C7\u09A4\u09B0 \u099B\u09CB\u099F \u099B\u09CB\u099F \u09B9\u09BE\u09A4\u09C1\u09DC\u09BF \u09A6\u09BF\u09DF\u09C7 \u09AA\u09C7\u099F\u09BE\u09A8\u09CB \u09B9\u099A\u09CD\u099B\u09C7\u0964 \u09B8\u09CD\u0995\u09C1\u09B2 \u09AC\u09BE \u0995\u09B2\u09C7\u099C\u09C7\u09B0 \u099B\u09BE\u09A4\u09CD\u09B0\u099B\u09BE\u09A4\u09CD\u09B0\u09C0 \u09AC\u09BE \u09AF\u09BE\u09B0\u09BE \u09AA\u09DC\u09BE\u09B6\u09CB\u09A8\u09BE \u09A8\u09BF\u09DF\u09C7 \u09A5\u09BE\u0995\u09C7\u09A8 \u09A4\u09BE\u09A6\u09C7\u09B0 \u09AE\u09BE\u09A5\u09BE\u09AC\u09CD\u09AF\u09A5\u09BE\u09DF \u098F\u099F\u09BF \u09AD\u09BE\u09B2\u09CB \u0995\u09BE\u099C \u0995\u09B0\u09C7\u0964 \u0985\u09A4\u09BF\u09B0\u09BF\u0995\u09CD\u09A4 \u09B2\u09AC\u09A3 \u0996\u09BE\u0993\u09DF\u09BE\u09B0 \u09AA\u09CD\u09B0\u09AC\u09A3\u09A4\u09BE \u098F\u09AC\u0982 \u09B0\u09CB\u09A6\u09C7 \u0997\u09C7\u09B2\u09C7 \u09AE\u09BE\u09A5\u09BE\u09AC\u09CD\u09AF\u09A5\u09BE \u09AC\u09BE\u09DC\u09BE \u098F\u09B0 \u09AA\u09CD\u09B0\u09A7\u09BE\u09A8 \u09B2\u0995\u09CD\u09B7\u09A3\u0964\n\n**\u09B8\u09CD\u09AF\u09BE\u0999\u09CD\u0997\u09C1\u0987\u09A8\u09C7\u09B0\u09BF\u09DF\u09BE (Sanguinaria):** \u09A1\u09BE\u09A8\u09A6\u09BF\u0995\u09C7\u09B0 \u09AE\u09BE\u09A5\u09BE\u09AC\u09CD\u09AF\u09A5\u09BE\u09DF \u098F\u099F\u09BF \u09AC\u09BF\u09B6\u09C7\u09B7 \u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09B0\u09C0\u0964 \u09AC\u09CD\u09AF\u09A5\u09BE \u0998\u09BE\u09DC\u09C7\u09B0 \u09A1\u09BE\u09A8\u09A6\u09BF\u0995 \u09A5\u09C7\u0995\u09C7 \u09B6\u09C1\u09B0\u09C1 \u09B9\u09DF\u09C7 \u09A1\u09BE\u09A8 \u099A\u09CB\u0996\u09C7\u09B0 \u0993\u09AA\u09B0 \u098F\u09B8\u09C7 \u09B8\u09CD\u09A5\u09BF\u09B0 \u09B9\u09DF\u0964 \u09A6\u09BF\u09A8\u09C7 \u09AC\u09CD\u09AF\u09A5\u09BE \u09AC\u09BE\u09DC\u09C7 \u098F\u09AC\u0982 \u09AC\u09AE\u09BF \u09B9\u09B2\u09C7 \u0995\u09BF\u099B\u09C1\u099F\u09BE \u0986\u09B0\u09BE\u09AE \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u0964 \u09AE\u09C7\u09A8\u09CB\u09AA\u09CB\u099C\u09C7\u09B0 \u09B8\u09AE\u09DF \u09AE\u09B9\u09BF\u09B2\u09BE\u09A6\u09C7\u09B0 \u09AE\u09BE\u09A5\u09BE\u09AC\u09CD\u09AF\u09A5\u09BE\u09DF \u098F\u099F\u09BF \u09AD\u09BE\u09B2\u09CB \u0995\u09BE\u099C \u0995\u09B0\u09C7\u0964\n\n**\u09B8\u09CD\u09AA\u09BE\u0987\u099C\u09C7\u09B2\u09BF\u09DF\u09BE (Spigelia):** \u09AC\u09BE\u09AE\u09A6\u09BF\u0995\u09C7\u09B0 \u09AE\u09BE\u09A5\u09BE\u09AC\u09CD\u09AF\u09A5\u09BE\u09DF \u09B8\u09CD\u09AA\u09BE\u0987\u099C\u09C7\u09B2\u09BF\u09DF\u09BE \u0985\u09AC\u09CD\u09AF\u09B0\u09CD\u09A5\u0964 \u09AC\u09CD\u09AF\u09A5\u09BE \u0998\u09BE\u09DC\u09C7\u09B0 \u09AC\u09BE\u09AE\u09A6\u09BF\u0995 \u09A5\u09C7\u0995\u09C7 \u09B6\u09C1\u09B0\u09C1 \u09B9\u09DF\u09C7 \u09AC\u09BE\u09AE \u099A\u09CB\u0996\u09C7\u09B0 \u0993\u09AA\u09B0 \u098F\u09B8\u09C7 \u09A6\u09BE\u0981\u09DC\u09BE\u09DF\u0964 \u09AC\u09CD\u09AF\u09A5\u09BE \u0996\u09C1\u09AC \u09A4\u09C0\u09AC\u09CD\u09B0 \u09B9\u09DF \u098F\u09AC\u0982 \u09B8\u09CD\u09A8\u09BE\u09DF\u09C1\u09B6\u09C2\u09B2\u09C7\u09B0 \u09AE\u09A4\u09CB \u09AE\u09A8\u09C7 \u09B9\u09DF\u0964 \u09A8\u09DC\u09BE\u099A\u09DC\u09BE, \u09B6\u09AC\u09CD\u09A6 \u09AC\u09BE \u09B8\u09CD\u09AA\u09B0\u09CD\u09B6\u09C7 \u09AC\u09CD\u09AF\u09A5\u09BE \u09AC\u09BE\u09DC\u09C7\u0964\n\n**\u0986\u0987\u09B0\u09BF\u09B8 \u09AD\u09BE\u09B0\u09CD\u09B8\u09BF\u0995\u09CB\u09B2\u09BE\u09B0 (Iris Versicolor):** \u09AE\u09BE\u0987\u0997\u09CD\u09B0\u09C7\u09A8\u09C7\u09B0 \u09B8\u09BE\u09A5\u09C7 \u09AF\u09A6\u09BF \u0996\u09C1\u09AC \u09AC\u09C7\u09B6\u09BF \u098F\u09B8\u09BF\u09A1\u09BF\u099F\u09BF \u09AC\u09BE \u099F\u0995 \u09AC\u09AE\u09BF \u09B9\u09DF, \u09A4\u09AC\u09C7 \u0986\u0987\u09B0\u09BF\u09B8 \u09AD\u09BE\u09B0\u09CD\u09B8\u09BF\u0995\u09CB\u09B2\u09BE\u09B0 \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09BE \u09B9\u09DF\u0964 \u099A\u09CB\u0996\u09C7\u09B0 \u09B8\u09BE\u09AE\u09A8\u09C7 \u099D\u09BE\u09AA\u09B8\u09BE \u09A6\u09C7\u0996\u09BE \u09AC\u09BE \u0986\u09B2\u09CB\u09B0 \u099D\u09B2\u0995\u09BE\u09A8\u09BF \u09A6\u09C7\u0996\u09BE\u09B0 \u09AA\u09B0 \u09AE\u09BE\u09A5\u09BE\u09AC\u09CD\u09AF\u09A5\u09BE \u09B6\u09C1\u09B0\u09C1 \u09B9\u09B2\u09C7 \u098F\u099F\u09BF \u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09B0\u09C0\u0964 \u09B8\u09AA\u09CD\u09A4\u09BE\u09B9\u09BE\u09A8\u09CD\u09A4\u09C7 \u09AC\u09BE \u099B\u09C1\u099F\u09BF\u09B0 \u09A6\u09BF\u09A8\u09C7 \u09AE\u09BE\u09A5\u09BE\u09AC\u09CD\u09AF\u09A5\u09BE (Weekend Headache) \u09B9\u0993\u09DF\u09BE \u098F\u09B0 \u098F\u0995\u099F\u09BF \u0985\u09A6\u09CD\u09AD\u09C1\u09A4 \u09B2\u0995\u09CD\u09B7\u09A3\u0964\n\n**\u0997\u09CD\u09B2\u09CB\u09A8\u09DF\u09BF\u09A8 (Glonoine):** \u09B0\u09CB\u09A6\u09C7 \u0998\u09CB\u09B0\u09BE\u0998\u09C1\u09B0\u09BF \u09AC\u09BE \u0986\u0997\u09C1\u09A8\u09C7\u09B0 \u09A4\u09BE\u09AA\u09C7 \u0995\u09BE\u099C \u0995\u09B0\u09BE\u09B0 \u09AB\u09B2\u09C7 \u09A6\u09AA\u09A6\u09AA\u09BE\u09A8\u09BF \u09AE\u09BE\u09A5\u09BE\u09AC\u09CD\u09AF\u09A5\u09BE \u09B9\u09B2\u09C7 \u0997\u09CD\u09B2\u09CB\u09A8\u09DF\u09BF\u09A8 \u09AD\u09BE\u09B2\u09CB \u0995\u09BE\u099C \u0995\u09B0\u09C7\u0964 \u09AE\u09A8\u09C7 \u09B9\u09DF \u09AE\u09BE\u09A5\u09BE \u09AB\u09C7\u099F\u09C7 \u09AF\u09BE\u09AC\u09C7\u0964 \u09AE\u09BE\u09A5\u09BE\u09DF \u09B0\u0995\u09CD\u09A4 \u0989\u09A0\u09C7 \u09AE\u09C1\u0996 \u09B2\u09BE\u09B2 \u09B9\u09DF\u09C7 \u09AF\u09BE\u09DF\u0964\n\n**\u099F\u09CD\u09B0\u09BF\u0997\u09BE\u09B0 \u0993 \u09A8\u09BF\u09DF\u09A8\u09CD\u09A4\u09CD\u09B0\u09A3:**\n\u09AE\u09BE\u0987\u0997\u09CD\u09B0\u09C7\u09A8\u09C7\u09B0 \u09B0\u09CB\u0997\u09C0\u09A6\u09C7\u09B0 \u09A8\u09BF\u09DF\u09AE\u09BF\u09A4 \u0998\u09C1\u09AE, \u09AA\u09CD\u09B0\u099A\u09C1\u09B0 \u099C\u09B2 \u09AA\u09BE\u09A8 \u098F\u09AC\u0982 \u0985\u09A4\u09BF\u09B0\u09BF\u0995\u09CD\u09A4 \u09B0\u09CB\u09A6 \u09AC\u09BE \u0986\u09B2\u09CB \u098F\u09DC\u09BF\u09DF\u09C7 \u099A\u09B2\u09BE \u0989\u099A\u09BF\u09A4\u0964 \u099A\u0995\u09B2\u09C7\u099F, \u09AA\u09A8\u09BF\u09B0, \u0995\u09AB\u09BF \u09AC\u09BE \u0985\u09A4\u09BF\u09B0\u09BF\u0995\u09CD\u09A4 \u099A\u09BF\u09A8\u09BF\u09AF\u09C1\u0995\u09CD\u09A4 \u0996\u09BE\u09AC\u09BE\u09B0 \u09AE\u09BE\u0987\u0997\u09CD\u09B0\u09C7\u09A8\u09C7\u09B0 \u09AC\u09CD\u09AF\u09A5\u09BE \u09AC\u09BE\u09DC\u09BE\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7, \u09A4\u09BE\u0987 \u098F\u0997\u09C1\u09B2\u09CB \u098F\u09DC\u09BF\u09DF\u09C7 \u099A\u09B2\u09BE \u09AD\u09BE\u09B2\u09CB\u0964 \u09AE\u09C7\u09A1\u09BF\u099F\u09C7\u09B6\u09A8 \u09AC\u09BE \u09AF\u09CB\u0997\u09AC\u09CD\u09AF\u09BE\u09DF\u09BE\u09AE \u09AE\u09BE\u09A8\u09B8\u09BF\u0995 \u099A\u09BE\u09AA \u0995\u09AE\u09BE\u09A4\u09C7 \u098F\u09AC\u0982 \u09AE\u09BE\u0987\u0997\u09CD\u09B0\u09C7\u09A8 \u09A8\u09BF\u09DF\u09A8\u09CD\u09A4\u09CD\u09B0\u09A3\u09C7 \u09B0\u09BE\u0996\u09A4\u09C7 \u09B8\u09BE\u09B9\u09BE\u09AF\u09CD\u09AF \u0995\u09B0\u09C7\u0964",
    date: "\u09E8\u09E6\u09E8\u09EA-\u09E6\u09E9-\u09E8\u09EB",
    author: "\u09A1\u09BE\u0983 \u09B6\u09BE\u09B0\u09AE\u09BF\u09A8 \u09B8\u09C1\u09B2\u09A4\u09BE\u09A8\u09BE",
    category: "\u09B8\u09CD\u09A8\u09BE\u09DF\u09C1\u09A4\u09A8\u09CD\u09A4\u09CD\u09B0",
    image: "https://picsum.photos/seed/headache/800/600"
  },
  {
    id: 11,
    title: "\u0995\u09BF\u09A1\u09A8\u09BF \u09AA\u09BE\u09A5\u09B0 \u0993 \u09B9\u09CB\u09AE\u09BF\u0993\u09AA\u09CD\u09AF\u09BE\u09A5\u09BF",
    excerpt: "\u09AC\u09BE\u09B0\u09CD\u09AC\u09BE\u09B0\u09BF\u09B8 \u09AD\u09BE\u09B2\u0997\u09BE\u09B0\u09BF\u09B8 \u0993 \u09B2\u09BE\u0987\u0995\u09CB\u09AA\u09CB\u09A1\u09BF\u09DF\u09BE\u09AE\u09C7\u09B0 \u09AD\u09C2\u09AE\u09BF\u0995\u09BE\u0964",
    content: "\u0995\u09BF\u09A1\u09A8\u09BF \u09AA\u09BE\u09A5\u09B0 \u09AC\u09BE \u09B0\u09C7\u09A8\u09BE\u09B2 \u09B8\u09CD\u099F\u09CB\u09A8 \u09AC\u09B0\u09CD\u09A4\u09AE\u09BE\u09A8\u09C7 \u0996\u09C1\u09AC \u09AA\u09B0\u09BF\u099A\u09BF\u09A4 \u098F\u0995\u099F\u09BF \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE\u0964 \u099C\u09B2 \u0995\u09AE \u0996\u09BE\u0993\u09DF\u09BE, \u0985\u09A4\u09BF\u09B0\u09BF\u0995\u09CD\u09A4 \u0986\u09AE\u09BF\u09B7 \u0997\u09CD\u09B0\u09B9\u09A3 \u098F\u09AC\u0982 \u09AA\u09CD\u09B0\u09B8\u09CD\u09B0\u09BE\u09AC \u0986\u099F\u0995\u09C7 \u09B0\u09BE\u0996\u09BE \u098F\u09B0 \u09AA\u09CD\u09B0\u09A7\u09BE\u09A8 \u0995\u09BE\u09B0\u09A3\u0964 \u09B9\u09CB\u09AE\u09BF\u0993\u09AA\u09CD\u09AF\u09BE\u09A5\u09BF \u0993\u09B7\u09C1\u09A7\u09C7\u09B0 \u09AE\u09BE\u09A7\u09CD\u09AF\u09AE\u09C7 \u0985\u09AA\u09BE\u09B0\u09C7\u09B6\u09A8 \u099B\u09BE\u09DC\u09BE\u0987 \u099B\u09CB\u099F \u0993 \u09AE\u09BE\u099D\u09BE\u09B0\u09BF \u0986\u0995\u09BE\u09B0\u09C7\u09B0 \u09AA\u09BE\u09A5\u09B0 \u09AC\u09C7\u09B0 \u0995\u09B0\u09BE \u09B8\u09AE\u09CD\u09AD\u09AC\u0964\n\n**\u09AC\u09BE\u09B0\u09CD\u09AC\u09BE\u09B0\u09BF\u09B8 \u09AD\u09BE\u09B2\u0997\u09BE\u09B0\u09BF\u09B8 (Berberis Vulgaris):** \u0995\u09BF\u09A1\u09A8\u09BF \u09AA\u09BE\u09A5\u09B0\u09C7\u09B0 \u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE\u09DF \u098F\u099F\u09BF \u09B8\u09AC\u099A\u09C7\u09DF\u09C7 \u09AC\u09B9\u09C1\u09B2 \u09AC\u09CD\u09AF\u09AC\u09B9\u09C3\u09A4 \u0993\u09B7\u09C1\u09A7\u0964 \u09AC\u09BF\u09B6\u09C7\u09B7 \u0995\u09B0\u09C7 \u09AC\u09BE\u09AE \u09A6\u09BF\u0995\u09C7\u09B0 \u0995\u09BF\u09A1\u09A8\u09BF\u09A4\u09C7 \u09AA\u09BE\u09A5\u09B0 \u09B9\u09B2\u09C7 \u098F\u099F\u09BF \u099C\u09BE\u09A6\u09C1\u09B0 \u09AE\u09A4\u09CB \u0995\u09BE\u099C \u0995\u09B0\u09C7\u0964 \u09AC\u09CD\u09AF\u09A5\u09BE \u0995\u09BF\u09A1\u09A8\u09BF \u09A5\u09C7\u0995\u09C7 \u09B6\u09C1\u09B0\u09C1 \u09B9\u09DF\u09C7 \u09AA\u09CD\u09B0\u09B8\u09CD\u09B0\u09BE\u09AC\u09C7\u09B0 \u09A8\u09BE\u09B2\u09C0 \u09A6\u09BF\u09DF\u09C7 \u09A8\u09BF\u099A\u09C7\u09B0 \u09A6\u09BF\u0995\u09C7 \u09AC\u09BE \u0989\u09B0\u09C1\u09B0 \u09A6\u09BF\u0995\u09C7 \u099B\u09DC\u09BF\u09DF\u09C7 \u09AA\u09DC\u09C7\u0964 \u09AA\u09CD\u09B0\u09B8\u09CD\u09B0\u09BE\u09AC\u09C7 \u099C\u09CD\u09AC\u09BE\u09B2\u09BE-\u09AA\u09CB\u09DC\u09BE \u09A5\u09BE\u0995\u09C7 \u098F\u09AC\u0982 \u09AA\u09CD\u09B0\u09B8\u09CD\u09B0\u09BE\u09AC\u09C7\u09B0 \u09A4\u09B2\u09BE\u09A8\u09BF \u09B2\u09BE\u09B2\u099A\u09C7 \u09AC\u09BE \u0987\u099F\u09C7\u09B0 \u0997\u09C1\u0981\u09DC\u09CB\u09B0 \u09AE\u09A4\u09CB \u09B9\u09DF\u0964 \u09A8\u09DC\u09BE\u099A\u09DC\u09BE \u0995\u09B0\u09B2\u09C7 \u09AC\u09BE \u099D\u09BE\u0981\u0995\u09C1\u09A8\u09BF \u09B2\u09BE\u0997\u09B2\u09C7 \u09AC\u09CD\u09AF\u09A5\u09BE \u09AC\u09BE\u09DC\u09C7\u0964\n\n**\u09B2\u09BE\u0987\u0995\u09CB\u09AA\u09CB\u09A1\u09BF\u09DF\u09BE\u09AE (Lycopodium):** \u09A1\u09BE\u09A8 \u09A6\u09BF\u0995\u09C7\u09B0 \u0995\u09BF\u09A1\u09A8\u09BF\u09A4\u09C7 \u09AA\u09BE\u09A5\u09B0 \u09B9\u09B2\u09C7 \u09B2\u09BE\u0987\u0995\u09CB\u09AA\u09CB\u09A1\u09BF\u09DF\u09BE\u09AE \u09AA\u09CD\u09B0\u09A7\u09BE\u09A8 \u0993\u09B7\u09C1\u09A7\u0964 \u09AA\u09CD\u09B0\u09B8\u09CD\u09B0\u09BE\u09AC\u09C7\u09B0 \u0986\u0997\u09C7 \u09AA\u09BF\u09A0\u09C7 \u09AC\u09BE \u0995\u09CB\u09AE\u09B0\u09C7 \u0996\u09C1\u09AC \u09AC\u09CD\u09AF\u09A5\u09BE \u09B9\u09DF, \u0995\u09BF\u09A8\u09CD\u09A4\u09C1 \u09AA\u09CD\u09B0\u09B8\u09CD\u09B0\u09BE\u09AC \u0995\u09B0\u09BE\u09B0 \u09AA\u09B0 \u09AC\u09CD\u09AF\u09A5\u09BE \u0995\u09AE\u09C7 \u09AF\u09BE\u09DF\u0964 \u09AA\u09CD\u09B0\u09B8\u09CD\u09B0\u09BE\u09AC\u09C7 \u09B2\u09BE\u09B2 \u09AC\u09BE\u09B2\u09C1\u0995\u09A3\u09BE \u09AC\u09BE \u09A4\u09B2\u09BE\u09A8\u09BF \u09A6\u09C7\u0996\u09BE \u09AF\u09BE\u09DF\u0964 \u09AA\u09C7\u099F\u09C7 \u09AA\u09CD\u09B0\u099A\u09C1\u09B0 \u0997\u09CD\u09AF\u09BE\u09B8 \u09A5\u09BE\u0995\u09C7 \u098F\u09AC\u0982 \u09AC\u09BF\u0995\u09C7\u09B2 \u09EA\u099F\u09BE \u09A5\u09C7\u0995\u09C7 \u09B0\u09BE\u09A4 \u09EE\u099F\u09BE \u09AA\u09B0\u09CD\u09AF\u09A8\u09CD\u09A4 \u0995\u09B7\u09CD\u099F \u09AC\u09BE\u09DC\u09C7\u0964\n\n**\u09B8\u09BE\u09B0\u09CD\u09B8\u09BE\u09AA\u09CD\u09AF\u09BE\u09B0\u09BF\u09B2\u09BE (Sarsaparilla):** \u09AA\u09CD\u09B0\u09B8\u09CD\u09B0\u09BE\u09AC \u0995\u09B0\u09BE\u09B0 \u09B6\u09C7\u09B7\u09C7 \u09AF\u09A6\u09BF \u0985\u09B8\u09B9\u09CD\u09AF \u09AF\u09A8\u09CD\u09A4\u09CD\u09B0\u09A3\u09BE \u09B9\u09DF, \u09A4\u09AC\u09C7 \u09B8\u09BE\u09B0\u09CD\u09B8\u09BE\u09AA\u09CD\u09AF\u09BE\u09B0\u09BF\u09B2\u09BE \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09BE \u09B9\u09DF\u0964 \u09B0\u09CB\u0997\u09C0 \u09A6\u09BE\u0981\u09DC\u09BF\u09DF\u09C7 \u09AA\u09CD\u09B0\u09B8\u09CD\u09B0\u09BE\u09AC \u0995\u09B0\u09B2\u09C7 \u0995\u09BF\u099B\u09C1\u099F\u09BE \u09B8\u09B9\u099C\u09C7 \u09B9\u09DF \u0995\u09BF\u09A8\u09CD\u09A4\u09C1 \u09AC\u09B8\u09C7 \u0995\u09B0\u09B2\u09C7 \u0995\u09B7\u09CD\u099F \u09B9\u09DF\u0964 \u09A1\u09BE\u09A8 \u0995\u09BF\u09A1\u09A8\u09BF\u09B0 \u09AA\u09BE\u09A5\u09B0\u09C7 \u098F\u099F\u09BF \u09AC\u09C7\u09B6\u09BF \u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09B0\u09C0\u0964 \u09B6\u09BF\u09B6\u09C1\u09A6\u09C7\u09B0 \u09AA\u09CD\u09B0\u09B8\u09CD\u09B0\u09BE\u09AC\u09C7\u09B0 \u09B8\u09AE\u09DF \u0995\u09BE\u09A8\u09CD\u09A8\u09BE\u0995\u09BE\u099F\u09BF \u0995\u09B0\u09BE \u098F\u09AC\u0982 \u09AA\u09CD\u09B0\u09B8\u09CD\u09B0\u09BE\u09AC\u09C7 \u09B8\u09BE\u09A6\u09BE \u09A4\u09B2\u09BE\u09A8\u09BF \u09AA\u09DC\u09BE \u098F\u09B0 \u09B2\u0995\u09CD\u09B7\u09A3\u0964\n\n**\u09B9\u09BE\u0987\u09A1\u09CD\u09B0\u09C7\u099E\u09CD\u099C\u09BF\u09DF\u09BE (Hydrangea):** \u098F\u0995\u09C7 '\u09B8\u09CD\u099F\u09CB\u09A8 \u09AC\u09CD\u09B0\u09C7\u0995\u09BE\u09B0' \u09AC\u09BE \u09AA\u09BE\u09A5\u09B0 \u09AD\u09BE\u0999\u09BE\u09B0 \u0993\u09B7\u09C1\u09A7 \u09AC\u09B2\u09BE \u09B9\u09DF\u0964 \u098F\u099F\u09BF \u09AA\u09BE\u09A5\u09B0 \u09AD\u09C7\u0999\u09C7 \u099B\u09CB\u099F \u099B\u09CB\u099F \u099F\u09C1\u0995\u09B0\u09CB \u0995\u09B0\u09C7 \u09AC\u09C7\u09B0 \u0995\u09B0\u09C7 \u09A6\u09BF\u09A4\u09C7 \u09B8\u09BE\u09B9\u09BE\u09AF\u09CD\u09AF \u0995\u09B0\u09C7\u0964 \u09AA\u09CD\u09B0\u09B8\u09CD\u09B0\u09BE\u09AC\u09C7 \u09B8\u09BE\u09A6\u09BE \u09A4\u09B2\u09BE\u09A8\u09BF \u09AC\u09BE \u09B2\u09AC\u09A3\u09C7\u09B0 \u09AE\u09A4\u09CB \u09AA\u09A6\u09BE\u09B0\u09CD\u09A5 \u09A6\u09C7\u0996\u09BE \u09AF\u09BE\u09DF\u0964 \u0995\u09BF\u09A1\u09A8\u09BF \u0985\u099E\u09CD\u099A\u09B2\u09C7 \u09AC\u09CD\u09AF\u09A5\u09BE \u098F\u09AC\u0982 \u09AA\u09CD\u09B0\u09B8\u09CD\u09B0\u09BE\u09AC\u09C7\u09B0 \u09AC\u09C7\u0997 \u09A5\u09BE\u0995\u09B2\u09C7\u0993 \u09AA\u09CD\u09B0\u09B8\u09CD\u09B0\u09BE\u09AC \u09B6\u09C1\u09B0\u09C1 \u09B9\u09A4\u09C7 \u09A6\u09C7\u09B0\u09BF \u09B9\u09DF\u0964\n\n**\u0995\u09CD\u09AF\u09BE\u09A8\u09CD\u09A5\u09BE\u09B0\u09BF\u09B8 (Cantharis):** \u09AA\u09BE\u09A5\u09B0\u09C7\u09B0 \u0995\u09BE\u09B0\u09A3\u09C7 \u09AF\u09A6\u09BF \u09AA\u09CD\u09B0\u09B8\u09CD\u09B0\u09BE\u09AC\u09C7 \u09AA\u09CD\u09B0\u099A\u09A3\u09CD\u09A1 \u099C\u09CD\u09AC\u09BE\u09B2\u09BE \u098F\u09AC\u0982 \u09B0\u0995\u09CD\u09A4 \u09AF\u09BE\u09DF, \u09A4\u09AC\u09C7 \u0995\u09CD\u09AF\u09BE\u09A8\u09CD\u09A5\u09BE\u09B0\u09BF\u09B8 \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09BE \u09B9\u09DF\u0964 \u09AB\u09CB\u0981\u099F\u09BE \u09AB\u09CB\u0981\u099F\u09BE \u09AA\u09CD\u09B0\u09B8\u09CD\u09B0\u09BE\u09AC \u09B9\u09DF \u098F\u09AC\u0982 \u09AA\u09CD\u09B0\u09A4\u09BF\u09AC\u09BE\u09B0\u0987 \u099C\u09CD\u09AC\u09BE\u09B2\u09BE \u0995\u09B0\u09C7\u0964\n\n**\u0996\u09BE\u09A6\u09CD\u09AF\u09BE\u09AD\u09CD\u09AF\u09BE\u09B8 \u0993 \u09AA\u09CD\u09B0\u09A4\u09BF\u09B0\u09CB\u09A7:**\n\u0995\u09BF\u09A1\u09A8\u09BF \u09AA\u09BE\u09A5\u09B0 \u09AA\u09CD\u09B0\u09A4\u09BF\u09B0\u09CB\u09A7\u09C7 \u09AA\u09CD\u09B0\u09A4\u09BF\u09A6\u09BF\u09A8 \u0985\u09A8\u09CD\u09A4\u09A4 \u09E9-\u09EA \u09B2\u09BF\u099F\u09BE\u09B0 \u099C\u09B2 \u09AA\u09BE\u09A8 \u0995\u09B0\u09BE \u098F\u09AC\u0982 \u0985\u0995\u09CD\u09B8\u09BE\u09B2\u09C7\u099F \u09AF\u09C1\u0995\u09CD\u09A4 \u0996\u09BE\u09AC\u09BE\u09B0 (\u09AF\u09C7\u09AE\u09A8 \u09AA\u09BE\u09B2\u0982 \u09B6\u09BE\u0995, \u099F\u09AE\u09C7\u099F\u09CB, \u099A\u0995\u09B2\u09C7\u099F) \u09AA\u09B0\u09BF\u09AE\u09BF\u09A4 \u0996\u09BE\u0993\u09DF\u09BE \u0989\u099A\u09BF\u09A4\u0964 \u0985\u09A4\u09BF\u09B0\u09BF\u0995\u09CD\u09A4 \u09B2\u09AC\u09A3 \u0993 \u09AA\u09CD\u09B0\u09BE\u09A3\u09C0\u099C \u09AA\u09CD\u09B0\u09CB\u099F\u09BF\u09A8 (\u09AF\u09C7\u09AE\u09A8 \u09AE\u09BE\u0982\u09B8) \u098F\u09DC\u09BF\u09DF\u09C7 \u099A\u09B2\u09BE \u09AD\u09BE\u09B2\u09CB\u0964 \u09B2\u09C7\u09AC\u09C1\u09B0 \u09B6\u09B0\u09AC\u09A4 \u09AC\u09BE \u09B8\u09BE\u0987\u099F\u09CD\u09B0\u09BE\u09B8 \u09AB\u09B2 \u0995\u09BF\u09A1\u09A8\u09BF \u09AA\u09BE\u09A5\u09B0 \u09AA\u09CD\u09B0\u09A4\u09BF\u09B0\u09CB\u09A7\u09C7 \u09B8\u09BE\u09B9\u09BE\u09AF\u09CD\u09AF \u0995\u09B0\u09C7\u0964 \u09AA\u09CD\u09B0\u09B8\u09CD\u09B0\u09BE\u09AC \u0986\u099F\u0995\u09C7 \u09A8\u09BE \u09B0\u09BE\u0996\u09BE \u098F\u09AC\u0982 \u09A8\u09BF\u09DF\u09AE\u09BF\u09A4 \u09AC\u09CD\u09AF\u09BE\u09DF\u09BE\u09AE \u0995\u09B0\u09BE \u0995\u09BF\u09A1\u09A8\u09BF\u09B0 \u09B8\u09C1\u09B8\u09CD\u09A5\u09A4\u09BE\u09B0 \u099C\u09A8\u09CD\u09AF \u099C\u09B0\u09C1\u09B0\u09BF\u0964",
    date: "\u09E8\u09E6\u09E8\u09EA-\u09E6\u09EA-\u09E6\u09EB",
    author: "\u09A1\u09BE\u0983 \u09AE\u09CB\u0983 \u09B0\u09BF\u09DF\u09BE\u099C \u0989\u09A6\u09CD\u09A6\u09BF\u09A8",
    category: "\u0995\u09BF\u09A1\u09A8\u09BF \u09B0\u09CB\u0997",
    image: "https://picsum.photos/seed/kidney/800/600"
  },
  {
    id: 12,
    title: "\u0989\u099A\u09CD\u099A \u09B0\u0995\u09CD\u09A4\u099A\u09BE\u09AA \u0993 \u09B9\u09C3\u09A6\u09B0\u09CB\u0997",
    excerpt: "\u09B0\u09BE\u0989\u09B2\u09AB\u09BF\u09DF\u09BE \u0993 \u0995\u09CD\u09B0\u09CD\u09AF\u09BE\u099F\u09BF\u0997\u09BE\u09B8 \u0995\u09C0\u09AD\u09BE\u09AC\u09C7 \u0995\u09BE\u099C \u0995\u09B0\u09C7?",
    content: "\u0989\u099A\u09CD\u099A \u09B0\u0995\u09CD\u09A4\u099A\u09BE\u09AA \u09AC\u09BE \u09B9\u09BE\u0987\u09AA\u09BE\u09B0\u099F\u09C7\u09A8\u09B6\u09A8\u0995\u09C7 '\u09A8\u09C0\u09B0\u09AC \u0998\u09BE\u09A4\u0995' \u09AC\u09B2\u09BE \u09B9\u09DF\u0964 \u098F\u099F\u09BF \u09B9\u09C3\u09A6\u09B0\u09CB\u0997, \u09B8\u09CD\u099F\u09CD\u09B0\u09CB\u0995 \u098F\u09AC\u0982 \u0995\u09BF\u09A1\u09A8\u09BF \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE\u09B0 \u099D\u09C1\u0981\u0995\u09BF \u09AC\u09BE\u09DC\u09BE\u09DF\u0964 \u09B9\u09CB\u09AE\u09BF\u0993\u09AA\u09CD\u09AF\u09BE\u09A5\u09BF \u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE\u09DF \u09B2\u0995\u09CD\u09B7\u09A3 \u0985\u09A8\u09C1\u09AF\u09BE\u09DF\u09C0 \u0993\u09B7\u09C1\u09A7 \u09B8\u09C7\u09AC\u09A8 \u0995\u09B0\u09B2\u09C7 \u09B0\u0995\u09CD\u09A4\u099A\u09BE\u09AA \u09A8\u09BF\u09DF\u09A8\u09CD\u09A4\u09CD\u09B0\u09A3\u09C7 \u09B0\u09BE\u0996\u09BE \u09B8\u09AE\u09CD\u09AD\u09AC\u0964\n\n**\u09B0\u09BE\u0989\u09B2\u09AB\u09BF\u09DF\u09BE \u09B8\u09BE\u09B0\u09CD\u09AA\u09C7\u09A8\u09CD\u099F\u09BF\u09A8\u09BE (Rauwolfia Serpentina):** \u0989\u099A\u09CD\u099A \u09B0\u0995\u09CD\u09A4\u099A\u09BE\u09AA \u09A8\u09BF\u09DF\u09A8\u09CD\u09A4\u09CD\u09B0\u09A3\u09C7 \u098F\u099F\u09BF \u09AE\u09BE\u09A6\u09BE\u09B0 \u099F\u09BF\u0982\u099A\u09BE\u09B0 \u09B9\u09BF\u09B8\u09C7\u09AC\u09C7 \u0996\u09C1\u09AC \u099C\u09A8\u09AA\u09CD\u09B0\u09BF\u09DF\u0964 \u098F\u099F\u09BF \u09A4\u09BE\u09CE\u0995\u09CD\u09B7\u09A3\u09BF\u0995\u09AD\u09BE\u09AC\u09C7 \u09B0\u0995\u09CD\u09A4\u099A\u09BE\u09AA \u0995\u09AE\u09BE\u09A4\u09C7 \u09B8\u09BE\u09B9\u09BE\u09AF\u09CD\u09AF \u0995\u09B0\u09C7\u0964 \u09A4\u09AC\u09C7 \u098F\u099F\u09BF \u09AE\u09C2\u09B2 \u09B0\u09CB\u0997\u09C7\u09B0 \u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE \u09A8\u09DF, \u09AC\u09B0\u0982 \u0989\u09AA\u09B6\u09AE\u0995\u09BE\u09B0\u09C0 \u09B9\u09BF\u09B8\u09C7\u09AC\u09C7 \u0995\u09BE\u099C \u0995\u09B0\u09C7\u0964 \u09A6\u09C0\u09B0\u09CD\u0998\u09B8\u09CD\u09A5\u09BE\u09AF\u09BC\u09C0 \u09B8\u09AE\u09BE\u09A7\u09BE\u09A8\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u09B2\u0995\u09CD\u09B7\u09A8\u09AD\u09BF\u09A4\u09CD\u09A4\u09BF\u0995 \u0993\u09B7\u09C1\u09A7 \u09AA\u09CD\u09B0\u09DF\u09CB\u099C\u09A8\u0964\n\n**\u0995\u09CD\u09B0\u09CD\u09AF\u09BE\u099F\u09BF\u0997\u09BE\u09B8 (Crataegus):** \u098F\u0995\u09C7 \u09B9\u09C3\u09A6\u09AA\u09BF\u09A3\u09CD\u09A1\u09C7\u09B0 \u099F\u09A8\u09BF\u0995 \u09AC\u09B2\u09BE \u09B9\u09DF\u0964 \u098F\u099F\u09BF \u09B9\u09C3\u09A6\u09AA\u09C7\u09B6\u09BF\u0995\u09C7 \u09B6\u0995\u09CD\u09A4\u09BF\u09B6\u09BE\u09B2\u09C0 \u0995\u09B0\u09C7 \u098F\u09AC\u0982 \u09B0\u0995\u09CD\u09A4 \u09B8\u099E\u09CD\u099A\u09BE\u09B2\u09A8 \u09B8\u09CD\u09AC\u09BE\u09AD\u09BE\u09AC\u09BF\u0995 \u09B0\u09BE\u0996\u09A4\u09C7 \u09B8\u09BE\u09B9\u09BE\u09AF\u09CD\u09AF \u0995\u09B0\u09C7\u0964 \u0989\u099A\u09CD\u099A \u09B0\u0995\u09CD\u09A4\u099A\u09BE\u09AA\u09C7\u09B0 \u09B8\u09BE\u09A5\u09C7 \u09AF\u09A6\u09BF \u09AC\u09C1\u0995\u09C7 \u09AC\u09CD\u09AF\u09A5\u09BE, \u09B6\u09CD\u09AC\u09BE\u09B8\u0995\u09B7\u09CD\u099F \u09AC\u09BE \u09B9\u09C3\u09A6\u09B8\u09CD\u09AA\u09A8\u09CD\u09A6\u09A8 \u0985\u09A8\u09BF\u09DF\u09AE\u09BF\u09A4 \u09B9\u09DF, \u09A4\u09AC\u09C7 \u098F\u099F\u09BF \u0996\u09C1\u09AC \u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09B0\u09C0\u0964 \u098F\u099F\u09BF \u09A7\u09AE\u09A8\u09C0\u09B0 \u0997\u09BE\u09A4\u09CD\u09B0\u09C7 \u099C\u09AE\u09C7 \u09A5\u09BE\u0995\u09BE \u099A\u09B0\u09CD\u09AC\u09BF \u0997\u09B2\u09BE\u09A4\u09C7\u0993 \u09B8\u09BE\u09B9\u09BE\u09AF\u09CD\u09AF \u0995\u09B0\u09C7\u0964\n\n**\u0985\u09B0\u09BE\u09AE \u09AE\u09C7\u099F\u09BE\u09B2\u09BF\u0995\u09BE\u09AE (Aurum Metallicum):** \u0989\u099A\u09CD\u099A \u09B0\u0995\u09CD\u09A4\u099A\u09BE\u09AA\u09C7\u09B0 \u09B8\u09BE\u09A5\u09C7 \u09AF\u09A6\u09BF \u09B0\u09CB\u0997\u09C0 \u0996\u09C1\u09AC \u09AC\u09BF\u09B7\u09A3\u09CD\u09A3 \u09A5\u09BE\u0995\u09C7, \u099C\u09C0\u09AC\u09A8\u09C7\u09B0 \u09AA\u09CD\u09B0\u09A4\u09BF \u09AC\u09BF\u09A4\u09C3\u09B7\u09CD\u09A3\u09BE \u09A5\u09BE\u0995\u09C7 \u098F\u09AC\u0982 \u0986\u09A4\u09CD\u09AE\u09B9\u09A4\u09CD\u09AF\u09BE\u09B0 \u0995\u09A5\u09BE \u09AD\u09BE\u09AC\u09C7, \u09A4\u09AC\u09C7 \u0985\u09B0\u09BE\u09AE \u09AE\u09C7\u099F\u09BE\u09B2\u09BF\u0995\u09BE\u09AE \u0989\u09AA\u09AF\u09C1\u0995\u09CD\u09A4\u0964 \u098F\u09A6\u09C7\u09B0 \u09AE\u09C1\u0996\u09AE\u09A8\u09CD\u09A1\u09B2 \u09B2\u09BE\u09B2\u099A\u09C7 \u09A6\u09C7\u0996\u09BE\u09DF \u098F\u09AC\u0982 \u09B0\u09BE\u09A4\u09C7 \u0995\u09B7\u09CD\u099F \u09AC\u09BE\u09DC\u09C7\u0964\n\n**\u0997\u09CD\u09B2\u09CB\u09A8\u09DF\u09BF\u09A8 (Glonoine):** \u09B9\u09A0\u09BE\u09CE \u09B0\u0995\u09CD\u09A4\u099A\u09BE\u09AA \u09AC\u09C7\u09DC\u09C7 \u0997\u09BF\u09DF\u09C7 \u09AE\u09BE\u09A5\u09BE\u09DF \u09AA\u09CD\u09B0\u099A\u09A3\u09CD\u09A1 \u09A6\u09AA\u09A6\u09AA\u09BE\u09A8\u09BF \u09AC\u09CD\u09AF\u09A5\u09BE \u09B9\u09B2\u09C7 \u0997\u09CD\u09B2\u09CB\u09A8\u09DF\u09BF\u09A8 \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09BE \u09B9\u09DF\u0964 \u09AE\u09A8\u09C7 \u09B9\u09DF \u09AE\u09BE\u09A5\u09BE \u09AB\u09C7\u099F\u09C7 \u09AF\u09BE\u09AC\u09C7\u0964 \u09B0\u09CB\u09A6\u09C7 \u0997\u09C7\u09B2\u09C7 \u09AC\u09BE \u0986\u0997\u09C1\u09A8\u09C7\u09B0 \u09A4\u09BE\u09AA\u09C7 \u09A5\u09BE\u0995\u09B2\u09C7 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE \u09AC\u09BE\u09DC\u09C7\u0964 \u0998\u09BE\u09DC\u09C7\u09B0 \u09A7\u09AE\u09A8\u09C0 \u09A6\u09AA\u09A6\u09AA \u0995\u09B0\u09C7\u0964\n\n**\u09A8\u09CD\u09AF\u09BE\u099F\u09CD\u09B0\u09BE\u09AE \u09AE\u09BF\u0989\u09B0 (Natrum Mur):** \u09AF\u09BE\u09B0\u09BE \u0985\u09A4\u09BF\u09B0\u09BF\u0995\u09CD\u09A4 \u09B2\u09AC\u09A3 \u0996\u09C7\u09A4\u09C7 \u09AA\u099B\u09A8\u09CD\u09A6 \u0995\u09B0\u09C7\u09A8 \u098F\u09AC\u0982 \u09AE\u09BE\u09A8\u09B8\u09BF\u0995 \u099A\u09BE\u09AA\u09C7 \u09AD\u09CB\u0997\u09C7\u09A8, \u09A4\u09BE\u09A6\u09C7\u09B0 \u0989\u099A\u09CD\u099A \u09B0\u0995\u09CD\u09A4\u099A\u09BE\u09AA\u09C7 \u09A8\u09CD\u09AF\u09BE\u099F\u09CD\u09B0\u09BE\u09AE \u09AE\u09BF\u0989\u09B0 \u09AD\u09BE\u09B2\u09CB \u0995\u09BE\u099C \u0995\u09B0\u09C7\u0964 \u09B8\u0995\u09BE\u09B2\u09C7 \u0998\u09C1\u09AE \u09A5\u09C7\u0995\u09C7 \u0993\u09A0\u09BE\u09B0 \u09AA\u09B0 \u09AE\u09BE\u09A5\u09BE\u09AC\u09CD\u09AF\u09A5\u09BE \u098F\u09AC\u0982 \u09AC\u09C1\u0995 \u09A7\u09DC\u09AB\u09DC \u0995\u09B0\u09BE \u098F\u09B0 \u09B2\u0995\u09CD\u09B7\u09A3\u0964\n\n**\u099C\u09C0\u09AC\u09A8\u09A7\u09BE\u09B0\u09BE \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8:**\n\u0989\u099A\u09CD\u099A \u09B0\u0995\u09CD\u09A4\u099A\u09BE\u09AA \u09A8\u09BF\u09DF\u09A8\u09CD\u09A4\u09CD\u09B0\u09A3\u09C7 \u09B0\u09BE\u0996\u09A4\u09C7 \u0993\u09B7\u09C1\u09A7\u09C7\u09B0 \u09AA\u09BE\u09B6\u09BE\u09AA\u09BE\u09B6\u09BF \u09B2\u09AC\u09A3\u09C7\u09B0 \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09AE\u09BE\u09A8\u09CB, \u09A8\u09BF\u09DF\u09AE\u09BF\u09A4 \u09B9\u09BE\u0981\u099F\u09BE \u098F\u09AC\u0982 \u09A6\u09C1\u09B6\u09CD\u099A\u09BF\u09A8\u09CD\u09A4\u09BE\u09AE\u09C1\u0995\u09CD\u09A4 \u09A5\u09BE\u0995\u09BE \u0985\u09A4\u09CD\u09AF\u09A8\u09CD\u09A4 \u099C\u09B0\u09C1\u09B0\u09BF\u0964 \u0993\u099C\u09A8 \u09A8\u09BF\u09DF\u09A8\u09CD\u09A4\u09CD\u09B0\u09A3\u09C7 \u09B0\u09BE\u0996\u09BE \u098F\u09AC\u0982 \u09A7\u09C2\u09AE\u09AA\u09BE\u09A8 \u09AC\u09B0\u09CD\u099C\u09A8 \u0995\u09B0\u09BE \u09B9\u09C3\u09A6\u09B0\u09CB\u0997\u09C7\u09B0 \u099D\u09C1\u0981\u0995\u09BF \u0995\u09AE\u09BE\u09DF\u0964 \u09A8\u09BF\u09DF\u09AE\u09BF\u09A4 \u09B0\u0995\u09CD\u09A4\u099A\u09BE\u09AA \u09AE\u09BE\u09AA\u09BE \u098F\u09AC\u0982 \u099A\u09BF\u0995\u09BF\u09CE\u09B8\u0995\u09C7\u09B0 \u09AA\u09B0\u09BE\u09AE\u09B0\u09CD\u09B6 \u0985\u09A8\u09C1\u09AF\u09BE\u09DF\u09C0 \u099A\u09B2\u09BE \u09B8\u09C1\u09B8\u09CD\u09A5 \u09A5\u09BE\u0995\u09BE\u09B0 \u099A\u09BE\u09AC\u09BF\u0995\u09BE\u09A0\u09BF\u0964",
    date: "\u09E8\u09E6\u09E8\u09EA-\u09E6\u09EA-\u09E7\u09EB",
    author: "\u09A1\u09BE\u0983 \u0995\u09BE\u09AE\u09B0\u09C1\u09B2 \u09B9\u09BE\u09B8\u09BE\u09A8",
    category: "\u09B9\u09C3\u09A6\u09B0\u09CB\u0997",
    image: "https://picsum.photos/seed/heart/800/600"
  },
  {
    id: 13,
    title: "\u099A\u09C1\u09B2 \u09AA\u09DC\u09BE \u0993 \u0985\u0995\u09BE\u09B2 \u09AA\u0995\u09CD\u0995\u09A4\u09BE",
    excerpt: "\u0989\u0987\u099C\u09AC\u09A1\u09C7\u09A8 \u0993 \u098F\u09B8\u09BF\u09A1 \u09AB\u09B8\u09C7\u09B0 \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0\u0964",
    content: "\u099A\u09C1\u09B2 \u09AA\u09DC\u09BE \u09AC\u09BE \u0985\u0995\u09BE\u09B2 \u09AA\u0995\u09CD\u0995\u09A4\u09BE \u09A8\u09BE\u09B0\u09C0-\u09AA\u09C1\u09B0\u09C1\u09B7 \u0989\u09AD\u09DF\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF\u0987 \u098F\u0995\u099F\u09BF \u099A\u09BF\u09A8\u09CD\u09A4\u09BE\u09B0 \u09AC\u09BF\u09B7\u09DF\u0964 \u09AA\u09C1\u09B7\u09CD\u099F\u09BF\u09B9\u09C0\u09A8\u09A4\u09BE, \u09B9\u09B0\u09AE\u09CB\u09A8\u09C7\u09B0 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE, \u0996\u09C1\u09B6\u0995\u09BF \u09AC\u09BE \u09AC\u0982\u09B6\u0997\u09A4 \u0995\u09BE\u09B0\u09A3\u09C7 \u099A\u09C1\u09B2 \u09AA\u09DC\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964 \u09B9\u09CB\u09AE\u09BF\u0993\u09AA\u09CD\u09AF\u09BE\u09A5\u09BF \u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE\u09DF \u099A\u09C1\u09B2\u09C7\u09B0 \u0997\u09CB\u09DC\u09BE \u09AE\u099C\u09AC\u09C1\u09A4 \u0995\u09B0\u09C7 \u099A\u09C1\u09B2 \u09AA\u09DC\u09BE \u09B0\u09CB\u09A7 \u0995\u09B0\u09BE \u09B8\u09AE\u09CD\u09AD\u09AC\u0964\n\n**\u0989\u0987\u099C\u09AC\u09A1\u09C7\u09A8 (Wiesbaden):** \u099A\u09C1\u09B2 \u09AA\u09DC\u09BE\u09B0 \u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE\u09DF \u0989\u0987\u099C\u09AC\u09A1\u09C7\u09A8 \u0996\u09C1\u09AC \u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09B0\u09C0\u0964 \u098F\u099F\u09BF \u099A\u09C1\u09B2\u09C7\u09B0 \u0997\u09CB\u09DC\u09BE \u09B6\u0995\u09CD\u09A4 \u0995\u09B0\u09C7 \u098F\u09AC\u0982 \u09A8\u09A4\u09C1\u09A8 \u099A\u09C1\u09B2 \u0997\u099C\u09BE\u09A4\u09C7 \u09B8\u09BE\u09B9\u09BE\u09AF\u09CD\u09AF \u0995\u09B0\u09C7\u0964 \u099A\u09C1\u09B2 \u0996\u09C1\u09AC \u09A6\u09CD\u09B0\u09C1\u09A4 \u09AC\u09DC \u09B9\u09DF \u098F\u09AC\u0982 \u0998\u09A8 \u09B9\u09DF\u0964 \u098F\u099F\u09BF \u09B8\u09BE\u09A7\u09BE\u09B0\u09A3\u09A4 \u09E9\u09E6 \u09AC\u09BE \u09E8\u09E6\u09E6 \u09B6\u0995\u09CD\u09A4\u09BF\u09A4\u09C7 \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09BE \u09B9\u09DF\u0964\n\n**\u099C\u09BE\u09AC\u09CB\u09B0\u09BE\u09A8\u09CD\u09A1\u09BF (Jaborandi):** \u09AE\u09BE\u09A6\u09BE\u09B0 \u099F\u09BF\u0982\u099A\u09BE\u09B0 \u09B9\u09BF\u09B8\u09C7\u09AC\u09C7 \u099C\u09BE\u09AC\u09CB\u09B0\u09BE\u09A8\u09CD\u09A1\u09BF \u09A4\u09C7\u09B2 \u09AC\u09BE \u09B2\u09CB\u09B6\u09A8 \u0986\u0995\u09BE\u09B0\u09C7 \u099A\u09C1\u09B2\u09C7 \u09AE\u09BE\u0996\u09B2\u09C7 \u0996\u09C1\u09AC \u09AD\u09BE\u09B2\u09CB \u09AB\u09B2 \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u0964 \u098F\u099F\u09BF \u099A\u09C1\u09B2 \u09AA\u09BE\u0995\u09BE \u09B0\u09CB\u09A7 \u0995\u09B0\u09C7 \u098F\u09AC\u0982 \u099A\u09C1\u09B2 \u0995\u09BE\u09B2\u09CB \u0995\u09B0\u09A4\u09C7 \u09B8\u09BE\u09B9\u09BE\u09AF\u09CD\u09AF \u0995\u09B0\u09C7\u0964 \u09AC\u09BE\u09B9\u09CD\u09AF\u09BF\u0995 \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0\u09C7\u09B0 \u09AA\u09BE\u09B6\u09BE\u09AA\u09BE\u09B6\u09BF \u098F\u099F\u09BF \u09B8\u09C7\u09AC\u09A8\u0993 \u0995\u09B0\u09BE \u09AF\u09C7\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964\n\n**\u098F\u09B8\u09BF\u09A1 \u09AB\u09B8 (Acid Phos):** \u0995\u09CB\u09A8\u09CB \u09AC\u09DC \u09B6\u09CB\u0995, \u09A6\u09C1\u0983\u0996 \u09AC\u09BE \u09AE\u09BE\u09A8\u09B8\u09BF\u0995 \u0986\u0998\u09BE\u09A4\u09C7\u09B0 \u09AA\u09B0 \u09A5\u09C7\u0995\u09C7 \u09AF\u09A6\u09BF \u099A\u09C1\u09B2 \u09AA\u09DC\u09BE \u09B6\u09C1\u09B0\u09C1 \u09B9\u09DF \u09AC\u09BE \u099A\u09C1\u09B2 \u09AA\u09C7\u0995\u09C7 \u09AF\u09BE\u09DF, \u09A4\u09AC\u09C7 \u098F\u09B8\u09BF\u09A1 \u09AB\u09B8 \u0985\u09AC\u09CD\u09AF\u09B0\u09CD\u09A5\u0964 \u0985\u09B2\u09CD\u09AA \u09AC\u09DF\u09B8\u09C7 \u099A\u09C1\u09B2 \u09AA\u09C7\u0995\u09C7 \u09AF\u09BE\u0993\u09DF\u09BE \u098F\u09AC\u0982 \u09B6\u09BE\u09B0\u09C0\u09B0\u09BF\u0995 \u0993 \u09AE\u09BE\u09A8\u09B8\u09BF\u0995 \u09A6\u09C1\u09B0\u09CD\u09AC\u09B2\u09A4\u09BE \u098F\u09B0 \u09AA\u09CD\u09B0\u09A7\u09BE\u09A8 \u09B2\u0995\u09CD\u09B7\u09A3\u0964 \u099A\u09C1\u09B2 \u0996\u09C1\u09AC \u09AA\u09BE\u09A4\u09B2\u09BE \u09B9\u09DF\u09C7 \u09AF\u09BE\u09DF \u098F\u09AC\u0982 \u099C\u099F \u09AA\u09BE\u0995\u09BF\u09DF\u09C7 \u09AF\u09BE\u09DF\u0964\n\n**\u09B2\u09BE\u0987\u0995\u09CB\u09AA\u09CB\u09A1\u09BF\u09DF\u09BE\u09AE (Lycopodium):** \u0985\u09B2\u09CD\u09AA \u09AC\u09DF\u09B8\u09C7 \u099F\u09BE\u0995 \u09AA\u09DC\u09BE, \u09AC\u09BF\u09B6\u09C7\u09B7 \u0995\u09B0\u09C7 \u09AE\u09BE\u09A5\u09BE\u09B0 \u09AE\u09BE\u099D\u0996\u09BE\u09A8\u09C7 \u09AC\u09BE \u0995\u09AA\u09BE\u09B2\u09C7 \u099F\u09BE\u0995 \u09AA\u09DC\u09B2\u09C7 \u09B2\u09BE\u0987\u0995\u09CB\u09AA\u09CB\u09A1\u09BF\u09DF\u09BE\u09AE \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09BE \u09B9\u09DF\u0964 \u09AA\u09C7\u099F\u09C7\u09B0 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE, \u09B2\u09BF\u09AD\u09BE\u09B0\u09C7\u09B0 \u09A6\u09C1\u09B0\u09CD\u09AC\u09B2\u09A4\u09BE \u098F\u09AC\u0982 \u0985\u0995\u09BE\u09B2 \u09AC\u09BE\u09B0\u09CD\u09A7\u0995\u09CD\u09AF\u09C7\u09B0 \u099B\u09BE\u09AA \u09A5\u09BE\u0995\u09B2\u09C7 \u098F\u099F\u09BF \u09AD\u09BE\u09B2\u09CB \u0995\u09BE\u099C \u0995\u09B0\u09C7\u0964 \u09AA\u09CD\u09B0\u09B8\u09AC\u09C7\u09B0 \u09AA\u09B0 \u09AE\u09B9\u09BF\u09B2\u09BE\u09A6\u09C7\u09B0 \u099A\u09C1\u09B2 \u09AA\u09DC\u09B2\u09C7\u0993 \u098F\u099F\u09BF \u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09B0\u09C0\u0964\n\n**\u09B8\u09BE\u0987\u09B2\u09BF\u09B6\u09BF\u09DF\u09BE (Silicea):** \u09AA\u09C1\u09B7\u09CD\u099F\u09BF\u09B9\u09C0\u09A8\u09A4\u09BE\u09B0 \u0995\u09BE\u09B0\u09A3\u09C7 \u099A\u09C1\u09B2 \u09AA\u09DC\u09B2\u09C7 \u098F\u09AC\u0982 \u09A8\u0996 \u09AD\u09C7\u0999\u09C7 \u09AF\u09BE\u0993\u09DF\u09BE\u09B0 \u09AA\u09CD\u09B0\u09AC\u09A3\u09A4\u09BE \u09A5\u09BE\u0995\u09B2\u09C7 \u09B8\u09BE\u0987\u09B2\u09BF\u09B6\u09BF\u09DF\u09BE \u09AD\u09BE\u09B2\u09CB \u0995\u09BE\u099C \u0995\u09B0\u09C7\u0964 \u098F\u09A6\u09C7\u09B0 \u09B9\u09BE\u09A4-\u09AA\u09BE \u09B8\u09AC\u09B8\u09AE\u09DF \u0998\u09BE\u09AE\u09C7 \u098F\u09AC\u0982 \u09A6\u09C1\u09B0\u09CD\u0997\u09A8\u09CD\u09A7 \u09B9\u09DF\u0964\n\n**\u09AB\u09CD\u09B2\u09CB\u09B0\u09BF\u0995 \u098F\u09B8\u09BF\u09A1 (Fluoric Acid):** \u099F\u09BE\u0987\u09AB\u09DF\u09C7\u09A1 \u09AC\u09BE \u09A6\u09C0\u09B0\u09CD\u0998\u09B8\u09CD\u09A5\u09BE\u09AF\u09BC\u09C0 \u099C\u09CD\u09AC\u09B0\u09C7\u09B0 \u09AA\u09B0 \u099A\u09C1\u09B2 \u09AA\u09DC\u09B2\u09C7 \u098F\u099F\u09BF \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09BE \u09B9\u09DF\u0964 \u099A\u09C1\u09B2 \u0996\u09C1\u09AC \u09B0\u09C1\u0995\u09CD\u09B7 \u0993 \u09B6\u09C1\u09B7\u09CD\u0995 \u09B9\u09DF\u09C7 \u09AF\u09BE\u09DF\u0964\n\n**\u099A\u09C1\u09B2\u09C7\u09B0 \u09AF\u09A4\u09CD\u09A8 \u0993 \u09AA\u09C1\u09B7\u09CD\u099F\u09BF:**\n\u099A\u09C1\u09B2 \u09AA\u09DC\u09BE \u09B0\u09CB\u09A7\u09C7 \u09B8\u09C1\u09B7\u09AE \u0996\u09BE\u09AC\u09BE\u09B0 \u0997\u09CD\u09B0\u09B9\u09A3, \u09AA\u09CD\u09B0\u099A\u09C1\u09B0 \u099C\u09B2 \u09AA\u09BE\u09A8 \u098F\u09AC\u0982 \u099A\u09C1\u09B2\u09C7\u09B0 \u09AF\u09A4\u09CD\u09A8 \u09A8\u09C7\u0993\u09DF\u09BE \u09AA\u09CD\u09B0\u09DF\u09CB\u099C\u09A8\u0964 \u09AA\u09CD\u09B0\u09CB\u099F\u09BF\u09A8 \u09B8\u09AE\u09C3\u09A6\u09CD\u09A7 \u0996\u09BE\u09AC\u09BE\u09B0 (\u09AF\u09C7\u09AE\u09A8 \u09A1\u09BF\u09AE, \u09AE\u09BE\u099B, \u09A1\u09BE\u09B2) \u098F\u09AC\u0982 \u09AD\u09BF\u099F\u09BE\u09AE\u09BF\u09A8 \u0987 \u09AF\u09C1\u0995\u09CD\u09A4 \u0996\u09BE\u09AC\u09BE\u09B0 \u099A\u09C1\u09B2\u09C7\u09B0 \u09B8\u09CD\u09AC\u09BE\u09B8\u09CD\u09A5\u09CD\u09AF\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u09AD\u09BE\u09B2\u09CB\u0964 \u09B0\u09BE\u09B8\u09BE\u09DF\u09A8\u09BF\u0995 \u09B6\u09CD\u09AF\u09BE\u09AE\u09CD\u09AA\u09C1 \u09AC\u09BE \u0995\u09BE\u09B2\u09BE\u09B0 \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u09A5\u09C7\u0995\u09C7 \u09AC\u09BF\u09B0\u09A4 \u09A5\u09BE\u0995\u09BE \u0989\u099A\u09BF\u09A4\u0964 \u09B8\u09AA\u09CD\u09A4\u09BE\u09B9\u09C7 \u0985\u09A8\u09CD\u09A4\u09A4 \u09A6\u09C1\u0987\u09A6\u09BF\u09A8 \u099A\u09C1\u09B2\u09C7 \u09A4\u09C7\u09B2 \u09AE\u09CD\u09AF\u09BE\u09B8\u09BE\u099C \u0995\u09B0\u09BE \u09B0\u0995\u09CD\u09A4 \u09B8\u099E\u09CD\u099A\u09BE\u09B2\u09A8 \u09AC\u09BE\u09DC\u09BE\u09DF \u098F\u09AC\u0982 \u099A\u09C1\u09B2\u09C7\u09B0 \u0997\u09CB\u09DC\u09BE \u09AE\u099C\u09AC\u09C1\u09A4 \u0995\u09B0\u09C7\u0964",
    date: "\u09E8\u09E6\u09E8\u09EA-\u09E6\u09EA-\u09E8\u09EB",
    author: "\u09A1\u09BE\u0983 \u09A8\u09C1\u09B8\u09B0\u09BE\u09A4 \u099C\u09BE\u09B9\u09BE\u09A8",
    category: "\u099A\u09C1\u09B2 \u0993 \u09A4\u09CD\u09AC\u0995",
    image: "https://picsum.photos/seed/hair/800/600"
  }
];
export {
  blogPosts,
  medicines,
  organonPrinciples,
  symptomCategories
};
