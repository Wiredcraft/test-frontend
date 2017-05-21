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

## Structure

> components
- Filter.js
- SearchBar.js
- State.js
- States.js

This project is mainly made up of four small components, they are:
- Filter.js: where you can filter the cities by state, district and county 
- SearchBar.js: where you can filter the cities by the term you type
- State.js: represent each city, and in the html table, it is a single tr
- States.js: all the cities


## Online Demo
[demo](http://s.codepen.io/wxiaojie45/debug/zwMjxE/xJMjOWqodVQr)
