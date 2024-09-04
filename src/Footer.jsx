import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logo.svg" alt="" style={{ width: "40%" }} />{" "}
            <br />
            <br />
            <p className=" fs-9 fw-bold text-muted">
              {" "}
              &copy; Since 2024 , TradingPal Broking Ltd.
            </p>
          </div>
          <div className=" link col">
            <p>Company</p>
            <a href="">About </a> <br />
            <a href="">Products</a> <br />
            <a href="">Pricing</a><br />
            <a href="">Referral programme</a><br />
            <a href="">Careers</a> <br />
            <a href="">Zerodha.tech</a><br />
            <a href="">Press & media</a><br />
            <a href="">Zerodha Cares (CSR) </a>
            <br />
          </div>
          <div className=" link col">
            <p>Support</p>
            <a href=""> Contact us</a> <br />
            <a href=""> Support portal</a> <br />
            <a href=""> Z-Connect blog</a> <br />
            <a href=""> List of charges</a> <br />
            <a href=""> Downloads & resources</a> <br />
          </div>
          <div className=" link col">
            <p>Account</p>
            <a href=""> Open an account</a> <br />
            <a href=""> Fund transfer</a> <br />
          </div>
        </div>
        <div className="mt-5 fs-8 text-small text-muted">
          <p className="">
            TradingPal Broking Ltd.: Member of NSE, BSE & MCX - SEBI
            Registration no.: INZ000031633 CDSL/NSDL: Depository services
            through TradingPal Broking Ltd. - SEBI Registration no.:
            IN-DP-431-2019 Commodity Trading through TradingPal Commodities Pvt.
            Ltd. MCX: 46025; NSE-50001 - SEBI Registration no.: INZ000038238
            Registered Address: TradingPal Broking Ltd., #153/154, 4th Cross,
            Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
            Bengaluru - 560078, Karnataka, India. For any complaints pertaining
            to securities broking please write to complaints@zerodha.com, for DP
            related to dp@zerodha.com. Please ensure you carefully read the Risk
            Disclosure Document as prescribed by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            <a href="">Smart Online Dispute Resolution </a> |{" "}
            <a href=""> Grievances Redressal Mechanism</a>
          </p>

          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of TradingPal and offering such services, please{" "}
            <a href="">create a ticket here.</a>
          </p>
          <div className="text-center footer-graveyard-links d-block">
            <ul>
              <li>
                <a href="https://nseindia.com">NSE</a>
              </li>
              <li>
                <a href="https://www.bseindia.com/">BSE</a>
              </li>
              <li>
                <a href="https://www.mcxindia.com/">MCX</a>
              </li>
              <li>
                <a href="https://zerodha.com/terms-and-conditions/">
                  Terms &amp; conditions
                </a>
              </li>
              <li>
                <a href="https://zerodha.com/policies-and-procedures/">
                  Policies &amp; procedures
                </a>
              </li>
              <li>
                <a href="https://zerodha.com/privacy-policy/">Privacy policy</a>
              </li>
              <li>
                <a href="https://zerodha.com/disclosure/">Disclosure</a>
              </li>
              <li>
                <a href="https://zerodha.com/investor-attention/">
                  For investor's attention
                </a>
              </li>
              <li>
                <a href="https://zerodha.com/tos/investor-charter/">
                  Investor charter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
