import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import Navbar from "./components/navbar";
import Forms from "./pages/forms";
import { useContextApi } from "./manager/ContextProvider";
import NotesPage from "./pages/NotesPage";
import BooksPage from "./pages/BooksPage";
import SlybusPage from "./pages/SlybusPage";
import ResultPage from "./pages/ResultsPage";
import QuizePage from "./pages/QuizePage";
import ChatRoomPage from "./pages/chatroom";
import ProfilePage from "./pages/profile";
import PassPapersPage from "./pages/PassPapersPage";


function App() {
  const { showForms } = useContextApi()
  return (
    <div className="text-gray-500">
      <Navbar />
      {showForms && <Forms showForms={showForms} />}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/notes' element={<NotesPage />} />
        <Route path='/books' element={<BooksPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/pass-papers' element={<PassPapersPage />} />
        <Route path='/quize' element={<QuizePage />} />
        <Route path='/ssd-sylbus' element={<SlybusPage />} />
        <Route path='/chat-room' element={<ChatRoomPage />} />
        <Route path='/result/:index' element={<ResultPage />} />
      </Routes>
    </div>
  );
}

export default App;
