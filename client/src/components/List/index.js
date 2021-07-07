import React from "react";


function List(props) {
  return (
    <div className="List">
      {props.children}
    </div>
  );
}

export default List;