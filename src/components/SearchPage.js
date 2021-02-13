import React from "react";
import "./styles/SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";
import { items } from "./data";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>65 stays . 20 august to 25 august . 3 guest</p>
        <h1>Stays Nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of Place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and Beds</Button>
        <Button variant="outlined">More Filters</Button>
      </div>

      {items.map((item) => (
        <SearchResult
          img={item.imgUrl}
          location={item.location}
          title={item.title}
          description={item.description}
          star={item.star}
          price={item.price}
          total={item.total}
        />
      ))}
    </div>
  );
}

export default SearchPage;
