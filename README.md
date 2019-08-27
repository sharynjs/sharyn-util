# 🌹 @sharyn/util

## between

[`between`](https://github.com/sharynjs/sharyn-util/blob/master/between.md) tests if a numeral value is between two bounds.

```js
const x = 50
between(x, 10, 100) // true
```

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

## ifs

[`ifs`](https://github.com/sharynjs/sharyn-util/blob/master/ifs.md) is a function that does an `if` / `else if` / `else` chain. Since it doesn't have the rigid structure of `if` and `else` statements, you can inline if anywhere in your code.

```js
ifs(
  [value < 10, 'green'],
  [value < 100, 'yellow'],
  [value < 1000, 'orange'],
  [value < 10000, 'red'],
  'black',
)
```

Make sure you read the [documentation]((https://github.com/sharynjs/sharyn-util/blob/master/ifs.md)) to avoid side-effects.

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

## swit

[`swit`](https://github.com/sharynjs/sharyn-util/blob/master/swit.md) is an inline and less verbose `switch`.

```js
const value = 2

swit(
  value,
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
  'default'
)
// returns 'two'
```

## toggle

[`toggle`](https://github.com/sharynjs/sharyn-util/blob/master/toggle.md) toggles between two values, and defaults to the first one.

```js
toggle(current, 'a', 'b') // if current === 'a', returns 'b'
toggle(current, 'a', 'b') // if current === 'b', returns 'a'
toggle(current, 'a', 'b') // if current === 'x', returns 'a'
```

## Credits

Hey, I am [@verekia](https://github.com/verekia) and this package is part of a library I am developing, [@sharynjs/sharyn](https://github.com/sharynjs/sharyn). The rest of the library is not ready to be used by the community.
