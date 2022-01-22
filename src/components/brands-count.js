export default function BrandsCount({data}){
    const {image,BtnLink} = data
    return(
        <li><a href={BtnLink}><img src={image} alt="image"/></a></li>
    )
}