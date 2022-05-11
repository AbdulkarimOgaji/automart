

const CreateAsset = () => {
  const handleSubmit = () => {};

  return (
    <div className=" navbar-height d-flex align-items-center justify-content-center min-vh-100">
      <form
        className="bg-light p-5 text-black"
        style={{ width: "min(80%, 600px)" }}
        onSubmit={handleSubmit}
      >
        <h1 className="text-center mb-5">CreateAsset</h1>
        <div className="d-flex justify-content-between align-items-end mb-4">
          <h5>Type</h5>
          <select name="type" className="p-1" style={{ width: "70%" }}>
            <option value="CAR">CAR</option>
            <option value="MOTORCYCLE">MOTORCYCLE</option>
            <option value="TRUCK">TRUCK</option>
          </select>
        </div>
        <div className="d-flex justify-content-between align-items-end mb-4">
          <h5>Model</h5>
          <input type="text" className="p-1" style={{ width: "70%" }} />
        </div>
        <div className="d-flex justify-content-between align-items-end mb-4">
          <h5>Price</h5>
          <input type="number" className="p-1" style={{ width: "70%" }} />
        </div>
        <div className="d-flex justify-content-between align-items-end mb-4">
          <h5>Image</h5>
          <input type="file" accept="image/*" className="p-1" style={{ width: "70%" }} />
        </div>

        <div className="text-center">
          <button className="btn-links border-0 rounded-pill py-2 px-4">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAsset;
