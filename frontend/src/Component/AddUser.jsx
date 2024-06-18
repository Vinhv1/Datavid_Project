import React, { useRef, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';



export default function AddUser() {
    const [value, setValue] = useState({
        firstName: '',
        lastName: '',
        birthDate: '',
        country: "",
        city: ""
    })
    const handleOnchange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    };


    const CloseRef = useRef()
    const handleSubmit = async (e) => { 
        e.preventDefault();

        try {
            const adduser = await axios.post('http://localhost:4000/api/create', value)
            const response = adduser.data
            if (response.success) {
                toast.success(response.Message)
                CloseRef.current.click()

            }
            console.log(response)
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.Message)
        }


    };
    return (
        <>
            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Add Employee</h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true" ref={CloseRef}>&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" value={value.firstName} name='firstName' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" value={value.lastName} name='lastName' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>BirthDate</label>
                                    <input type="date" value={value.birthDate} name='birthDate' onChange={handleOnchange} className="form-control" required />

                                </div>
                                <div className="form-group">
                                    <label>Country</label>
                                    <input type="text" value={value.country} name='country' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>City</label>
                                    <input type="text" value={value.city} name='city' onChange={handleOnchange} className="form-control" required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-primary" value="Add" />
                            </div>

                        </form>
                    </div>
                </div>
            </div>



        </>
    )
}
