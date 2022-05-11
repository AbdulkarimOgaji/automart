import SingleAutoMobile, { Automobile } from "../components/SingleAutoMobile";
import { useParams } from "react-router-dom";
import { UserState } from "../features/user/userSlice";
import { useState } from 'react'

interface userResponseType {
    status: string;
    data: UserState['data']
  }
 interface ResponseType {
    status: string,
    data: Automobile[]
  }
const Profile = () => {
    const [automobiles, setAutomobiles] = useState<null|Automobile[]>(null)
  const [userData, setUserData] = useState<null|UserState["data"]>(null)
    const { id } = useParams()
    const fetchData = async() => {
        const resp = await fetch(`http://localhost:8000/user/${id}`)
        const respData: userResponseType = await resp.json()
        if (respData.status === "success") {
            setUserData(respData.data)
            const res = await fetch(`http://localhost:8000/automobile/all`)
            const resData: ResponseType = await res.json()
            if (resData.status === 'success') {
                const data = resData.data.filter(d => d.sellerId === userData?._id)
                setAutomobiles(data)
            }
        }
    }
    fetchData().then(r => console.log("Fetched"))
  return (
    <div className="navbar-height bg-white text-black">
      <div className="d-flex  px-5 mb-5">
        <img
          src="/images/default.png"
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
          <h5>Name: {userData?.firstName} {userData?.lastName}</h5>
          <h5>Email: {userData?.email}</h5>
          <h5>Phone Number: {userData?.phoneNum}</h5>
        </div>
      </div>
      <h1 className="text-center mb-5">{userData?.firstName}'s Assets</h1>
      <div className="d-flex container-fluid justify-content-around flex-wrap my-0 mx-auto">
          {
              automobiles && automobiles.map(d => <SingleAutoMobile data={d} key={d._id} />)
          }
      </div>
    </div>
  );
};

export default Profile;
