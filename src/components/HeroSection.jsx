import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-blue-600 font-semibold mb-4">YOUR HEALTH, OUR PRIORITY</p>
            <h1 className="text-5xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              World Class Healthcare for a <span className="text-blue-600">Better Life</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              MediCare Hospital provides advanced medical care with compassion and excellence. Our team of expert doctors uses cutting-edge technology to ensure the best treatment and care for you and your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary">
                Book Appointment
              </Link>
              <button className="btn-secondary flex items-center justify-center gap-2">
                <Search size={20} />
                Find a Doctor
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1631217314830-6b83f5bc1aa4?w=600&h=500&fit=crop" 
              alt="Hospital Building"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-white rounded-lg p-4 shadow-lg">
              <p className="font-semibold text-gray-900">Modern Facilities</p>
              <p className="text-sm text-gray-600">State-of-the-art equipment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
