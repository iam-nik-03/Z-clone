import React from "react";
function hero() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row text-center ">
        <h1 className="fs-1">Pricing</h1>
        <p className="fs-5 text-muted mt-2">
          Free equity investments and flat ₹20 intraday and F&O trades
        </p>
      </div>
      <div className="row p-5 border-top mt-5 ">
        <div className="col-4 p-5">
          <img src="media/images/pricing0.svg" alt="" />
          <h3>Free equity delivery</h3>
          <p className="text-muted fs-6">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/images/pricing20.svg" alt="" />
          <h3>Intraday and F&O trades</h3>
          <p className="text-muted fs-6">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/images/pricing0.svg" alt="" />
          <h3>Free direct MF</h3>
          <p className="text-muted fs-6">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default hero;
