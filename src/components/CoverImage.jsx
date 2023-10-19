export const CoverImage = ({ coverImage, coverALT }) => {
    return (
        <div className="album-cover">
            <img className="cover-image" src={coverImage} alt={coverALT}></img>
            <div className="icons">
                <img className="heart icon" src="/src/assets/icons/heart.svg"></img>
                <img className="play icon" src="/src/assets/icons/play.svg"></img>
                <img className="dots icon" src="/src/assets/icons/dots.svg"></img>
            </div>
        </div>
    )

}
CoverImage.defaultProps = {
    components: "Components are missing",
};