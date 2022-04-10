import { RefObject, useLayoutEffect } from "react";

export function useLazyLoad(containerRef: RefObject<HTMLElement>, deps?: any[]) {
    useLayoutEffect(() => {
        const lazyImgs = containerRef.current?.querySelectorAll<HTMLImageElement>('.lazy')
        
        let observer: IntersectionObserver;
        if (window.IntersectionObserver && containerRef.current) {
            observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target as HTMLImageElement
                        img.src = img.dataset.src!
                        observer.unobserve(img)
                    }
                })
            }, { rootMargin: '0px 0px 100px 0px' })
        } else { // if IntersectionObserver not supported
            lazyImgs?.forEach(img => {
                img.src = img.dataset.src!
            })
        }

        lazyImgs?.forEach(img => observer.observe(img))

        return () => observer?.disconnect()
    }, [containerRef.current, deps])
}