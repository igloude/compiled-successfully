---
title: Hiding Things with CSS
date: "2019-10-04"
description: "A quick overview on ways to hide content with CSS"
---

There are a handful of ways to hide things using CSS, and each of them has its own strengths and potential drawbacks. Here's a list of the 5 most common ways to hide content, and a few use cases for each.

# Display

`display: none;` or HTML `hidden` attribute

- Removes element from visual flow, hiding it from both visual and AT (Assistive Technology) consumption
- Does not transition

## Use Case

- Toggled, closed, or otherwise hidden elements that may be shown again.
- Breakpoint-dependent elements like mobile & desktop menus

# Opacity

Opposite of transparency, `opacity: 1;` is fully opaque, `opacity: 0;` is fully transparent.

- Does not affect the DOM.
- `opacity` applies to the whole element and any descendants, but is not inherited by the element's children.

_Gotcha:_ an `opacity` value other than `1` puts the element in a new stacking context

## Use Case

- Temporarily hide elements, typically to fade in after a timeout or on a callback
- Pair with another method to create a smooth transition of content in/out of the visual flow

# Visibility

`visibility: hidden;`

- Hidden, but still occupies the same space in the document layout.
- Unlike the `display` property, `visibility` is animatable. Pairs nicely with a short `opacity` transition when animating an element in.

## Use Case

- Hide an element without disrupting the visual flow.
- Pair with DOM manipulation, like `position: absolute;` or `overflow: hidden; height: 0;` to enable transitions where `display: none;` would fall short.

# ARIA

`aria-hidden='true'`

- Hides from screen readers, but not visually.

## Use Case

- Visual-only elements that already have descriptive text
- Redundant elements (mobile/desktop menus)

# Clipping

Hides visually, but not to AT.  
[A11y guidelines](https://a11y-guidelines.orange.com/web_EN/exemples/masquage/index.html) on this are an excellent description.

## Use Case

- Visually redundant elements already described in the DOM
- Input labels made redundant by a visual overhaul using pseudo-elements

# Things to Remember

- All content hidden with CSS will become visible if styles are disabled.
- Be careful not to hide the full functionality of your site from screen reader and/or keyboard-only users.
