import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'material-icons/iconfont/material-icons.css';

export default function Table({ Deletuser, UpdatedUser }) {
    const [data, setData] = useState({ members: [] });

    useEffect(() => {
        async function fetchData() {
            try {
                const user = await axios.get('http://localhost:4000/api/get');
                const response = user.data;
                setData(response);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [data]);

    const calculateDaysUntilBirthday = (birthDate) => {
        const today = new Date();
        const nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());

        if (nextBirthday < today) {
            nextBirthday.setFullYear(today.getFullYear() + 1);
        }

        const diffTime = Math.abs(nextBirthday.getTime() - today.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    return (
        <>
            <div className="container">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>Datavid cake tracker</h2>
                            </div>
                            <div className="col-sm-6">
                                <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addEmployeeModal">
                                    <i className="material-icons">&#xE147;</i> <span>Add New Member</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th></th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>BirthDate</th>
                                <th>Country</th>
                                <th>City</th>
                                <th>Days Until Birthday</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.members?.map((elem) => (
                                <tr key={elem._id}>
                                    <td></td>
                                    <td>{elem.firstName}</td>
                                    <td>{elem.lastName}</td>
                                    <td>{new Date(elem.birthDate).toLocaleDateString('en-CA')}</td>
                                    <td>{elem.country}</td>
                                    <td>{elem.city}</td>
                                    <td>{calculateDaysUntilBirthday(new Date(elem.birthDate))}</td> {/* Display days until birthday */}
                                    <td>
                                        <a href="#" className="edit cursor-pointer" data-bs-toggle="modal" data-bs-target="#editEmployeeModal" onClick={() => UpdatedUser(elem._id)}>
                                            <i className="material-icons" data-bs-toggle="tooltip" title="Edit">&#xE254;</i>
                                        </a>
                                        <a href="#" className="delete cursor-pointer" data-bs-toggle="modal" data-bs-target="#deleteEmployeeModal" onClick={() => Deletuser(elem._id)}>
                                            <i className="material-icons" data-bs-toggle="tooltip" title="delete">&#xE872;</i>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
