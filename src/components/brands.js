import BrandsCount from "./brands-count"
export default function Brands ({brands}) {
    return(
        <div className="brand-main-bg">
            <div className="brand-container">
                <marquee direction = 'left' scrollamount="12">
                    <div className="brand-main-block">
                        <ul>
                        {
                            brands.map((activeData,index) => (
                                <BrandsCount key={index} data={activeData}/>
                            ))
                        }
                        </ul>
                    </div>
                </marquee>
            </div>
        </div>
    )
}