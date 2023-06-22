import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Pagination from "../../components/Pagination/Pagination";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import Filters from "../../components/Filters/Filters";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchVideogames } from "../../features/videogame/videogameThunks";

export default function Home() {
  const videogames = useSelector((state) => state.videogame.videogames);
  const videogameStatus = useSelector((state) => state.videogame.status);

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 12;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  useEffect(() => {
    if (
      videogameStatus === "idle" ||
      videogameStatus === "added succeeded" ||
      videogameStatus === "game deleted"
    ) {
      dispatch(fetchVideogames());
    }
  }, [dispatch, videogameStatus]);

  const [order, setOrder] = useState("");

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <Filters setCurrentPage={setCurrentPage} setOrder={setOrder} />
        </div>
        <div className="text-center col-md-6 d-none d-md-block">
          <img
            src="/images/tachikoma.png"
            alt="landing"
            className="img-fluid"
          />
        </div>

        <div className="">
          {videogameStatus === "loading" ? (
            <Loading />
          ) : videogameStatus === "failed" ? (
            <Error />
          ) : (
            <CardsContainer
              videogames={videogames}
              startIndex={startIndex}
              endIndex={endIndex}
              setOrder={setOrder}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div>
        <div className="col-12">
          <Pagination
            currentPage={currentPage}
            itemsPerPage={ITEMS_PER_PAGE}
            totalItems={videogames.length}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  );
}
