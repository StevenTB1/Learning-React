import React, {useState} from 'react';

function MyComponent(){

    const [car, setCar] = useState({year: 2024, 
                                    make: "Tesla", 
                                    model: "Y"});

    return (<div>
        <p>Your favourite car is: {car.year} {car.make} {car.model}</p>

        <input type="number" value={car.year}/> <br />
        <input type="text" value={car.make}/> <br />
        <input type="text" value={car.model}/> <br />
        </div>
    );
}

export default MyComponent;