import React from "react";

const MovieList = ({movies}) => {

  return (
    <div>
      
      {movies?.map(({Poster, Title}) => (
        <div className="d-flex justify-content-start m-3">
          <img src={Poster} alt="" />
          <p>{Title}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
