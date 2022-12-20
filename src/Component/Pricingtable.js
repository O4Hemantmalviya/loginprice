import React from "react";
import "./Pricingtable.css";

const Pricingtable = () => {
  return (
    <div>
      <div className="main">
        <h2>Choose your Plan</h2>
        <div className="price-row">
          <div className="price-col">
            <div>Starter</div>
            <h3>19$ / month</h3>
            <ul>
              <li>1 website</li>
              <li>10 GB disk space</li>
              <li>Free Email address</li>
              <li>Basic Web builder</li>
              <li>No SSL certificated</li>
              <li>Limited support</li>
            </ul>
            <button className="addtocard">Add to card</button>
          </div>
          <div className="price-col">
            <div>Starter</div>
            <h3>19$ / month</h3>
            <ul>
              <li>1 website</li>
              <li>10 GB disk space</li>
              <li>Free Email address</li>
              <li>Basic Web builder</li>
              <li>No SSL certificated</li>
              <li>Limited support</li>
            </ul>
            <button className="addtocard">Add to card</button>
          </div>
          <div className="price-col">
            <div>Starter</div>
            <h3>19$ / month</h3>
            <ul>
              <li>1 website</li>
              <li>10 GB disk space</li>
              <li>Free Email address</li>
              <li>Basic Web builder</li>
              <li>No SSL certificated</li>
              <li>Limited support</li>
            </ul>
            <button className="addtocard">Add to card</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pricingtable;
