_For the requirement description, refer to [test/coding/frontend](https://wiredcraft.gitbook.io/recruitment-test/coding/frontend)._

## json server

Sample `data.json` is included at the root of project, use a simple server like `http-server` with `cors` enabled to serve the json file at the url ``http://127.0.0.1:8080/data.json`, then you can test the project in development or production environment

## development

```cmd
npm start
```

## production build

```cmd
npm run build
```

Build files could be found in `./dist` folder

## test

```cmd
npm run test
```

## overview

- Implemented the `Mansonry Layout` using `flexbox`.
- Split images into several groups by calculating the window width and minimum colum width, get each image's dimension from image url to determin which column to append next image.
- Repeat last step if window size changes
- Lazy load images for better performance
