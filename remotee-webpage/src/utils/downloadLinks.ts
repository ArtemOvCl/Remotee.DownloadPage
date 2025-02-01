import { OperatingSystems } from "../constants/OperatingSystems";

export const DownloadLinks: Record<OperatingSystems, { link: string; icon: string }> = {
    [OperatingSystems.WINDOWS]: { link: "/downloadLinks/test.exe", icon: "/osIcons/windows.svg" },
    [OperatingSystems.MAC]: { link: "/downloads/remotee-mac.dmg", icon: "/icons/mac.svg" },
    [OperatingSystems.LINUX]: { link: "/downloads/remotee-linux.deb", icon: "/icons/linux.svg" },
    [OperatingSystems.UNKNOWN]: { link: "#", icon: "/icons/unknown.svg" },
  };