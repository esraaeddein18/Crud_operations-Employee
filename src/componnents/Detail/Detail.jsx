import {useEffect,useState} from 'react'
import { Link, useParams } from 'react-router-dom'

const Detail = () => {
    const { empid } = useParams();
    const [empdata,empdatachange] = useState({});
    useEffect(() => {
        fetch("http://localhost:3000/employee/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
 
  return (
    <div>
       <div className="container">
            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h2 className='px-4 mt-3 text-center'>Employee Create</h2>
                </div>
                <div className="card-body mt-0"></div>
                {empdata &&<div>
                        <h2>The Employee name is : <b>name{empdata.name}</b>id{empdata.id}</h2>
                        <h3>Contact Details</h3>
                        <h5>Email is : email{empdata.email}</h5>
                        <h5>Phone is : phone{empdata.phone}</h5>
                        <Link className="btn btn-danger w-25 fs-5" style={{"textAlign":"right"}} to="/">Back to Listing</Link>
                    </div>
}
                 </div>
                
            </div>
    </div >
)
}
export default Detail
