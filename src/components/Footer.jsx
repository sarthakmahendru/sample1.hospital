import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                +
              </div>
              MediCare
            </h3>
            <p className="text-sm">
              MediCare Hospital is dedicated to providing exceptional healthcare services with compassion and excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition">Services</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Departments</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Cardiology</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Neurology</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Orthopedics</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Pediatrics</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>123 Healthcare Street, Medicity, NY 10001, USA</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+123 456 7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@medicarehospital.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} />
                <span>24/7 Emergency Service</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-gray-700 pt-8 pb-4">
          <div className="flex justify-center gap-4 mb-6">
            <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition">
              <Youtube size={20} />
            </a>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center text-sm">
            <p>&copy; 2024 MediCare Hospital. All Rights Reserved.</p>
            <div className="flex justify-center gap-4 mt-2">
              <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
