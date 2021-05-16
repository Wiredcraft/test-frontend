export type pictureCard = {
  id: string;
  index?: number;
  name?: string;
  src?: string;
  isLoading?: boolean;
};

export type searchProps = {
  onChange: (value?: string) => void;
  input: string;
};