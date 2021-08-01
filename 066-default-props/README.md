Если в itemList.js {getData} не пришла в строке:
```javascript
const {getData} = this.props;
```
То мы устанавливаем свойства по умолчанию:

```javascript
ItemList.defaultProps = {
    onItemSelected: () => {}
}
```

=================================================
Для RandomChar и внутри второй вариант внутри самого компонента:

```javascript
RandomChar.defaultProps = {
    interval: 15000
}

  static defaultProps = {
        interval: 15000
    }
```


=======================================================
Проверка на тип приходящих данных, где:

props - список всех наших props, которые приходят в компонент;
propName - это имя какой-то определенной property
componentName - имя самого компонента (RandomChar)

```javascript
RandomChar.propTypes ={
    interval: (props, propName, componentName) => {
        const value = props[propName];
        
        if (typeof value === 'number' && !isNaN(value)) {
            return null
        }
        return new TypeError(`${componentName}: ${propName} must be a number`) 
    }
}
```

===============================================================
Готовая библиотека на проверку типов данных:
https://ru.reactjs.org/docs/typechecking-with-proptypes.html

npm install prop-types
```javascript
import PropTypes from 'prop-types';

RandomChar.propTypes ={
    interval: PropTypes.number
}

// Example: getData: PropTypes.arrayOf(PropTypes.object)
```