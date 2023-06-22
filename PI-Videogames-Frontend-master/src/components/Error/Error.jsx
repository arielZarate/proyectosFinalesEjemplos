import { useSelector } from "react-redux";

export default function Error() {
  const error = useSelector((state) => state.videogame.error);
  return (
    <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
      <h1>ERROR</h1>
      <h2>{error}</h2>
    </div>
  );
}
