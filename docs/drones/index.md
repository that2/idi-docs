---
id: drones
title: Drones
sidebar_position: 1
---

import CardGrid from '@site/src/components/CardGrid';

export const BoatIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
    <path d="M8 38 H48 L41 47 Q28 51 15 47 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
    <line x1="27" y1="38" x2="27" y2="9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M27 12 L40 36 L27 36 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
    <path d="M6 50 Q13 46 20 50 T34 50 T48 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
  </svg>
);

export const OctocopterIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
    <rect x="23" y="23" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2.5" />
    <line x1="23" y1="23" x2="14" y2="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="33" y1="23" x2="42" y2="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="23" y1="33" x2="14" y2="42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="33" y1="33" x2="42" y2="42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="14" cy="14" r="4.5" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="42" cy="14" r="4.5" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="50" cy="6" r="4.5" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="14" cy="42" r="4.5" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="6" cy="50" r="4.5" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="42" cy="42" r="4.5" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="50" cy="50" r="4.5" stroke="currentColor" strokeWidth="2.5" />
  </svg>
);

export const items = [
  {label: 'HydroSurveyor V1', link: '/docs/drones/hydrosurveyor-v1', Icon: BoatIcon},
  {label: 'EZ LiDAR (EZL)', link: '/docs/drones/ez-lidar', Icon: OctocopterIcon},
];


<CardGrid items={items} />
