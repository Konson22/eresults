import { useRef } from "react";
import { useContextApi } from "../../manager/ContextProvider";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Carousel from "react-elastic-carousel";
import SlybusCard from "../../components/cards/SlybusCard";

const breakPoints = [
  { width: 0, itemsToShow: 2, itemPadding: [0, 3] },
  {
    width: 550,
    itemsToShow: 4,
    itemsToScroll: 1,
    itemPadding: [5, 5],
    pagination: false,
  },
  {
    width: 850,
    itemsToShow: 2,
    itemPadding: [10, 10],
  },
  { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
];

export default function SuggestedBookSection() {
  const { books } = useContextApi();
  const carouselRef = useRef();

  return (
    <div className="md:mx-0 mx-1">
      <div className="flex items-center justify-between px-3">
        <h2 className="text-xl">Suggested Books</h2>
        <div className="flex">
          <button
            className="text-2xl border rounded-md md:px-3 py-1 hover:bg-primary/50 mr-4"
            onClick={() => carouselRef.current.slidePrev()}
          >
            <FiChevronLeft />
          </button>
          <button
            className="text-2xl border rounded-md md:px-3 py-1 hover:bg-primary/50"
            onClick={() => carouselRef.current.slideNext()}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
      <div className="mt-5">
        <Carousel
          breakPoints={breakPoints}
          ref={carouselRef}
          showArrows={false}
          outerSpacing={0}
          pagination={false}
        >
          {books.length > 0 && books.map((book) => <SlybusCard book={book} />)}
        </Carousel>
      </div>
    </div>
  );
}
