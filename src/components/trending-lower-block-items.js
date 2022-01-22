export default function TrendingLowerBlockItems({data}) {
    const {image,heading,subHeading,subHeadingSpan,strikeElement,para,starImage,btnLink,btnText} = data
    return (
        <div className="trending-lower-block-items">
            <div className="trending-lower-block-items-content">
                <img src={image} alt="image"/>
                    <div className="trending-lower-block-title">
                        <h3>{heading}</h3>
                        <h3>{subHeading}{subHeadingSpan}</h3>
                    </div>
                    <div className="trending-lower-block-image-with-price">
                        <p><span><strike>{strikeElement}</strike></span>&nbsp;{para}</p>
                        <span><img src={starImage} alt="icon"/></span>
                    </div>
                    <a href={btnLink}>{btnText}</a>
            </div>
        </div>
    )
}