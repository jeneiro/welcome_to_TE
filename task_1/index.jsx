import { useState, Fragment, useEffect } from 'react';

const MainComponent =()=> {
    const [ _, update ] = useState(""); // change state for force component rerendering and checking the result
useEffect(()=>{update("Slim Eminem")},[])// Initial State
    return (
        <Fragment>
            <button onClick={()=>{update("Slim Shaddy")}}>update MainComponent</button>
            <ChildComponent name={_} />
        </Fragment>
    );
};

const ChildComponent = ({ name }) => (
  
    <div>my name is {name}</div>
);

export default MainComponent;
