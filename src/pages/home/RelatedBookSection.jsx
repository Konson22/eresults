import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Carousel from "react-elastic-carousel";
import axios from "axios";

const breakPoints = [
  { width: 0, itemsToShow: 2, itemPadding: [0, 4] },
  {
    width: 550,
    itemsToShow: 1,
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

export default function RelatedBookSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [books, setBooks] = useState([]);

  const URL = "https://www.googleapis.com/books/v1/volumes?q=";
  useEffect(() => {
    const controller = new AbortController();
    let isMuted = true;
    async function fetchBooks() {
      setIsLoading(true);
      try {
        const results = await axios(`${URL}education`).then((res) => res);
        if (isMuted) {
          setBooks(
            results.data.items.filter((item) => item.accessInfo.pdf.isAvailable)
          );
        }
      } catch (error) {
        setMessage("Error Occures!");
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
    <div className="mb-6 bg-gray-100 mx-3 py-4 rounded-md shadow-sm">
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
              <div className="h-[120px] bg-white"></div>
            </div>
          ))}
        {!isLoading &&
          books.length > 0 &&
          books.map((book) => (
            <div className="w-full bg-white shadow-md rounded overflow-hidden">
              {book.volumeInfo.imageLinks && (
                <img
                  className="h-[120px]"
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt=""
                />
              )}
              <div className="p-3">
                <h3 className="text-sm line-clamp-2">
                  {book.volumeInfo.title}
                </h3>
              </div>
            </div>
          ))}
      </Carousel>
    </div>
  );
}
