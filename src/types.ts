export interface Medicine {
  id: string;
  name: string;
  commonName: string;
  source: string;
  description: string;
  mainSymptoms: string[];
  mentalSymptoms: string[];
  modalities: {
    aggravation: string;
    amelioration: string;
  };
}

export interface OrganonPrinciple {
  id: number;
  title: string;
  content: string;
}

export interface Remedy {
  name: string;
  description?: string;
  symptoms?: string[];
  mainSymptoms?: string[];
  mentalSymptoms?: string[];
  modalities?: {
    aggravation: string;
    amelioration: string;
  };
  materiaMedicaInfo?: string;
}

export interface Disease {
  id: string;
  name: string;
  remedies: Remedy[];
}

export interface SymptomCategory {
  id: string;
  name: string;
  diseases: Disease[];
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
}
