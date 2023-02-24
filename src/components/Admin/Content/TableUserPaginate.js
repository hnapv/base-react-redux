import ReactPaginate from "react-paginate"
import { useState, useEffect } from "react";


const TableUserPaginate = (props) => {

    const { listUsers, handleClickBtnUpdate, handleClickBtnView, handleClickBtnDelete, fetchListUsersWithPaginate, pageCount } = props




    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        props.setCurrentPage(+event.selected + 1)
        fetchListUsersWithPaginate(+event.selected + 1)
        console.log(`User requested page number ${event.selected}, which is offset `);
    };

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
            <div className="user-pagination">
                <ReactPaginate
                    nextLabel="Next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< Prev"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                    forcePage={props.currentPage - 1}
                />
            </div>

        </>
    )
}

export default TableUserPaginate