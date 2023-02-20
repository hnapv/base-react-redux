import ModalCreateUser from "./ModalCreateUser"
import './ManageUser.scss'
import { useEffect, useState } from "react"
import { getAllUsers } from "../../../services/apiServices"

import { FcPlus } from "react-icons/fc"
import TableUser from "./TableUser"

const ManageUser = (props) => {
const [showModalCreateUser,setShowModalCreateUser]=useState(false)
const [listUsers, setListUsers] = useState([])

useEffect(() => {
    fetchListUsers()
}, [])

const fetchListUsers = async () => {
    const data = await getAllUsers()
    if (data.EC === 0) {
        setListUsers(data.DT)
    }
}

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
                    <TableUser listUsers={listUsers}/>
                </div>
                <ModalCreateUser 
                show={showModalCreateUser}
                setShow={setShowModalCreateUser}
                fetchListUsers={fetchListUsers}
                />
            </div>
        </div>

    )
}

export default ManageUser