import Card from "../Card/Card";
import { useDispatch } from "react-redux";
import {
  sortByName,
  sortByRating,
  filterByOrigin,
} from "../../features/videogame/videogameSlice";

export default function CardsContainer({
  videogames,
  startIndex,
  endIndex,
  setOrder,
  setCurrentPage,
}) {
  const dispatch = useDispatch();
  
  const handleSort = (e) => {
    e.preventDefault();
    const selectedValue = e.target.value;
    if (
      selectedValue === "a-z" ||
      selectedValue === "z-a" ||
      selectedValue === "default"
    ) {
      dispatch(sortByName(selectedValue));
      setOrder(selectedValue);
    } else if (selectedValue === "best" || selectedValue === "worst") {
      dispatch(sortByRating(selectedValue));
      setOrder(selectedValue);
    }
    setCurrentPage(1);
  };

  function handleFilterByOrigin(e) {
    dispatch(filterByOrigin(e.target.value));
  }

  
  return (
    <div className="container">
      <div className="row">
        <div className="my-3 col-6">
          <label htmlFor="sort">Sort</label>
          <select
            id="sort"
            defaultValue="default"
            className="form-select bg-info text-dark"
            onChange={(e) => handleSort(e)}
          >
            <option value="default">Default</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
            <option value="best">Highest Rating</option>
            <option value="worst">Lowest Rating</option>
          </select>
        </div>
        <div className="my-3 col-6">
          <label htmlFor="origin filter">Origin</label>
          <select
            id="origin filter"
            defaultValue="all videogames"
            className="form-select bg-info text-dark"
            onChange={(e) => handleFilterByOrigin(e)}
          >
            <option value="all videogames">All</option>
            <option value="created">Added by the community</option>
            <option value="api">Official games</option>
          </select>
        </div>
        

        {videogames.length ? (
          videogames.slice(startIndex, endIndex).map((videogame, idx) => {
            return (
              <div key={idx} className="col-sm-6 col-md-4 col-lg-3">
                <Card
                  id={videogame.id}
                  name={videogame.name}
                  background_image={videogame.background_image}
                  genres={videogame.genres}
                  rating={videogame.rating}
                  short_screenshots={videogame.short_screenshots}
                />
              </div>
            );
          })
        ) : (
          <h1 className="text-center">Not games found</h1>
        )}
      </div>
    </div>
  );
}
