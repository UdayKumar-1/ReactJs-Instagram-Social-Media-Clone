import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchSliceActions } from "../../store/SearchItems";
import SearchedItems from "./SearchedItems";
import InstagramSidebarLogo from "./InstagramSidebarLogo";
import SearchMiddlePage from "./SearchMiddlePage";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const dispatch = useDispatch();
  const searchItems = useSelector((store) => store.switchItems);
  const nav = useNavigate();
  const [searchItemsValues, setSearchItemvalues] = useState([]);
  const [searchFilterData, setSearchFilterData] = useState([]);
  useEffect(() => {
    setSearchFilterData(searchItems);
  }, []);
  const handleNavigateMessage = () => {
    nav("/messages");
  };
  const HandleEnter = (val) => {
    const searchedValue = searchFilterData.filter((item) =>
      item.name.toLowerCase().includes(val.toLowerCase())
    );
    setSearchItemvalues(searchedValue);
  };
  return (
    <>
      <div className="searchBarMain d-flex flex-column flex-shrink-0 p-3  sidebar">
        <InstagramSidebarLogo />
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search your Friend here"
            className="searchInput"
            onChange={(e) => HandleEnter(e.target.value)}
          />
        </div>
        {searchItemsValues.length ==0 && (
          <p className="NoSearchUser">
            There is no User <br />
            &nbsp;on This Name
          </p>
        )}
        {searchItemsValues.map((searchVal, index) => (
          <div key={index} className="SearchedItem">
            {searchVal.image && (
              <img src={searchVal.image} className="SearchedItemImage" />
            )}
            <div
              className="headingDescMain"
              onClick={() => handleNavigateMessage()}
            >
              {searchVal.name && (
                <span className="SearchName">
                  <b>{searchVal.name}</b>
                </span>
              )}
              {searchVal.name && (
                <span className="searchDesc">{searchVal.Bio}</span>
              )}
            </div>
          </div>
        ))}
      </div>
      <SearchMiddlePage />
    </>
  );
}
export default SearchBar;
