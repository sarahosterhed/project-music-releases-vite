import { AlbumName } from './AlbumName'
import { CoverImage } from './CoverImage';
import { ArtistNames } from './ArtistNames';

export const Album = ({
    albumURL,
    albumName,
    coverImage,
    artistName
}) => {
    return (
        <div className="album">
            <CoverImage
                coverImage={coverImage}
            />
            <AlbumName
                albumName={albumName}
                albumURL={albumURL}
            />
               <ArtistNames
                artistName={artistName}
            />
        </div>
    );
};










































































































































































































