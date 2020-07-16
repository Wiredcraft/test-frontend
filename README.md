<<<<<<< HEAD
# Frontend

### Context

Test
Use HTML, CSS, and JavaScript to implement the following mockup.

![wiredcraft-front-end-test-mock](https://cldup.com/JM3lLBAS5V.jpg)

[Mockup source Sketch file](https://cldup.com/2wo0ktkbxJ.sketch)

### Requirements

#### Page Structure

```text
Header(Navigation)

Main
  - Table Filter
    - Search Filter (dropdown component)
    - Search Keywords (input field)
  - Table
    - Table Header
    - Table Body
      - Table Row
        - Collapsable Row (State -> Distract -> Township)
          - State Level (Show by default)
            - District Level (Hide by default, show by clicking the button in state level)
              - Township Level (Hide by default, show by clicking the button in district level)
```

#### Functionality

- Static page header \(navigation bar\), no extra features needed.
- The table filter needs to be able to filter the result in the table by the type and keywords.
- The table is nested, and grouped by state, district, township.

#### Tech stack

- Use **React**.
- Use **SASS**.

#### Advanced requirements

_These are used for some further challenges. You can safely skip them if you are not asked to do any, but feel free to try out._

- Make it responsive.
=======
# Description

This app is my open submission for Wiredcraft's Frontend Test, found here: https://github.com/ugglr/wiredcraft-frontend-test. It uses React, React Router, and Material UI.
The assigned mockup for the project is here:

![Assigned Mockup Image](https://camo.githubusercontent.com/e4fae5c535d915ec68cf15d07251183f461d39f6/68747470733a2f2f636c6475702e636f6d2f4a4d336c4c42415335562e6a7067)

My results look like this:

![Final Preview](https://raw.githubusercontent.com/camerondm/wiredcraft-frontend-test/master/src/Images/Overall_Preview.png)

![Final Preview Specific Page](https://raw.githubusercontent.com/camerondm/wiredcraft-frontend-test/master/src/Images/Specific_Page_Preview.png)

## Functionality

Given a database, the app renders a dynamic table with a dropdown filter to sort by type of data, a search bar, and a reset button. Try filtering by "district", searching for "jeronimo" or "state", or hitting "Show All" in the filter button. The "specific" tab takes you to a layout of cards that are dynamically rendered from the last node in the database (i.e. "township, La Mesa") and its associated information.

The app is built using only functional components and a single shared state for displaying/rendering the table data given the above mentioned options. This way, future functionalities can be easily implemented (e.g. filtering by a different keyword or carrying over filter logic to a different component such as the "specific" card layouts) since there's a single source of truth at the top of the component tree.

For each cell with numbered data, the parent in the data hierarchy adds up the the data from child lowest in the hierarchy. So if a region contains three townships, then each "voter" totals from each township is added up and the sum is displayed in the region's cell.

For the styling, I used Material UI and followed their guidelines. Specifically, I am using CSS-in-JSS to futher specify styles within components. This makes it easy to understand the CSS specificity hierarchy, i.e., where styles are coming from. Global rules are contained within the MUI "theme" component, which I've included as a template but didn't alter any of its values. The site is also mobile responsive. Text descriptions for buttons are removed after a certain breakpoint to ease readability. But best practices for displaying tables on mobile is a long-standing problem, so I didn't delve too much deeper.

## Future Considerations

Ideally, the state mangagement system I've built could be simplified using Redux or the useReducer hook. The data pulled into the table could also be formatted as a JSON file, but given the small amount of entries, I didn't feel it was necessary for this project. I'd also like to clean up some of the styling and integrate SASS with MUI. I didn't include much metadata either; I'd use React Helmet for that though. Finally, I didn't style the 404 page, but it's there.

## Demo

You can demo the app at https://camerondm.github.io/wiredcraft-frontend-test.
>>>>>>> wiredcraft-frontend-test-copy/master
