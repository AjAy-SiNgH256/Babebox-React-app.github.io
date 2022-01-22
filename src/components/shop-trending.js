import TrendingUpperBlockItems from "./trending-upper-block-items";
import TrendingLowerBlockItems from "./trending-lower-block-items";
export default function ShopTrending({shopUpperBlock,shopLowerBlock}){
    return(
        <div class="trending-main-bg" id="shops" data-aos="fade-up">
        <div class="trending-container">
            <div class="trending-main-block">
                <div class="trending-upper-main-block">
                    <div class="trending-upper-header">
                        <h2>Shop the Babe store</h2>
                    </div>
                    <div class="trending-upper-main-box">
                        {
                            shopUpperBlock.map((activeData,index) => (
                                <TrendingUpperBlockItems key={index} data={activeData}/>
                            ))
                        }
                    </div>
                </div>
                <div class="trending-lower-main-block">
                    <div class="trending-lower-header">
                        <div class="dual-section-box">
                            <div class="dual-section-items dual-section-items-active" data-id="babebox_favourites">
                                <p>BabeBox favorites!</p>
                            </div>
                            <div class="dual-section-items dual-white-box" data-id="whatshot_now">
                                <p>What's hot now</p>
                            </div>
                        </div>
                    </div>
                    <div class="trending-lower-main-bg trending-active" data-id="babebox_favourites">
                    <div class="trending-lower-main-box babebox-favourties">
                        {
                            shopLowerBlock.map((activeData,index) => (
                                <TrendingLowerBlockItems key={index} data={activeData}/>
                            ))
                        }
                    </div>
                </div>

                <div class="trending-lower-main-bg" data-id="whatshot_now">
                    <div class="trending-lower-main-box">
                        
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    )
}