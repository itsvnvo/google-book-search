import React from "react";


export function Form(props) {

  return (

    <form className="formContainer">
      <input
        onChange={props.handleInputChange}
        className="formInput"
        placeholder="Search for a book"
        name="search"
        value={props.query}
      />

      <button className="formBtn" onClick={props.loadBooks} type="success">Submit</button>
    </form>
  )


}

export default Form;