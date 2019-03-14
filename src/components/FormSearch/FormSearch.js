import React from "react";
import "./FormSearch.scss";

const FormSearch = props => {
  return (
    <form className="search">
      <input
        className="search__field"
        type="text"
        onChange={props.change}
        value={props.text}
        placeholder="Type town..."
      />
      <button className="search__btn" onClick={props.submit}>
        Search
      </button>
    </form>
  );
};

export default FormSearch;
