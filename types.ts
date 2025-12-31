import React from 'react';

export enum RoutePath {
  HOME = '/',
  PRIVACY = '/privacy',
  TERMS = '/terms'
}

export interface NavItem {
  label: string;
  path: string;
  isExternal?: boolean;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}