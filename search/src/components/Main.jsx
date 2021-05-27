import React,{useState} from 'react'
import "../App.css";
import BabyNamesList from "./BabyNamesList";
import SearchBar from "./SearchBar";
import FavouritesList from "./FavouritesList";
const Main = ({data}) => {
    const [filterText, setfilterText] = useState("");
    const [favourites, setfavourites] = useState([]);
    const filterUpdate=(e)=> {
        setfilterText(e.target.value)

      }

      const addFavourite=(id)=> {
        const newSet = favourites.concat([id]);
        setfavourites(newSet)
      }
    
      const deleteFavourite=(id) =>{
        const newList = [...favourites.slice(0, id), ...favourites.slice(id + 1)];
        setfavourites(newList)
      }
      const toSearch = filterText.length > 0;
      return (
        <div>

            <SearchBar
              filterVal={filterText}
              filterUpdate={filterUpdate}
             
            />

          <section>
            <FavouritesList
              data={data}
              favourites={favourites}
              deleteFavourite={deleteFavourite}
            />
  
            <BabyNamesList
              data={data}
              filter={filterText}
              favourites={favourites}
              addFavourite={addFavourite}
            />
            {toSearch && (
                <div className="btn-container">
              <button onClick={filterUpdate}>
                Clear Search
              </button>
              </div>
            )}
          </section>
        </div>
      );
    }


export default Main
