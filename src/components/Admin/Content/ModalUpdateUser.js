import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { FcPlus } from "react-icons/fc"
import { putUpdateNewUser } from "../../../services/apiServices"
import _ from "lodash"

const ModalUpdateUser = (props) => {
    const { show, setShow, fetchListUsers, dataUpdate } = props

    const handleClose = () => {
        setShow(false);
        setEmail("")
        setPassword("")
        setUsername("")
        setRole("USER")
        setImage("")
        setImage("")
        setPreviewImage("")
        props.resetDataUpdate()
    }
    // const handleShow = () => setShow(true);

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [role, setRole] = useState("USER")
    const [image, setImage] = useState("")
    const [previewImage, setPreviewImage] = useState("")

    useEffect(() => {
        console.log('run effect', dataUpdate)
        if (!_.isEmpty(dataUpdate)) {
            //update state
            setEmail(dataUpdate.email)
            setUsername(dataUpdate.username)
            setRole(dataUpdate.role)
            setImage("")
            if (dataUpdate.image) {
                setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`)
            }
            // dataUpdate.image ? setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`) : setPreviewImage("")
        }
    }, [dataUpdate])

    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]))
            setImage(event.target.files[0])
        } else {
            // setPreviewImage("")
        }
    }

    const handleSubmitUpdateUser = async () => {

        let data = await putUpdateNewUser(dataUpdate.id, username, role, image)
        console.log("res==>", data)
        if (data && data.EC === 0) {
            toast.success(data.EM)
            handleClose()
            await fetchListUsers()
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM)
        }
    }
    console.log('check render')

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                backdrop="static"
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label" >Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                disabled
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                disabled

                                onChange={(event) => setPassword(event.target.value)}

                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select
                                className="form-select"
                                value={role}
                                onChange={(event) => setRole(event.target.value)}
                            >
                                <option value="USER">USER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>
                        <div className='col-md-12'>
                            <label className="form-label label-upload" htmlFor='labelUpload'>
                                <FcPlus />Upload File Image
                            </label>
                            <input
                                type="file"
                                id="labelUpload"
                                hidden
                                onChange={event => handleUploadImage(event)}
                            ></input>
                        </div>

                        <div className='cole-md-12 img-preview'>
                            {previewImage ?
                                <img src={previewImage} alt="Preview" />
                                :
                                <span>Preview Image</span>
                            }
                        </div>

                        {/* <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" for="gridCheck">
                                    Check me out
                                </label>
                            </div>
                        </div> */}
                        {/* <div className="col-12">
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </div> */}
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitUpdateUser()}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUpdateUser
