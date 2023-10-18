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
        <div>
            <AlbumName
                albumName={albumName}
                albumURL={albumURL}
            />
            <CoverImage
                coverImage={coverImage}
            />

            <ArtistNames
                artistName={artistName}
            />
        </div>
    );
};










































































































































































































