export const scaleInVariants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: [0.12, 0, 0.39, 0],
    },
  },
};

export const translateXVariants = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    opacity: 0,
    x: -50,
    transition: {
      ease: [0.12, 0, 0.39, 0],
    },
  },
};
