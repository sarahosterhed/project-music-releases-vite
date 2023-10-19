export const AlbumName = ({ albumURL, albumName }) => {

    return (
        <div>
        <a className ="album-name" target="_blank" href={albumURL}> 
            {albumName}
        </a>
        </div>
    );
};

AlbumName.defaultProps = {
    components: "Components are missing",
};