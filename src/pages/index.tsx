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
import { HStack, Stack, Text, VStack } from "@chakra-ui/react";

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
      <VStack alignItems={"center"} paddingTop={"100px"} w={"45vw"} h={"100vh"}>
        <Avatar />
        <span>{staticData.hero.name}</span>
        <span>{staticData.hero.bio}</span>
      </VStack>
      <Stack position={"absolute"} left="2rem" bottom={"1rem"}>
        <FollowMeImg />
        <HStack>
          {staticData.links.map((link) => (
            <Icon icon={link.icon} />
          ))}
        </HStack>
      </Stack>
      <Stack
        w={{ sm: "100vw", md: "55vw" }}
        h={"100vh"}
        overflowY="scroll"
        paddingTop={"90px"}
      >
        <Stack
          position={"fixed"}
          top="0"
          left="calc(55vw-200px)"
          h={"100vh"}
          w={"80px"}
          overflow={"visible"}
          alignContent="center"
          justifyContent={"center"}
          alignItems="center"
          // zIndex={-1}
        >
          <span
            style={{
              position: "absolute",
              borderLeft: "1px solid black",
              height: "100vh",
              left: 40,
              top: "0",
              width: "1px",
            }}
          />
          <div
            style={{
              // transform: "rotate(270deg)",
              // transformOrigin: "0 -70px",
              width: "200px",
            }}
            //marginTop={"-1rem"}
          >
            <Stack transform={"rotate(270deg)"}>
              <Text>PORTFOLIO</Text>
              <Text>EXPLORE MY WORKS</Text>
            </Stack>
          </div>
        </Stack>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}>
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
