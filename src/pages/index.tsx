import * as React from "react";
import staticData from "../content/data.json";
import { Data } from "../types";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { graphql } from "gatsby";
import { Logo } from "../components/Logo";
import { Avatar } from "../components/Avatar";
import { FollowMeImg } from "../components/FollowMeImg";
import { Icon } from "../components/Icon";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Card } from "../components/Card";
import { RootLayout } from "../components/RootLayout";
import { Stack, VStack } from "@chakra-ui/react";

library.add(fab);

type Props = {
  data: {
    allDribbbleShot: {
      nodes: {
        title: string;
        id: string;
        published: string;
        tags: string[];
        cover: string;
        url: string;
        localCover: {
          childImageSharp: {
            fluid: {
              aspectRatio: number;
              base64: string;
              sizes: string;
              src: string;
              srcSet: string;
            };
          };
        };
      }[];
    };
  };
};

const IndexPage: React.FC<Props> = ({ data }) => {
  console.log(data);

  return (
    <RootLayout>
      <Logo />
      <VStack alignItems={"center"}>
        <Avatar />
        <span>{staticData.hero.name}</span>
        <span>{staticData.hero.bio}</span>
      </VStack>
      <FollowMeImg />
      {staticData.links.map((link) => (
        <Icon icon={link.icon} />
      ))}
      <Stack w={{ sm: "100vw", md: "55vw" }}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}>
          <Masonry>
            {[
              ...data.allDribbbleShot.nodes,
              ...data.allDribbbleShot.nodes,
              ...data.allDribbbleShot.nodes,
            ].map((shot) => (
              <Card
                date={shot.published}
                title={shot.title}
                cover={shot.cover}
                localCover={shot.localCover}
                url={shot.url}
                tags={shot.tags}
                key={shot.id}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Stack>
    </RootLayout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allDribbbleShot(sort: { fields: [published], order: DESC }) {
      nodes {
        title
        id
        published(formatString: "MMMM DD, YYYY")
        url
        tags
        cover
        localCover {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
