import React from "react";

export const Card = ({ title, description, age }) => {
  return (
    <>
      <div
        className="card g-0 p-2 bg-light"
        style={{ maxWidth: "18rem", maxHeight: "20rem", margin: "10px" }}
      >
        <div className="bg-success rounded-top">
          <h5 className="card-title text-center text-white align-center">
            {title}
          </h5>
        </div>
        <div className="card-body text-success-emphasis">
          <p className="card-text mb-4">Descripcion: {description}</p>
          <p className="card-text">Edad: {age}</p>
        </div>
      </div>
    </>
  );
};
