import React from "react"

import { detectOS } from "../../utils/detectOS";
import { DownloadLinks } from "../../utils/downloadLinks";

import DownloadButton from "../../components/DownloadComponents/DownloadButton/DownloadButton";
import DownloadText from "../../components/DownloadComponents/DownloadText/DownloadText";
import Aurora from "../../components/BackgroundComponents/Aurora/Aurora";

import styles from '../DownloadPage/DownloadPage.module.scss'

const DownloadPage: React.FC = () => {
  const os = detectOS();
  const { link, icon } = DownloadLinks[os];

  return (
    <div className={styles.container}>
      <Aurora
        colorStops={["#c999d5", "#130917", "#efb6f2"]}
        speed={1}
      />
      <DownloadText/>
      <DownloadButton label={`Download for ${os}`} fileLink={link} iconLink={icon} />
    </div>
  );
};

export default DownloadPage
