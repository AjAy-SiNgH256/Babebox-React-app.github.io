import PricingBottomBlockItems from "./pricing-bottom-block-items";
import PricingFeaturesBlockItems from "./pricing-features-block-items";
export default function Pricing({pricingBottomBlock,pricingFeatures}){
    return(
        <div class="pricing-main-bg" id="plans" data-aos="fade-up">
        <div class="pricing-container">
            <div class="pricing-main-block">
                <div class="pricing-header">
                    <h2>Select your plan</h2>
                </div>
                <div class="pricing-mid-block">
                    <p>Choose the plan that's best for you! Got makeup overload? </p>
                    <p>Skip a month or cancel anytime. It's that Simple!</p>
                </div>
                <div class="pricing-bottom-main-box">
               {
                   pricingBottomBlock.map((presentData,index) => (
                       <PricingBottomBlockItems key={index} data={presentData}/>
                   ))
               }
                </div>
            </div>
        </div>
        <div class="bottom-container">
            <div class="pricing-features-block">
             {
                 pricingFeatures.map((presentData,index) => (
                     <PricingFeaturesBlockItems key={index} data={presentData}/>
                 ))
             }
            </div>
        </div>
    </div>
    )
}