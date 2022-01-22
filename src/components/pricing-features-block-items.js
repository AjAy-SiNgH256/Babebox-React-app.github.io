export default function PricingFeaturesBlockItems ({data}) {
    const {image,para,paraAlter} = data
    return (
        <div className="pricing-features-block-items">
            <div className="pricing-features-block-items-content">
                <ul>
                    <li>
                        <div className="image-block"><img src={image} alt="icon"/></div>
                        <div className="pricing-side-block">
                            <p>{para}</p>
                            <div className="pricing-features-side-bottom-para">
                                <p>{paraAlter}</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}