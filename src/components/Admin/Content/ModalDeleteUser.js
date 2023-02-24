import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { deleteUser } from '../../../services/apiServices';

const ModalDeleteUser = (props) => {
    const { show, setShow, dataDelete,fetchListUsersWithPaginate } = props

    const handleClose = () => setShow(false);

    const handleSubmitDeleteUser = async (id) => {
        let data = await deleteUser(id)
        if (data && data.EC === 0) {
            toast.success(data.EM)
            handleClose()
            // await fetchListUsers()
            await fetchListUsersWithPaginate(1)
            props.setCurrentPage(1)
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM)
        }
    }
    //viet tiep

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static" //bam ra ngoai khong out
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete the user?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure to delete this user (<b>{dataDelete && dataDelete.email ? dataDelete.email : ""}</b>)?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitDeleteUser(dataDelete.id)}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteUser