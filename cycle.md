# cycle

**`cycle`** cycles through a set of values, and defaults to the first one.

```js
cycle(1, 1, 2, 3) // 2
cycle(2, 1, 2, 3) // 3
cycle(3, 1, 2, 3) // 1
cycle('something else', 1, 2, 3) // 1
```

Deep equality is supported:

```js
cycle({ a: 2 }, { a: 1 }, { a: 2 }, { a: 3 }) // { a: 3 }
```

`cycle` is part of [`@sharyn/util`](https://github.com/sharynjs/sharyn-util/blob/master/README.md).
