import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// items: [{ label: string, link: string, Icon: React component }]
export default function CardGrid({items}) {
  return (
    <div className={styles.cards}>
      {items.map(({label, link, Icon}) => (
        <Link key={label} to={link} className={styles.card}>
          <div className={styles.cardIcon}>
            <Icon />
          </div>
          <h2 className={styles.cardTitle}>{label}</h2>
        </Link>
      ))}
    </div>
  );
}
