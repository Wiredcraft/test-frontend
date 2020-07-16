# Description

This app is my open submission for Wiredcraft's Frontend Test, found here: https://github.com/ugglr/wiredcraft-frontend-test. It uses React, React Router, and Material UI.
The assigned mockup for the project is here:

![Assigned Mockup Image](https://camo.githubusercontent.com/e4fae5c535d915ec68cf15d07251183f461d39f6/68747470733a2f2f636c6475702e636f6d2f4a4d336c4c42415335562e6a7067){width=400px}

My results look like this:
![Final Preview](./Images/Overall_Preview.png){width=400px}
![Final Preview Specific Page](./Images/Specific_Page_Preview.png){width=400px}

## Functionality

Given a database, the app renders a dynamic table with a dropdown filter to sort by type of data, a search bar, and a reset button. Try filtering by "district", searching for "jeronimo" or "state", or hitting "Show All" in the filter button. The "specific" tab takes you to a layout of cards that are dynamically rendered from the last node in the database (i.e. "township, La Mesa") and its associated information.

The app is built using only functional components and a single shared state for displaying/rendering the table data given the above mentioned options. This way, future functionalities can be easily implemented (e.g. filtering by a different keyword or carrying over filter logic to a different component such as the "specific" card layouts) since there's a single source of truth at the top of the component tree.

For each cell with numbered data, the parent in the data hierarchy adds up the the data from child lowest in the hierarchy. So if a region contains three townships, then each "voter" totals from each township is added up and the sum is displayed in the region's cell.

For the styling, I used Material UI and followed their guidelines. Specifically, I am using CSS-in-JSS to futher specify styles within components. This makes it easy to understand the CSS specificity hierarchy, i.e., where styles are coming from. Global rules are contained within the MUI "theme" component, which I've included as a template but didn't alter any of its values. The site is also mobile responsive. Text descriptions for buttons are removed after a certain breakpoint to ease readability. But best practices for displaying tables on mobile is a long-standing problem, so I didn't delve too much deeper.

## Future Considerations

Ideally, the state mangagement system I've built could be simplified using Redux or the useReducer hook. The data pulled into the table could also be formatted as a JSON file, but given the small amount of entries, I didn't feel it was necessary for this project. I'd also like to clean up some of the styling and integrate SASS with MUI. I didn't include much metadata either; I'd use React Helmet for that though. Finally, I didn't style the 404 page, but it's there.

## Demo

You can demo the app at https://camerondm.github.io/wiredcraft-frontend-test.
