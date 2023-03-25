import React from "react";

const EmployeeBox = ({img, name, designation}) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="justify-content-between p-md-1">
            <div className="flex-row">
              <div className="align-self-center">
                <img
                  src={img}
                  height="200px"
                  width="100%"
                />
              </div>
              <div className="mt-3">
                <h4>{name}</h4>
                <h5 className="mb-0">{designation}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeBox;
