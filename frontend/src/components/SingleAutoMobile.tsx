import { Link } from "react-router-dom";


const SingleAutoMobile = () => {
  return (
    <div className="rounded-3 myCard m-md-4 m-2 border">
      <img src="images/car3.jpg" className="cardImage" alt="" />
      <h3 className="text-center my-md-3 my-2">#2,000,000</h3>
      <div className="m-md-4 m-2 d-flex justify-content-between align-items-center">
        <p className="fw-bold">Model: Buggatti Veron</p>
        <Link to="/detail" className="btn-links rounded-pill py-md-2 py-1 px-md-4 px-3 ">
          View
        </Link>
      </div>
      <div className="m-md-4 m-2 d-flex justify-content-between align-items-center">
        <p className="fw-bold">Year: 2001</p>
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