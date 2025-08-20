export interface StorySection {
  id: string;
  title: string;
  subtitle: string;
  fromShape: string;
  toShape: string;
  bgColor: string;
  bgImage?: string;
  textColor: string;
}

export const STORY_SECTIONS: StorySection[] = [
  {
    id: 'hero',
    title: 'Alles beginnt mit einer Idee...',
    subtitle: 'Der erste Schritt zur Innovation',
    fromShape: 'circle',
    toShape: 'thought',
    bgColor: 'from-gradient-blue to-gradient-darkblue',
    textColor: 'text-brand-pink',
  },
  {
    id: 'innovation',
    title: 'Idee wird zur Innovation',
    subtitle: 'Kreativität trifft auf Technik',
    fromShape: 'thought',
    toShape: 'lightbulb',
    bgColor: 'from-gradient-darkblue to-gradient-blue',
    textColor: 'text-brand-blue',
  },
  {
    id: 'sharing',
    title: 'Innovation wächst durch Austausch',
    subtitle: 'Gemeinsam machen wir deine Idee größer',
    fromShape: 'lightbulb',
    toShape: 'bubbles',
    bgColor: 'from-gradient-blue to-gradient-darkblue',
    textColor: 'text-brand-pink',
  },
  {
    id: 'brand',
    title: 'Deine Vision wird Realität',
    subtitle: 'Welcome to the future',
    fromShape: 'bubbles',
    toShape: 'logo',
    bgColor: 'bg-brand-blue',
    textColor: 'text-brand-blue',
    bgImage: '/byte5-office-header.jpg',
  }
];

export const ANIMATION_DURATIONS = {
  morphing: 2,
  textFade: 1,
  colorTransition: 1,
  parallax: 1,
} as const;