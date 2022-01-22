export default function PastBoxesContent({data}) {
    const {image,subHeading,subImage,para} = data
    return (
        <div class="past-boxes-bottom-block-items">
            <div class="past-boxes-bottom-block-items-content">
                <img src={image} alt="image" />
                <h3>{subHeading}</h3>
                <p><span><img src={subImage} alt="icon" /></span>{para}</p>
            </div>
        </div>
    )
}