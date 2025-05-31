export type TProject = {
  id: string;
  title: string;
  shortDescription: string;
  previewImage: string;
  fullDescription: string;
  primaryImages: string[];
  secondaryImages: string[];
};

export type TExibition = {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
};

export const APP_URL = "https://kate-api-production.up.railway.app";
