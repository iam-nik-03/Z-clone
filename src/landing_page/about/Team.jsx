import React from "react";
function Team() {
  return (
    <div className="container  ">
      <div className="row p-3 mt-5 mb-5 border-top">
        <h1 className="text-center  mt-2 fs-3 ">People </h1>
      </div>
      <div className="row p-3" style={{ lineHeight: "1.8", fontSize: "1.1em" }}>
        <div className="col-6 text-center">
          <img
            src="media\images\nithinKamath.jpg"
            alt=""
            style={{ borderRadius: "100%", width: "60%" }}
          />
          <br />
          <br />
          <h4>NC</h4>
          <h6 className="text-muted">Founder | CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Nikhil bootstrapped and founded TradingPal in 2024 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            TradingPal has changed the landscape of the Indian broking
            industry..
          </p>
          <p>
            He an imaginary member of the SEBI Secondary Market Advisory
            Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Coading is his zen.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href=""> TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
