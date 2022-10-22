import * as React from "react";
import staticData from "../content/data.json";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { graphql } from "gatsby";
import { Logo } from "../components/Logo";
import { Avatar } from "../components/Avatar";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Card } from "../components/Card";
import { RootLayout } from "../components/RootLayout";
import { ChakraProvider, Heading, Text } from "@chakra-ui/react";
import { PortfolioTitle } from "../components/PortfolioTitle";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";
import { AboutContainer } from "../components/AboutContainer";
import theme from "../theme";
import { WireframeImg } from "../components/WireframeImg";

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
  const { hero, links } = staticData;

  return (
    <ChakraProvider theme={theme}>
      <RootLayout>
        <Logo />
        <AboutContainer>
          <Avatar />
          <Heading fontSize="2.5rem" fontWeight="400">
            {hero.name}
          </Heading>
          <Text fontSize="1.25rem">{hero.bio}</Text>
        </AboutContainer>
        <WireframeImg />
        <Container>
          <PortfolioTitle />
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
          >
            <Masonry>
              {[...data.allDribbbleShot.nodes].map((shot) => (
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
        </Container>
        <Footer links={links} />
      </RootLayout>
    </ChakraProvider>
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
