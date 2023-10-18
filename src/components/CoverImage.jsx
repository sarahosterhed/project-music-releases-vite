export const CoverImage = ({ coverImage, coverALT }) => {
    return (
        <img src={coverImage} alt={coverALT}></img>
    )

}
CoverImage.defaultProps = {
    components: "Components are missing",
};