# 🌹 ifs

`ifs` is a function that does an `if` / `else if` / `else` chain. Since it doesn't have the rigid structure of `if` and `else` statements, you can inline if anywhere in your code, including in JSX code. It's just an expression.

It is similar to using chained ternaries except that it has a default case, and you might prefer that formatting to chained ternaries.

If the conditions in your cases are always comparing the same value with strict equality, use `swit` instead.

```js
ifs(
  [
    [value < 10, 'green'],
    [value < 100, 'yellow'],
    [value < 1000, 'orange'],
    [value < 10000, 'red'],
  ],
  'black'
)
```

## ⚠️ Warning ⚠️

Since the array we are using inside `ifs` is being **declared** there, everything inside it will be **evaluated**. This means that the following will print...
