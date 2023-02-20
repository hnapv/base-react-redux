import { useEffect, useState } from "react"
import { getAllUsers } from "../../../services/apiServices"

const TableUser = () => {

    const [listUsers, setListUsers] = useState([
    ])

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
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((a, index) => {
                            return (
                                <tr key={`table-user-${index}`}>
                                    <td>{index + 1}</td>
                                    <td>{a.username}</td>
                                    <td>{a.email}</td>
                                    <td>{a.role}</td>
                                    <td>
                                        <button className="btn btn-secondary">View</button>
                                        <button  className="btn btn-warning mx-3">Update</button>
                                        <button  className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>

                            )
                        })}
                    {listUsers && listUsers.length === 0 &&
                        <tr>
                            <td colSpan={4}>
                                Not found data
                            </td>
                        </tr>}
                </tbody>
            </table>
        </>
    )
}

export default TableUser