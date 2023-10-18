export const AlbumName = ({ albumURL, albumName }) => {

    return (
        <a href={albumURL}>
            {albumName}
        </a>
    );
};

AlbumName.defaultProps = {
    components: "Components are missing",
};