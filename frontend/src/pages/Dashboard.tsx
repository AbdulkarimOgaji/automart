import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import SingleAutoMobile, { Automobile } from "../components/SingleAutoMobile";


interface ResponseType {
  status: string;
  data: Automobile[]
}
const DashBoard = () => {
  const [automobiles, setAutomobiles] = useState<null|Automobile[]>(null)
  const user = useAppSelector(state => state.user)
  const navigate = useNavigate()

  const fetchData = async() => {
    const resp = await fetch('http://localhost:8000/automobile/user', {
      headers: {
        'Authorization': 'Bearer ' + user.accessToken
      }
    })
    const respData: ResponseType = await resp.json()
    if (respData.status === 'success') {
      setAutomobiles(respData.data)
    }
  }


  useEffect(() => {
    if (!user.data._id) {
      navigate('/login')
    }else {
      fetchData()
    }
  })
  return (
    <div className="navbar-height bg-white text-black">
      <div className="d-flex  px-5 mb-5">
        <img
          src="/images/mainpic.jpg"
          style={{
            width: 150,
            height: 150,
            objectFit: "cover",
            marginRight: 50,
          }}
          className="border"
          alt="dp"
        />
        <div className="flex-grow-1 d-flex flex-column">
          <h5>Name: {user.data.firstName} {user.data.lastName}</h5>
          <h5>Email: {user.data.email}</h5>
          <h5>Phone Number: {user.data.phoneNum}</h5>
          <div className="text-center mt-auto">
            <div className="d-flex">
              <button onClick={() => navigate('/list')} className="btn-links border-0 me-3 flex-fill">Buy</button>
              <button onClick={() => navigate('/create')} className="btn-links border-0 me-3 flex-fill">Sell</button>
              <button className="btn-links border-0 me-3 flex-fill">My Cart</button>
              <button className="btn-links border-0 me-3 flex-fill">My favourites</button>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center mb-5">My Assets</h1>
      <div className="d-flex container-fluid justify-content-around flex-wrap my-0 mx-auto">
         {
           automobiles ? automobiles.map(d => <SingleAutoMobile data={d} key={d._id} />) : <h1>No Assets Yet</h1>
         }
      </div>
    </div>
  );
};

export default DashBoard;
