import React from "react";

function Search(props) {
  //   const {} = props;
  return (
    <>
      <div className="search-banner"></div>
      <div className="search-container">
        <form>
          <input
            placeholder="&#xF002; Que Recherchez-vous ?"
            className="search-input"
          ></input>
          <button type="submit" className="search-button">
            Rechercher (10 résultats)
          </button>
        </form>
      </div>
    </>
  );
}

export default Search;
