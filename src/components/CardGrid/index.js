import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// items: [{ label: string, link: string, Icon?: React component, image?: string }]
export default function CardGrid({items}) {
  return (
    <div className={styles.cards}>
      {items.map(({label, link, Icon, image}) => (
        <Link key={label} to={link} className={styles.card}>
          {image ? (
            <img src={image} alt={label} className={styles.cardImage} />
          ) : (
            <div className={styles.cardIcon}>
              <Icon />
            </div>
          )}
          <h2 className={styles.cardTitle}>{label}</h2>
        </Link>
      ))}
    </div>
  );
}
