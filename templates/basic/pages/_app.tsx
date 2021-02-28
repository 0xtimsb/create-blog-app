import { useState } from "react";

import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={theme}>
      <div className="h-screen bg-gray-50 dark:bg-gray-900 dark:text-gray-50">
        <Component {...pageProps} theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
}

export default MyApp;
