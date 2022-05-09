

const Detail = () => {
  
  return (
    <div className="navbar-height my-linear-grad2">
      <h1 className="text-center">Nissan Verron</h1>
      <div className="text-center my-5">
        <img
          src="/images/car2.jpg"
          className="detail-img border rounded-3"
          alt="automobile"
        />
      </div>
      <div className="container">
      <div className="m-5 ps-5">
        <h5>Price: 5.6M</h5>
        <h5>Currency: Naira</h5>
        <h5>Seller Number: 08166629550</h5>
        <h5>Seller Email: abdulkarimogaji002@gmail.com</h5>
      </div>
      </div>
      
      <div className="text-center ">
        <button className="btn-links px-4 py-2 rounded-pill mb-5 border-0">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default Detail;
