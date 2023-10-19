import { Album } from "./components/Album";
import { Header } from "./components/Header";
import data from "./data.json";



console.log(data);

export const App = () => {

  const renderAlbums = () =>
    data.albums.items.map(
      ({ id, name, external_urls, images, artists }) => (

        <section key={id}>
          <Album
            albumName={name}
            albumURL={external_urls.spotify}
            coverImage={images[0].url}
            artistName={artists}
          />
        </section>
      )
    );

  const renderContent = renderAlbums();


  return (
    <div className="App">
      <Header />

      <div className="wrapper">{renderContent}</div>
    </div>
  )
};


