import React, {useState, useEffect} from 'react';

function MyComponent(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    // useEffect(function, [dependecies]);

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;

        return () => {
            // Some cleanup code
        }
        
    }, [count, color]);

    function addCount(){
        setCount(c => c + 1);
    }

    function subtractCount(){
        setCount(c => c - 1);
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green");
    }

    return (<>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button>
        <button onClick={changeColor}>Change Color</button>
    </>);
}

export default MyComponent;