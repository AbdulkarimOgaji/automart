import { Link } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

export interface Automobile {
  type: "CAR" | "MOTORCYCLE" | "TRUCK";
  model: string;
  price: string;
  sellerId: string;
  _id: string;
  imageUrl?: string;
}
interface ResponseType { 
  status: string;
}
export const imgUrl = (type: 'CAR' | 'MOTORCYCLE' | 'TRUCK' | undefined) => {
  switch (type) {
    case 'CAR':
      return '/images/car2.jpg'
    case 'MOTORCYCLE':
      return '/images/motor1.jpg'
    default:
      return '/images/truck.jpg'
  }
}

const SingleAutoMobile = ({ data }: { data: Automobile }) => {
  const userId = useAppSelector((state) => state.user.data._id);
  const token = useAppSelector((state) => state.user.accessToken);
  
  const deleteAsset = async() => {
    const resp = await fetch('http://localhost:8000/automobile?id=' + data._id, {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
    const respData: ResponseType = await resp.json()
    switch (respData.status) {
      case 'success':
        alert('deleted successfully')
        return
      case 'unauthorzed':
        alert('you are not allowed to delete this')
        return
      case 'failure':
        alert('Failed to delete')
    }
  }

  return (
    <div className="rounded-3 myCard m-md-4 m-2 border">
      <img src={imgUrl(data.type)} className="cardImage" alt="single" />
      <h3 className="text-center my-md-3 my-2"># {data.price}</h3>
      <div className="m-md-4 m-2 d-flex justify-content-between align-items-center">
        <p className="fw-bold">Model: {data.model}</p>
        <Link
          to={`/detail/${data._id}`}
          className="btn-links rounded-pill py-md-2 py-1 px-md-4 px-3 "
        >
          View
        </Link>
      </div>
      <div className="m-md-4 m-2 d-flex justify-content-between align-items-center">
        <p className="fw-bold">Type {data.type}</p>
        <div>
          <i className="bi bi-share-fill ms-4 text-primary fs-5"></i>
          <i className="bi bi-cart-fill ms-4 text-primary fs-5"></i>
          {userId === data.sellerId && (
            <button onClick={deleteAsset} className="border-0">
              <i
                onMouseOver={(e) =>
                  e.currentTarget.classList.replace("bi-trash", "bi-trash-fill")
                }
                onMouseLeave={(e) =>
                  e.currentTarget.classList.replace("bi-trash-fill", "bi-trash")
                }
                className="bi  bi-trash ms-4  text-primary fs-5"
              ></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleAutoMobile;
