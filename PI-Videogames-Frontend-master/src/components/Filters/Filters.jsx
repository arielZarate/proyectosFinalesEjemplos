import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchGenres } from "../../features/genre/genreThunks";
import { fetchPlatforms } from "../../features/platform/platformThunks";
import { searchVideogames } from "../../features/videogame/videogameThunks";

export default function Filters() {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genre.genres);
  const platforms = useSelector((state) => state.platform.platforms);
  const [searchedName, setSearchedName] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");

  useEffect(() => {
    dispatch(fetchGenres());
    dispatch(fetchPlatforms());
  }, [dispatch]);

  function handleInputChange(e) {
    e.preventDefault();
    setSearchedName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      searchVideogames({
        name: searchedName,
        genres: selectedGenre,
        platforms: selectedPlatform,
      })
    );
  }

  return (
    <form className="container mt-3">
      <div className="row">
        <div className="col-12">
          <img
            src="images/logo-big.png"
            alt="Logo"
            style={{ height: 100 }}
            className="img-fluid"
          />
          <h3 className="text-info text-center">
            Your ultimate gaming encyclopedia.
          </h3>
        </div>
        <div className="col-12">
          <label className="form-label">Search by Name</label>
          <input
            className="form-control me-sm-2 bg-dark"
            type="search"
            placeholder="Search..."
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="my-3 col-6">
          <label className="form-label">Genre filter</label>
          <select
            className="form-select bg-info text-dark"
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="">All</option>
            {genres?.map((g, i) => (
              <option value={g.slug} key={i}>
                {g.name}
              </option>
            ))}
          </select>
        </div>
        <div className="my-3 col-6">
          <label className="form-label">Platform filter</label>
          <select
            className="form-select bg-info text-dark"
            onChange={(e) => setSelectedPlatform(e.target.value)}
          >
            <option value="">All</option>
            {platforms?.map((p, i) => (
              <option value={p.id} key={i}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
        <div className="">
          <button
            className="btn btn-outline-secondary my-3 my-sm-3"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Search / Apply filters
          </button>
        </div>
      </div>
    </form>
  );
}
