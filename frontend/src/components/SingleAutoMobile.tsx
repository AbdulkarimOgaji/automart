import { Link } from "react-router-dom";

export interface Automobile {
  type: 'CAR' | 'MOTORCYCLE' | 'TRUCK';
  model: string;
  price: string;
  sellerId: string;
  _id: string
  imageUrl?: string;
}

const SingleAutoMobile = ({ data }: { data: Automobile}) => {
  return (
    <div className="rounded-3 myCard m-md-4 m-2 border">
      <img src="/images/car3.jpg" className="cardImage" alt="single" />
      <h3 className="text-center my-md-3 my-2"># {data.price}</h3>
      <div className="m-md-4 m-2 d-flex justify-content-between align-items-center">
        <p className="fw-bold">Model: {data.model}</p>
        <Link to={`/detail/${data._id}`} className="btn-links rounded-pill py-md-2 py-1 px-md-4 px-3 ">
          View
        </Link>
      </div>
      <div className="m-md-4 m-2 d-flex justify-content-between align-items-center">
        <p className="fw-bold">Type {data.type}</p>
        <div>
          <i className="bi bi-share-fill ms-4 text-primary fs-5"></i>
          <i className="bi bi-cart-fill ms-4 text-primary fs-5"></i>
          <i className="bi bi-star-fill ms-4 text-primary fs-5"></i>
        </div>
      </div>
    </div>
  );
};

export default SingleAutoMobile;