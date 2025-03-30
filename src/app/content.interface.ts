export interface Content {
  heroTitle: string;
  heroDescription: string;
  trialButtonText: string;
  callButtonText: string;
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
  positions: Position[];
}

export interface Position {
  title: string;
  description: string;
  requirements: string[];
  location: string;
}

export interface FullstackContent {
  title: string;
  description: string;
  items: {
    icon: string;
    alt: string;
    title: string;
    content: string;
  }[];
}
