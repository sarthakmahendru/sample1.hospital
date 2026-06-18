import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              +
            </div>
            <span className="font-bold text-xl text-gray-900 hidden sm:block">
              MediCare
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">
              About Us
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition">
              Services
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">
              Contact
            </Link>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-blue-600 font-semibold">
              <Phone size={18} />
              <span>+123 456 7890</span>
            </div>
            <Link to="/contact" className="btn-primary">
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">
              About Us
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600">
              Services
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
            <div className="flex items-center gap-2 text-blue-600 font-semibold py-2">
              <Phone size={18} />
              <span>+123 456 7890</span>
            </div>
            <Link to="/contact" className="btn-primary w-full text-center">
              Book Appointment
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
