import React from "react"

import { detectOS } from "../../utils/detectOS";
import { DownloadLinks } from "../../utils/downloadLinks";

import DownloadButton from "../../components/DownloadButton/DownloadButton";
import DownloadText from "../../components/DownloadText/DownloadText";

import styles from '../DownloadPage/DownloadPage.module.scss'

const DownloadPage: React.FC = () => {
  const os = detectOS();
  const { link, icon } = DownloadLinks[os];

  return (
    <div className={styles.container}>
      <DownloadText/>
      <DownloadButton label={`Download for ${os}`} fileLink={link} iconLink={icon} />
    </div>
  );
};

export default DownloadPage
