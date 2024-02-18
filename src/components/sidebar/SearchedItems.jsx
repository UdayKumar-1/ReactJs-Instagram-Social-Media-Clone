import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { SearchSliceActions } from "../../store/SearchItems";
import { useNavigate } from "react-router-dom";
function SearchedItems({ searchItemsValues }) {
  console.log("SearchedItemValues in SearchedItems Comp", searchItemsValues);
  const displaySearchValues = useSelector((store) => store.SearchedItems);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const handleNavigateMessage = () => {
    nav("/messages");
  };
  const handleRemove = (name) => {
    dispatch(SearchSliceActions.removeItemFilter(name));
  };
  return (
    <>
      {searchItemsValues.length == 0 ? (
        <p className="NoSearchUser">
          There is no User <br />
          &nbsp;on This Name
        </p>
      ) : (
        <div className="SearchedItem">
          {searchItemsValues[0].image && (
            <img
              src={searchItemsValues[0].image}
              className="SearchedItemImage"
            />
          )}
          <div
            className="headingDescMain"
            onClick={() => handleNavigateMessage()}
          >
            {searchItemsValues[0].name && (
              <span className="SearchName">
                <b>{searchItemsValues[0].name}</b>
              </span>
            )}
            {searchItemsValues[0].name && (
              <span className="searchDesc">{searchItemsValues[0].Bio}</span>
            )}
          </div>
          <span>
            {
              <RxCross1
                className="searchCross"
                onClick={() => handleRemove(displaySearchValues[0].name)}
              />
            }
          </span>
        </div>
      )}
    </>
  );
}
export default SearchedItems;
