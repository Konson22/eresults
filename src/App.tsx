import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import Appbar from "./components/appbar";
import BooksPage from "./pages/BooksPage";
import ProfilePage from "./pages/ProfilePage";
import Login from "./pages/forms/Login";
import Register from "./pages/forms/Register";
import ResultsPage from "./pages/ResultsPage";
import Footer from "./components/Footer";
import TermsAndCondition from "./pages/TermsAndCondition";
import Privacy from "./pages/Privacy";
import Policy from "./pages/Policy";
import PassPapers from "./pages/PassPapers";
import SylbusPage from "./pages/SylbusPage";



function App() {

  return (
    <div className="text-gray-500 min-h-screen overflow-x-hidden">
      <Appbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/online-books' element={<BooksPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/results' element={<ResultsPage />} />
        <Route path='/files' element={<PassPapers />} />
        <Route path='/register' element={<Register />} />
        <Route path='/ssd-sylbus' element={<SylbusPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/terms-and-ondition' element={<TermsAndCondition />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/policy' element={<Policy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
