import { useEffect } from "react";

import { detectMobileOS } from "../utils/detectOS";
import { storeLinks } from "../utils/storeLinks";

import { REDIRECT_DELAY } from "../constants/IntervalConstants";

export const useMobileRedirect = () => {

  useEffect(() => {
    const os = detectMobileOS();
    const storeUrl = storeLinks[os];

    if (storeUrl) {
      const timeout = setTimeout(() => {
        window.location.href = storeUrl;
      }, REDIRECT_DELAY);

      return () => clearTimeout(timeout);
    }
  }, []);

};
