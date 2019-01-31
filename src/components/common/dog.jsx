import React from "react";

const Dog = props => {
  const { name } = props.breed;
  return (
    <div className="flex flex-col dog">
      <img src={props.image()} alt="" />
      <h4>{name}</h4>
    </div>
  );
};

export default Dog;
