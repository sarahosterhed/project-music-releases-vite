export const AlbumName = ({ albumURL, albumName }) => {

    return (
        <a href={albumURL} target="_blank">
            {albumName}
        </a>
    );
};

AlbumName.defaultProps = {
    components: "Components are missing",
};