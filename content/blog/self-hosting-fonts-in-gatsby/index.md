---
title: 4 Steps to Self-Hosted Fonts in Gatsby
date: "2019-10-17"
description: "Here's the easy 4-step process I used to implement custom fonts on this blog."
---

I finally got around to setting up fonts for this site, but everywhere I looked were articles that overly complicated self-hosting fonts in Gatsby. Here's the easy 4-step process I used for this blog.

1. place your font files in `static/fonts/`.
2. create a `fonts.css` in the same directory and add your css font face rule(s). Mine looks like this:

```css
@font-face {
  font-family: "Lato";
  src: url("Lato-Regular.otf");
}

@font-face {
  font-family: "Dank Mono";
  src: url("DankMono-Regular.otf");
}
```

3. add `gatsby-plugin-web-font-loader` with either npm or yarn (don't forget to `--save`!).
4. add the plugin to your `gatsby-config.js` inside the plugins array. Here's mine:

```javascript
  {
    resolve: "gatsby-plugin-web-font-loader",
    options: {
      custom: {
        families: ["Lato, Dank Mono"],
        urls: ["/fonts/fonts.css"],
      },
    },
  },
```

That's it!
