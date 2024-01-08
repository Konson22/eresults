import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./pages/home";
import ResultsPage from "./pages/ResultsPage";
import LearningMaterialPage from "./pages/learningMaterial";
import PasspapersPage from "./pages/PasspapersPage";
import FriendsPage from "./pages/FriendsPage";
import AuthForms from "./pages/forms";
import { useContextApi } from "./manager/ContextProvider";
import { AnimatePresence } from "framer-motion";
import Books from "./pages/learningMaterial/Books";


function App() {
  const { showForms, setShowForms } = useContextApi();
  const location = useLocation()
  return (
    <div className="text-slate-600 min-h-screen pb-[4rem] overflow-x-hidden">
      <Navbar />
      {showForms && <AuthForms showForms={showForms} setShowForms={setShowForms} />}
      <AnimatePresence mode='sync' initial={true}>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<HomePage />} />
          <Route path='/results' element={<ResultsPage />} />
          <Route path='/friends' element={<FriendsPage />} />
          <Route path='/pass-papers' element={<PasspapersPage />} />
          <Route path='/learning-materials' element={<LearningMaterialPage />} />
          <Route path='/books' element={<Books />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
