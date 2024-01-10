import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import ResourcePage from "./pages/ResourcePage";
import { useContextApi } from "./manager/ContextProvider";
import MobileNavMenu from "./components/nabvar/MobileNavMenu";
import AuthForms from "./pages/auth";



function App() {
  const { openMenu, showForms, toggleMenu, setShowForms } = useContextApi();


  return (
    <div className="text-slate-600 min-h-screen overflow-x-hidden">
      <MobileNavMenu openMenu={openMenu} toggleMenu={toggleMenu} />
      {showForms && <AuthForms showForms={showForms} setShowForms={setShowForms} />}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/resource' element={<ResourcePage />} />
      </Routes>
    </div>
  );
}

export default App;
