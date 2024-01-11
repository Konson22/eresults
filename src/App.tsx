import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/home";
import { useContextApi } from "./manager/ContextProvider";
import MobileNavMenu from "./components/nabvar/MobileNavMenu";
import AuthForms from "./pages/auth";
import FilesPage from "./pages/FilesPage";
import SSDSylbus from "./pages/resources/SSDSylbus";
import OnlineBooks from "./pages/resources/OnlineBooks";
import { AnimatePresence } from "framer-motion";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";



function App() {
  const { openMenu, showForms, toggleMenu, setShowForms } = useContextApi();
  const location = useLocation()

  return (
    <div className="text-slate-600 min-h-screen overflow-x-hidden">
      <MobileNavMenu openMenu={openMenu} toggleMenu={toggleMenu} />
      {showForms && <AuthForms showForms={showForms} setShowForms={setShowForms} />}
      <AnimatePresence mode='wait' initial={true}>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<HomePage />} />
          <Route path='/sylbus' element={<SSDSylbus />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/online-books' element={<OnlineBooks />} />
          <Route path='/files' element={<FilesPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
