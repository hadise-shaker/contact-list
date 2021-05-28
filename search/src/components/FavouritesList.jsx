
  import React from 'react'
  import Name from "./Name"
  const FavouritesList = ({ favourites, data, deleteFavourite }) => {
    const Favourites = favourites.length > 0;
    const favList = favourites.map((fav, i) => {
      return (
        <Name
          id={i}
          key={i}
          info={data[fav]}
          handleFavourite={(id) => deleteFavourite(id)}
        />

      );
     
    });
    return (
      <div className="favourites">
        <h4>
          {Favourites ? "Your Favourites List" : "Click on a name to set in yours Favourites List.."}
        </h4>
        <ul>{favList}</ul>
      </div>
    );
  };
  
  export default FavouritesList
  