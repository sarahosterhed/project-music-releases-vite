export const CoverImage = ({ coverImage, coverALT }) => {
    return (
        <img className="cover-image" src={coverImage} alt={coverALT}></img>
    )

}
CoverImage.defaultProps = {
    components: "Components are missing",
};