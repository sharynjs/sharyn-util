# 🌹 @sharyn/util

## cycle

[`cycle`](https://github.com/sharynjs/sharyn-util/blob/master/cycle.md) returns the next value of a set of values, and defaults to the first one.

```js
cycle(current, 'a', 'b', 'c') // if current === 'a', returns 'b'
cycle(current, 'a', 'b', 'c') // if current === 'b', returns 'c'
cycle(current, 'a', 'b', 'c') // if current === 'c', returns 'a'
cycle(current, 'a', 'b', 'c') // if current === 'x', returns 'a'
```

## defined

[`defined`](https://github.com/sharynjs/sharyn-util/blob/master/defined.md) returns `true` if the passed value is not `undefined`.

```js
defined(undefined) // false
defined('abc') // true
```

## either

[`either`](https://github.com/sharynjs/sharyn-util/blob/master/either.md) returns `true` if the first argument matches any of the other.

```js
const something = 'bar'
either(something, 'foo', 'bar', 'baz') // true
```

## exists

[`exists`](https://github.com/sharynjs/sharyn-util/blob/master/exists.md) returns `true` if its argument is not `null` or `undefined`.

```js
exists('a')       // true
exists(null)      // false
exists(undefined) // false
```

## global

[`global`](https://github.com/sharynjs/sharyn-util/blob/master/global.md) is a set of functions to create and access global variables.

```js
// In file A
setGlobal('store', store)

// In file B
getGlobal('store') // store
```

## run

[`run`](https://github.com/sharynjs/sharyn-util/blob/master/run.md) lets you run some imperative code anywhere. Useful for debugging in declarative code.

```js
const Cmp = ({ something }) => (
  <div data-something={run(() => {
    console.log(something)
    doWhatever()
    return something
  })}></div>
)
```
