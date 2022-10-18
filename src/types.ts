type Hero = {
  name: string;
  bio?: string;
  motto?: string;
};

type Item = {
  title: string;
  imgIcon?: string;
  img?: string;
  style: "primary" | "secondary";
  url: string;
  icon?: string;
  cta?: string;
  description?: string;
};

export type Section = {
  title: string;
  layout: "row" | "card";
  items: Item[];
};

export type Data = {
  hero: Hero;
  sections: Section[];
};
