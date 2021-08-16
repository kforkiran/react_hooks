import React from "react";

class Profile extends React.Component{


    changeType() {
        alert("Profile Clicked");    
    }

    render(){
        return (
            <div>
                <h1>Profile</h1>
                <button onClick={() => this.changeType()}>Click Me</button>
            </div>
        );
    }
}
export default Profile;
