import { LucideIcon } from 'lucide-react';

export interface ModuleItem {
  id: number;
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface AudienceType {
  title: string;
  description: string;
}