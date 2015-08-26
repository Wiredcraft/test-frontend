# Wiredcraft Front-end Developer Coding Test

Make sure you read **all** of this document carefully, and follow the guidelines in it.

## Background

Use HTML, CSS and JavaScript to implement the following mock.

![wiredcraft-front-end-test-mock](https://cldup.com/QNw9nUVmcN-2000x2000.png)

### Page structure

```
Header(Navigation)

Main
  - Table Filter
    - Search Filter(dropdown component)
    - Search Keywords(input field)
  - Table
    - Table Header
    - Table Body
      - Table Row
        - Collapsable Row(State -> Distract -> Township)
          - State Level(Show by default)
            - District Level(Hide by default, show by clicking the button in state level)
              - Township Level(Hide by default, show by clicking the button in district level)
```

### Functionality

* Static page header(nav), nothing need to do here.
* The table filter needs to be able to filter the result in the table by the type and keywords
* The table is nested, and grouped by state, district, township

## Getting started

There's nothing here, we leave it to you to choose the build tool, code structure, framework, testing approach...

## Requirements

- With clear documentation on how to run the code

- Provide proper unit test

- Use git to manage code

- TBA for front-end requirements

## What We Care About

Feel free to use any libraries you would use if this were a real production app, but remember we're interested in your code & the way you solve the problem, not how well you can use a particular library.

We're interested in your method and how you approach the problem just as much as we're interested in the end result.

Here's what you should aim for:

- Good use of current HTML, CSS and JavaScript & performance best practices.

- Solid testing approach

- Extensible code;

## Q&A

* Where should I send back the result when I'm done?

Fork this repo and send us a pull request when you think you are done. We don't have deadline for the task.

* What if I have question?

Create a new issue in the repo and we will get back to you very quickly.
