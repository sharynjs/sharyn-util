# 🌹 ifs

`ifs` is a function that does an `if` / `else if` / `else` chain. Since it doesn't have the rigid structure of `if` and `else` statements, you can inline if anywhere in your code, including in JSX code. It's just an expression.

It is similar to using chained ternaries except that it has a default case, and you might prefer that formatting to chained ternaries.

If the conditions in your cases are always comparing the same value with strict equality, use `swit` instead.

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

## ⚠️ Warning ⚠️

Since the array we are using inside `ifs` is being **declared** there, everything inside it will be **evaluated**. This means that the following will print...
