export default function BabeboxInnerItems({data}) {
    const {image,heading,para_1,para_2} = data
    return (
        <div className="components-block-items">
            <div className="components-block-items-content">
                <img src={image} alt="image"/>
                <h3>{heading}</h3>
                <div className="components-para-box">
                    <p>{para_1}</p>
                    <p>{para_2}</p>
                </div>
            </div>
        </div>
    )
}