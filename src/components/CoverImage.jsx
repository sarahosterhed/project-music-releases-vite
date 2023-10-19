import heartIcon from "../assets/icons/heart.svg"
import playIcon from "../assets/icons/play.svg"
import dotsIcon from "../assets/icons/dots.svg"

export const CoverImage = ({ coverImage, coverALT }) => {
    return (
        <div className="album-cover">
            <img className="cover-image" src={coverImage} alt={coverALT}></img>
            <div className="icons">
                <img className="heart icon" src={heartIcon}></img>
                <img className="play icon" src={playIcon}></img>
                <img className="dots icon" src={dotsIcon}></img>
            </div>
        </div>
    )

}
CoverImage.defaultProps = {
    components: "Components are missing",
};