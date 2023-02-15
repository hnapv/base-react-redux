import React from "react";
import "./DisplayInfo.scss"
import logo from "../logo.svg"

class DisplayInfo extends React.Component {
    state = {
        isShowListUser: true
    }
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    handleDeleteUser= ()=>{
        alert("me")
    }

    // 1 component = template + logic js
render() {
    //prop 
    const { listUsers } = this.props
    return (
        <div className="display-info-container">
            <div>
                <button onClick={() => { this.handleShowHide() }}>
                {this.state.isShowListUser===true?"Hide":"Show"}</button>
            </div>
            {this.state.isShowListUser &&
                <>
                    {listUsers.map(a => {
                        console.log(a)
                        return (
                            <div  className={+a.age > 18 ? "red" : "green"}>
                                <div> Hello {a.name}</div>
                                <div> I'm {a.age}</div>
                                <button onClick={(event)=>handleDeleteUser(event)} >Delete</button>
                                <hr/>
                            </div>
                        )
                    })}

                </>
            }
            <img src={logo}/>
        </div>
    )
}
}

export default DisplayInfo