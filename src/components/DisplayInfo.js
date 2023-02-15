import React, { useState } from "react";
import "./DisplayInfo.scss"
import logo from "../logo.svg"


// stateless & stateful
// class DisplayInfo extends React.Component {

//     handleOnClick = () => {
//         alert("me")
//     }

//     // 1 component = template + logic js
//     render() {
//         console.log("render")
//         //prop 
//         const { listUsers } = this.props
//         return (
//             <div className="display-info-container">
//                 {true &&
//                     <>
//                         {listUsers.map(a => {
//                             console.log(a)
//                             return (
//                                 <div className={+a.age > 18 ? "red" : "green"} key={a.id}>
//                                     <div> Hello {a.name}</div>
//                                     <div> I'm {a.age}</div>
//                                     <button onClick={() => this.props.handleDeleteUser(a.id)} >Delete</button>
//                                     <hr />
//                                 </div>
//                             )
//                         })}

//                     </>
//                 }
//                 {/* <img src={logo} alt="logo thôi mà"/> */}
//             </div>
//         )
//     }
// }

const DisplayInfo = (props) => {
    const { listUsers } = props

    const [isShowHideListUser,setIsShowHideListUser] = useState(true)
    //destructuring assignment

    const handleShowHideListUser = ()=>{
        setIsShowHideListUser(!isShowHideListUser)
    }

    return (
        <div className="display-info-container">
            <div>
                <button onClick={()=>{handleShowHideListUser()}}>
                {isShowHideListUser===true?"Hide":"Show"}</button>
            </div>
            {isShowHideListUser &&
                <>
                    {listUsers.map(a => {
                        console.log(a)
                        return (
                            <div className={+a.age > 18 ? "red" : "green"} key={a.id}>
                                <div> Hello {a.name}</div>
                                <div> I'm {a.age}</div>
                                <button onClick={() => props.handleDeleteUser(a.id)} >Delete</button>
                                <hr />
                            </div>
                        )
                    })}

                </>
            }
            {/* <img src={logo} alt="logo thôi mà"/> */}
        </div>
    )

}

export default DisplayInfo