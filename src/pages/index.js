import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

// ── Icons ─────────────────────────────────────────────────────
const DroneIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
    <rect x="22" y="22" width="12" height="12" rx="2.5" fill="currentColor" />
    <line x1="22" y1="22" x2="10" y2="10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="34" y1="22" x2="46" y2="10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="22" y1="34" x2="10" y2="46" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="34" y1="34" x2="46" y2="46" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <circle cx="10" cy="10" r="2.5" fill="currentColor" />
    <circle cx="46" cy="10" r="7" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <circle cx="46" cy="10" r="2.5" fill="currentColor" />
    <circle cx="10" cy="46" r="7" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <circle cx="10" cy="46" r="2.5" fill="currentColor" />
    <circle cx="46" cy="46" r="7" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <circle cx="46" cy="46" r="2.5" fill="currentColor" />
  </svg>
);

const CargadorIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
    <rect x="4" y="16" width="38" height="24" rx="4" stroke="currentColor" strokeWidth="3" fill="none" />
    <rect x="42" y="22" width="9" height="12" rx="2" fill="currentColor" />
    <path d="M26 22 L18 30 H24 L22 36 L30 28 H24 L26 22Z" fill="currentColor" />
  </svg>
);

const SensorIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
    <circle cx="28" cy="28" r="4" fill="currentColor" />
    <circle cx="28" cy="28" r="12" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <circle cx="28" cy="28" r="22" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.55" />
    <line x1="28" y1="28" x2="28" y2="6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.75" />
    <line x1="28" y1="28" x2="44" y2="16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.35" />
  </svg>
);

const CorsIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
    <line x1="28" y1="48" x2="28" y2="24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <line x1="16" y1="48" x2="40" y2="48" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <line x1="16" y1="48" x2="28" y2="38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="40" y1="48" x2="28" y2="38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M20 24 Q28 16 36 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M14 18 Q28 6 42 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7" />
    <path d="M8 12 Q28 -4 48 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.4" />
  </svg>
);

const DroneOpsIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
    <rect x="10" y="12" width="36" height="40" rx="3" stroke="currentColor" strokeWidth="3" fill="none" />
    <rect x="20" y="7" width="16" height="10" rx="2.5" fill="currentColor" />
    <polyline points="18,30 24,36 38,22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <line x1="18" y1="42" x2="38" y2="42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
    <line x1="18" y1="48" x2="30" y2="48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
  </svg>
);

// ── Category data ──────────────────────────────────────────────
const CATEGORIES = [
  { label: 'Drones',        link: '/docs/drones',        Icon: DroneIcon    },
  { label: 'Cargadores',    link: '/docs/cargadores',    Icon: CargadorIcon },
  { label: 'Sensores',      link: '/docs/sensores',      Icon: SensorIcon   },
  { label: 'IDi-CORS',      link: '/docs/idi-cors',      Icon: CorsIcon     },
  { label: 'IDi Drone Ops', link: '/docs/idi-drone-ops', Icon: DroneOpsIcon },
];

// ── Page ───────────────────────────────────────────────────────
export default function Home() {
  return (
    <Layout
      title="Inicio"
      description="Documentación de equipos desarrollados por IDiSA"
    >
      <main className={styles.hero}>
        <div className={styles.container}>
          <img src="/img/logo.png" alt="IDi Logo" className={styles.logo} />
          <h1 className={styles.title}>Documentación de Equipos</h1>
          <p className={styles.subtitle}>Desarrollados por IDiSA</p>

          <div className={styles.cards}>
            {CATEGORIES.map(({ label, link, Icon }) => (
              <Link key={label} to={link} className={styles.card}>
                <div className={styles.cardIcon}>
                  <Icon />
                </div>
                <h2 className={styles.cardTitle}>{label}</h2>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
