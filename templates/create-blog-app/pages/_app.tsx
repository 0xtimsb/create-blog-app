import { useState } from "react";

import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={theme}>
      <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-gray-50">
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-0.5 w-screen"></div>
        <Component {...pageProps} theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
}

export default MyApp;
