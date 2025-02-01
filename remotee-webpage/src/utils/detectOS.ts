import { OperatingSystems } from "../constants/OperatingSystems";

export const detectOS = (): OperatingSystems => {
    const userAgent = window.navigator.userAgent || '';

    if (/windows phone|windows/i.test(userAgent)) {
        return OperatingSystems.WINDOWS;
      }

    if (/macintosh|mac os x/i.test(userAgent)) {
        return OperatingSystems.MAC;
      }

    if (/linux/i.test(userAgent)) {
        return OperatingSystems.LINUX;
      }
      
      return OperatingSystems.UNKNOWN;
      
}