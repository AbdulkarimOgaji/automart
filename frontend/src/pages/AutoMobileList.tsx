import SingleAutoMobile from "../components/SingleAutoMobile";

const AutoMobileList = () => {
  return (
    <div className="navbar-height my-linear-grad border">
      <h1 className="ms-md-5 p-md-5 m-2 p-2">Total 4,762,021 vehicles</h1>
      <div className="d-flex container-fluid justify-content-around flex-wrap my-0 mx-auto">
        <SingleAutoMobile />
        <SingleAutoMobile />
        <SingleAutoMobile />
        <SingleAutoMobile />
        <SingleAutoMobile />
        <SingleAutoMobile />
        <SingleAutoMobile />
        <SingleAutoMobile />
        
      </div>
    </div>
  );
};

export default AutoMobileList;
