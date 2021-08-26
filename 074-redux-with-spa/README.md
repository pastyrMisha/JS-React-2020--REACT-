```javascript
setState

{a: 0, b: 0}

setState({ a: 500});

// {a: 500, b: 0};

```
reducer:
```javascript
{a: 0, b: 0};

const reducer = (state, action) => {
    return { a: 500};
};

// {a: 500};
```
```javascript
{a: 0, b: 0};

const reducer = (state, action) => {
    return { a: 500, b: state.b};
};

// {a: 500, b: 0};
```

про actions:
case 1 Запрос, case 2 Успех, case 3 Ошибка - REQUEST, CONFIRM, ERROR