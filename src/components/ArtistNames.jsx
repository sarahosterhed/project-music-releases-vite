export const ArtistNames = ({ artistName }) => {

    return (
        <div>
            {artistName.map((artists, index) => (

                <a className="artist-name"key={artists.id} href={artists.external_urls.spotify}>{index > 0 && ', '}{artists.name}</a>
            )
            )
            }

        </div >

    );
};

ArtistNames.defaultProps = {
    components: "Components are missing",
};


