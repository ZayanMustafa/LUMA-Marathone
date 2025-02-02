import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-teal-500 to-pink-500 text-white px-4">
      <motion.h1 
        className="text-5xl font-bold"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to Dev Agency
      </motion.h1>
      <p className="mt-4 text-lg">Building modern, interactive, and responsive websites</p>
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Link to="/contact" className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg">
          Get a Quote
        </Link>
      </motion.div>
    </div>
  );
};

export default HeroSection;
