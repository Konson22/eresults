import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import Navbar from "./components/navbar";
import BooksPage from "./pages/BooksPage";
import Sylbus from "./pages/sylbus";
import ProfilePage from "./pages/ProfilePage";
import Login from "./pages/forms/Login";
import Register from "./pages/forms/Register";
import ResultsPage from "./pages/ResultsPage";



function App() {

  return (
    <div className="text-gray-500 min-h-screen overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/online-books' element={<BooksPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/results' element={<ResultsPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/ssd-sylbus' element={<Sylbus />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
