import React from 'react'

export default function UpdatedUser({ handleOnSubmit, value, handlechange,}) {

    return (
        <>
            <div id="editEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleOnSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Update User</h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" value={value.firstName} name='firstName' onChange={handlechange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" value={value.lastName} name='lastName' onChange={handlechange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>BirthDate</label>
                                    <input type="date" value={value.birthDate} name='birthDate' onChange={handlechange} className="form-control" />

                                </div>
                                <div className="form-group">
                                    <label>Country</label>

                                    <input type="text" value={value.country} name='country' onChange={handlechange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>City</label>

                                    <input type="text" value={value.city} name='city' onChange={handlechange} className="form-control" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-primary" value="Update" data-bs-dismiss="modal" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>



        </>
    )
}