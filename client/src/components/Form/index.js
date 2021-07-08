import React from "react";


export function Form(props) {

  return (
<div style={{ height: 200, clear: "both", paddingTop: 0, textAlign: "center", backgroundColor: "gray" }}
      className="formContainer">
    <form>
      <input
        onChange={props.handleInputChange}
        className="formInput"
        placeholder="Search for a book"
        name="search"
        value={props.query}
      />

      <button className="formBtn" onClick={props.loadBooks} type="success">Submit</button>
    </form>
</div>
  )


}

export default Form;