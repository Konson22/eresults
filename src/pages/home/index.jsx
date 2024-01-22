import Header from "./Header";
import RelatedFileSection from "./RelatedFileSection";
import RelatedOnlineBookSection from "./RelatedOnlineBookSection";
import StudentRelatedBookSection from "./StudentRelatedBookSection";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="md:px-[5%] px-2 md:my-6 md:flex">
        <div className="flex-1 md:mr-5">
          <StudentRelatedBookSection />
          <RelatedOnlineBookSection />
        </div>
        <div className="md:w-[30%]">
          <RelatedFileSection />
        </div>
      </div>
    </div>
  );
}
