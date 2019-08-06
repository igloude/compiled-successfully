---
title: A word on Sass @extend
date: "2019-08-05"
description: "@extend is a powerful SASS tool that helps keep your code nice and dry, but it can have drawbacks if used incorrectly."
---

`@extend` is a powerful SASS tool that helps keep your code nice and dry, but it can have drawbacks if used incorrectly. Calling `@extend` on a class or placehodler will add the _extended_ class to the _extending_ class' selector list. Take this example:

```scss
.message {
  border: 1px solid black;
  color: black;
  padding: 10px 5px;
}

.success {
  @extend .message;
  border-color: green;
}

.warn {
  @extend .message;
  border-color: yellow;
}

.fail {
  @extend .message;
  border-color: red;
}
```

We create a `.message` class, and extend it across a few more classes with only a change to the `border-color`. When compiled, we get:

```css
.message,
.success,
.warn,
.fail {
  border: 1px solid black;
  color: black;
  padding: 10px 5px;
}

.success {
  border-color: green;
}

.warn {
  border-color: yellow;
}

.fail {
  border-color: red;
}
```

Great! We've got an extremely effecient, dry output. However, using `@extend` improperly can leave a massive trail of selectors you just don't need. For example:

```scss
.foo {
  .bar {
    .message {
      color: black;
      border: 1px solid black;
      padding: 10px 5px;
    }
  }
}

.baz {
  .buzz {
    .error {
      @extend .message;
      border-color: red;
    }
  }
}
```

Will result in:

```css
.foo .bar .message,
.foo .bar .baz .buzz .error,
.baz .buzz .foo .bar .error {
  color: black;
  border: 1px solid black;
  padding: 10px 5px;
}

.baz .buzz .error {
  border-color: red;
}
```

Yikes. Is it even worth the trouble?

The real answer is...maybe? If you're running into selector issues, consider using a mixin instead. But if you totally understand how `@extend` works, and there's a use-case that stands out, great! _Go for it!_ Otherwise its not worth forcing into a stylesheet just for the sake of using it.
