import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="navbar" className="bg-gray-900 text-white p-4 fixed w-full top-0 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">🔥 Dev Agency</h1>
        <ul className="flex gap-6">
          <li><Link to="/" className="hover:text-gray-400 color-blue">Home</Link></li>
          <li><Link to="/services" className="hover:text-gray-400">Services</Link></li>
          <li><Link to="/projects" className="hover:text-gray-400">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
