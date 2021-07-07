import React from "react";


function Listitems(props) {

  return (
    <div className="resultItemDiv">
      <div className="imgDiv">
        <img alt={props.title} src={props.image} />
      </div>
      <h2>{props.title}</h2>
      <p className="subTitle">{props.subtitle}</p>
      {props.authors === undefined ? "" : <p className="author">Written by: {props.authors.join()}</p>}
      <p className="description">{!props.description ? "This Book does not have a summary available." : props.description}</p>

      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <button className="btnView">View</button></a>
    </div>
  );
}

export default Listitems;