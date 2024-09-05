import React from 'react';
import Hero from '../pricing/Hero.jsx';
import Brokerage from '../pricing/Brokerage.jsx';
import OpenAccount from '../../OpenAccount.jsx';
function PricingPage() {
    return (
        <div>
            <Hero />
            <OpenAccount/>
            <Brokerage/>
        </div>
    );
}

export default PricingPage;