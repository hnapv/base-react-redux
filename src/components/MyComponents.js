// class component
// fucntion component

import React from "react";
import DisplayInfo from "./DisplayInfo";
import AddUserInfo from "./AddUserInfo";

class MyComponent extends React.Component {
    state = {
        listUsers:
            [
                { id: 1, name: "Nguyen Van A", age: 17 },
                { id: 2, name: "Nguyen Van b", age: 25 },
                { id: 3, name: "Nguyen Van c", age: 69 }
            ]

    }
    handleAddNewUser = (user) => {
        // let listUserClone = [...this.state.listUsers]
        // listUserClone.unshift(user)
        // console.log("check",listUserClone)
        // this.setState({
        //     listUsers: listUserClone
        // })
        this.setState({
            // listUsers: [ ...this.state.listUsers,user]
            listUsers: [user, ...this.state.listUsers]
        })
    }

    handleDeleteUser = (userId) => {
        let listUserClone = this.state.listUsers
        listUserClone = listUserClone.filter(item => item.id !== userId)
        this.setState({
            listUsers: listUserClone
        })

    }

    render() {
        return (
            <>
                <div className="a">
                    <AddUserInfo
                        handleAddNewUser={this.handleAddNewUser}

                    // không dùng dấu đóng mở ngoặc khi truyền hàm từ cha sang con, tham chiếu ko cần (), nếu thực thi thì cần
                    />
                    <br /><br />
                    <DisplayInfo handleDeleteUser={this.handleDeleteUser} listUsers={this.state.listUsers} />
                </div>
                <div className="b">

                </div>
            </>
        )
    }
}

export default MyComponent