"use client";
import { motion } from "framer-motion";

const MotionContainer = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "20px" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default MotionContainer;
