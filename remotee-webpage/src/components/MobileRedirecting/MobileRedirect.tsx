import { useMobileRedirect } from "../../hooks/useMobileRedirect";
import styles from "./MobileRedirect.module.scss";

const MobileRedirect = () => {
  
  useMobileRedirect(); 

  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>
      <p className={styles.text}>Please wait, redirecting to download mobile app</p>
    </div>
  );
};

export default MobileRedirect;
