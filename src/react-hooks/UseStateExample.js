import { useState } from "react";

const UseStateExample = function(){
   
    const [buttonType,setButtonType] = useState(()=> {
        return "button is-info";
    }); 

    const setNewButtonType = () => {
          const type = buttonType === "button is-info" ? "button is-primary" : "button is-info";
          setButtonType(type);
    }

    return (
        <div className="container is-max-desktop">
            <div className="section">
                <h1>UseState react hook example</h1>
                <h1>Changes the type of button on onClick Event.</h1>
                Current Type : {buttonType}
            </div>
            <button className={buttonType}  onClick={setNewButtonType}>Click Me</button>
        </div>
    );

}

export default UseStateExample;