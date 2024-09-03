import React from 'react';

function Awards() {
    return ( 
<div className="container mt-5 mb-5">
     <div className="row">
               <div className="col-6 p-5">
                    <img src="media/images/largestBroker.svg" alt="" />
               </div>
               <div className="col-6 p-5 mt-3">
                <h1>Largest Stock Broker in India</h1>
            <p>2+ million TradingPal clients contribute to over 15% of all retail order volumes in india daily by tracking and investing in </p>
            <div className="row">
                <div className="col-6 ">
                  <ul>
                    <li><p> Futures and Options</p></li>
                    <li> <p> Commodity Dervatives</p> </li>
                    <li> <p> Currency Derivatives</p> </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
                    <li> <p> Stocks & IPOs</p></li>
                    <li> <p> Direct Mutual Funds</p></li>
                    <li> <p> Bonds and Govt. Securities</p></li>
                 </ul>
                </div>
                    </div>
                    <img src="media\images\pressLogos.png" alt="" style={{width:"95%"}}/>
        </div>
    </div>
 </div>
            
        
            
    );
}

export default Awards;