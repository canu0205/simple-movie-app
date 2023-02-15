import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={detail.medium_cover_image} />
          <h1>{detail.title}</h1>
          <p>Rating : {detail.rating}</p>
          <p>Runtime : {detail.runtime} minutes</p>
          <h3>Description</h3>
          <p>{detail.description_full}</p>
          <p>
            <a href={detail.url}>For more Info</a>
          </p>
        </div>
      )}
    </div>
  );
}

export default Detail;
