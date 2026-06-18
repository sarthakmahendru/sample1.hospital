import { Link } from 'react-router-dom'
import { Heart, Users, Clock, CheckCircle, Stethoscope, Pill, Baby, AlertCircle, Microscope } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import ServiceCard from '../components/ServiceCard'
import StatCard from '../components/StatCard'

const services = [
  {
    icon: Heart,
    title: 'Cardiology',
    description: 'Advanced care for heart conditions with expert cardiologists and state-of-the-art technology.'
  },
  {
    icon: Stethoscope,
    title: 'Neurology',
    description: 'Comprehensive treatment for brain, spine, and nerve disorders by experienced specialists.'
  },
  {
    icon: Pill,
    title: 'Orthopedics',
    description: 'Expert care for bones, joints, muscles, and sports injuries for a pain-free life.'
  },
  {
    icon: Baby,
    title: 'Pediatrics',
    description: 'Compassionate care for infants, children, and adolescents by skilled pediatricians.'
  },
  {
    icon: AlertCircle,
    title: 'Emergency Care',
    description: '24/7 emergency services with rapid response to critical situations.'
  },
  {
    icon: Microscope,
    title: 'Diagnostics',
    description: 'Accurate and advanced diagnostic services for early detection and treatment.'
  }
]

const stats = [
  { value: '20+', label: 'Years of Excellence' },
  { value: '500+', label: 'Expert Doctors' },
  { value: '50K+', label: 'Happy Patients' }
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold mb-2">OUR SERVICES</p>
            <h2 className="section-title">Comprehensive Healthcare Services</h2>
            <p className="section-subtitle">We offer a wide range of medical services with advanced technology and a patient-first approach.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-12">Why Choose MediCare?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: '24/7 Emergency', desc: 'Round-the-clock emergency care.' },
              { icon: Users, title: 'Expert Doctors', desc: 'Highly qualified & experienced doctors.' },
              { icon: Stethoscope, title: 'Modern Equipment', desc: 'Advanced technology for treatment.' },
              { icon: CheckCircle, title: 'Trusted Care', desc: 'Trusted by thousands of patients.' }
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon size={32} className="text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Book Your Appointment?</h2>
          <p className="text-blue-100 mb-8 text-lg">Schedule your visit with our expert doctors and get the best healthcare for you and your family.</p>
          <Link to="/contact" className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-300">
            Book an Appointment
          </Link>
        </div>
      </section>
    </div>
  )
}
