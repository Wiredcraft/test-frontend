import { useInfiniteQuery } from "react-query";
import ImageData from "../data.json";
import { ajax } from "./ajax";

export const sleep = async (time: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(time), time);
  });
};

export const getImage = async (query: string = "") => {
  await sleep(2000);
  return ImageData.filter((item) => item.name.includes(query));
};

export const useGetImage = (searchKey: string) => {
  return useInfiniteQuery({
    queryKey: ["useGetImage", searchKey],
    queryFn: () => getImage(searchKey),
    staleTime: 30 * 1000,
    keepPreviousData: true,
  });
};
