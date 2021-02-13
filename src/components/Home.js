import React from "react";
import Banner from "./Banner";
import "./styles/Home.css";
import Card from "./Card";
import { homeItems } from "./data";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <div className="home__wrapper">
          {homeItems.map((item) => (
            <Card
              key={item.id}
              src={item.src}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
