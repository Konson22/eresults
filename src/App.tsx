import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./pages/home";
import ResultsPage from "./pages/ResultsPage";
import BooksPage from "./pages/BooksPage";
import LearningMaterialPage from "./pages/learningMaterial";
import PasspapersPage from "./pages/PasspapersPage";
import FriendsPage from "./pages/FriendsPage";
import AuthForms from "./pages/forms";
import { useContextApi } from "./manager/ContextProvider";


function App() {
  const { showForms, setShowForms } = useContextApi();

  return (
    <div className="text-slate-600 min-h-screen pb-[4rem]">
      <Navbar />
      {showForms && <AuthForms showForms={showForms} setShowForms={setShowForms} />}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/results' element={<ResultsPage />} />
        <Route path='/friends' element={<FriendsPage />} />
        <Route path='/pass-papers' element={<PasspapersPage />} />
        <Route path='/learning-materials' element={<LearningMaterialPage />} />
        <Route path='/books' element={<BooksPage />} />
      </Routes>
    </div>
  );
}

export default App;
