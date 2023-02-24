
const TableUser = (props) => {

    // const {listUsers, handleClickBtnUpdate,handleClickBtnView} = props

    const { handleClickBtnUpdate, handleClickBtnView, handleClickBtnDelete } = props
    const listUsers = [{
        id: 1,
        username: "abc",
        email: "fff",
        role: "ADMIN"
    },
    {
        id: 2,
        username: "adfgbc",
        email: "ffdfbf",
        role: "ADMIN"
    }
    ]

    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
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
                                    <td>{a.id}</td>
                                    <td>{a.username}</td>
                                    <td>{a.email}</td>
                                    <td>{a.role}</td>
                                    <td>
                                        <button
                                            className="btn btn-secondary"
                                            onClick={() => handleClickBtnView(a)}
                                        >View</button>
                                        <button
                                            className="btn btn-warning mx-3"
                                            onClick={() => handleClickBtnUpdate(a)}
                                        >Update</button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleClickBtnDelete(a)}
                                        >Delete</button>
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