

import type { ReactNode, CSSProperties } from 'react';

export interface Tool {
  id: string;
  title: string;
  description: string;
  path: string;
  Icon: React.FC<{ className?: string; style?: CSSProperties }>;
  color: string;
  category: 'Images' | 'Creativity' | 'Builders' | 'Motion' | 'Coding' | 'Social';
  isComingSoon?: boolean;
  isNew?: boolean;
  isBeta?: boolean;
}


export interface Review {
  id: number;
  created_at: string;
  username: string;
  message: string;
}

export interface Creation {
  id: string; // uuid
  user_id: string; // uuid
  prompt: string;
  image_url: string;
  created_at: string; // timestamp
}