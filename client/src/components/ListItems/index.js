import React from "react";

function Listitems(props) {

  console.log("These are props: ", props)

  return (
    <div cardcard>
      <div class="row no-gutters">
        <div class="col-auto">
          <img alt={props.title} src={props.image} />
        </div>
        <div class="col">
        <div class="card-block px-2">
        <h2  class="card-title">Title: {props.title}</h2>
        {props.authors === undefined ? "" : <p class="card-text">Written by: {props.authors.join()}</p>}
        <p>Description: {props.description}</p>

        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <button>View</button></a>
        <button onClick={() => props.saveBook(props.bookId)}>Save</button>
        </div>
        </div>
      </div>
    </div>

  );
}

export default Listitems;