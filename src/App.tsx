import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import Navbar from "./components/navbar";
import BooksPage from "./pages/BooksPage";
import Sylbus from "./pages/sylbus";
import ProfilePage from "./pages/ProfilePage";
import Login from "./pages/forms/Login";
import Register from "./pages/forms/Register";
import ResultsPage from "./pages/ResultsPage";
import Footer from "./components/Footer";
import TermsAndCondition from "./pages/TermsAndCondition";
import Privacy from "./pages/Privacy";
import Policy from "./pages/Policy";
import PassPapers from "./pages/PassPapers";



function App() {

  return (
    <div className="text-gray-500 bg-gray-50 min-h-screen overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/online-books' element={<BooksPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/results' element={<ResultsPage />} />
        <Route path='/files' element={<PassPapers />} />
        <Route path='/register' element={<Register />} />
        <Route path='/ssd-sylbus' element={<Sylbus />} />
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
