export const ArtistNames = ({ artistName }) => {

    return (
        <div>
            {artistName.map((artists, index) => (

                <span key={artists.id}>
                    {index > 0 ? (index === artistName.length - 1 ? ' & ' : ', ') : ''}
                    <a target="_blank" href={artists.external_urls.spotify}>
                        {artists.name}
                    </a>

                </span>

            ))}

        </div >

    );
};

ArtistNames.defaultProps = {
    components: "Components are missing",
};


