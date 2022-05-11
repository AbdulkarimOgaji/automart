import { Automobile } from "../components/SingleAutoMobile";
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import { UserState } from "../features/user/userSlice";


interface ResponseType {
  status: string;
  data: Automobile
}
interface userResponseType {
  status: string;
  data: UserState['data']
}
const Detail = () => {
  const navigate = useNavigate()
  const [automobile, setAutomobile] = useState<null|Automobile>(null)
  const [userData, setUserData] = useState<null|UserState["data"]>(null)
  
  const { automobile_id } = useParams()

  const viewProfile = () => {
    navigate('/profile/' + automobile?.sellerId)
  }
  const fetchData = async() => {
    const resp = await fetch(`http://localhost:8000/automobile/${automobile_id}`)
    const respData: ResponseType = await resp.json()
    if (respData.status === 'success') {
      setAutomobile(respData.data)
    }
    const res = await fetch(`http://localhost:8000/user/${automobile?.sellerId}`)
    const data: userResponseType = await res.json()
    if (data.status === 'success') {
      setUserData(data.data)
    }
  }

  useEffect(() => {
    fetchData().then(r => console.log(r))
    })
    
  
  return (
    <div className="navbar-height my-linear-grad2">
      <h1 className="text-center">{automobile?.model}</h1>
      <div className="text-center my-5">
        <img
          src="/images/car2.jpg"
          className="detail-img border rounded-3"
          alt="automobile"
        />
      </div>
      <div className="container">
      <div className="m-5 ps-5">
        <h5>Price: {automobile?.price}</h5>
        <h5>Currency: Naira</h5>
        <h5>Seller Number: {userData?.phoneNum}</h5>
        <h5>Seller Email: {userData?.email}</h5>
      </div>
      </div>
      
      <div className="text-center ">
        <button className="btn-links px-4 py-2 rounded-pill mb-5 border-0" onClick={viewProfile}>
          View Profile
        </button>
      </div>
    </div>
  );
};

export default Detail;
