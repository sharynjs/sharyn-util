## 🌹 run

**`run`** lets you run some imperative code anywhere. Useful for debugging in declarative code.

For instance, let's say you have the following React component:

```jsx
const Cmp = ({ something }) => (
  <div data-something={something}></div>
)
```

If you want to execute some imperative code inside it you can do it with **`run`**:

```jsx
import run from '@sharyn/util/run'
// or import { run } from '@sharyn/util'

const Cmp = ({ something }) => (
  <div data-something={run(() => {
    console.log(something)
    doWhatever()
    return something
  })}></div>
)
```

Use at your own risk!

**`run`** is part of [`@sharyn/util`](https://github.com/sharynjs/sharyn-util/blob/master/README.md)
