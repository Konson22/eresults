import Login from "./Login";
import Signup from "./Signup";
import { AnimatePresence } from "framer-motion";

export default function Forms({ showForms }) {
  return (
    <div className="min-h-screen max-h-screen md:py-0 pt-14 md:pb-0 pb-8 overflow-y-scroll fixed inset-0 backdrop-blur-sm bg-black/50 z-50 md:flex items-center justify-center">
      <AnimatePresence mode="wait">
        {showForms === "login" && <Login />}
        {showForms === "signup" && <Signup />}
      </AnimatePresence>
    </div>
  );
}
