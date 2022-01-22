export default function TrendingUpperBlockItems({data}) {
    const {image,para} = data
    return (
        <div className="trending-upper-block-items">
            <div className="trending-upper-block-items-content">
                <img src={image} alt="icon"/>
                <p>{para}</p>
            </div>
        </div>
    )
}