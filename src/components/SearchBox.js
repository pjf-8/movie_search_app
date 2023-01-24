import React from "react";
import { BsSearch } from "react-icons/bs";

const Searchbox = (props) => {
  return (
    <div className={"col col-sm-4"}>
      <form className={"example"}>
        <input
          type="text"
          placeholder="Search:"
          value={props.searchValue}
          className={""}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            props.setSearchValue(e.currentTarget.previousSibling.value);
          }}
        >
          <BsSearch size="1.3rem" />
        </button>
      </form>
    </div>
  );
};

export default Searchbox;
