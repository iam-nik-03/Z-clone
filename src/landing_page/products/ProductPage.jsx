import React from 'react';
import Hero from '../products/Hero';
import LeftSection from '../products/LeftSection';
import RightSection from '../products/RighSection';
import Universe from './Universe';
function ProductPage() {
    return ( 
        <div>
            <Hero />
            <LeftSection
            imageURL="media/images/kite.png"
            productName="Kite"
            productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
            tryDemo=""
            learnMore=""
            googlePlay=""
            appStore=""/>
            <RightSection />
            <LeftSection
            imageURL="media/images/coin.png"
            productName="Coin"
            productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
            tryDemo=""
            learnMore=""
            googlePlay=""
                appStore="" />
            <RightSection />
            
                <LeftSection
            imageURL="media/images/varsity.png"
            productName="Varsity"
            productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
            tryDemo=""
            learnMore=""
            googlePlay=""
            appStore="" />
            
            <Universe/>
        </div>
     );
}

export default ProductPage;