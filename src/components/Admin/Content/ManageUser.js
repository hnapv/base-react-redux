import ModalCreateUser from "./ModalCreateUser"
import ModalUpdateUser from "./ModalUpdateUser"
import ModalViewUser from "./ModalViewUser"
import './ManageUser.scss'
import { useEffect, useState } from "react"
import { getAllUsers } from "../../../services/apiServices"

import { FcPlus } from "react-icons/fc"
import TableUser from "./TableUser"

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false)
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false)
    const [showModalViewUser, setShowModalViewUser] = useState(false)
    const [dataUpdate, setDataUpdate] = useState({})
    const [dataView, setDataView] = useState({})

    const [listUsers, setListUsers] = useState([])

    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true)
        setDataUpdate(user)
        console.log("1", dataUpdate)
    }

    const handleClickBtnView = (user) => {
        setShowModalViewUser(true)
        console.log("trhe=>>",user)
        setDataView(user)
    }

    const resetDataUpdate = () => {
        setDataUpdate({})
    }

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
                        onClick={(event) => setShowModalCreateUser(true)}
                    >
                        <FcPlus />
                        Add new users
                    </button>
                </div>
                <div className="table-users-container">
                    <TableUser
                        listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnView= {handleClickBtnView}
                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    fetchListUsers={fetchListUsers}
                    dataUpdate={dataUpdate}
                    resetDataUpdate={resetDataUpdate}
                />
                <ModalViewUser
                    show={showModalViewUser}
                    setShow={setShowModalViewUser}
                    fetchListUsers={fetchListUsers}
                    dataView={dataView}
                    // resetDataView={resetDataView}
                />
            </div>
        </div>

    )
}

export default ManageUser