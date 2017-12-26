# Wiredcraft Front-end Developer Coding Test

Thanks again for giving me the chance to prove myself. Here are my results! :)

## Implementation

As requested, I used Vue.js instead of React to implement the Coding Test. For the style, I decided to go for SCSS. The SCSS 
source can be found in app/src/style/style.scss.
Instead of implementing all the browser prefixes in the SCSS/CSS, I decided to use -prefix-free to automatically add those prefixes when required.

No other Frameworks (eg. jQuery) were used.

## Approach


## Folder structure

.
+-- app
|   +-- dist
|       +-- js
|           +-- app.js (Main JS-File)
|           +-- data.js (Data-Object)
|       +-- lib
|           +-- vue.min.js
|       +-- res
|       +-- style
|   +-- src
+-- test
|   +-- karma.conf.js
|   +-- test.js
+-- README.md

## How to run

Just open the app/dist/index.html in your browser.

## Search Features

By using the dropdown component, the results can be filtered by state, district and township. By entering an String into the search input, the view will be updated accordingly. It is not required to write the entire String, because String.match() is being applied, so the view will be updated, once the first match has been found.

To provide a better user experience, the search input is not case-sensitive. This has been achieved by converting both, the input string and the region.name from the results data to lowercase.

### Possible improvements

This apporach might already be better than an more static search that requires the input of on entire String to find an result, but it could be even further improved by displaying all similar results.

Example:

Search for townships and enter "Mag". The search kicks in and finds the first Township which name contains "Mag". But if there's another Township with those characters in it's name, it's not being displayed untill you type in more letters. That's becuase the method only returns the first match and does not collect all matches. Try searching for the townships "Magwe" and "Magwa".

## Unit Tests

The Unit Tests were performed with Karma + Jasmine. Please note, that Karma +  Jasmine were installed globally using npm.

### Test cases

I implemented four simple text cases:

- initial value of filterOption must be region
- findRegion is able to find an region by providing an incomplete search query
- findRegion is able to find an region by providing an complete search query
- pushResults is able to correctly push search results



