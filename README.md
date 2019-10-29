# Wiredcraft Front-end Developer Coding Test

Make sure you read the whole document carefully and follow the guidelines in it.

# install dependencies
yarn install

# run
yarn start

## Context

Use HTML, CSS, and JavaScript to implement the following mockup.

![wiredcraft-front-end-test-mock](https://cldup.com/JM3lLBAS5V.jpg)

[Mockup source Sketch file](https://cldup.com/2wo0ktkbxJ.sketch)

## Requirements

### Page Structure

```
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

### Functionality

- Static page header (navigation bar), no extra features needed.
- The table filter needs to be able to filter the result in the table by the type and keywords.
- The table is nested, and grouped by state, district, township.

### Tech stack

- JS oriented
    - Use **React**.
    - Use CSS or SASS or any **CSS** framework as you like.
- CSS oriented
    - Use any **JS** framework as you like.
    - Use **SASS**.

### Bonus

- Write clear **documentation** on how it's designed and how to run the code.
- Provide proper unit tests.
- Write good commit messages.
- An online demo is always welcome.

## What We Care About

Feel free to use any open-source library as you see fit, but remember that we are evaluating your coding skills and problem solving skills.

We're interested in your method and how you approach the problem just as much as we're interested in the end result.

Here's what you should aim for:

- Good use of current HTML, CSS, and JavaScript & performance best practices.
- Good testing approach.
- Extensible code.

## FAQ

> Where should I send back the result when I'm done?

Fork this repo and send us a pull request when you think it's ready for review. You don't have to finish everything prior and you can continue to work on it. We don't have a deadline for the task.

> What if I have a question?

Create a new issue in the repo and we will get back to you shortly.
