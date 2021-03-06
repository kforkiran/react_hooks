import { useEffect, useState } from "react"

const UseEffectExample = () => {

    const [state, setState] = useState(0);
    const[isActive, setActive] = useState(false);

    useEffect(() => {
        let intervalId;
        if(isActive){
            intervalId= setTimeout(() => setState(state + 1),1000);
        }
        return () => clearTimeout(intervalId);
    },[state,isActive]);

    const startCounter = () => {
        setActive(!isActive);
        console.log(isActive);
    };

    const pauseCounter = () => {
        setActive(false);
    };

    const resetCounter = () => {
        setActive(false);
        setState(0);
    };

    return (
        <div whiteSpace="pre-line">
            <span>{state}</span>
          <span> <button className="button is-primary" onClick={() => startCounter()}>Start</button></span>
          <span><button className="button is-primary" onClick={()=>resetCounter()}>Reset</button></span>
          <span><button className="button is-primary" onClick={() => pauseCounter()}>Pause</button></span>
        </div>
    );
 }

 export default UseEffectExample;