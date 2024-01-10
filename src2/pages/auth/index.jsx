import { FiX } from "react-icons/fi";
import { useContextApi } from "../../manager/ContextProvider";
import Login from "./Login";
import Register from "./Register";
import Upload from "./Upload";

export default function AuthForms({ showForms, setShowForms }) {
  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
      {showForms === "login" && <Login setShowForms={setShowForms} />}
      {showForms === "signup" && <Register setShowForms={setShowForms} />}
      {showForms === "upload" && <Upload setShowForms={setShowForms} />}
    </div>
  );
}

export function CloseForm() {
  const { setShowForms } = useContextApi();

  return (
    <div
      className="absolute right-3 top-3 z-20 rounded-full bg-white/80 text-2xl p-2"
      onClick={() => setShowForms(null)}
    >
      <FiX />
    </div>
  );
}
