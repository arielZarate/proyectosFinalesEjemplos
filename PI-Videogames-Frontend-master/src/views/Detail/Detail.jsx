import { useDispatch, useSelector } from "react-redux";
import {
  fetchVideogameById,
  deleteVideogame,
} from "../../features/videogame/videogameThunks";
import { useEffect, useState } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import parse from "html-react-parser";
import Swal from "sweetalert2";

export default function Detail() {
  const dispatch = useDispatch();
  const videogameStatus = useSelector((state) => state.videogame.status);
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchVideogameById(id));
  }, [dispatch, id]);

  const videogame = useSelector((state) => state.videogame.detail);

  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleCarouselClick = () => {
    if (!isFullscreen) {
      const carouselElement = document.getElementById(
        "videogameScreenshotsCarousel"
      );

      if (carouselElement.requestFullscreen) {
        carouselElement.requestFullscreen();
      } else if (carouselElement.mozRequestFullScreen) {
        carouselElement.mozRequestFullScreen();
      } else if (carouselElement.webkitRequestFullscreen) {
        carouselElement.webkitRequestFullscreen();
      } else if (carouselElement.msRequestFullscreen) {
        carouselElement.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(
        document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement ||
          document.msFullscreenElement
      );
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("msfullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "msfullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);

  const handleDeleteGame = () => {
    dispatch(deleteVideogame(id))
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Game Deleted",
          text: "The game has been successfully deleted",
        }).then(() => {
          navigate("/");
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while deleting the video game.",
        });
      });
  };

  return videogameStatus === "loading" ? (
    <Loading />
  ) : videogameStatus === "failed" ? (
    <Error />
  ) : videogame !== null ? (
    <div className="container card border-info my-2">
      <h2 className="text-center text-secondary mt-3">{videogame.name}</h2>
      <div className="row mt-4">
        <div className="col-12 container">
          {videogame.screenshots?.length ? (
            <div
              id="videogameScreenshotsCarousel"
              className="carousel slide"
              data-bs-ride="true"
            >
              <div className="carousel-indicators">
                {videogame.screenshots.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#videogameScreenshotsCarousel"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                    aria-current={index === 0 ? "true" : "false"}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>

              <div className="carousel-inner">
                {videogame.screenshots.map((s, i) => {
                  return (
                    <div
                      key={i}
                      className={
                        i === 0 ? "carousel-item active" : "carousel-item"
                      }
                    >
                      <img
                        src={s}
                        className="d-block w-100 img-fluid"
                        alt={i}
                        onClick={handleCarouselClick}
                      />
                    </div>
                  );
                })}
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#videogameScreenshotsCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#videogameScreenshotsCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          ) : (
            <div className="text-center">
              <img
              src={videogame.background_image || "/images/no-signal.avif"}
              alt="image"
              className="img-fluid"
            />
            </div>
          )}
        </div>
        <div className="col-12 mt-4">
          <p className="text-info">Platforms</p>
          <p className="">{videogame.platforms.join(", ")}</p>
          <p className="text-info">Genres</p>
          <p className="">{videogame.genres.join(", ")}</p>
          <p className="text-info">Release Date</p>
          <p className="">{videogame.released}</p>
          <p className="text-info">Rating</p>
          <p className="">★{videogame.rating}</p>
        </div>
        <div className="col-md-12 mt-4">
          <p className="text-info">Description</p>
          <div className="">{parse(videogame.description)}</div>
        </div>
      </div>
      <NavLink to="/" className="btn btn-outline-secondary my-2" role="button">
        Back
      </NavLink>
      {id.length === 24 ? (
        <btn className="btn btn-outline-danger my-2" onClick={handleDeleteGame}>
          Delete game
        </btn>
      ) : null}
    </div>
  ) : null;
}
