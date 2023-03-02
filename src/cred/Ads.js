import React from "react";
import { Carousel } from "antd";
import adsimg1 from "../images/ads-1.jpg";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

function Ads() {
  return (
    <Carousel autoplay>
      <div className="img1">
        <img
          src={adsimg1}
          style={{ height: "300px", width: "100%", display: "block" }}
        />
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
}

export default Ads;
