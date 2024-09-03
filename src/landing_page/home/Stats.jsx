import React from 'react';

function Stats() {
    return ( 
        <div className="container p-3">
            <div className="row p-5">
                <div className="col-6 p-5">
                    <h1 className='mb-5'>Trust with confidence</h1>
                    <h4 className='fs-4'>Customer-first always</h4>
                    <p className='text-muted'>
                    That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
                    </p>
                    <h4>No spam or gimmick </h4>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h4>Do better with money</h4>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    <h4>The TradingPal universe</h4>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                </div>
                <div className="col-6">
                    <img src="media/images/ecosystem.png" alt="" style={{ width: "95%" }} />
                    <div  className='text-center '>
                        <a href="" className='mx-5' style={{textDecoration:"none"}}>Explore our products
                             <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                        <a href="" style={{textDecoration:"none"}}>Try demo
                             <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;