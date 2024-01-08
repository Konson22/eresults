import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    x: "100%",
  },
  in: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
  out: {
    opacity: 0,
    x: "-100%",
    transition: {
      ease: "easeInOut",
      duration: 0.2,
    },
  },
};

export default function AnimatePage({ children, cName = "" }) {
  return (
    <motion.div
      className={cName}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
}

// Update the `motion.div` components in `App.js` to include page transition animations:

// ```jsx
// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import Home from './components/Home';
// import About from './components/About';

// const App = () => {
//   const location = useLocation();

//   return (
//     <Router>
//       <AnimatePresence exitBeforeEnter>
//         <Switch location={location} key={location.pathname}>
//           <Route path="/" exact>
//             <motion.div
//               initial="initial"
//               animate="in"
//               exit="out"
//               variants={pageVariants}
//               transition={pageTransition}
//             >
//               <Home />
//             </motion.div>
//           </Route>
//           <Route path="/about" exact>
//             <motion.div
//               initial="initial"
//               animate="in"
//               exit="out"
//               variants={pageVariants}
//               transition={pageTransition}
//             >
//               <About />
//             </motion.div>
//           </Route>
//         </Switch>
//       </AnimatePresence>
//     </Router>
//   );
// };

// export default App;
