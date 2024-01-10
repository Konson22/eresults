import Header from "./Header";
import RecentlyUploadedFilesSection from "./RecentlyUploadedFilesSection";
import RelatedBookSection from "./RelatedBookSection";

export default function HomePage() {
  return (
    <div>
      <Header />
      <RecentlyUploadedFilesSection />
      <RelatedBookSection />
    </div>
  );
}
