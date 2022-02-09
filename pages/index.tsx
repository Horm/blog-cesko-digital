import { NextPage, GetStaticProps } from "next";
import { Author } from "lib/author";
import { BlogPost } from "lib/post";
import { siteData } from "lib/site-data";
import { Route } from "lib/routing";

interface Props {
  posts: readonly BlogPost[];
  authors: readonly Author[];
}

const Home: NextPage<Props> = ({ posts, authors }) => {
  return (
    <ol>
      {posts.map((post, index) => (
        <li key={index}>
          <a href={Route.toPost(post)}>{post.title}</a>
        </li>
      ))}
    </ol>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { posts, authors } = siteData;
  return {
    props: {
      posts,
      authors,
    },
  };
};

export default Home;
