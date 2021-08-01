Принцип Higher-Order Component (HOC):
```javascript
const f = (a) => {
    console.log(a);
    return (b) => {
        console.log(a + b);
    }
}
f(1)(2);
```
