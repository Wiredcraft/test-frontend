import { useRef } from 'react'
import { MasonryItem } from '../../data/use-masonry'
import { useLazyLoad } from '../../util'
import { LazyLoadImg } from '../lazy-load-img'
import './masonry.css'

export function Masonry({ imgs }: { imgs?: MasonryItem[] }) {
    const ref = useRef(null)
    useLazyLoad(ref, imgs)

    return <>
        <div className={`layout ${imgs?.length ? '' : 'no-more'}`} ref={ref}>
            {
                imgs?.length
                    ? imgs?.map(({ src, _id }) => <LazyLoadImg key={_id} src={src} />)
                    : <div className="placeholder-text">
                        Oops...No Result
                    </div>
            }
        </div>
    </>
}