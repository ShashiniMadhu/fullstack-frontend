import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link, useParams} from "react-router-dom"

export default function Home() {

    const [users,setUsers] = useState([]);

    const {id} = useParams()

    //Tell to react that my component has to do somthing to do after render
    useEffect(()=>{
        console.log("This is an error");
        loadUsers();
    },[]);

    const loadUsers=async()=>{
        const result = await axios.get("http://localhost:8080/user");
        // console.log(result);
        //to see clear data only
        setUsers(result.data);
    }

    const deleteUser=async(id)=>{
        await axios.delete(`http://localhost:8080/user/${id}`)
        loadUsers()
    }

  return (
    <div className="container-fluid px-4" style={{paddingTop: '2rem'}}>
        <div className="card shadow-lg border-0" style={{borderRadius: '15px'}}>
            {/* Header Section */}
            <div className="card-header text-white text-center py-4" style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '15px 15px 0 0'
            }}>
                <h2 className="mb-0 fw-bold"><i className="fas fa-users me-3"></i>User Management Dashboard</h2>
                <p className="mb-0 mt-2 opacity-75">Manage all your users in one place</p>
            </div>
            
            {/* Table Body */}
            <div className="card-body p-0">
                {users.length === 0 ? (
                    // No users found message
                    <div className="text-center py-5">
                        <i className="fas fa-users fa-3x text-muted mb-3"></i>
                        <h4 className="text-muted">No users found</h4>
                        <Link to="/adduser" className="btn btn-primary px-4 py-2">
                            <i className="fas fa-plus me-2"></i>Add User
                        </Link>
                    </div>
                ) : (
                    // Users table
                    <div className="table-responsive">
                        <table className="table table-hover mb-0">
                            <thead style={{backgroundColor: '#f8f9fa'}}>
                                <tr>
                                    <th className="px-4 py-3 fw-bold">#</th>
                                    <th className="px-4 py-3 fw-bold"><i className="fas fa-user me-2"></i>Name</th>
                                    <th className="px-4 py-3 fw-bold"><i className="fas fa-at me-2"></i>Username</th>
                                    <th className="px-4 py-3 fw-bold"><i className="fas fa-envelope me-2"></i>Email</th>
                                    <th className="px-4 py-3 fw-bold text-center"><i className="fas fa-cogs me-2"></i>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user,index)=>(
                                    <tr key={user.id}>
                                        <td className="px-4 py-3">
                                            <span className="badge bg-light text-dark fw-bold">{index+1}</span>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="d-flex align-items-center">
                                                {/* User Avatar */}
                                                <div className="avatar me-3" style={{
                                                    width: '35px', height: '35px', borderRadius: '50%',
                                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    color: 'white', fontWeight: 'bold'
                                                }}>
                                                    {user.name.charAt(0).toUpperCase()}
                                                </div>
                                                <span className="fw-semibold">{user.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3"><span className="text-muted">@{user.username}</span></td>
                                        <td className="px-4 py-3"><span className="text-primary">{user.email}</span></td>
                                        <td className="px-4 py-3 text-center">
                                            {/* Action Buttons */}
                                            <div className="btn-group">
                                                <Link className='btn btn-outline-info btn-sm me-1' to={`/viewuser/${user.id}`} 
                                                      style={{borderRadius: '20px', padding: '5px 15px'}}>
                                                    <i className="fas fa-eye"></i>View
                                                </Link>
                                                <Link className='btn btn-outline-warning btn-sm me-1' to={`/edituser/${user.id}`}
                                                      style={{borderRadius: '20px', padding: '5px 15px'}}>
                                                    <i className="fas fa-edit"></i>Edit
                                                </Link>
                                                <button className='btn btn-outline-danger btn-sm' onClick={()=>deleteUser(user.id)}
                                                        style={{borderRadius: '20px', padding: '5px 15px'}}>
                                                    <i className="fas fa-trash"></i>Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            
            {/* Footer with user count */}
            {users.length > 0 && (
                <div className="card-footer bg-light text-center py-3" style={{borderRadius: '0 0 15px 15px'}}>
                    <small className="text-muted">
                        <i className="fas fa-info-circle me-2"></i>Total Users: <span className="fw-bold">{users.length}</span>
                    </small>
                </div>
            )}
        </div>
    </div>
    //---------Sketch---------------------
    // <div className="container" style={{margin: '20px auto'}}>
    //     <div className="py-4">
    //         <table className="table border shadow">
    //             <thead>
    //                 <tr>
    //                 <th scope="col">#</th>
    //                 <th scope="col">Name</th>
    //                 <th scope="col">User name</th>
    //                 <th scope="col">Email</th>
    //                 <th scope="col">Action</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {
    //                     users.map((user,index)=>(
    //                         <tr>
    //                             <th scope="row" key={index}>{index+1}</th>
    //                                 <td>{user.name}</td>
    //                                 <td>{user.username}</td>
    //                                 <td>{user.email}</td>
    //                                 <td>
    //                                     <Link className='btn btn-primary mx-2' to={`/viewuser/${user.id}`}>View</Link>
    //                                     <Link className='btn btn-outline-primary mx-2' to={`/edituser/${user.id}`}>Edit</Link>
    //                                     <button className='btn btn-danger mx-2' onClick={()=>deleteUser(user.id)}>Delete</button>
    //                                 </td>
    //                         </tr>
    //                     ))
    //                 }
    //             </tbody>
    //         </table>
    //     </div>
    // </div>
  )
}
