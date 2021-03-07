export type Schema = {
  pages: SEOPage[];
  home: {
    heroImage: StrapiImage;
    clients: Client[];
    sections: HomeSection[];
    services: ShortService[];
  };
  services: {
    sections: Service[]
  };
  about: {
    cards: AboutCard[];
    quotes: AboutQuote[];
    content: AboutContent;
  };
  contactForm: ContactForm;
}

export type SEOPage = {
  id: number;
  Title: string;
  Description: string;
  Keywords: string;
  slug: string;
}

export type ContactForm = {
  id: number;
  Title: string;
  // as html
  Description: string;
  // as html
  Success: string;
  // as html
  Error: string;
}

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

// Home Page

export type Client = {
  id: number;
  image: StrapiImage;
  name: string;
  link: string;
  description: string;
  tags: {
    id: number;
    text: string;
  }[];
  socials: {
    id: number;
    link: string;
    type: "twitter" | "facebook" | "instagram";
  }[];
};

export type HomeSection = {
  id: number;
  // as html
  heading: string;
  contents: {
    id: number;
    text: string;
  }[];
};

export type ShortService = {
  id: number;
  title: string;
  link: string;
  anchor: string;
  image: StrapiImage;
  services: {
    id: number;
    text: string;
  }[];
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
