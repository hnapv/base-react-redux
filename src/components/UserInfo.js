import React from "react";

class UserInfo extends React.Component {
    state = {
        name: "AnhVP",
        address: "HN",
        age: 25
    }

    handleOnChangeInput(event) {
        console.log(event, event.target.value)
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeAge(event) {
        console.log(event, event.target.value)
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit(event) {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and from {this.state.address}
                <br></br> I'm {this.state.age}

                <form
                    onSubmit={(event) => this.handleOnSubmit(event)}
                >
                    <label>Your name: </label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <label>Your age: </label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.handleOnChangeAge(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfo