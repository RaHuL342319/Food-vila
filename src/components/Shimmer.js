const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {new Array(15).fill(1).map((data, index) => {
        return (
          <div
            className="card"
            style={{ backgroundColor: "rgb(220,224,224)", height: "290px" }}
            key={index}
          >
            <div
              className="card-img"
              style={{ backgroundColor: "rgb(220,220,220)" }}
            ></div>
          </div>
        );
      })}
    </div>

    //
  );
};

export default Shimmer;
