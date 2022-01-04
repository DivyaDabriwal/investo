import React from "react";

export default function Actions() {
  return (
    <div className="container">
      <h2>Actions</h2>
      <div className="row">
        <div className="card mx-2 w-25 mb-3" style={{ maxWidth: "540px;" }}>
          <div className="row g-0">
            <div className="col-md-4 my-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                fill="currentColor"
                className="bi bi-exclamation-triangle mx-3 my-5"
                viewBox="0 0 16 16"
              >
                <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
                <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
              </svg>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  US stocks 2 in 1 account creation pending
                </h5>
                <p className="card-text">
                  Click here to complete account creation process
                </p>
                <a href="/" className="btn btn-primary">
                  Act now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-25 mb-3 mx-5" style={{ maxWidth: "540px;" }}>
          <div className="row g-0">
            <div className="col-md-4 my-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                fill="currentColor"
                className="bi bi-circle mx-3 my-5"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              </svg>
            </div>
            <div className="col-md-8">
              <div className="card-body my-5">
                <h5 className="card-title">No Actions</h5>
                <p className="card-text">
                  No pending action items available at this moment.
                </p>
                {/* <a  href="/" className="btn btn-primary">
                  Go somewhere
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
