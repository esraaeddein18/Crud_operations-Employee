import React,{useState,useEffect} from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
const Edit = () => {
    const { empid } = useParams();
    const[id,idchange]=useState("");
    const[name,namechange]=useState("");
    const[email,emailchange]=useState("");
    const[phone,phonechange]=useState("");
    const[active,activechange]=useState(true);
    const[validation,valchange]=useState(false);
    const navigate=useNavigate();
    const [empdata, empdatachange] = useState({});
    
    useEffect(() => {
        fetch("http://localhost:3000/employee/" +empid).then((res) => {
            return res.json();
        }).then((resp) => {
            idchange(resp.id);
            namechange(resp.name);
            emailchange(resp.email);
            phonechange(resp.phone);
            activechange(resp.isactive);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const handlesubmit=(e)=>{
      e.preventDefault();
      const empdata={id,name,email,phone,active};
      fetch("http://localhost:3000/employee/"+empid,{
        method:"PUT", headers:{"content-type":"application/json"},body:JSON.stringify(empdata)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/');
      }).catch((err)=>{
        console.log(err.message)
      })
    } 
  return (
    <div>
        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit} >
                    <div className="card" style={{"textAlign":"left"}}>
                        <div className="card-title">
                            <h2 className='px-4 mt-3 mb-0 text-center'>Employee Edit</h2>
                        </div>
                        <div className="card-body"> 
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className='fs-5 text-secondary'>ID</label>
                                        <input value={id} placeholder='ID' onChange={e=>idchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className='fs-5 text-secondary'>Name</label>
                                        <input required value={name} placeholder="Name" onMouseDown={e=>valchange(true)}
                                    onChange={e=>namechange(e.target.value)} className="form-control"></input>
                                    {name.length==0 && validation && <span className="text-danger">Enter the name</span>}
                                    
                                        <span className="text-danger">Enter the name</span>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className='fs-5 text-secondary'>Email</label>
                                        <input value={email} onChange={e=>emailchange(e.target.value)} placeholder='Email' className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className='fs-5 text-secondary'>Phone</label>
                                        <input value={phone} onChange={e=>phonechange(e.target.value)} placeholder='Phone' className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-check fs-5 text-primary">
                                         <input checked={active} onChange={e=>activechange(e.target.value)} type="checkbox" className="form-check-input"></input>
                                        <label  className="form-check-label">Is Active</label>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                       <button className="btn btn-success w-25 fs-5" style={{"textAlign":"left"}} type="submit">Save</button>
                                       <Link to="/" className="btn btn-danger w-25 fs-5" style={{"textAlign":"right"}}>Back</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
export default Edit
