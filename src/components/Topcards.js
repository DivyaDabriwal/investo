import React from "react";
import "./Topcards.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Topcards(props) {
  const options = {
    items: 1,
    nav: true,
    rewind: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: "lightblue" }}>
      <h3 className="mx-3" style={{ color: "purple", padding: "10px" }}>
        Hola, {props.username}
      </h3>

      <div className="container">
        <OwlCarousel
          href="car"
          options={options}
          className="owl-theme"
          loop
          margin={20}
          nav
        >
          <div className="item">
            <a href="/">
              <div className="card text-center text-white bg-primary mb-3">
                <div className="card-body">
                  <h6>My Net Worth</h6>
                  <p>₹{props.netWorth}</p>
                  <p className="my-2">Last Updated: {props.updateDate} </p>
                </div>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="/">
              <div className="card text-center text-white bg-secondary mb-3">
                <div className="card-body">
                  <h6>My Investments</h6>
                  <p>₹{props.netWorth}</p>
                  <p className="my-2">Check Details</p>
                </div>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="/">
              <div className="card text-center text-white bg-success mb-3">
                <div className="card-body">
                  <h6>My Life Goals</h6>
                  <p>₹{props.netWorth}</p>
                  <p className="my-2">Shortfalls: {props.shortfall} </p>
                </div>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="/">
              <div className="card text-center text-white bg-info mb-3">
                <div className="card-body">
                  <h6>Credit Score</h6>
                  <p>{props.creditscore}/900</p>
                  <p className="my-2">Last Updated: {props.updateDate} </p>
                </div>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="/">
              <div className="card text-center text-white bg-danger mb-3">
                <div className="card-body">
                  <h6>Loans</h6>
                  <p>₹{props.loan}</p>
                  <p className="my-2">Last Updated: {props.updateDate} </p>
                </div>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="/">
              <div className="card text-center text-white bg-warning mb-3">
                <div className="card-body">
                  <h6>My Insurance</h6>
                  <p>₹{props.insurance}</p>
                  <p className="my-2">Health & Life</p>
                </div>
              </div>
            </a>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
}
