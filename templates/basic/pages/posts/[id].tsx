import Head from "next/head";

import { getAllPostIds, getPostData } from "../../lib/posts";

import Date from "../../components/Date";
import Layout from "../../components/Layout";

interface PostProps {
  postData: {
    id: any;
    contentHtml: string;
    date: string;
    title: string;
  };
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const Post: React.FC<PostProps> = ({ postData, theme, toggleTheme }) => {
  return (
    <Layout theme={theme} toggleTheme={toggleTheme}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <div className="mb-12 w-min">
          <h1 className="text-4xl font-bold w-max mb-2">{postData.title}</h1>
          <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-1 w-full"></div>
        </div>
        <div className="text-xl text-gray-500 dark:text-gray-300 my-8">
          <Date dateString={postData.date} />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          className="text-xl leading-relaxed"
        />
      </article>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default Post;
