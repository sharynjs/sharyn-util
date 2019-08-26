# 🌹 @sharyn/util

## cycle

[`cycle`](https://github.com/sharynjs/sharyn-util/blob/master/cycle.md) cycles through a set of values, and defaults to the first one:

```js
cycle(1, 1, 2, 3) // 2
cycle(2, 1, 2, 3) // 3
cycle(3, 1, 2, 3) // 1
cycle('something else', 1, 2, 3) // 1
```

## defined

[`defined`](https://github.com/sharynjs/sharyn-util/blob/master/defined.md) returns `true` if the passed value is not `undefined`.

```js
defined(undefined) // false
defined('abc') // true
```

## ifs

`ifs`

```js

```

```js
ifs(
  [
    [val < 10, 'green'],
    [val < 100, 'yellow'],
    [val < 1000, 'orange'],
    [val < 10000, 'red'],
  ],
  'black'
)
```
