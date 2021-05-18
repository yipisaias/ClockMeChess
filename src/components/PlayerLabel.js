import React from 'react';
import styles from './PlayerLabel.module.css';

const PlayerLabel = ({ label, style }) => (
  <div className={styles.PlayerLabel} style={style}>
    {label}
  </div>
);

export default PlayerLabel;
