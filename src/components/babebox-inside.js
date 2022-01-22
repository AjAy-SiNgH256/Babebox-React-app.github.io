import BabeboxInsideComponent from "./babebox-inside-component";
export default function BabeboxInside({babeboxInsideComponents}){
    return(
        <div className="babebox-inside-container" id="inside-box" data-aos="fade-up">
            <div className="babebox-inside-main-block">
                <div className="babebox-inside-header">
                    <h2>See what's in your BabeBox</h2>
                </div>
                <div className="babebox-outer-main-box">
                    <div className="babebox-inside-outer-bottom-block">
                        <div className="babebox-mid-block">
                            <p>…and why Babe customers love getting their</p>
                            <p>BabeBox subscription boxes every month!</p>
                        </div>
                        <div className="babebox-inside-bottom-box">
                            <ul>
                                {
                                    babeboxInsideComponents.map((activeData,index) => (
                                        <BabeboxInsideComponent key={index} data={activeData}/>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}