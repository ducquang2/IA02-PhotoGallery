export type PhotoType = {
  id: string;
  alt_description: string;
  description: string;
  links: {
    html: string;
  };
  urls: {
    regular: string;
    small: string;
  };
  user: {
    first_name: string;
    last_name: string;
    profile_image: {
      medium: string;
    };
  };
};
