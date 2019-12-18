# Frontend

### Context

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

* Static page header \(navigation bar\), no extra features needed.
* The table filter needs to be able to filter the result in the table by the type and keywords.
* The table is nested, and grouped by state, district, township.

#### Tech stack

* Use **React**.
* Use **SASS**.

#### Advanced requirements

_These are used for some further challenges. You can safely skip them if you are not asked to do any, but feel free to try out._

* Make it responsive.
