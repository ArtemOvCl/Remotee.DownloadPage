import { OperatingSystems } from "../constants/OperatingSystems";

export const detectOS = (): OperatingSystems => {
  const userAgent = navigator.userAgent || '';

  if (/windows phone|windows/i.test(userAgent)) return OperatingSystems.WINDOWS;
      
  if (/macintosh|mac os x/i.test(userAgent)) return OperatingSystems.MAC;
      
  if (/linux/i.test(userAgent)) return OperatingSystems.LINUX;
      
  return OperatingSystems.UNKNOWN;
      
}

export const detectMobileOS = (): OperatingSystems => {
  const userAgent = navigator.userAgent || '';

  if (/android/i.test(userAgent)) return OperatingSystems.ANDROID;

  if (/iphone|ipad|ipod|ios/i.test(userAgent)) return OperatingSystems.IOS;
  
  return OperatingSystems.UNKNOWN;
};