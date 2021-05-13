*For the requirement description, refer to [test/coding/frontend](https://wiredcraft.gitbook.io/recruitment-test/coding/frontend).*

## Introduction
This application is created by `create-react-app`, as recommended by [React Tutorial](https://reactjs.org/docs/create-a-new-react-app.html). Codes are all written in TypeScript.

It uses `flex` layout to simulate Masonry layout. An `onresize` callback is set for re-calculating columns after window resizing. Lazy-loading feature is also presented.

Unit tests are set for `Header` and `Masonry` with a coverage of 96.55%.

Data file (data.json) is hosted by `http-server`.

## Develop
Use Yarn (Recommended):
```
yarn serve

=== Start a new shell ===
yarn start
```

Use NPM:
```
npm run serve

=== Start a new shell ===
npm run start
```

## Build
Use Yarn (Recommended):
```
yarn build
```

Use NPM:
```
npm run build
```
Output directory is `./build`

*Note: Please run `yarn serve` prior to open your output file, otherwise you won't get your data.json file.*

## Test
Use Yarn (Recommended):
```
yarn test

=== For coverage stats ===
yarn test -- --coverage
```

Use NPM:
```
npm run test

=== For coverage stats ===
npm run test -- --coverage
```