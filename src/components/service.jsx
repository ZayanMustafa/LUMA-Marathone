import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description: "We build modern and responsive websites that meet your business needs."
  },
  {
    title: "Mobile Apps",
    description: "Developing user-friendly and interactive mobile applications for Android and iOS."
  },
  {
    title: "AI Solutions",
    description: "Integrating AI technology for smarter automation and analytics."
  }
];

const ServicesPage = () => {
  return (
    <div className="py-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <div className="container mx-auto grid md:grid-cols-3 gap-8 px-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
