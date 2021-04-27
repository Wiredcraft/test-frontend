_For the requirement description, refer to [test/coding/frontend](https://wiredcraft.gitbook.io/recruitment-test/coding/frontend)._

## development

```cmd
npm run serve

// Open another shell window
npm start
```

## production build

```cmd
npm run build
```

Build files could be found in `./dist` folder

> Not: You shuld run `npm run serve` from the project root to start a json server for the fetch request before you run the production project

## test

```cmd
npm run test
```

## overview

- Implemented the `Mansonry Layout` using `flexbox`.
- Split images into several groups by calculating the window width and minimum colum width, get each image's dimension from image url to determin which column to append next image.
- Repeat last step if window size changes
- Lazy load images for better performance
