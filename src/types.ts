export interface Vehicle {
  id: string;
  name: string;
  type: 'Tank' | 'APC' | 'Aircraft' | 'Naval' | 'Artillery';
  country: string;
  era: string;
  image: string;
  description: string;
  specs: {
    weight?: string;
    speed?: string;
    armament?: string[];
    armor?: string;
    crew?: number;
    range?: string;
    engine?: string;
  };
  variants?: {
    name: string;
    description: string;
  }[];
  timeline?: {
    year: string;
    event: string;
  }[];
  aiPrompt?: string;
}

export type Category = 'All' | 'Tank' | 'APC' | 'Aircraft' | 'Naval' | 'Artillery';
