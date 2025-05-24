import axios from 'axios';
import React , {useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';

export default function AddUser() {
  let navigate = useNavigate()

  //Store the data in state
  const [user,setUser] = useState({
      name:"",
      username:"",
      email:""
  })

  const {name,username,email}= user

  const onInputChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  };

  const onSubmit=async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/user",user)
    navigate("/");
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="card shadow-lg border-0" style={{borderRadius: '20px'}}>
            
            {/* Header */}
            <div className="card-header text-white text-center py-4" style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '20px 20px 0 0'
            }}>
              <h3 className="mb-0 fw-bold">
                <i className="fas fa-user-plus me-3"></i>
                Add New User
              </h3>
              <p className="mb-0 mt-2 opacity-75">Create a new user account</p>
            </div>

            {/* Form Body */}
            <div className="card-body p-5">
              <form onSubmit={(e)=> onSubmit(e)}>
                
                {/* Name Field */}
                <div className="mb-4">
                  <label htmlFor="name" className="form-label fw-semibold text-dark mb-2">
                    <i className="fas fa-user me-2 text-primary"></i>
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    className='form-control form-control-lg' 
                    placeholder='Enter full name' 
                    name='name' 
                    value={name} 
                    onChange={(e)=>onInputChange(e)}
                    required
                    style={{
                      borderRadius: '10px',
                      border: '2px solid #e9ecef',
                      padding: '12px 16px',
                      fontSize: '1rem'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#667eea'}
                    onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                  />
                </div>

                {/* Username Field */}
                <div className="mb-4">
                  <label htmlFor="username" className="form-label fw-semibold text-dark mb-2">
                    <i className="fas fa-at me-2 text-success"></i>
                    Username
                  </label>
                  <input 
                    type="text" 
                    className='form-control form-control-lg' 
                    placeholder='Enter username' 
                    name='username' 
                    value={username} 
                    onChange={(e)=>onInputChange(e)}
                    required
                    style={{
                      borderRadius: '10px',
                      border: '2px solid #e9ecef',
                      padding: '12px 16px',
                      fontSize: '1rem'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#667eea'}
                    onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                  />
                </div>

                {/* Email Field */}
                <div className="mb-4">
                  <label htmlFor="email" className="form-label fw-semibold text-dark mb-2">
                    <i className="fas fa-envelope me-2 text-warning"></i>
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    className='form-control form-control-lg' 
                    placeholder='Enter email address' 
                    name='email' 
                    value={email} 
                    onChange={(e)=>onInputChange(e)}
                    required
                    style={{
                      borderRadius: '10px',
                      border: '2px solid #e9ecef',
                      padding: '12px 16px',
                      fontSize: '1rem'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#667eea'}
                    onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                  />
                </div>

                {/* Buttons */}
                <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-5">
                  <button 
                    type='submit' 
                    className='btn btn-lg px-5 me-md-3 fw-semibold'
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      border: 'none',
                      borderRadius: '25px',
                      color: 'white',
                      padding: '12px 30px',
                      boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
                    }}
                  >
                    <i className="fas fa-save me-2"></i>
                    Save User
                  </button>
                  
                  <Link 
                    className='btn btn-outline-secondary btn-lg px-5 fw-semibold' 
                    to="/"
                    style={{
                      borderRadius: '25px',
                      padding: '12px 30px',
                      borderWidth: '2px'
                    }}
                  >
                    <i className="fas fa-times me-2"></i>
                    Cancel
                  </Link>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    //-----------sketch---------------
    // <div className="container">
    //   <div className="row">
    //     <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
    //       <h2 className="text-center m-4">Register User</h2>
    //       <form onSubmit={(e)=> onSubmit(e)}>
    //       <div className="mb-3">
    //         <lable htmlFor="Name" className="form-lable">Name</lable>
    //         <input type-={"text"} className='form-control' placeholder='Enter Your Name' name='name' value={name} onChange={(e)=>onInputChange(e)}/>

    //         <lable htmlFor="Name" className="form-lable">User name</lable>
    //         <input type-={"text"} className='form-control' placeholder='Enter Your Username' name='username' value={username} onChange={(e)=>onInputChange(e)}/>

    //         <lable htmlFor="Name" className="form-lable">Email</lable>
    //         <input type-={"text"} className='form-control' placeholder='Enter Your Email' name='email' value={email} onChange={(e)=>onInputChange(e)}/>
    //       </div>
    //       <button type='submit' className='btn btn-outline-primary'>Submit</button>
    //       <Link className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  )
}

//to download react developer tool
// webstore->chrome web store-> search"react developer tool"-> Add to chrome-> Add extention
