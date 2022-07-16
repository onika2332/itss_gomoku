import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import "./Account.css";
import React, { useState } from 'react'

function Account() {
    const [open, setOpen] = useState(false);
    const [oldPwd, setOldPwd] = useState("");
    const [newPwd, setNewPwd] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");

    const [message, setMessage] = useState("");

    const toggleModal = () => setOpen(!open)

    const submitForm = (e) => {
        e.preventDefault();
        if (oldPwd === "" || newPwd === "" || confirmPwd === "") {
            setMessage("You must be type before submit");
        } else if (newPwd !== confirmPwd) {
            setMessage("Confirm password is not valid");
        } else if (oldPwd === newPwd) {
            setMessage("New password must be different with old password");
        } else {

        }
    }

    if (open) {
        document.body.classList.add("active-modal");
    } else {
        document.body.classList.remove("active-modal");
    }

    return (
        <>
            <button
                onClick={toggleModal}
                className="btn-modal"
            >
                Manage account
            </button>
            {open && (
                <div className="modal">
                    <div className="overlay"></div>
                    <div className="modal-content">
                        <h3>Manage account</h3>
                        <form>
                            <input
                                type="password"
                                placeholder="old password"
                                onChange={(e) => setOldPwd(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="new password"
                                onChange={(e) => setNewPwd(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="confirm password"
                                onChange={(e) => setConfirmPwd(e.target.value)}
                            />

                            <div className="form-btn">
                                <button
                                    className="submit-btn"
                                >
                                    SUBMIT
                                </button>

                                <button
                                    className="cancel-btn"
                                    onClick={toggleModal}
                                >
                                    CANCEL
                                </button>
                            </div>
                        </form>
                        <h4 style={{ color: "red" }}>{message != "" && message}</h4>
                    </div>
                </div>
            )}

        </>
    )
}

export default Account