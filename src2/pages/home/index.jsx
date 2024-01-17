import Header from "./Header";
import RecentlyUploadedFilesSection from "./RecentlyUploadedFilesSection";
import RelatedBookSection from "./RelatedBookSection";

export default function Home() {
  return (
    <div>
      <Header />
      <RecentlyUploadedFilesSection />
      <RelatedBookSection />
    </div>
  );
}
