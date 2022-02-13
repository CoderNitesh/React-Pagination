import React from "react";

const SingleTodo = ({ data }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Id: {data.id}</h5>
        <p className="card-text">
          {data.title}
        </p>
      </div>
    </div>
  );
};

export default SingleTodo;
