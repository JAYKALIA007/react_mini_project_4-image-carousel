import { useState } from "react";
import { CAROUSEL_DATA } from "./constants";
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";
const Carousel = () => {
  const [pageNumber, setPageNumber] = useState(0);
  return (
    <div className="carousel-container">
      <div className="carousel-data">
        <img
          style={{ height: "80%", width: "80%" }}
          src={CAROUSEL_DATA[pageNumber].imgUrl}
          alt="thumbnail"
        />
        <p>{CAROUSEL_DATA[pageNumber].description}</p>
      </div>
      <hr />
      <p>
        {pageNumber + 1} / {CAROUSEL_DATA.length}
      </p>
      <div className="button-container">
        <GrCaretPrevious
          style={{ visibility: pageNumber === 0 && "hidden" }}
          onClick={() => setPageNumber((prev) => prev - 1)}
        />
        <GrCaretNext
          style={{
            visibility: pageNumber >= CAROUSEL_DATA.length - 1 && "hidden"
          }}
          onClick={() => setPageNumber((prev) => prev + 1)}
        />
      </div>
    </div>
  );
};

export default Carousel;
