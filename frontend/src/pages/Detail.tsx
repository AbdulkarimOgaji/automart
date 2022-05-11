import { Automobile } from "../components/SingleAutoMobile";
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";


interface ResponseType {
  status: string;
  data: Automobile
}

const Detail = () => {
  const navigate = useNavigate()
  const [automobile, setAutomobile] = useState<null|Automobile>(null)
  
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
  }

  useEffect(() => {
    fetchData()
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
      </div>
      </div>
      
      <div className="text-center ">
        <button className="btn-links px-4 py-2 rounded-pill mb-5 border-0" onClick={viewProfile}>
          Contact Seller 
        </button>
      </div>
    </div>
  );
};

export default Detail;
