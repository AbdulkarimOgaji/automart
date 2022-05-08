const HomePage = () => {
  return (
    <div className="row container-fluid m-0 p-0 border">
      <div className="col-md-6 col-12 bg-primary p-5 ">
        <h1 className="display-3 fw-bolder p-lg-5 p-md-2 text-white">
          An online Space For Selling AutoMobiles.
        </h1>
        <p className="d-flex justify-content-around text-center container">
          <a href="/" className="btn-links fs-3 rounded-pill py-2 px-4">
            Start Buying
          </a>
          <a href="/" className="btn-links fs-3 rounded-pill py-2 px-4">
            Start Selling
          </a>
        </p>
      </div>
      <div className="col-6  m-0 p-0 jombotron-img d-none d-md-block"></div>
    </div>
  );
};

export default HomePage;
