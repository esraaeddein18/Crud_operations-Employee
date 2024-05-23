import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Listing = () => {
    const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/employee/detail/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/employee/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:3000/employee/" + id,{method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }
    useEffect(() => {
        fetch("http://localhost:3000/employee").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
  return (
    <div className="container mb-5 py-5">
        <div className="card py-5">
            <div className="card-title">
                <h2 className='px-4 mt-3 mb-0 text-center'>Employee Listing</h2>
            </div>
            <div className="card-body mt-0">
                <div className="divbtn py-3">
                    <Link to="employee/create" className="btn btn-success w-25 fs-5">Add New (+)</Link>
                </div>
                <table className="table table-bordered">
                    <thead className="bg-dark text-white">
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Phone</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                    {empdata &&
                                empdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td><a onClick={() => { LoadEdit(item.id) }} className="btn btn-success w-25 fs-5">Edit</a>
                                            <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger w-25 fs-5">Remove</a>
                                            <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary w-25 fs-5">Details</a>
                                        </td>
                                    </tr>
                                ))
                            }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
export default Listing
