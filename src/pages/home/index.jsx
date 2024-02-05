import Footer from "../../components/Footer";
import BookSection from "./BookSection";
import HeaderSection from "./HeaderSection";
import PatnerSection from "./PatnerSection";
import RentlyUploadedFiles from "./RentlyUploadedFiles";
import SuggestedBookSection from "./SuggestedBookSection";

export default function HomePage() {
  return (
    <div>
      <HeaderSection />
      <div className="md:flex md:px-[5%] mt-8">
        <div className="flex-1 md:mr-8">
          <SuggestedBookSection />
          <BookSection />
        </div>
        <RentlyUploadedFiles />
      </div>
      <PatnerSection />
      <Footer />
    </div>
  );
}
