const Shimmer = () => {
  return (
    <div className="flex flex-wrap pl-4">
      {new Array(15).fill(1).map((data, index) => {
        return (
          <div
            className="p-2 m-2 bg-gray-100 w-[220px] rounded-md"
            style={{ backgroundColor: "rgb(220,224,224)", height: "290px" }}
            key={index}
          >
            <img
              className="w-[200px] h-[180px] rounded"
              style={{ backgroundColor: "rgb(220,220,220)" }}
            />
          </div>
        );
      })}
    </div>

    //
  );
};

export default Shimmer;
