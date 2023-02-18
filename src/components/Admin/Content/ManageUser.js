import ModalCreateUser from "./ModalCreateUser"
import './ManageUser.scss'

import { FcPlus } from "react-icons/fc"
import { useState } from "react"

const ManageUser = (props) => {
const [showModalCreateUser,setShowModalCreateUser]=useState("")

    return (
        <div className="manage-user-container">
            <div className="title">
                ManageUser
            </div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button
                    className="btn btn-primary"
                    onClick={(event)=>setShowModalCreateUser(true)}
                    >
                        <FcPlus />
                        Add new users
                    </button>
                </div>
                <div className="table-users-container">
                    table users
                </div>
                <ModalCreateUser 
                show={showModalCreateUser}
                setShow={setShowModalCreateUser}
                />
            </div>
        </div>

    )
}

export default ManageUser