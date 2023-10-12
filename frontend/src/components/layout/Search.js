import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <form method="post" id="search_form-one" onSubmit={searchHandler}>
      <div className="hero-search-form search-form-style-one">
        <input
          type="text"
          placeholder="Bạn tìm gì hôm nay ..."
          className="search-field"
          style={{ width: "465px", height: "49px", borderRadius: "0", float: "right" }}
          onChange={(e) => setKeyword(e.target.value)}
        />
          <button type="submit" className="search-submit" style={{ width: "90px", height: "44px", borderRadius: "0" }}>
            <i className="fas fa-search"></i> 
          </button>
      </div>
    </form>
  );
  
};

export default Search;
