export type ButtonCategory =
  | 'cyberpunk'
  | 'glass'
  | 'neumorphic'
  | 'brutalist'
  | 'skeuomorphic-3d'
  | 'luxury-minimal'
  | 'retro-pixel'
  | 'aurora-gradient'
  | 'micro-interactive'
  | 'playful-bubbly'
  | 'tech-outline';

export type CategoryFilter = ButtonCategory | 'all';

export interface CategoryInfo {
  id: CategoryFilter;
  name: string;
  enName: string;
  description: string;
  iconName: string;
}

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
export type ButtonState = 'default' | 'hover' | 'active' | 'loading' | 'disabled' | 'success';
export type IconPosition = 'left' | 'right' | 'none';

export interface CustomParams {
  text: string;
  iconName: string;
  iconPosition: IconPosition;
  size: ButtonSize;
  primaryColor: string;
  accentColor: string;
  radius: number; // in px or 9999 for pill
  borderWidth: number; // in px
  disabled: boolean;
  state: ButtonState;
  animationSpeed: number; // multiplier, 1.0 = normal
  soundEnabled: boolean;
}

export interface ButtonDefinition {
  id: string;
  name: string;
  category: ButtonCategory;
  tags: string[];
  description: string;
  defaultText: string;
  defaultIcon: string;
  defaultPrimaryColor: string;
  defaultAccentColor: string;
  defaultRadius: number;
  soundType: 'mechanical' | 'cyber' | 'retro' | 'pop' | 'crisp' | 'glass';
  recommendedBg?: 'dark' | 'light' | 'dark-primary' | 'any';
  
  supportedControls?: Partial<Record<keyof CustomParams, boolean>>;
  // Dynamic code generators based on user parameter tweaks
  generateCss: (params: CustomParams) => string;
  generateHtml: (params: CustomParams) => string;
  generateTailwind: (params: CustomParams) => string;
  generateReact: (params: CustomParams) => string;
  
  // React render component
  render: (props: {
    params: CustomParams;
    isHovered?: boolean;
    isActive?: boolean;
    onClick?: () => void;
  }) => React.ReactNode;
}
