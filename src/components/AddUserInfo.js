import React, { useState } from "react";


const AddUserInfo = (props) => {

    const [name, setName] = useState("ANHVP")
    const [age, setAge] = useState(25)


    const handleOnChangeInput = (a) => {
        setName(a.target.value)
    }

    const handleOnChangeAge = (a) => {
        setAge(a.target.value)
    }

    const handleOnSubmit = (a) => {
        a.preventDefault()
        const data = {
            id: Math.floor(Math.random() * 100 + 1) + "random",
            name: name,
            age: age
        }
        props.handleAddNewUser(data)
    }

    return (
        <div>
            My name is {name}
            <br></br> I'm {age}

            <form
                onSubmit={(event) => handleOnSubmit(event)}
            >
                <label>Your name: </label>
                <input
                    value={name}
                    type="text"
                    onChange={(event) => handleOnChangeInput(event)}
                />
                <label>Your age: </label>
                <input
                    value={age}
                    type="text"
                    onChange={(event) => handleOnChangeAge(event)}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

// class AddUserInfo extends React.Component {
//     state = {
//         name: "AnhVP",
//         address: "HN",
//         age: 25
//     }

//     handleOnChangeInput(event) {
//         this.setState({
//             name: event.target.value
//         })
//     }

//     handleOnChangeAge(event) {
//         this.setState({
//             age: event.target.value
//         })
//     }

//     handleOnSubmit(event) {
//         event.preventDefault()
//         console.log(this.state)
//         this.props.handleAddNewUser({
//             id: Math.floor(Math.random() * 100 + 1) +"random",
//             name: this.state.name,
//             address: this.state.address,
//             age: this.state.age
//         })
//     }

//     render() {
//         return (
//             <div>
//                 My name is {this.state.name} and from {this.state.address}
//                 <br></br> I'm {this.state.age}

//                 <form
//                     onSubmit={(event) => this.handleOnSubmit(event)}
//                 >
//                     <label>Your name: </label>
//                     <input
//                         value={this.state.name}
//                         type="text"
//                         onChange={(event) => this.handleOnChangeInput(event)}
//                     />
//                     <label>Your age: </label>
//                     <input
//                         value={this.state.age}
//                         type="text"
//                         onChange={(event) => this.handleOnChangeAge(event)}
//                     />
//                     <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

export default AddUserInfo