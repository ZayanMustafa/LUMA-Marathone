import React from "react";
import { motion } from "framer-motion";

const projects = [
  { name: "E-Commerce Platform", description: "A full-fledged online store." },
  { name: "Social Media App", description: "A social networking application." }
];

const Project = () => {
  return (
    <div className="py-20 bg-gray-200 text-center">
      <h2 className="text-3xl font-bold mb-8">Our Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 container mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
