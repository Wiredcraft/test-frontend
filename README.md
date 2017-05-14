# test-frontend

This project shows how to filter data from a table, you can use input to type specific term to filter 
the city, or you can use checkbox to filter specific city type, narrow down the cities first, then
use input to search the right cities. You can also toggle the different type of cities.


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```
## FQA

if you want to run the e2e test, make sure you have installed **Java enviroment** in your computer, otherwise,
the test won't work

## Structure

> components
- Filter.vue
- SearchBar.vue
- State.vue
- States.vue

This project is mainly made up of four small components, they are:
- Filter.vue: where you can filter the cities by state, district and county 
- SearchBar.vue: where you can filter the cities by the term you type
- State.vue: represent each city, and in the html table, it is a single tr
- States.vue: all the cities


## Online Demo
[demo](https://codepen.io/wxiaojie45/full/KmRZLK/)
