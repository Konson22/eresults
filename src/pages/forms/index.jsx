import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { AnimatePresence } from "framer-motion";

export default function AuthForms({ showForms, setShowForms }) {
  return (
    <div className="fixed inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center">
      <AnimatePresence mode="wait" initial={true} key={showForms}>
        {showForms === "login" && <LoginForm setShowForms={setShowForms} />}
        {showForms === "signup" && <SignUpForm setShowForms={setShowForms} />}
      </AnimatePresence>
    </div>
  );
}
