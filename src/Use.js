import { useState } from "react";

const changeButtonType = () => {
    alert("Hellow World");
}

const HelloWorld = function(){
   
    const [buttonType, setButtonType] = useState("is-primary");
    useState(()=>{
        setButtonType("button is-primary");
    },[]);

    const setNewButtonType = () => {
         let  type = buttonType === "button is-info" ? "button is-primary" : "button is-info";
          setButtonType(type);
          console.log(type);
    }

    return (
        <div>
            <button className={buttonType}  onClick={setNewButtonType}>Click Me</button>
        </div>
    );

}

export default HelloWorld;