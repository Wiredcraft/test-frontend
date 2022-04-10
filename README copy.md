# Frontend

### Context

We need to build a simple webpage following a design like the following screenshot, which features the "[Masonry Layout](https://www.sitepoint.com/understanding-masonry-layout/)". See the [Figma link](https://www.figma.com/file/MGrnRE8jfCl9lU1UmqOQBg/Wiredcraft-Front-End-Test-Mockup) for the design.

![image](https://user-images.githubusercontent.com/919180/151288872-f5f418d1-8326-4b50-9b0b-5ecc624683e1.png)

### Requirements

1. It should load a list of picture URLs from a JSON API. Please use the JSON file below as a sample, and build a simple API to serve it.
2. It should apply [Masonry Layout](https://www.sitepoint.com/understanding-masonry-layout/). See the link for the definition and feature list.
3. It should provide a search input, and allow the users to search images with the "name" attribute. The search input should work as a filter and automatically filters with the user input.

{% file src="../.gitbook/assets/data.json.zip" caption="Data Source JSON file" %}

or download the data.json directly from this repo.

### Tech stack

* Use **React**, and optionally React-router.
* Use a state management tool. We often use Redux or MobX.
* Use **SASS** or **Less** for CSS.
* We are open to other 3rd-party tools but please limit the use - it's a test for you to demonstrate your skill after all.

### Advanced requirements

_Here are some further challenges for you to demonstrate your skills. You can safely skip them if you are not applying as a senior._

* Make it responsive.
* Feature "Lazy-loading".

