export const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      const lazyImage = entry.target
      lazyImage.src = entry.target.attributes.datasrc.value
    }
  })
})