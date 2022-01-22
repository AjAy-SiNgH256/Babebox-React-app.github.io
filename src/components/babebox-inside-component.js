export default function BabeboxInsideComponent({data}) {
    const {image,heading,sideBottomPara} = data
    return (
        <li><img src={image} alt="icon" />
            <div className="side-content">
                <p>{heading}</p>
                <div className="side-bottom-para">
                    <p><span>{sideBottomPara}</span></p>
                </div>
            </div>
        </li>
    )
}