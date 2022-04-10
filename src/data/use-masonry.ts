import { useQuery } from "react-query";

import images from '../../data.json';

export type MasonryItem = {
    src: string,
    name: string,
    _id: string
}

const Query_Key = 'masonry'

export function useMasonry(filter?: string) {
    return useQuery<MasonryItem[]>([Query_Key, filter],
        () => Promise.resolve(images),
        {
            select: (res) => (
                filter
                    ? res.filter(item => item.name.includes(filter))
                    : res
            )
        })
}