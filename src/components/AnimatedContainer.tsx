import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, x: 100 },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: { opacity: 0, x: -100 },
};

function AnimatedContainer({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      animate="animate"
      exit="exit"
      initial="initial"
      variants={animations}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedContainer;
