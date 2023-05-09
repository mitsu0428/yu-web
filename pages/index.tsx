import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Divider from "../components/ui/divider";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import HomeSeoSettings from "../components/common-seo-setting";
import Post from "../interfaces/post";
import AvatarMembers from "../components/avatar-members";
import BusinessList from "../components/business/business-list";
import BusinessPrice from "../components/business/business-price";

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
          <BusinessList />
          <BusinessPrice />
          <AvatarMembers />
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
