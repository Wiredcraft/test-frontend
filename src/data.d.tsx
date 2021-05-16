export type pictureCard = {
  _id: string;
  index?: number;
  name: string;
  src: string;
  isLoading?: boolean;
};

export type searchParams = {
  search?: string;
  page?: number;
};