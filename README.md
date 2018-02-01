# is-positive-integer

For many years developers hobbled together mostly-working integer tests. When ECMAScript 2015 finally was adopted we finally got [Number.isInteger()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger) and the world has rejoiced.

Final, backwards-compatible solution to testing input for valid, positive integers in string or number form.

```
function isPositiveInteger(v) {
  var i;
  return v && (i = parseInt(v)) && i > 0 && (i === v || ''+i === v);
}
```

## Runners Up

- [Number.isInteger()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)
- [isNaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN)
- [parseInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
