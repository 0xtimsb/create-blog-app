import Head from "next/head";
import Link from "next/link";

import { getSortedPostsData, PostData } from "../lib/posts";

import Layout from "../components/Layout";
import Date from "../components/Date";

interface HomeProps {
  allPostsData: PostData[];
  theme: "light" | "dark";
  toggleTheme: () => void;
  config: {
    title: string;
    name: string;
    github: string;
    twitter: string;
  };
}

const Home: React.FC<HomeProps> = ({
  allPostsData,
  config,
  theme,
  toggleTheme,
}) => {
  return (
    <Layout config={config} theme={theme} toggleTheme={toggleTheme} home>
      <Head>
        <title>{config.title}</title>
      </Head>
      <section className="text-lg sm:text-xl mb-10 sm:mb-14">
        <p>
          Hello, I’m <strong>SpongeBob</strong>. I'm a sea sponge who works as a
          fry cook at the Krusty Krab, a fast food restaurant.
        </p>
      </section>
      <section>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-12">Blog</h2>
        <ul className="space-y-8">
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className="flex flex-col space-y-3">
              <Link href={`/posts/${id}`}>
                <a className="sm:w-min group">
                  <h1 className="sm:w-max max-w-3xl text-2xl md:text-3xl font-medium leading-normal mb-1">
                    {title}
                  </h1>
                  <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-1 transform group-hover:translate-x-2 transition-transform"></div>
                </a>
              </Link>
              <small className="text-lg text-gray-500 dark:text-gray-300">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  const config = await import("../blogconfig.json");

  return {
    props: {
      allPostsData,
      config: config.default,
    },
  };
}

export default Home;
