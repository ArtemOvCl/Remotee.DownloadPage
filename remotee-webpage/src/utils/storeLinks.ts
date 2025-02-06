import { OperatingSystems } from "../constants/OperatingSystems";

export const storeLinks: Record<OperatingSystems, string | null> = {
  [OperatingSystems.ANDROID]: "https://play.google.com/store/apps/details?id=your.app.id",
  [OperatingSystems.IOS]: "https://apps.apple.com/app/idYOUR_APP_ID",
  [OperatingSystems.WINDOWS]: null,
  [OperatingSystems.MAC]: null,
  [OperatingSystems.LINUX]: null,
  [OperatingSystems.UNKNOWN]: null
};