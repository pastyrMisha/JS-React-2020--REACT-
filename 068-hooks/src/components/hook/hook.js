import React, { useState, useEffect } from 'react';

function Hook() {
    const [count, setCount] = useState(0);
    const [data, refreshData] = useState([{name: 'Ivan', sex: 'male'}]);
 
    
    useEffect(() => {
        if (data) {
            console.log(data);
        }
      
        // updateChar();
        // timerId = setInterval(updateChar, this.props.interval);
        // return () => {
        //     clearInterval(timerId);
        // }
    });




    return (
        <div>
            <p>Вы кликнули {count} раз</p>
            <button
            onClick={() => setCount(count + 1)}>Кликни меня</button>
            
            {data.map(item => {
                return (
                    <div>Name: {item.name}, Sex: {item.sex}</div>
                );
            })}
            <button onClick={() => refreshData(data => ([...data, {name: 'Alex', sex: 'male'}]))}>
                Добавить данные
            </button>
        </div>
    );
}

export default Hook;