import axios from "axios";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { baseUrl } from "./base";
import "./design.css";
import { useState, useEffect } from 'react'

// Student Info Module
export const StudentInfo = (props) => {
    if (props.value.data == []) {
        return (
            <>
                <p className="text-center mt-5">Invalid ID or Data Corrupt</p>
            </>
        );

    }



    else {

        return (<>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-6 col-md-6">
                        <table className="table mt-5" style={{ borderStyle: 'groove' }}>
                            <tbody>
                                <tr>
                                    <th colSpan="2" className="text-center">Personal Info</th>

                                </tr>
                                <tr>
                                    <td>Name</td>
                                    <td>{props.value.data.fname}</td>
                                </tr>
                                <tr>
                                    <td>Admission ID</td>
                                    <td>{props.value.data.admissionid}</td>
                                </tr>
                                <tr>
                                    <td>Date Of birth</td>
                                    <td>{props.value.data.dob}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>{props.value.data.email}</td>
                                </tr>
                                <tr>
                                    <td>Address</td>
                                    <td>{props.value.data.add}</td>
                                </tr>
                                <tr>
                                    <td>Father Name</td>
                                    <td>{props.value.data.personalinfo.fatherName}</td>
                                </tr>
                                <tr>
                                    <td>Mother Name</td>
                                    <td>{props.value.data.personalinfo.motherName}</td>
                                </tr>
                                <tr>
                                    <td>Aadhar card number</td>
                                    <td>{props.value.data.personalinfo.aadharCard}</td>
                                </tr>
                                <tr>
                                    <td>Parent Phone Number</td>
                                    <td>{props.value.data.personalinfo.parentsPhone}</td>
                                </tr>
                                <tr>
                                    <td>District</td>
                                    <td>{props.value.data.personalinfo.district}</td>
                                </tr>
                                <tr>
                                    <td>Pin Code</td>
                                    <td>{props.value.data.personalinfo.pinCode}</td>
                                </tr>
                                <tr>
                                    <td>Blood Group</td>
                                    <td>{props.value.data.personalinfo.bloodGroup}</td>
                                </tr>
                                <tr>
                                    <td>Hobbies</td>
                                    <td>{props.value.data.personalinfo.hobbies}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="col-sm-12 col-lg-6 col-md-6 ">
                        <table className="table mt-5" style={{ borderStyle: 'groove' }}>
                            <tbody>
                                <tr>
                                    <th colSpan="2" className="text-center">Academic Info</th>
                                </tr>
                                <tr>
                                    <td>Class XII</td>
                                    <td>{props.value.data.academicinfo.classXII}</td>
                                </tr>
                                <tr>
                                    <td>Class XD</td>
                                    <td>{props.value.data.academicinfo.classX}</td>
                                </tr>
                                <tr>
                                    <td>Co-circullar Activities</td>
                                    <td>{props.value.data.academicinfo.extraAcademicinfo}</td>
                                </tr>
                                <tr>
                                    <td>Cerificate</td>
                                    <td>{props.value.data.academicinfo.certificate}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
        );
    }
}

// Teacher Info Module
export const TeacherInfo = (props) => {
    if (props.value.data == []) {
        return (
            <>
                <p className="text-center mt-5">Invalid ID or Data Corrupt</p>
            </>
        );

    }
    else {
        return (<>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <table className="table  mt-5" style={{ borderStyle: 'groove' }}>
                            <tbody>
                                <tr>
                                    <td>Full Name</td>
                                    <td>{props.value.data.fname}</td>
                                </tr>
                                <tr>
                                    <td>Teacher ID</td>
                                    <td>{props.value.data.id}</td>
                                </tr>
                                <tr>
                                    <td>Batch Allocate</td>
                                    <td>{props.value.data.classall}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>{props.value.data.email}</td>
                                </tr>
                                <tr>
                                    <td>Address</td>
                                    <td>{props.value.data.add}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
        );
    }
}

//For Student List
export const Stundentlist = (props) => {

    function studentcard(val) {
        console.log(val.admissionid);
        return (
            <>
                <Card
                    admissionid={val.admissionid}
                    studentname={val.fname}
                    dob={val.dob}
                    batch={val.classall}
                />
            </>
        );
    }

    const Card = (props) => {
        return (
            <>
                <div className="col-sm-1 col-xl-4 col-l-3 col-md-4 mt-4 ">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Student Name : {props.studentname}</h5>
                            <p className="card-text">
                                <p>Admisson id: {props.admissionid}</p>
                                <p>Date of birth: {props.dob}</p>
                            </p>
                        </div>
                    </div>
                </div>
            </>
        );
    };
    return (
        <>
            <div className="container mt-5">
                <div className="text-center">
                    <h6>Student List</h6>
                </div>
                <div className="row">
                    {props.value.data.map(studentcard)}
                </div>
            </div>
        </>
    );

}

//For Teacher List
export const Teacherlist = (props)=>{
    function studentcard(val) {
        console.log(val.admissionid);
        return (
            <>
                <Card
                    id={val.id}
                    Teachername={val.fname}
                    add={val.add}
                    batch={val.classall}
                    email={val.email}
                />
            </>
        );
    }

    const Card = (props) => {
        return (
            <>
                <div className="col-sm-1 col-xl-4 col-l-3 col-md-4 mt-4 ">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-title">Teacher Name : {props.Teachername}</h6>
                            <p className="card-text">
                                <p>Teacher id: {props.id}</p>
                                <p>Batch : {props.batch}</p>
                                <p>Register Email: {props.email}</p>
                                <p>Address: {props.add}</p>
                            </p>
                        </div>
                    </div>
                </div>
            </>
        );
    };
    return (
        <>
            <div className="container mt-5">
                <div className="text-center">
                    <h5>Teacher List</h5>
                </div>
                <div className="row">
                    {props.value.data.map(studentcard)}
                </div>
            </div>
        </>
    );
}

