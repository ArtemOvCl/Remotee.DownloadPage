import React from "react";
import styles from '../DownloadText/DownloadText.module.scss';

const DownloadText: React.FC = () => (
  <div className={styles.textContainer}>
    <h1>
      <span>Discover the Future </span>
      <br /> 
      <span>of </span>
      <span>Remotee </span>
      <span>Control </span>
    </h1>
    <p>
      Control your computer anytime, anywhere, effortlessly.
    </p>
  </div>
);

export default DownloadText;
