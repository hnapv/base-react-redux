// class component
// fucntion component

import React from "react";
import DisplayInfo from "./DisplayInfo";
import UserInfo from "./UserInfo";

class MyComponent extends React.Component {
    state = {
        listUsers:
            [
                { id: 1, name:"Nguyen Van A", age:"22" },
                { id: 2, name:"Nguyen Van b", age:"23" },
                { id: 3, name:"Nguyen Van c", age:"25" }
            ]

    }

    render() {
        const myInfo = ['ab', "ad", 'abc']
        return (
            <div>
                <UserInfo />
                <br /><br />
                <DisplayInfo listUsers={this.state.listUsers} />
                
            </div>
        )
    }
}

export default MyComponent