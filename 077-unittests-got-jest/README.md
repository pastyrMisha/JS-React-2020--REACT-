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
HOC - ф-ия, которая возвращает ф-ию, которая возвращает ф-ию, которая, как аргумент может принимать какой-то компонент