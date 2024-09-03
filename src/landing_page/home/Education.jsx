import React from 'react';
function Education() {
    return ( 
    <div className="container mt-5">
        <div className="row ">
                <div className="col-6">
                    <img src="media/images/education.svg" alt="" style={{width:"90%"}}/>
                </div>
            <div className="col-6">
                <h3 className='mb-3'>Free and open market education</h3>
                <p className='text-muted'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href="" style={{textDecoration:"none"}}>varsity
                   <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
                <p className='text-muted mt-5' >TradingQ&A, the most active trading and investment community in India for all your market related queries..</p>
                <a href="" style={{textDecoration:"none"}}>TradingQ&A
                   <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
            </div>
        </div>
   </div>
     );
}

export default Education;