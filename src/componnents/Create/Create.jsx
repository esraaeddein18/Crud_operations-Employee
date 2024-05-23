import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Create = () => {
    const[id,idchange]=useState("");
    const[name,namechange]=useState("");
    const[email,emailchange]=useState("");
    const[phone,phonechange]=useState("");
    const[active,activechange]=useState(true);
    const[validation,valchange]=useState(false);
    const navigate=useNavigate();

    const handlesubmit=(e)=>{
        e.preventDefault();
        const empdata={name,email,phone,active};
        fetch("http://localhost:3000/employee",
        { method:"POST", headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
        }).then((res)=>{
          alert('Saved successfully.');
          navigate('/');
        }).catch((err)=>{
          console.log(err.message)
        })
      }
  return (
    <div className="row py-3">
        <div className="container-fluid">
            <form className="container px-5 " onSubmit={handlesubmit}>
                <div className="card px-4" style={{"textAlign":"left"}}>
                    <div className="card-title">
                        <h2 className='px-4 mt-3 mb-0 text-center'>Employee Create</h2>
                    </div>
                    <div className="card-body mt-0">
                        <div className="row">
                            <div className="col-lg-12 py-2">
                                <div className="form-group">
                                    <label className='fs-5 text-secondary'>ID</label>
                                    <input value={id} onChange={e=>idchange(e.target.value)} placeholder='Id'className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12 py-2">
                                <div className="form-group">
                                    <label className='fs-5 text-secondary'>Name</label>
                                    <input required value={name} placeholder="Name" onMouseDown={e=>valchange(true)}
                                    onChange={e=>namechange(e.target.value)} className="form-control"></input>
                                    {name.length==0 && validation && <span className="text-danger">Enter the name</span>}
                                    <span className="text-danger"></span>
                                </div>
                            </div>
                            <div className="col-lg-12 py-2">
                                <div className="form-group">
                                    <label className='fs-5 text-secondary'>Email</label>
                                    <input value={email} placeholder="Email" onChange={e=>emailchange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12 py-2">
                                <div className="form-group">
                                    <label className='fs-5 text-secondary'>Phone</label>
                                    <input value={phone} placeholder='Phone' email onChange={e=>phonechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12 py-2">
                                <div className="form-check fs-5 text-primary">
                                    <input checked={active}  onChange={e=>activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                    <label  className="form-check-label">Is Active</label>
                                </div>
                            </div>
                            <div className="text-center col-lg-12 d-flex py-2">
                                <div className="col" style={{"textAlign":"left"}}>
                                    <button className="btn btn-success w-25 fs-5" type="submit">Save</button>
                                </div>
                                <div className="col" style={{"textAlign":"right"}}>
                                    <Link to="/" className="btn btn-danger w-25 fs-5">Back</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    </div>
  )
}

export default Create