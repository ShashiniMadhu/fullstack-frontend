import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function ViewUser() {
      //Store the data in state
      const [user,setUser] = useState({
          name:"",
          username:"",
          email:""
      })

      const {id} =useParams();

      useEffect(()=>{
        loadUser()
      },[])

      const loadUser=async()=>{
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
      }

  return (
    <div className="container py-5">
     <div className="row justify-content-center">
       <div className="col-lg-6 col-md-8">
         <div className="card shadow-lg border-0" style={{borderRadius: '20px'}}>
           
           {/* Header with User Avatar */}
           <div className="card-header text-white text-center py-4" style={{
             background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
             borderRadius: '20px 20px 0 0'
           }}>
             <div className="avatar mx-auto mb-3" style={{
               width: '80px', height: '80px', borderRadius: '50%',
               background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
               display: 'flex', alignItems: 'center', justifyContent: 'center',
               color: 'white', fontSize: '2rem', fontWeight: 'bold',
               boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
             }}>
               {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
             </div>
             <h3 className="mb-0 fw-bold text-dark">User Profile</h3>
             <p className="mb-0 mt-2 text-dark opacity-75">Details of user id: {user.id}</p>
           </div>

           {/* User Details Cards */}
           <div className="card-body p-4">
             
             {/* Name Card */}
             <div className="info-card p-3 mb-3 rounded-3" style={{
               background: 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)',
               border: '1px solid #e9ecef'
             }}>
               <div className="d-flex align-items-center">
                 <div className="icon-circle me-3" style={{
                   width: '45px', height: '45px', borderRadius: '50%',
                   background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                   display: 'flex', alignItems: 'center', justifyContent: 'center'
                 }}>
                   <i className="fas fa-user text-white"></i>
                 </div>
                 <div>
                   <h6 className="mb-1 text-muted fw-semibold">NAME</h6>
                   <h5 className="mb-0 fw-bold text-dark">{user.name || 'N/A'}</h5>
                 </div>
               </div>
             </div>

             {/* Username Card */}
             <div className="info-card p-3 mb-3 rounded-3" style={{
               background: 'linear-gradient(135deg, #28a74515 0%, #20c99715 100%)',
               border: '1px solid #e9ecef'
             }}>
               <div className="d-flex align-items-center">
                 <div className="icon-circle me-3" style={{
                   width: '45px', height: '45px', borderRadius: '50%',
                   background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                   display: 'flex', alignItems: 'center', justifyContent: 'center'
                 }}>
                   <i className="fas fa-at text-white"></i>
                 </div>
                 <div>
                   <h6 className="mb-1 text-muted fw-semibold">USERNAME</h6>
                   <h5 className="mb-0 fw-bold text-dark">@{user.username || 'N/A'}</h5>
                 </div>
               </div>
             </div>

             {/* Email Card */}
             <div className="info-card p-3 mb-4 rounded-3" style={{
               background: 'linear-gradient(135deg, #ffc10715 0%, #fd790815 100%)',
               border: '1px solid #e9ecef'
             }}>
               <div className="d-flex align-items-center">
                 <div className="icon-circle me-3" style={{
                   width: '45px', height: '45px', borderRadius: '50%',
                   background: 'linear-gradient(135deg, #ffc107 0%, #fd7908 100%)',
                   display: 'flex', alignItems: 'center', justifyContent: 'center'
                 }}>
                   <i className="fas fa-envelope text-white"></i>
                 </div>
                 <div>
                   <h6 className="mb-1 text-muted fw-semibold">EMAIL</h6>
                   <h5 className="mb-0 fw-bold text-dark">{user.email || 'N/A'}</h5>
                 </div>
               </div>
             </div>

             {/* Back Button */}
             <div className="text-center">
               <Link className="btn btn-lg px-5 fw-semibold" to="/" style={{
                 background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                 border: 'none', borderRadius: '25px', color: 'white',
                 padding: '12px 30px', boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
               }}>
                 <i className="fas fa-arrow-left me-2"></i>Back to Home
               </Link>
             </div>

           </div>
         </div>
       </div>
     </div>
   </div>
    //------------------sketch------------------------------
    // <div className="container">
    //   <div className="row">
    //     <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
    //       <h2 className="text-center m-4">User Details</h2>

    //       <div className='card'>
    //         <div classname='card-header'>Details of user id :{user.id}
    //             <ul className='list-group list-group-flush'>
    //                 <li classname='list-group-item'>
    //                     <b>Name:</b>{user.name}
    //                 </li>
    //                 <li classname='list-group-item'>
    //                     <b>Username:</b>{user.username}
    //                 </li>
    //                 <li classname='list-group-item'>
    //                     <b>Email:</b>{user.email}
    //                 </li>
    //             </ul>
    //         </div>
    //       </div>
    //       <Link className="btn btn-primary my-2" to={"/"}>Back to Home</Link>
    //     </div>
    //   </div>
    // </div>
  )
}
