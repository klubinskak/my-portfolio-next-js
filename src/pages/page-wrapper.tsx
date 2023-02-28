import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const PageWrapper = ({ children }: any) => {
  return (
    <AnimatePresence>
      <motion.div
      initial={{ opacity: 0, y:0 }}
      animate={{ opacity: 1, y:10 }}
      exit={{ opacity: 0, y:15 }}
      transition = {{delay: 0.25}}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageWrapper;
