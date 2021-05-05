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

## Technology selection

1. `react` and `react-router` is necessary.
2. Use `fetch` to request the server, low version browsers(IE11, Chrome45) need to import polyfills, such as `isomorphic-fetch`.
3. Instead of `redux`, `mobx` as mentioned in task, I prefer `unstated-next` use context-based state management.
4. Use `vite` as ESM based dev server, I choose to hug esmodule to get a better development experience.
5. At the beginning I put the json of the images on the cdn, but later I found out that the back-end is needed for infinite scrolling, so I wrote a simple service based on `node.js`.

## To be optimized

1. `fetch` related logic should be abstracted into `useFetch` to use async await, not promise chain calling code.
2. There are some repeated codes about `IntersectionObserver`, which can be abstracted into `useInView`.
3. Need to enhance request failures, image load failures and server-side parameter check.
4. In UX, it is necessary to add loading to prevent splash screen when search keywords in topbar and display tips when the image list is empty.
5. More unit tests should be finished.

Due to time constraints, I can only finish here for the time being. If you give me one more day of free time, I can do better.

## Author

**Masonry Layout** © [linrz](https://github.com/linrz)<br>
Authored and maintained by linrz.
