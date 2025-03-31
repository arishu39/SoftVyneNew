export interface Content {
  languages: {
    [key: string]: LanguageSpecificContent;
  };
  trialButtonText: string;
  callButtonText: string;
  positions: Position[];
}

export interface LanguageSpecificContent {
  heroTitle: string;
  heroDescription: string;
  experienceYears?: string;
  upgradeServiceText?: string;
  costSavingText?: string;
  imageUrl?: string;
  hourlyPrice?: string;
  monthlyPriceIndividual?: string;
  monthlyPriceTeam?: string;
  hourlyDescription?: string;
  monthlyDescriptionIndividual?: string;
  monthlyDescriptionTeam?: string;
}

export interface Position {
  title: string;
  description: string;
  requirements: string[];
  location: string;
}

export interface FullstackContent {
  languages: {
    [key: string]: FullstackLanguageContent;
  };
}

export interface FullstackLanguageContent {
  title: string;
  description: string;
  items: FullstackItem[];
}

export interface FullstackItem {
  icon: string;
  alt: string;
  title: string;
  content: string;
}

export interface HireDevContent {
  heroTitle: string;
  heroDescription: string;
  trialButtonText: string;
  callButtonText: string;
  experienceYears: string;
  upgradeServiceText: string;
  costSavingText: string;
  imageUrl: string;
  positions: HireDevPosition[];
}

export interface HireDevPosition {
  title: string;
  description: string;
  requirements: string[];
  location: string;
}
