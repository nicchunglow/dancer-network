import React from "react";
import "./Home.css";

const Home = () => {
  return (
      <div className="Home-border">
        <div className="Home-align">
          <img src={process.env.PUBLIC_URL + "/dancer-network.png"} />
          <p>
            This web-app aims to bring the dance community together by
            connecting daners to various dance events! As this app progress, it
            hopes to connect with dancers locally, in Singapore, first before
            reaching other events in the regional countries, and hopefully the
            rest of the world, in the future. If you like the idea, do use it
            and share it with your friends!
          </p>
        </div>
      </div>
  );
};

export default Home;
