export const AlbumName = ({ albumURL, albumName }) => {

    return (
        <div>
        <a className ="album-name" href={albumURL}>
            {albumName}
        </a>
        </div>
    );
};

AlbumName.defaultProps = {
    components: "Components are missing",
};