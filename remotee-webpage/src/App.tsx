import { useEffect, useState } from "react";
import DownloadPage from "./pages/DownloadPage/DownloadPage";
import MobileRedirect from "./components/MobileRedirecting/MobileRedirect";
import { isMobileDevice } from "./utils/isMobileDevice";
import "./App.css";

function App() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);

  return isMobile ? <MobileRedirect /> : <DownloadPage />;
}

export default App;
