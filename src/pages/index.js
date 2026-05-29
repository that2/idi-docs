import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="Inicio" description="Documentación de equipos desarrollados por IDiSA">
      <main className={styles.hero}>
        <div className={styles.container}>
          <img src="/img/logo.png" alt="IDi Logo" className={styles.logo} />
          <h1 className={styles.title}>Documentación de Equipos</h1>
          <p className={styles.subtitle}>Desarrollados por IDiSA</p>
          <div className={styles.cards}>
            <Link to="/docs/hydrosurveyor-v1" className={styles.card}>
              <h2>🛥️ Hydrosurveyor V1</h2>
              <p>Ecosonda batimétrica autónoma</p>
            </Link>
            <Link to="/docs/ez-lidar" className={styles.card}>
              <h2>✈️ EZ LiDAR</h2>
              <p>Sistema LiDAR para drones</p>
            </Link>
            <Link to="/docs/idi-drone-ops" className={styles.card}>
              <h2>🚁 IDi Drone Ops</h2>
              <p>Flujos de trabajo operacionales</p>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
