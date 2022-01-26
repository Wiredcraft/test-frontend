# Frontend

### Context

We need to build a simple webpage following a design like the following screenshot, which features the "[Masonry Layout](https://www.sitepoint.com/understanding-masonry-layout/)". See the [Figma link](https://www.figma.com/file/MGrnRE8jfCl9lU1UmqOQBg/Wiredcraft-Front-End-Test-Mockup) for the design.

![](https://1099461659-files.gitbook.io/~/files/v0/b/gitbook-28427.appspot.com/o/assets%2F-LceGMK-Zxa6_-QeGdy1%2F-MCQbVn9o4bL1vBkWDNj%2F-MCQcRxHS2nkc2w0v2lB%2F87638500-761e7f80-c776-11ea-8805-506856db7fdf.png?alt=media&token=a2095548-d4fc-495d-b1c8-78137ee83586)

### Requirements

1. It should load a list of picture URLs from a JSON API. Please use the JSON file below as a sample, and build a simple API to serve it.
2. It should apply [Masonry Layout](https://www.sitepoint.com/understanding-masonry-layout/). See the link for the definition and feature list.
3. It should provide a search input, and allow the users to search images with the "name" attribute. The search input should work as a filter and automatically filters with the user input.

{% file src="../.gitbook/assets/data.json.zip" caption="Data Source JSON file" %}

### Tech stack

* Use **React**, and optionally React-router.
* Use a state management tool. We often use Redux or MobX.
* Use **SASS** or **Less** for CSS.
* We are open to other 3rd-party tools but please limit the use - it's a test for you to demonstrate your skill after all.

### Advanced requirements

_Here are some further challenges for you to demonstrate your skills. You can safely skip them if you are not applying as a senior._

* Make it responsive.
* Feature "Lazy-loading".

