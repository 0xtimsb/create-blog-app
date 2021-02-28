import Head from "next/head";
import Link from "next/link";

import { getSortedPostsData } from "../lib/posts";
import { title, bio } from "../blog.config";

import Layout from "../components/Layout";
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
        <title>{title}</title>
      </Head>
      <section className="text-xl mb-14">{bio}</section>
      <section>
        <h2 className="text-4xl font-bold mb-12">Blog</h2>
        <ul className="space-y-8">
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className="flex flex-col space-y-4">
              <Link href={`/posts/${id}`}>
                <a className="w-min">
                  <div className="text-3xl font-medium w-max mb-2">{title}</div>
                  <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-1 w-full"></div>
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
  return {
    props: {
      allPostsData,
    },
  };
}

export default Home;
