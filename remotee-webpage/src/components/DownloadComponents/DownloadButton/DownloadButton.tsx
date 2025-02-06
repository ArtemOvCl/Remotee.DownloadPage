import React from 'react';
import styles from './DownloadButton.module.scss';
import { DownloadButtonProps } from './DownloadButtonProps';

const DownloadButton: React.FC<DownloadButtonProps> = ({ label, fileLink, iconLink }) => {
  
  const handleDownload = () => {
    const link = document.createElement('a');

    link.href = fileLink;
    link.download = fileLink.split('/').pop() || 'download';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.buttonContainer}>
      <button onClick={handleDownload}>
        {iconLink && <img src={iconLink} alt={`${label} icon`} className={styles.icon} />}
        <span>{label}</span>
      </button>
    </div>
  );
};

export default DownloadButton;
