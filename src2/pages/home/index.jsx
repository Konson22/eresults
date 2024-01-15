import AnimatePage from "../../components/AnimatePage";
import Header from "./Header";
import RecentlyUploadedFilesSection from "./RecentlyUploadedFilesSection";
import RelatedBookSection from "./RelatedBookSection";

export default function HomePage() {
  return (
    <AnimatePage>
      <Header />
      <RecentlyUploadedFilesSection />
      <RelatedBookSection />
    </AnimatePage>
  );
}
