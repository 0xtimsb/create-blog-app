import { Dispatch, SetStateAction } from "react";
import Head from "next/head";
import Link from "next/link";

import { getSortedPostsData } from "../lib/posts";

import Layout, { siteTitle } from "../components/Layout";
import Date from "../components/Date";

interface HomeProps {
  allPostsData: {
    id: string;
    date: string;
    title: string;
    contentHtml: string;
  }[];
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const Home: React.FC<HomeProps> = ({ allPostsData, theme, toggleTheme }) => {
  return (
    <Layout theme={theme} toggleTheme={toggleTheme} home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-xl mb-6">
        <p>
          Hello, I’m <strong>SpongeBob</strong>. I'm a sea sponge who works as a
          fry cook at the Krusty Krab, a fast food restaurant.
        </p>
      </section>
      <section>
        <h2 className="text-3xl font-bold mb-6">Blog</h2>
        <ul className="space-y-6">
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className="flex flex-col space-y-3">
              <Link href={`/posts/${id}`}>
                <a className="text-2xl  text-blue-500 hover:underline">
                  {title}
                </a>
              </Link>
              <small className="text-base text-gray-500 dark:text-gray-300">
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
  return {
    props: {
      allPostsData,
    },
  };
}

export default Home;
