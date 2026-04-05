import React from 'react';
import styles from './MenuGrid.module.css';

const MenuGrid = ({ items }) => {
  return (
    <div className={styles.grid}>
      {items.length === 0 ? (
        <div className={styles.emptyState}>No menu items available</div>
      ) : (
        items.map(item => <div key={item.id} className={styles.item}>{item.name}</div>)
      )}
    </div>
  );
};

export default MenuGrid;