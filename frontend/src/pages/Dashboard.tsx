import SingleAutoMobile from "../components/SingleAutoMobile";

const DashBoard = () => {
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
          <h5>Name: Abdulkarim Ogaji</h5>
          <h5>Email: abdulkarimogaji002@gmail.com</h5>
          <h5>Phone Number: 08166629550</h5>
          <div className="text-center mt-auto">
            <div className="d-flex">
              <button className="btn-links border-0 me-3 flex-fill">Buy</button>
              <button className="btn-links border-0 me-3 flex-fill">Sell</button>
              <button className="btn-links border-0 me-3 flex-fill">My Cart</button>
              <button className="btn-links border-0 me-3 flex-fill">My favourites</button>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center mb-5">My Assets</h1>
      <div className="d-flex container-fluid justify-content-around flex-wrap my-0 mx-auto">
          <SingleAutoMobile canAlter />
          <SingleAutoMobile canAlter />
          <SingleAutoMobile canAlter />
      </div>
    </div>
  );
};

export default DashBoard;
