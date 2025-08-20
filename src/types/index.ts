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

export interface SVGShape {
  path: string;
  viewBox: string;
}

export interface MorphingSVGRef {
  morphTo: (shape: string) => void;
}

export interface SectionProps {
  children: React.ReactNode;
  id: string;
  bgColor: string;
bgImage?: string;
  textColor: string;
  onEnter?: () => void;
  onLeave?: () => void;
  className?: string;
}

export interface MorphingSVGProps {
  currentShape?: string;
  nextShape?: string;
  className?: string;
}