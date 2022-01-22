import PastBoxesContent from "./past-boxes-content";
export default function PastBoxes({pastBoxes}){
    return(
        <div class="past-boxes-main-bg" id="past-boxes" data-aos="fade-up">
            <div class="past-boxes-container">
                <div class="past-boxes-main-block" >
                    <img class="bg-big-image" src="images/Hand-with-Box_28a5b86b-0650-4851-93c8-d906a4b4d6e4.png"
                        alt="image"/>
                    <div class="past-boxes-header">
                        <h2>Past boxes</h2>
                    </div>
                    <div class="past-boxes-mid-block">
                        <p>Check out our unique beauty goodies that</p>
                        <p>we've featured in our past boxes.</p>
                    </div>
                    <div class="past-boxes-bottom-main-block">
                        {
                            pastBoxes.map((activeData,index) => (
                                <PastBoxesContent key={index} data={activeData}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}