export default function PricingBottomBlockItems ({data}) {
    const {mainHeading,subHeading,heading4,image1,image1Text,image2,image2Text} = data
    return (
        <div className="pricing-bottom-block-items">
            <div className="pricing-bottom-block-items-content blue-box">
                <h2>{mainHeading}</h2>
                <h3>{subHeading}</h3>
                <h4>{heading4}</h4>
                <div className="pricing-inner-small-box">
                    <ul>
                        <li><img src={image1} alt="icon"/>{image1Text}</li>
                        <li><img src={image2} alt="icon"/>{image2Text}</li>
                    </ul>
                </div>
                <a href="#">SUBSCRIBE</a>
                <h5>Renews at $29/mo + s&h</h5>
            </div>
        </div>
    )
}