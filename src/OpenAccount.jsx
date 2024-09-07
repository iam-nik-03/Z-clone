import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <h2 className="mt-5">Open a TradingPal account</h2>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2  btn btn-primary mt-3 fs-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
