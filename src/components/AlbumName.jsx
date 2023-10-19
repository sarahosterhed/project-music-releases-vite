export const AlbumName = ({ albumURL, albumName }) => {

    return (
<<<<<<< HEAD
        <a href={albumURL} target="_blank">
=======
        <div>
        <a className ="album-name" target="_blank" href={albumURL} target="_blank"> 
>>>>>>> css
            {albumName}
        </a>
        </div>
    );
};

AlbumName.defaultProps = {
    components: "Components are missing",
};