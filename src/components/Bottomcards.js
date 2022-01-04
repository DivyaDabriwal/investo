import React from "react";
import "./Topcards.css";
import icon from "./assets/Stock-Exchange-256.png";

export default function Bottomcards(props) {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-sm-2">
          <div className="card text-center text-dark bg-light mb-3">
            <div className="card-body">
              <h6 className="card-title">Mutual Funds</h6>
              <i className="fas fa-hand-holding-usd fa-2x"></i>
              <p></p>
              <p className="card-text">₹{props.mutualfunds}</p>
            </div>
          </div>
        </div>

        <div className="col-sm-2">
          <div className="card text-center text-dark bg-light mb-3">
            <div className="card-body">
              <h6 className="card-title">INDIAN Stocks</h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                fill="black"
                className="bi bi-graph-up-arrow"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"
                  stroke="black"
                  strokeWidth="0.5"
                />
              </svg>
              <p></p>
              <p className="card-text">₹{props.instocks}</p>
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="card text-center text-dark bg-light mb-3">
            <div className="card-body">
              <h5 className="card-title">NPS - Tier 1</h5>
              <i className="fas fa-money-bill-wave fa-2x"></i>
              <p></p>
              <p className="card-text">₹{props.instocks}</p>
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="card text-center text-dark bg-light mb-3">
            <div className="card-body">
              <h5 className="card-title">FD</h5>
              <i className="fas fa-university fa-2x"></i>
              <p></p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-plus-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="card text-center text-dark bg-light mb-3">
            <div className="card-body">
              <h5 className="card-title">U.S STOCKS</h5>
              <img
                src={icon}
                style={{ width: "0.9cm", height: "0.9cm" }}
                alt="stocks"
              />
              <p></p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-plus-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="card text-center text-dark bg-light mb-3">
            <div className="card-body">
              <button
                className="btn btn-light my-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target=".multi-collapse"
                aria-expanded="false"
                aria-controls="multiCollapseExample1 multiCollapseExample2"
              >
                <i className="far fa-arrow-alt-circle-down fa-3x"></i>
              </button>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2">
          <div className="collapse multi-collapse" id="multiCollapseExample1">
            <div className="card text-center text-dark bg-light mb-3">
              <div className="card-body">
                <h6 className="card-title">EPF</h6>
                <i className="fas fa-briefcase fa-2x"></i>
                <p></p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="collapse multi-collapse" id="multiCollapseExample1">
            <div className="card text-center text-dark bg-light mb-3">
              <div className="card-body">
                <h6 className="card-title">PPF</h6>
                <i className="fas fa-dharmachakra fa-2x"></i>
                <p></p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="collapse multi-collapse" id="multiCollapseExample1">
            <div className="card text-center text-dark bg-light mb-3">
              <div className="card-body">
                <h6 className="card-title">Real Estate</h6>
                <i className="fas fa-building fa-2x"></i>
                <p></p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="collapse multi-collapse" id="multiCollapseExample1">
            <div className="card text-center text-dark bg-light mb-3">
              <div className="card-body">
                <h6 className="card-title">Bonds</h6>
                <img
                  alt="Bonds"
                  style={{ width: "20%", height: "20%" }}
                  src="https://cdn0.iconfinder.com/data/icons/business-341/32/Business-21-512.png"
                />
                <p></p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="collapse multi-collapse" id="multiCollapseExample1">
            <div className="card text-center text-dark bg-light mb-3">
              <div className="card-body">
                <h6 className="card-title">PMS</h6>
                <i className="fas fa-user-tie fa-2x"></i>
                <p></p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="collapse multi-collapse" id="multiCollapseExample1">
            <div className="card text-center text-dark bg-light mb-3">
              <div className="card-body">
                <h6 className="card-title">AIF</h6>
                <img
                  alt="AIF"
                  style={{ width: "20%", height: "20%" }}
                  src="https://www.madhuvan.com/wp-content/uploads/2018/01/AIF-icon.png"
                />
                <p></p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="collapse multi-collapse" id="multiCollapseExample1">
            <div className="card text-center text-dark bg-light mb-3">
              <div className="card-body">
                <h6 className="card-title">Others</h6>
                <img
                  alt="Others"
                  style={{ width: "20%", height: "20%" }}
                  src="https://cdn4.iconfinder.com/data/icons/business-products/24/product-data-file-graph-plus-chart-add-business-512.png"
                />
                <p></p>
                <p className="card-text">₹{props.others}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
