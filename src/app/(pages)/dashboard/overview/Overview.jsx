'use client'
import {motion} from 'framer-motion'

const OverView = () => {
    return (
        <motion.div
          initial={{ opacity: 0, y: "30px" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full h-full"
        >
          Framer motion
        </motion.div>
    );
};

export default OverView;