import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="row container-fluid m-0 p-0 border">
        <div className="col-6 bg-primary p-5 ">
          <h1 className="display-3 fw-bolder p-5 text-white">
            An online Space For Selling AutoMobiles.
          </h1>
          <p className="d-flex justify-content-around text-center container">
            <a href="/" className="btn-links">Start Buying</a>
            <a href="/" className="btn-links">Start Selling</a>
          </p>
        </div>
        <div className="col-6  m-0 p-0 jombotron-img"></div>
      </div>
    </div>
  );
}

export default App;
