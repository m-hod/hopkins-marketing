export type StrapiImage = {
  id: number;
  url: string;
  alternativeText: string;
  formats: {
    thumbnail: Image;
    small: Image;
    medium?: Image;
    large?: Image;
  };
};

export type Image = {
  name: string;
  url: string;
};

// Service Page

export type Service = {
  id: number;
  anchor: string;
  title: string;
  content: ServiceContent[];
  image: StrapiImage;
};

export type ServiceContent = {
  id: number;
  subtitle: string;
  description: string;
};

// About Page

export type AboutCard = {
  id: number;
  name: string;
  role: string;
  description: string;
  profileImage: StrapiImage;
  image: StrapiImage;
};

export type AboutQuote = {
  id: number;
  // as html string
  description: string;
};

export type AboutContent = {
  id: number;
  subtitle: string;
  title: string;
  sections: AboutSection[];
};

export type AboutSection = {
  id: number;
  text: string;
};
