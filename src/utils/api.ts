import axios from "axios";

export interface Picture {
  _id: string;
  index: number;
  name: string;
  src: string;
}

export default function getPictures() {
  return axios.get<Picture[]>("/api/pictures");
}
