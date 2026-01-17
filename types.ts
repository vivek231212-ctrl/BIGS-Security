
import React from 'react';

export interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface NewsItem {
  date: string;
  title: string;
  excerpt: string;
}

export interface Milestone {
  year: string;
  event: string;
}