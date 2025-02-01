import React from 'react';
import styles from './DownloadButton.module.scss';
import { DownloadButtonProps } from './DownloadButtonProps';

const DownloadButton: React.FC<DownloadButtonProps> = ({ label, fileLink, iconLink }) => {
  return (
    <a href={fileLink} download className={styles.button}>
      {iconLink && <img src={iconLink} alt="icon" className={styles.icon} />}
      <span>{label}</span>
    </a>
  );
};

export default DownloadButton;