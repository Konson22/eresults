import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Carousel from "react-elastic-carousel";
import axiosInstance from "../../hooks/useAxios";
import { FaDownload } from "react-icons/fa";

const breakPoints = [
  { width: 0, itemsToShow: 2, itemPadding: [0, 4] },
  {
    width: 550,
    itemsToShow: 3,
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

export default function StudentRelatedBookSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    let isMuted = true;
    async function fetchBooks() {
      setIsLoading(true);
      try {
        const results = await axiosInstance("/books").then((res) => res);
        if (isMuted) {
          setBooks(results.data);
        }
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }

    fetchBooks();

    return () => {
      controller.abort();
      isMuted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const carouselRef = useRef();

  return (
    <div className="flex-1 bg-white py-4 rounded-md border">
      <div className="flex items-center justify-between px-4 mb-5">
        <h2 className="text-xl">Related Books</h2>
        <div className="flex items-center">
          <button
            className="bg-white rounded-full text-xl p-1 mr-3"
            onClick={() => carouselRef.current.slidePrev()}
          >
            <FiChevronLeft />
          </button>
          <button
            className="bg-white rounded-full text-xl p-1"
            onClick={() => carouselRef.current.slideNext()}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
      <Carousel
        className="overflow-hidde flex-1 z-20"
        breakPoints={breakPoints}
        ref={carouselRef}
        showArrows={false}
        outerSpacing={0}
        pagination={false}
      >
        {isLoading &&
          [...new Array(5)].map(() => (
            <div className="w-full">
              <div className="md:h-[160px] h-[140px] bg-white"></div>
            </div>
          ))}
        {!isLoading &&
          books.length > 0 &&
          books.map((book) => (
            <div className="border shadow">
              <img
                className="md:h-[170px] h-[120px]"
                src={process.env.REACT_APP_API + book.coverImage}
                alt=""
              />
              <div className="md:px-4 px-2 py-3">
                <p className="md:text-xl line-clamp-1">{book.subject}</p>
                <div className="flex items-center justify-between md:my-3">
                  <span className="">{book.grade}</span>
                  <button className="flex items-center md:px-4 md:py-1 rounded md:bg-green-400 md:text-white text-green-400">
                    <FaDownload className="mr-2" />
                    <span className="md:block hidden">Download</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
      </Carousel>
      <button className="border border-green-500 px-4 py-1 mx-auto block mt-5 rounded-md">
        View All Books
      </button>
    </div>
  );
}
