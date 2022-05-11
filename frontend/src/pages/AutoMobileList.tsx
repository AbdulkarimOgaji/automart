import { useState, useEffect } from "react";
import SingleAutoMobile, { Automobile } from "../components/SingleAutoMobile";

export interface ResponseType {
  status: string,
  data: Automobile[]
}

const fetchData = async() => {
  const resp = await fetch('http://localhost:8000/automobile/all?pageId=1&pageSize=10')
  const respData: ResponseType = await resp.json()
  if (respData.status === 'success') {
    return respData.data
  }
  return null
}
const AutoMobileList = () => {
  const [automobiles, setAutomobiles] = useState<null|Automobile[]>(null)

  useEffect(() => {
    fetchData().then(result => setAutomobiles(result))
  })

  return (
    <div className="navbar-height my-linear-grad border">
      <h1 className="ms-md-5 p-md-5 m-2 p-2">Total {automobiles?.length} vehicles</h1>
      <div className="d-flex container-fluid justify-content-around flex-wrap my-0 mx-auto">
        {
          automobiles && automobiles.map((d) => <SingleAutoMobile data={d} key={d._id}/>)
        }
      </div>
    </div>
  );
};

export default AutoMobileList;
