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
    <div className="max-w-4xl mx-auto">
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
        <div className="flex items-center justify-between py-10">
          <div
            className={`flex items-center ${home ? "space-x-6" : "space-x-4"}`}
          >
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  height={home ? 100 : 68}
                  width={home ? 100 : 68}
                  alt={config.name}
                  className="rounded-full"
                />
              </a>
            </Link>
            <h2>
              <Link href="/">
                <a className={`font-bold ${home ? "text-4xl" : "text-2xl"}`}>
                  {config.name}
                </a>
              </Link>
            </h2>
          </div>
          <div className="flex items-center space-x-7 text-2xl">
            <a href={`www.github.com/${config.github}`}>
              <FaGithub className="cursor-pointer hover:text-github" />
            </a>
            <a href={`www.github.com/${config.twitter}`}>
              <FaTwitter className="cursor-pointer hover:text-twitter" />
            </a>
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
      <main>{children}</main>
      {!home && (
        <div className="mt-12">
          <Link href="/">
            <a className="text-xl text-pink-600 font-medium hover:underline">
              ← Back to home
            </a>
          </Link>
        </div>
      )}
      <div className="py-14">
        <a
          className="text-base font-medium"
          href="https://github.com/smitbarmase/create-blog-app"
        >
          <span>Built with</span>{" "}
          <span className="cursor-pointer hover:underline text-pink-600">
            create-blog-app
          </span>
        </a>
      </div>
    </div>
  );
};

export default Layout;
