require("dotenv").config({
  path: `.env`,
});

import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `FeDesign`,
    description: "Hi! I'm FeDesign, a UX / UI Enthusiast",
    siteUrl: `https://fedesign.space`,
    image: `/images/fd_logo.png`,
  },
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-sass`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-dribbble",
      options: {
        access_token: `${process.env.DRIBBBLE_ACCESS_TOKEN}`,
      },
    },
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    },
  ],
};

export default config;
