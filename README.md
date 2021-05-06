# TASK(Masonry Layout)

![ci](https://api.travis-ci.com/linrz/test-frontend.svg?branch=master)
![codecov](https://codecov.io/gh/linrz/test-frontend/branch/master/graph/badge.svg)

## Requirements

Click [here](https://wiredcraft.gitbook.io/recruitment-test/coding/frontend) for more detail.

## Development

```sh
npm install
npm run dev
```

## Preview

Click [here](https://test-frontend-pi.vercel.app/) to preview online. Thanks to `vercel` and `glitch`, it will be depolyed after the master branch updated.

## Technology selection

1. `react` is necessary.
2. Use `fetch` to request the server, low version browsers(IE11, Chrome45) need to import polyfills, such as `isomorphic-fetch`.
3. Instead of `redux`, `mobx` as mentioned in task, I prefer `unstated-next` use context-based state management. I think it will make me less boilerplate code
4. Use `vite` as ESM based dev server, I choose to hug esmodule to get a better development experience.
5. At the beginning I put the json of the images on the cdn, but later I found out that the back-end is needed for infinite scrolling, so I wrote a simple service based on `node.js`([server.js](./server.js)).

## To be optimized

1. `fetch` related logic should be abstracted into `useFetch` to use async await, not promise chain calling code.
2. There are some repeated codes about `IntersectionObserver`, which can be abstracted into `useInView`.
3. Need to enhance request failures, image load failures and server-side parameter check.
4. In UX, it is necessary to add loading to prevent splash screen when search keywords in topbar and display tips when the image list is empty.
5. More unit tests should be finished.
6. In the case of using the css `column` layout, when scrolling down load more, even if the column index of the image is calculated correctly, it will be rearranged due to the inconsistent height of the picture. It should be fixed.

Due to time constraints, I can only finish here for the time being(in one night). If I have more time, I think I can do better. Anyway, thanks very much for this opportunity to practice.

## Author

**Masonry Layout** © [linrz](https://github.com/linrz)<br>
Authored and maintained by linrz.
