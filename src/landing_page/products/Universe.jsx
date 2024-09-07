import React from "react";
function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 ">
          <img src="media/images/smallcaseLogo.png"  />
          <p className="text-muted ">Thematic Investment Platform</p>
        </div>

        <div className="col-4 p-3 ">
          <img src="media\images\streakLogo.png" style={{width:"150px"}}/>
          <p className="text-muted mt-2 ">Algo & Strategy  Platform</p>
        </div>

        <div className="col-4 p-3  ">
          <img src="media/images/sensibullLogo.svg"style={{width:"150px"}} />
          <p className="text-muted mt-3">Options Trading Platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media\images\zerodhaFundhouse.png"style={{width:"150px"}}/>
          <p className="text-muted mt-2">Asset Management</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media\images\goldenpiLogo.png" style={{width:"150px"}}/>
          <p className="text-muted mt-3">Bonds Trading  Platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media\images\dittoLogo.png"style={{width:"150px"}} />
          <p className="text-muted ">Insurance</p>
              </div>
            <form action="">
            <button
             className="p-2  btn btn-primary  fs-5"
             style={{ width: "20%", margin: "0 auto" }}>
             Sign up now
            </button>
            </form>
      </div>
    </div>
  );
}

export default Universe;
