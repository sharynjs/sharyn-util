## 🌹 html

**`html`** is a template string tag that does nothing at all. It's a normal template string. But your code editor or its [plugins](https://marketplace.visualstudio.com/items?itemName=bierner.lit-html) might support syntax highlighting for HTML when they are marked with an `html` tag.

```js
import html from '@sharyn/util/html'
// or import { html } from '@sharyn/util'

const name = 'Sven'

console.log(html`<div>Hello ${name}</div>`) // Hello Sven
```

**`html`** is part of [`@sharyn/util`](https://github.com/sharynjs/sharyn-util/blob/master/README.md)
