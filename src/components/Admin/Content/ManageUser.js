import ModalCreateUser from "./ModalCreateUser"
import ModalUpdateUser from "./ModalUpdateUser"
import ModalViewUser from "./ModalViewUser"
import './ManageUser.scss'
import { useEffect, useState } from "react"
import { getAllUsers, getUserWithPaginate } from "../../../services/apiServices"

import { FcPlus } from "react-icons/fc"
import TableUser from "./TableUser"
import ModalDeleteUser from "./ModalDeleteUser"
import TableUserPaginate from "./TableUserPaginate"

const ManageUser = (props) => {
    const LIMIT_USER = 1;
    const [pageCount, setPageCount] = useState(1);
    const [currentPage,setCurrentPage] = useState(1)
    const [showModalCreateUser, setShowModalCreateUser] = useState(false)
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false)
    const [showModalViewUser, setShowModalViewUser] = useState(false)
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false)
    const [dataUpdate, setDataUpdate] = useState({})
    const [dataView, setDataView] = useState({})
    const [dataDelete, setDataDelete] = useState({})

    const [listUsers, setListUsers] = useState([])

    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true)
        setDataUpdate(user)
        console.log("1", dataUpdate)
    }

    const handleClickBtnView = (user) => {
        setShowModalViewUser(true)
        console.log("trhe=>>", user)
        setDataView(user)
    }

    const handleClickBtnDelete = (user) => {
        setShowModalDeleteUser(true)
        setDataDelete(user)

    }

    const resetDataUpdate = () => {
        setDataUpdate({})
    }

    useEffect(() => {
        // fetchListUsers()
        fetchListUsersWithPaginate(1)
    }, [])

    const fetchListUsers = async () => {
        const data = await getAllUsers()
        if (data.EC === 0) {
            setListUsers(data.DT)
        }
    }

    const fetchListUsersWithPaginate = async (page) => {
        console.log("page", page)
        const res = await getUserWithPaginate(page, LIMIT_USER)
        if (res.EC === 0) {
            console.log("res.data=>>", res.DT)
            setListUsers(res.DT.users)
            setPageCount(res.DT.totalPages)

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
                    <TableUserPaginate
                        listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnDelete={handleClickBtnDelete}
                        pageCount={pageCount}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    setCurrentPage={setCurrentPage}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    // fetchListUsers={fetchListUsers}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    currentPage={currentPage}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    // fetchListUsers={fetchListUsers}
                    dataUpdate={dataUpdate}
                    resetDataUpdate={resetDataUpdate}
                />
                <ModalViewUser
                    show={showModalViewUser}
                    setShow={setShowModalViewUser}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    // fetchListUsers={fetchListUsers}
                    dataView={dataView}
                // resetDataView={resetDataView}
                />
                <ModalDeleteUser
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    dataDelete={dataDelete}
                    // fetchListUsers={fetchListUsers}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    setCurrentPage={setCurrentPage}

                />
            </div>
        </div>

    )
}

export default ManageUser