import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaMoon, FaSun, FaTwitter } from "react-icons/fa";

interface LayoutProps {
  home?: boolean;
  theme?: "light" | "dark";
  toggleTheme?: () => void;
  config: {
    title: string;
    name: string;
    github: string;
    twitter: string;
  };
}

const Layout: React.FC<LayoutProps> = ({
  children,
  home,
  theme,
  config,
  toggleTheme,
}) => {
  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-6 lg:px-0">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            config.title
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={config.title} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <div className="flex items-center justify-between sm:py-12 py-10">
          <div
            className={`flex items-center ${home ? "space-x-6" : "space-x-4"}`}
          >
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  alt={config.name}
                  className={`${home ? "h-20 w-20" : "h-14 w-14"} rounded-full`}
                />
              </a>
            </Link>
            <h2 className="hidden md:block">
              <Link href="/">
                <a className={`font-bold ${home ? "text-4xl" : "text-2xl"}`}>
                  {config.name}
                </a>
              </Link>
            </h2>
          </div>
          <div className="flex items-center space-x-10 md:space-x-7 text-3xl md:text-2xl">
            {config.github !== "" && (
              <a target="_blank" href={`https://github.com/${config.github}`}>
                <FaGithub className="cursor-pointer hover:text-github" />
              </a>
            )}
            {config.twitter !== "" && (
              <a target="_blank" href={`https://twitter.com/${config.twitter}`}>
                <FaTwitter className="cursor-pointer hover:text-twitter" />
              </a>
            )}
            <button onClick={toggleTheme}>
              {theme === "dark" ? (
                <FaSun className="cursor-pointer" />
              ) : (
                <FaMoon className="cursor-pointer" />
              )}
            </button>
          </div>
        </div>
      </header>
      {home && (
        <h2 className="md:hidden font-bold text-2xl mb-4">{config.name}</h2>
      )}
      <main>{children}</main>
      {home ? (
        <div className="py-14">
          <a
            className="text-lg font-medium tracking-wide"
            href="https://github.com/smitbarmase/create-blog-app"
          >
            <span>Built with</span>{" "}
            <span className="cursor-pointer hover:underline text-pink-600">
              create-blog-app
            </span>
          </a>
        </div>
      ) : (
        <div className="mt-12">
          <Link href="/">
            <a className="text-xl text-pink-600 font-medium hover:underline">
              ← Back
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
