import BabeboxInnerItems from "./babebox-inner-components";
export default function BabeboxComponents({ babeboxInnerContent }){
    return(
        <div className="components-container" data-aos="fade-up" id="working">
            <div className="components-main-block">
                <div className="components-header">
                    <h2>How BabeBox works</h2>
                </div>
                <div className="components-box">
                    {
                        babeboxInnerContent.map((presentData,index) => (
                           <BabeboxInnerItems key={index} data={presentData}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}