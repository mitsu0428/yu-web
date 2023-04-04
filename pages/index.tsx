import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Consulting from "../components/yu-web-consulting";
import It from "../components/yu-web-it";
import Sns from "../components/yu-web-sns";
import Divider from "../components/divider";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import HomeSeoSettings from "../components/common-seo-setting";
import Post from "../interfaces/post";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <HomeSeoSettings />
        <Container>
          <Intro />
          <Divider />
          <Consulting />
          <It />
          <Sns />
          <Divider />
          <MoreStories posts={allPosts} />
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
