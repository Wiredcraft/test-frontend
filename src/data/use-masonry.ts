import { useQuery } from "react-query";

export type MasonryItem = {
    src: string,
    name: string,
    _id: string
}

const Query_Key = 'masonry'
const API = 'api/data'

export function useMasonry(filter?: string) {
    return useQuery<{ data: MasonryItem[] }>([Query_Key, filter],
        () => fetch(API).then(res => res.json()),
        {
            select: (res) => ({
                data:
                    filter
                        ? res.data.filter(item => item.name.includes(filter))
                        : res.data
            })
        })
}