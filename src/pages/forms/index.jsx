import { FiX } from "react-icons/fi";
import { useContextApi } from "../../manager/ContextProvider";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import UploadForm from "./UploadForm";

export default function AuthForms({ showForms, setShowForms }) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-scroll max-h-screen bg-white/70 backdrop-blur-sm flex items-center justify-center">
      {showForms === "login" && <LoginForm setShowForms={setShowForms} />}
      {showForms === "signup" && <SignUpForm setShowForms={setShowForms} />}
      {showForms === "upload" && <UploadForm setShowForms={setShowForms} />}
    </div>
  );
}

export function CloseForm() {
  const { setShowForms } = useContextApi();

  return (
    <div
      className="absolute right-0 top-0 text-2xl p-2"
      onClick={() => setShowForms(null)}
    >
      <FiX />
    </div>
  );
}
